import { chromium } from "playwright";
import * as cheerio from "cheerio";
import { prisma } from "@/lib/db/prisma";
import { crawlLog } from "@/lib/crawler/crawl-log";
import { savePageWithVersion } from "@/lib/seo/save-page";
import { advancedPageAudit } from "@/lib/seo/advanced-page-audit";
import { getAppSettings } from "@/lib/settings/get-settings";
import { getPageSpeed } from "@/lib/integrations/pagespeed";

const STOPWORDS = new Set([
  "this",
  "that",
  "with",
  "from",
  "your",
  "have",
  "will",
  "they",
  "there",
  "their",
  "about",
  "which",
  "when",
  "what",
  "where",
  "also",
  "into",
  "more",
  "than",
  "then",
  "them",
  "these",
  "those",
  "because",
  "using",
  "only",
  "page",
  "home",
  "click",
]);

const SHOULD_RUN_PSI_LIMIT = 10;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractKeywords(text: string) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !STOPWORDS.has(word));

  const frequency: Record<string, number> = {};

  for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 30)
    .map(([keyword, count]) => ({
      keyword,
      count,
    }));
}

function detectIntent(text: string) {
  const lower = text.toLowerCase();

  if (
    lower.includes("buy") ||
    lower.includes("price") ||
    lower.includes("deposit") ||
    lower.includes("signup") ||
    lower.includes("register")
  ) {
    return "transactional";
  }

  if (
    lower.includes("best") ||
    lower.includes("review") ||
    lower.includes("compare") ||
    lower.includes("alternative")
  ) {
    return "commercial";
  }

  if (
    lower.includes("how") ||
    lower.includes("what") ||
    lower.includes("why") ||
    lower.includes("guide") ||
    lower.includes("learn")
  ) {
    return "informational";
  }

  return "mixed";
}

export async function crawlSiteFull(siteId: string, startUrl: string) {
  const settings = await getAppSettings();

  const maxPages = settings.crawlMaxPages;
  const crawlDelayMs = settings.crawlDelayMs;

  const visited = new Set<string>();
  const queue: string[] = [startUrl];

  let crawledCount = 0;
  let psiCount = 0;

  await crawlLog(siteId, "Crawler browser starting", startUrl);

  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 SEOAuditBot/1.0",
  });

  try {
    while (queue.length > 0 && crawledCount < maxPages) {
      const currentUrl = queue.shift();

      if (!currentUrl || visited.has(currentUrl)) continue;

      visited.add(currentUrl);

      await crawlLog(siteId, "Scraping page", currentUrl);
      console.log(`[crawler] scraping: ${currentUrl}`);

      try {
        await page.goto(currentUrl, {
          waitUntil: "domcontentloaded",
          timeout: 30000,
        });

        await page.waitForTimeout(1000);

        const html = await page.content();
        const $ = cheerio.load(html);

        const title = $("title").first().text().trim() || null;

        const description =
          $('meta[name="description"]').attr("content")?.trim() ||
          $('meta[property="og:description"]').attr("content")?.trim() ||
          null;

        const h1 = $("h1").first().text().trim() || null;

        const h2 = $("h2")
          .map((_, el) => $(el).text().trim())
          .get()
          .filter(Boolean);

        const h3 = $("h3")
          .map((_, el) => $(el).text().trim())
          .get()
          .filter(Boolean);

        const images = $("img")
          .map((_, img) => ({
            src: $(img).attr("src"),
            alt: $(img).attr("alt"),
          }))
          .get();

        const internalLinks: string[] = [];
        const externalLinks: string[] = [];

        $("a").each((_, el) => {
          const href = $(el).attr("href");
          if (!href) return;

          try {
            const parsed = new URL(href, currentUrl);
            const base = new URL(currentUrl);

            parsed.hash = "";

            if (parsed.hostname === base.hostname) {
              internalLinks.push(parsed.href);

              if (!visited.has(parsed.href) && !queue.includes(parsed.href)) {
                queue.push(parsed.href);
              }
            } else {
              externalLinks.push(parsed.href);
            }
          } catch {}
        });

        const canonical = $('link[rel="canonical"]').attr("href") || null;
        const robots = $('meta[name="robots"]').attr("content") || null;
        const hasViewport = Boolean(
          $('meta[name="viewport"]').attr("content")
        );

        const structuredData = $('script[type="application/ld+json"]')
          .map((_, el) => {
            try {
              return JSON.parse($(el).text());
            } catch {
              return null;
            }
          })
          .get()
          .filter(Boolean);

        $("script, style, noscript, svg").remove();

        const bodyText = $("body").text().replace(/\s+/g, " ").trim();

        const wordCount = bodyText ? bodyText.split(/\s+/).length : 0;

        const keywords = extractKeywords(bodyText);
        const intent = detectIntent(bodyText);

        const advanced = advancedPageAudit({
          title,
          description,
          h1,
          h2,
          h3,
          wordCount,
          images,
          internalLinks,
          externalLinks,
          canonical,
          robots,
          structuredData,
          hasViewport,
        });

        let pageSpeed = null;

        if (settings.enablePageSpeed && psiCount < SHOULD_RUN_PSI_LIMIT) {
          pageSpeed = await getPageSpeed(currentUrl);
          psiCount++;
        }

        await savePageWithVersion({
          siteId,
          url: currentUrl,
          title,
          description,
          h1,
          h2,
          h3,
          wordCount,
          content: bodyText.slice(0, 10000),
          keywords,
          intent,
          seoScore: advanced.seoScore,
          uxScore: advanced.uxScore,
          performance: pageSpeed?.performance || null,
          pageSpeed,
          issues: advanced.issues,
          suggestions: advanced.suggestions,
          images,
          links: {
            internal: internalLinks,
            external: externalLinks,
          },
          technical: {
            canonical,
            robots,
            hasViewport,
          },
          accessibility: {
            imagesMissingAlt: images.filter((i) => !i.alt).length,
          },
        });

        crawledCount++;

        await prisma.site.update({
          where: { id: siteId },
          data: {
            pagesCount: crawledCount,
            progress: Math.min(
              99,
              Math.round((crawledCount / maxPages) * 100)
            ),
          },
        });

        await crawlLog(
          siteId,
          `Page saved. SEO score: ${advanced.seoScore}, UX score: ${advanced.uxScore}`,
          currentUrl
        );

        await sleep(crawlDelayMs);
      } catch (error) {
        console.error(`[crawler] failed: ${currentUrl}`, error);
        await crawlLog(siteId, "Failed to scrape page", currentUrl);
      }
    }

    await crawlLog(siteId, `Crawler completed. Pages crawled: ${crawledCount}`);
  } finally {
    await browser.close();
    await crawlLog(siteId, "Crawler browser closed");
  }

  return {
    pagesCrawled: crawledCount,
  };
}

export const crawlSite = crawlSiteFull;
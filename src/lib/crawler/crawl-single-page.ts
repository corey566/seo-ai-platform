import { chromium } from "playwright";
import * as cheerio from "cheerio";
import { savePageWithVersion } from "@/lib/seo/save-page";
import { analyzePage } from "@/lib/seo/analyze-page";
import { crawlLog } from "@/lib/crawler/crawl-log";

function extractKeywords(text: string) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3);

  const frequency: Record<string, number> = {};

  for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 30)
    .map(([keyword, count]) => ({ keyword, count }));
}

function detectIntent(text: string) {
  const lower = text.toLowerCase();

  if (
    lower.includes("buy") ||
    lower.includes("price") ||
    lower.includes("signup") ||
    lower.includes("deposit")
  ) {
    return "transactional";
  }

  if (
    lower.includes("best") ||
    lower.includes("review") ||
    lower.includes("compare") ||
    lower.includes("bonus")
  ) {
    return "commercial";
  }

  if (
    lower.includes("how") ||
    lower.includes("what") ||
    lower.includes("guide") ||
    lower.includes("learn")
  ) {
    return "informational";
  }

  return "mixed";
}

function calculateUxScore(params: {
  wordCount: number;
  h2: string[];
  internalLinks: number;
}) {
  let score = 40;

  if (params.wordCount >= 500) score += 20;
  if (params.h2.length >= 2) score += 20;
  if (params.internalLinks >= 3) score += 20;

  return Math.min(score, 100);
}

export async function crawlSinglePage(siteId: string, url: string) {
  await crawlLog(siteId, "Single page recrawl started", url);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(url, {
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

    let internalLinks = 0;

    $("a").each((_, el) => {
      const href = $(el).attr("href");
      if (!href) return;

      try {
        const parsedHref = new URL(href, url);
        const current = new URL(url);

        if (parsedHref.hostname === current.hostname) {
          internalLinks++;
        }
      } catch {
        // ignore invalid URLs
      }
    });

    $("script, style, noscript, svg").remove();

    const bodyText = $("body").text().replace(/\s+/g, " ").trim();
    const wordCount = bodyText ? bodyText.split(/\s+/).length : 0;

    const keywords = extractKeywords(bodyText);
    const intent = detectIntent(bodyText);

    const analysis = analyzePage({
      title,
      description,
      h1,
      h2,
      wordCount,
      keywords,
    });

    const uxScore = calculateUxScore({
      wordCount,
      h2,
      internalLinks,
    });

    await savePageWithVersion({
      siteId,
      url,
      title,
      description,
      h1,
      h2,
      h3,
      wordCount,
      content: bodyText.slice(0, 10000),
      keywords,
      intent,
      seoScore: analysis.seoScore,
      uxScore,
      performance: null,
      issues: analysis.issues,
      suggestions: analysis.suggestions,
    });

    await crawlLog(siteId, "Single page recrawl completed", url);

    return { success: true };
  } finally {
    await browser.close();
  }
}
import { prisma } from "@/lib/db/prisma";
import { scrapeSERP } from "./serp-scraper";
import { extractKeywordsFromUrl } from "./extract-keywords-from-url";

export async function runKeywordGap(
  siteId: string,
  keyword: string,
  country = "global"
) {
  // 🔹 your keywords
  const yourKeywords = await prisma.keyword.findMany({
    where: { siteId },
  });

  const yourSet = new Set(yourKeywords.map((k) => k.keyword));

  // 🔹 SERP competitors
  const serp = await scrapeSERP(keyword, country);

  let competitorKeywords: string[] = [];

  for (const result of serp.slice(0, 5)) {
    const kws = await extractKeywordsFromUrl(result.url);
    competitorKeywords.push(...kws);
  }

  const uniqueCompetitor = Array.from(new Set(competitorKeywords));

  // 🔹 GAP = competitor keywords you don't have
  const gap = uniqueCompetitor.filter((k) => !yourSet.has(k));

  return {
    totalCompetitorKeywords: uniqueCompetitor.length,
    gapKeywords: gap.slice(0, 100),
    serp,
  };
}
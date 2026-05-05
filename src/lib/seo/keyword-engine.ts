import { scrapeSERP } from "./serp-scraper";

export function detectIntent(keyword: string) {
  const k = keyword.toLowerCase();

  if (k.includes("buy") || k.includes("price")) return "transactional";
  if (k.includes("best") || k.includes("review")) return "commercial";
  if (k.includes("how") || k.includes("what")) return "informational";

  return "mixed";
}

export function clusterKeywords(keywords: string[]) {
  const clusters: Record<string, string[]> = {};

  for (const k of keywords) {
    const base = k.split(" ").slice(0, 2).join(" ");

    if (!clusters[base]) clusters[base] = [];
    clusters[base].push(k);
  }

  return clusters;
}

export async function analyzeKeyword(keyword: string) {
  const serp = await scrapeSERP(keyword);

  const intent = detectIntent(keyword);

  return {
    keyword,
    intent,
    serp,
  };
}
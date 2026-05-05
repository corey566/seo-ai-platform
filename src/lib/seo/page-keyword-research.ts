import { prisma } from "@/lib/db/prisma";
import { fetchAutocomplete } from "./google-autocomplete";
import { detectIntent } from "./keyword-intent";
import { clusterKeywords } from "./keyword-cluster";

export async function runPageKeywordResearch(
  pageId: string,
  siteId: string,
  country: string,
  language: string
) {
  const page = await prisma.page.findUnique({
    where: { id: pageId },
  });

  if (!page) throw new Error("Page not found");

  const baseKeywords =
    (page.keywords as any[])?.map((k) => k.keyword) || [];

  let expanded: string[] = [];

  // 🔹 expand via autocomplete
  for (const keyword of baseKeywords.slice(0, 10)) {
    const suggestions = await fetchAutocomplete(
      keyword,
      country,
      language
    );

    expanded.push(...suggestions);
  }

  const allKeywords = Array.from(new Set([...baseKeywords, ...expanded]));

  const clusters = clusterKeywords(allKeywords);

  // 🔹 save keywords
  const savedKeywords = [];

  for (const keyword of allKeywords) {
    const intent = detectIntent(keyword);

    const clusterName = Object.keys(clusters).find((c) =>
      clusters[c].includes(keyword)
    );

    const record = await prisma.keyword.create({
      data: {
        keyword,
        normalized: keyword.toLowerCase(),
        source: baseKeywords.includes(keyword)
          ? "page"
          : "autocomplete",
        intent,
        cluster: clusterName,
        country,
        language,
        pageId,
        siteId,
      },
    });

    savedKeywords.push(record);
  }

  return {
    total: savedKeywords.length,
    clusters,
    keywords: savedKeywords,
  };
}
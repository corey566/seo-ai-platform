import * as cheerio from "cheerio";

export async function extractKeywordsFromUrl(url: string) {
  try {
    const res = await fetch(url);
    const html = await res.text();

    const $ = cheerio.load(html);
    const text = $("body").text();

    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/);

    const freq: Record<string, number> = {};

    words.forEach((word) => {
      if (word.length < 4) return;

      freq[word] = (freq[word] || 0) + 1;
    });

    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 50)
      .map(([word]) => word);
  } catch {
    return [];
  }
}
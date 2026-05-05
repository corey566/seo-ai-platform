import { chromium } from "playwright";

export async function scrapeSERP(keyword: string, country = "global") {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const query = encodeURIComponent(keyword);

  const url =
    country === "global"
      ? `https://www.google.com/search?q=${query}`
      : `https://www.google.com/search?q=${query}&gl=${country}`;

  await page.goto(url, { waitUntil: "domcontentloaded" });

  const results = await page.$$eval("div.g", (nodes) =>
    nodes.map((node) => {
      const title = node.querySelector("h3")?.textContent || "";
      const link = (node.querySelector("a") as HTMLAnchorElement)?.href || "";
      const snippet =
        node.querySelector(".VwiC3b")?.textContent || "";

      return {
        title,
        url: link,
        snippet,
      };
    })
  );

  await browser.close();

  return results.slice(0, 10);
}
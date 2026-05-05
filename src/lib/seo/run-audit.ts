import { crawlSiteFull } from "@/lib/crawler/crawl-site";
import { prisma } from "@/lib/db/prisma";
import { crawlLog } from "@/lib/crawler/crawl-log";

export async function runAudit(siteId: string, domain: string) {
  await prisma.site.update({
    where: { id: siteId },
    data: { status: "crawling", progress: 0 },
  });

  await crawlLog(siteId, "Crawler started", domain);

  try {
    await crawlSiteFull(siteId, domain);

    const pages = await prisma.page.findMany({ where: { siteId } });

    const avgScore =
      pages.length > 0
        ? Math.round(
            pages.reduce((sum, page) => sum + (page.seoScore || 0), 0) /
              pages.length
          )
        : 0;

    await prisma.site.update({
      where: { id: siteId },
      data: {
        status: "done",
        progress: 100,
        pagesCount: pages.length,
        seoScore: avgScore,
      },
    });

    await crawlLog(siteId, `Crawler finished. ${pages.length} pages saved.`);
  } catch (error) {
    await prisma.site.update({
      where: { id: siteId },
      data: { status: "failed" },
    });

    await crawlLog(siteId, "Crawler failed");
  }
}
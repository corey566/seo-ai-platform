import { prisma } from "@/lib/db/prisma";

export async function crawlLog(siteId: string, message: string, url?: string) {
  await prisma.crawlLog.create({
    data: {
      siteId,
      message,
      url,
      level: "info",
    },
  });
}
import { prisma } from "@/lib/db/prisma";

export async function getAppSettings() {
  const rows = await prisma.appSetting.findMany();

  const map: Record<string, any> = {};

  for (const r of rows) {
    map[r.key] = r.value;
  }

  return {
    crawlMaxPages: map.crawlMaxPages || 200,
    crawlDelayMs: map.crawlDelayMs || 800,
    enablePageSpeed: map.enablePageSpeed || false,
    googlePageSpeedApiKey: map.googlePageSpeedApiKey || "",
  };
}
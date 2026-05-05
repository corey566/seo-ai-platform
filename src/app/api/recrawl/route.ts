import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { crawlSiteFull } from "@/lib/crawler/crawl-site";

export async function POST(req: Request) {
  const { pageId } = await req.json();

  const page = await prisma.page.findUnique({
    where: { id: pageId },
  });

  if (!page) {
    return NextResponse.json({ error: "Page not found" }, { status: 404 });
  }

  // crawl only this page
  await crawlSiteFull(page.siteId, page.url);

  return NextResponse.json({ success: true });
}
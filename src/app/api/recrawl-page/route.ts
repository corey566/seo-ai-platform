import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { crawlSinglePage } from "@/lib/crawler/crawl-single-page";

export async function POST(req: Request) {
  try {
    const { pageId } = await req.json();

    const page = await prisma.page.findUnique({
      where: { id: pageId },
    });

    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    crawlSinglePage(page.siteId, page.url).catch((error: unknown) => {
      console.error("Single page recrawl failed:", error);
    });

    return NextResponse.json({
      success: true,
      message: "Page recrawl started",
    });
  } catch (error: unknown) {
    console.error("POST /api/recrawl-page failed:", error);

    return NextResponse.json(
      { error: "Failed to start page recrawl" },
      { status: 500 }
    );
  }
}
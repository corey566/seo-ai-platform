import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { runAudit } from "@/lib/seo/run-audit";

export async function POST(req: Request) {
  try {
    const { siteId } = await req.json();

    const site = await prisma.site.findUnique({
      where: { id: siteId },
    });

    if (!site) {
      return NextResponse.json({ error: "Site not found" }, { status: 404 });
    }

    // Do not await. Run in background.
    runAudit(site.id, site.domain).catch((error) => {
      console.error("Background crawl failed:", error);
    });

    return NextResponse.json({
      success: true,
      message: "Crawler started",
    });
  } catch (error) {
    console.error("POST /api/crawl failed:", error);

    return NextResponse.json(
      { error: "Failed to start crawler" },
      { status: 500 }
    );
  }
}
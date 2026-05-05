import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { runAudit } from "@/lib/seo/run-audit";

export async function GET() {
  try {
    const sites = await prisma.site.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ sites });
  } catch (error) {
    console.error("GET /api/sites failed:", error);

    return NextResponse.json(
      { sites: [], error: "Failed to load sites" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.domain) {
      return NextResponse.json(
        { error: "Name and domain are required" },
        { status: 400 }
      );
    }

    const site = await prisma.site.create({
      data: {
        name: body.name,
        domain: body.domain,
        country: body.country || "global",
        language: body.language || "en",
        status: "pending",
        progress: 0,
        pagesCount: 0,
        seoScore: 0,
      },
    });

    runAudit(site.id, site.domain).catch((error) => {
      console.error("Audit failed:", error);
    });

    return NextResponse.json({ site });
  } catch (error) {
    console.error("POST /api/sites failed:", error);

    return NextResponse.json(
      { error: "Failed to create site" },
      { status: 500 }
    );
  }
}
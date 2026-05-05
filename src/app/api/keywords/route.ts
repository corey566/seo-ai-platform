import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const siteId = searchParams.get("siteId");
  const pageId = searchParams.get("pageId");
  const country = searchParams.get("country") || "global";

  const keywords = await prisma.keyword.findMany({
    where: {
      siteId: siteId || undefined,
      pageId: pageId || undefined,
      country,
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ keywords });
}
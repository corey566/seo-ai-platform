import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const siteId = searchParams.get("siteId");

  if (!siteId) {
    return NextResponse.json({ logs: [] });
  }

  const logs = await prisma.crawlLog.findMany({
    where: { siteId },
    orderBy: { createdAt: "desc" },
    take: 80,
  });

  return NextResponse.json({ logs });
}
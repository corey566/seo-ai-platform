import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const siteId = searchParams.get("siteId");

  const pages = await prisma.page.findMany({
    where: { siteId: siteId || undefined },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json({ pages });
}
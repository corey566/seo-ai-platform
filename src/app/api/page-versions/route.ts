import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageId = searchParams.get("pageId");

  if (!pageId) {
    return NextResponse.json({ versions: [] });
  }

  const versions = await prisma.pageVersion.findMany({
    where: { pageId },
    orderBy: { version: "desc" },
  });

  return NextResponse.json({ versions });
}
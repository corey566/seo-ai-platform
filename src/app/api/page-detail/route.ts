import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageId = searchParams.get("pageId");

  if (!pageId) {
    return NextResponse.json({ error: "Missing pageId" });
  }

  const page = await prisma.page.findUnique({
    where: { id: pageId },
  });

  return NextResponse.json({ page });
}
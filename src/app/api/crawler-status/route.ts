import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const running = await prisma.site.findMany({
    where: {
      status: "crawling",
    },
    select: {
      id: true,
      name: true,
      domain: true,
      progress: true,
      pagesCount: true,
    },
  });

  return NextResponse.json({
    runningCount: running.length,
    running,
  });
}
import { NextResponse } from "next/server";
import { getPageSpeed } from "@/lib/integrations/pagespeed";
import { prisma } from "@/lib/db/prisma";

export async function POST(req: Request) {
  const { url } = await req.json();

  const data = await getPageSpeed(url);

  await prisma.page.update({
    where: { url },
    data: {
      pageSpeed: data as any,
      performance: data?.performance || null,
    },
  });

  return NextResponse.json({ success: true, data });
}
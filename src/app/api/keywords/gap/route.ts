import { NextResponse } from "next/server";
import { runKeywordGap } from "@/lib/seo/keyword-gap";

export async function POST(req: Request) {
  const { siteId, keyword, country } = await req.json();

  const result = await runKeywordGap(siteId, keyword, country);

  return NextResponse.json(result);
}
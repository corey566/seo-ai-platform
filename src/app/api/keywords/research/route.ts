import { NextResponse } from "next/server";
import { runPageKeywordResearch } from "@/lib/seo/page-keyword-research";

export async function POST(req: Request) {
  const { pageId, siteId, country, language } = await req.json();

  const result = await runPageKeywordResearch(
    pageId,
    siteId,
    country || "global",
    language || "en"
  );

  return NextResponse.json(result);
}
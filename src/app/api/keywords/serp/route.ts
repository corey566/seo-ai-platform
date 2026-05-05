import { NextResponse } from "next/server";
import { scrapeSERP } from "@/lib/seo/serp-scraper";

export async function POST(req: Request) {
  const { keyword, country } = await req.json();

  const results = await scrapeSERP(keyword, country);

  return NextResponse.json({ results });
}
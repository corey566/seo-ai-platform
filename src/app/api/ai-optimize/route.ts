import { NextResponse } from "next/server";
import { optimizeSEO } from "@/lib/ai/seo-optimizer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await optimizeSEO(body);

    return NextResponse.json({
      result,
    });
  } catch (error) {
    console.error("AI optimize error:", error);

    return NextResponse.json(
      { error: "AI failed" },
      { status: 500 }
    );
  }
}
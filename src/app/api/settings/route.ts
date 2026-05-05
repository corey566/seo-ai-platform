import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

const DEFAULT_SETTINGS = {
  googlePageSpeedApiKey: "",
  googleSearchConsoleClientId: "",
  googleSearchConsoleClientSecret: "",
  bingWebmasterApiKey: "",
  microsoftClarityProjectId: "",
  defaultCountry: "global",
  defaultLanguage: "en",
  crawlMaxPages: 200,
  crawlDelayMs: 800,
  enablePageSpeed: false,
  enableSearchConsole: false,
  enableBingWebmaster: false,
  enableMicrosoftClarity: false,
};

export async function GET() {
  try {
    const rows = await prisma.appSetting.findMany();

    const saved = rows.reduce<Record<string, unknown>>((acc, row) => {
      acc[row.key] = row.value;
      return acc;
    }, {});

    return NextResponse.json({
      settings: {
        ...DEFAULT_SETTINGS,
        ...saved,
      },
    });
  } catch (error) {
    console.error("GET /api/settings failed:", error);

    return NextResponse.json(
      { error: "Failed to load settings" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const entries = Object.entries(body);

    await Promise.all(
      entries.map(([key, value]) =>
        prisma.appSetting.upsert({
          where: { key },
          update: { value },
          create: { key, value },
        })
      )
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("POST /api/settings failed:", error);

    return NextResponse.json(
      { error: "Failed to save settings" },
      { status: 500 }
    );
  }
}
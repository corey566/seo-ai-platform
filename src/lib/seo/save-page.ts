import { prisma } from "@/lib/db/prisma";

type PageAuditData = {
  siteId: string;
  url: string;
  title?: string | null;
  description?: string | null;
  h1?: string | null;
  h2?: unknown;
  h3?: unknown;
  wordCount?: number | null;
  content?: string | null;
  keywords?: unknown;
  intent?: string | null;
  seoScore?: number | null;
  uxScore?: number | null;
  performance?: number | null;
  issues?: unknown;
  suggestions?: unknown;
  images?: unknown;
  sections?: unknown;
  links?: unknown;
  technical?: unknown;
  accessibility?: unknown;
  indexing?: unknown;
  pageSpeed?: unknown;
};

export async function savePageWithVersion(data: PageAuditData) {
  const existing = await prisma.page.findUnique({
    where: { url: data.url },
    include: {
      versions: {
        orderBy: { version: "desc" },
        take: 1,
      },
    },
  });

  if (!existing) {
    const page = await prisma.page.create({
      data: {
        siteId: data.siteId,
        url: data.url,
        title: data.title,
        description: data.description,
        h1: data.h1,
        h2: data.h2 as any,
        h3: data.h3 as any,
        wordCount: data.wordCount,
        content: data.content,
        keywords: data.keywords as any,
        intent: data.intent,
        seoScore: data.seoScore,
        uxScore: data.uxScore,
        performance: data.performance,
        issues: data.issues as any,
        suggestions: data.suggestions as any,
        images: data.images as any,
        sections: data.sections as any,
        links: data.links as any,
        technical: data.technical as any,
        accessibility: data.accessibility as any,
        indexing: data.indexing as any,
        pageSpeed: data.pageSpeed as any,
        lastCrawledAt: new Date(),
      },
    });

    await prisma.pageVersion.create({
      data: {
        pageId: page.id,
        version: 1,
        url: data.url,
        title: data.title,
        description: data.description,
        h1: data.h1,
        h2: data.h2 as any,
        h3: data.h3 as any,
        wordCount: data.wordCount,
        content: data.content,
        keywords: data.keywords as any,
        intent: data.intent,
        seoScore: data.seoScore,
        uxScore: data.uxScore,
        performance: data.performance,
        issues: data.issues as any,
        suggestions: data.suggestions as any,
        images: data.images as any,
        sections: data.sections as any,
        links: data.links as any,
        technical: data.technical as any,
        accessibility: data.accessibility as any,
        indexing: data.indexing as any,
        pageSpeed: data.pageSpeed as any,
      },
    });

    return page;
  }

  const latestVersion = existing.versions[0]?.version || 1;
  const nextVersion = latestVersion + 1;

  const updatedPage = await prisma.page.update({
    where: { id: existing.id },
    data: {
      title: data.title,
      description: data.description,
      h1: data.h1,
      h2: data.h2 as any,
      h3: data.h3 as any,
      wordCount: data.wordCount,
      content: data.content,
      keywords: data.keywords as any,
      intent: data.intent,
      seoScore: data.seoScore,
      uxScore: data.uxScore,
      performance: data.performance,
      issues: data.issues as any,
      suggestions: data.suggestions as any,
      images: data.images as any,
      sections: data.sections as any,
      links: data.links as any,
      technical: data.technical as any,
      accessibility: data.accessibility as any,
      indexing: data.indexing as any,
      pageSpeed: data.pageSpeed as any,
      lastCrawledAt: new Date(),
    },
  });

  await prisma.pageVersion.create({
    data: {
      pageId: existing.id,
      version: nextVersion,
      url: data.url,
      title: data.title,
      description: data.description,
      h1: data.h1,
      h2: data.h2 as any,
      h3: data.h3 as any,
      wordCount: data.wordCount,
      content: data.content,
      keywords: data.keywords as any,
      intent: data.intent,
      seoScore: data.seoScore,
      uxScore: data.uxScore,
      performance: data.performance,
      issues: data.issues as any,
      suggestions: data.suggestions as any,
      images: data.images as any,
      sections: data.sections as any,
      links: data.links as any,
      technical: data.technical as any,
      accessibility: data.accessibility as any,
      indexing: data.indexing as any,
      pageSpeed: data.pageSpeed as any,
    },
  });

  return updatedPage;
}
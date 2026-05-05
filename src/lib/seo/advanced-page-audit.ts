export function advancedPageAudit(data: {
  title?: string | null;
  description?: string | null;
  h1?: string | null;
  h2: string[];
  h3: string[];
  wordCount: number;
  images: any[];
  internalLinks: string[];
  externalLinks: string[];
  canonical?: string | null;
  robots?: string | null;
  structuredData: any[];
  hasViewport: boolean;
}) {
  const issues: any[] = [];
  const suggestions: any[] = [];

  if (!data.title) {
    issues.push({ type: "title", severity: "high", message: "Missing title tag" });
  }

  if (data.title && data.title.length > 65) {
    issues.push({ type: "title", severity: "medium", message: "Title too long" });
  }

  if (!data.description) {
    issues.push({ type: "meta", severity: "high", message: "Missing meta description" });
  }

  if (!data.h1) {
    issues.push({ type: "heading", severity: "high", message: "Missing H1" });
  }

  if (data.h2.length === 0) {
    issues.push({ type: "heading", severity: "medium", message: "No H2 structure" });
  }

  if (data.wordCount < 300) {
    issues.push({ type: "content", severity: "high", message: "Thin content" });
  }

  const missingAlt = data.images.filter((i) => !i.alt).length;

  if (missingAlt > 0) {
    issues.push({
      type: "image",
      severity: "medium",
      message: `${missingAlt} images missing alt`,
    });
  }

  if (!data.hasViewport) {
    issues.push({
      type: "responsive",
      severity: "high",
      message: "Missing viewport meta",
    });
  }

  if (!data.canonical) {
    suggestions.push({
      type: "technical",
      message: "Add canonical tag",
    });
  }

  if (data.internalLinks.length < 3) {
    suggestions.push({
      type: "links",
      message: "Increase internal links",
    });
  }

  const seoScore = Math.max(0, 100 - issues.length * 6);
  const uxScore = Math.max(0, 100 - missingAlt * 3 - (!data.hasViewport ? 20 : 0));

  return { issues, suggestions, seoScore, uxScore };
}
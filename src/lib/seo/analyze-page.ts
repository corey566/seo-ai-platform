type Issue = {
  type: string;
  severity: "low" | "medium" | "high";
  message: string;
};

type Suggestion = {
  type: string;
  message: string;
};

function analyzePerformanceIssues(pageSpeed: any): Issue[] {
  const issues: Issue[] = [];

  if (!pageSpeed) return issues;

  if (pageSpeed.performance < 50) {
    issues.push({
      type: "performance",
      severity: "high",
      message: "Very poor performance score",
    });
  }

  if (pageSpeed.lcp && pageSpeed.lcp.includes("s")) {
    issues.push({
      type: "lcp",
      severity: "medium",
      message: `Slow LCP: ${pageSpeed.lcp}`,
    });
  }

  return issues;
}

export function analyzePage(data: any) {
  const issues = [];
  const suggestions = [];

  // TITLE
  if (!data.title || data.title.length < 30) {
    issues.push({
      type: "title",
      message: "Title too short or missing",
      severity: "high",
    });
    suggestions.push({
      type: "title",
      message: "Use 50–60 character optimized title with keywords",
    });
  }

  if (data.title?.length > 65) {
    issues.push({
      type: "title",
      message: "Title too long (SEO truncation)",
      severity: "medium",
    });
  }

  // META
  if (!data.description) {
    issues.push({
      type: "meta",
      message: "Meta description missing",
      severity: "high",
    });
  }

  if (data.description && data.description.length < 100) {
    issues.push({
      type: "meta",
      message: "Meta too short",
      severity: "medium",
    });
  }

  // HEADINGS
  if (!data.h1) {
    issues.push({
      type: "heading",
      message: "Missing H1 tag",
      severity: "high",
    });
  }

  if (data.h1 && data.h1.length < 5) {
    issues.push({
      type: "heading",
      message: "H1 too weak",
      severity: "medium",
    });
  }

  if (data.h2?.length === 0) {
    issues.push({
      type: "heading",
      message: "No H2 headings",
      severity: "medium",
    });
  }

  // CONTENT
  if (data.wordCount < 300) {
    issues.push({
      type: "content",
      message: "Content too thin (<300 words)",
      severity: "high",
    });
  }

  // KEYWORDS
  if (!data.keywords || data.keywords.length < 5) {
    issues.push({
      type: "keywords",
      message: "Not enough keyword density",
      severity: "medium",
    });
  }

  // PERFORMANCE
  const perfIssues = analyzePerformanceIssues(data.pageSpeed);
  issues.push(...perfIssues);

  // UX
  if (data.h2?.length < 2) {
    suggestions.push({
      type: "ux",
      message: "Add more sections for better readability",
    });
  }

  if (data.wordCount > 1000 && data.h2?.length < 3) {
    suggestions.push({
      type: "ux",
      message: "Large content should be structured with headings",
    });
  }

  if (issues.length === 0) {
    issues.push({
      type: "optimization",
      message: "Page has no detected issues but still can be optimized",
      severity: "low",
    });
  }

  // SCORE
  let seoScore = 100;

  seoScore -= issues.length * 8;

  if (seoScore < 0) seoScore = 0;

  return {
    issues,
    suggestions,
    seoScore,
  };
}
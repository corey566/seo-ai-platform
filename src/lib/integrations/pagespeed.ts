const PSI_ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

export async function getPageSpeed(url: string) {
  try {
    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;

    const res = await fetch(
      `${PSI_ENDPOINT}?url=${encodeURIComponent(url)}&key=${apiKey}&strategy=mobile`
    );

    const data = await res.json();

    const lighthouse = data.lighthouseResult;
    const audits = lighthouse?.audits;

    return {
      performance: lighthouse?.categories?.performance?.score
        ? Math.round(lighthouse.categories.performance.score * 100)
        : null,

      lcp: audits?.["largest-contentful-paint"]?.displayValue,
      cls: audits?.["cumulative-layout-shift"]?.displayValue,
      fid: audits?.["max-potential-fid"]?.displayValue,

      speedIndex: audits?.["speed-index"]?.displayValue,
      ttfb: audits?.["server-response-time"]?.displayValue,

      opportunities: [
        audits?.["unused-javascript"]?.title,
        audits?.["modern-image-formats"]?.title,
        audits?.["render-blocking-resources"]?.title,
      ].filter(Boolean),
    };
  } catch (err) {
    console.error("PageSpeed error:", err);
    return null;
  }
}
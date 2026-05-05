export function clusterKeywords(keywords: string[]) {
  const clusters: Record<string, string[]> = {};

  for (const keyword of keywords) {
    const base = keyword.split(" ").slice(0, 2).join(" ");

    if (!clusters[base]) {
      clusters[base] = [];
    }

    clusters[base].push(keyword);
  }

  return clusters;
}
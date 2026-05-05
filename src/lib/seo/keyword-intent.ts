export function detectIntent(keyword: string) {
  const k = keyword.toLowerCase();

  if (k.includes("buy") || k.includes("price") || k.includes("order")) {
    return "transactional";
  }

  if (k.includes("best") || k.includes("review") || k.includes("top")) {
    return "commercial";
  }

  if (k.includes("how") || k.includes("what") || k.includes("guide")) {
    return "informational";
  }

  return "mixed";
}
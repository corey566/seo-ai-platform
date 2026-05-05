import { runLlama } from "./llama";

export async function optimizeSEO(data: {
  type: "h1" | "meta" | "content" | "keywords";
  url: string;
  title?: string;
  description?: string;
  content?: string;
  keywords?: any[];
}) {
  let prompt = "";

  if (data.type === "h1") {
    prompt = `
Improve this H1 for SEO and CTR:

URL: ${data.url}
Current Title: ${data.title}

Return ONLY the improved H1.
`;
  }

  if (data.type === "meta") {
    prompt = `
Write a high-converting SEO meta description (150 chars max):

Title: ${data.title}
Content: ${data.content?.slice(0, 500)}

Return ONLY the description.
`;
  }

  if (data.type === "content") {
    prompt = `
Rewrite this content for SEO:
- Improve keyword usage
- Better structure
- Increase readability

Content:
${data.content?.slice(0, 2000)}

Return optimized version.
`;
  }

  if (data.type === "keywords") {
    prompt = `
Generate SEO keywords for this page:

Title: ${data.title}
Content: ${data.content?.slice(0, 1000)}

Return a list of keywords.
`;
  }

  const result = await runLlama(prompt);

  return result;
}
// Supports local Ollama OR fallback to API

export async function runLlama(prompt: string) {
  try {
    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3",
        prompt,
        stream: false,
      }),
    });

    const data = await res.json();

    return data.response;
  } catch (error) {
    console.error("LLaMA failed:", error);
    return "AI failed to generate response";
  }
}
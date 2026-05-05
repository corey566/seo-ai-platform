"use client";

import { useState } from "react";

export default function AiDrawer({ page }: any) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function run(type: string) {
    setLoading(true);

    const res = await fetch("/api/ai-optimize", {
      method: "POST",
      body: JSON.stringify({
        type,
        url: page.url,
        content: page.content,
      }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  }

  return (
    <div className="fixed bottom-6 right-6 w-[420px] rounded-3xl bg-white p-5 shadow-xl">
      <h3 className="font-semibold">AI Optimizer</h3>

      <div className="mt-4 flex gap-2">
        <button onClick={() => run("h1")} className="btn">H1</button>
        <button onClick={() => run("meta")} className="btn">Meta</button>
        <button onClick={() => run("content")} className="btn">Content</button>
      </div>

      <div className="mt-4 h-60 overflow-auto rounded-xl bg-zinc-100 p-3 text-sm">
        {loading ? "Generating..." : result || "Run AI"}
      </div>
    </div>
  );
}
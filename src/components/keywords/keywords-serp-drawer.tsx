import { useEffect, useState } from "react";

export default function KeywordsSerpDrawer({ keyword, onClose }: any) {
  const [serp, setSerp] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/keywords/serp", {
      method: "POST",
      body: JSON.stringify({ keyword: keyword.keyword }),
    })
      .then((res) => res.json())
      .then((data) => setSerp(data.results || []));
  }, [keyword]);

  return (
    <div className="fixed right-0 top-0 w-[400px] h-full bg-white shadow-xl p-5">
      <button onClick={onClose}>Close</button>

      <h3 className="font-semibold mt-3">{keyword.keyword}</h3>

      <div className="mt-4 space-y-3">
        {serp.map((r: any, i: number) => (
          <div key={i} className="border-b pb-2">
            <p className="font-medium">{r.title}</p>
            <p className="text-xs text-zinc-500">{r.url}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function AuditOverview({ page, pages }: any) {
  const chartData = pages.slice(0, 12).map((item: any, index: number) => ({
    page: item.title?.slice(0, 12) || `Page ${index + 1}`,
    seo: item.seoScore || 0,
    ux: item.uxScore || 0,
  }));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">{page.title || "Untitled"}</h2>
          <p className="mt-1 break-all text-sm text-zinc-500">{page.url}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <SmallCard title="SEO Score" value={page.seoScore || 0} tone="dark" />
        <SmallCard title="UX Score" value={page.uxScore || 0} />
        <SmallCard title="Intent" value={page.intent || "mixed"} />
        <SmallCard title="Word Count" value={page.wordCount || 0} />
      </div>

      <div className="rounded-3xl bg-zinc-100 p-5">
        <div className="mb-4">
          <h3 className="font-semibold">SEO vs UX comparison</h3>
          <p className="text-sm text-zinc-500">
            Shows how the top crawled pages compare by SEO and UX score.
          </p>
        </div>

        <div className="h-80 min-h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="page" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="seo" fill="#111111" radius={[8, 8, 0, 0]} />
              <Bar dataKey="ux" fill="#9ca3af" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function SmallCard({ title, value, tone }: any) {
  return (
    <div
      className={`rounded-3xl p-5 ${
        tone === "dark" ? "bg-zinc-950 text-white" : "bg-zinc-100"
      }`}
    >
      <p className={tone === "dark" ? "text-sm text-zinc-300" : "text-sm text-zinc-500"}>
        {title}
      </p>
      <h3 className="mt-4 text-2xl font-semibold">{value}</h3>
    </div>
  );
}
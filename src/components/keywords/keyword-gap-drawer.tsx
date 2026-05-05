"use client";

import { X, ExternalLink, Target, FileText, Sparkles } from "lucide-react";

export default function KeywordGapDrawer({
  open,
  loading,
  keyword,
  data,
  onClose,
}: {
  open: boolean;
  loading: boolean;
  keyword: any;
  data: any;
  onClose: () => void;
}) {
  if (!open) return null;

  const competitors = data?.serp || [];
  const gapKeywords = data?.gapKeywords || [];

  const scored = gapKeywords.map((kw: string, index: number) => ({
    keyword: kw,
    score: Math.max(30, 100 - index),
    priority: index < 10 ? "High" : index < 35 ? "Medium" : "Low",
  }));

  return (
    <div className="fixed inset-0 z-50">
      <div onClick={onClose} className="absolute inset-0 bg-black/30" />

      <aside className="absolute right-0 top-0 h-full w-full max-w-[760px] overflow-y-auto bg-zinc-100 p-6 shadow-2xl">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-500">Competitor Keyword Gap</p>
            <h2 className="text-2xl font-semibold">
              {keyword?.keyword || "Keyword gap"}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-2xl bg-white"
          >
            <X size={18} />
          </button>
        </div>

        {loading ? (
          <div className="rounded-3xl bg-white p-10 text-center text-zinc-500">
            Analyzing SERP competitors and missing keywords...
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Metric title="Competitor Keywords" value={data?.totalCompetitorKeywords || 0} />
              <Metric title="Missing Keywords" value={gapKeywords.length} />
              <Metric title="Top Competitors" value={competitors.length} />
            </div>

            <section className="rounded-3xl bg-white p-5">
              <div className="mb-4 flex items-center gap-2">
                <Target size={18} />
                <h3 className="font-semibold">Missing Keyword Opportunities</h3>
              </div>

              <div className="space-y-2">
                {scored.slice(0, 60).map((item: any, index: number) => (
                  <div
                    key={`${item.keyword}-${index}`}
                    className="flex items-center justify-between rounded-2xl bg-zinc-100 p-3"
                  >
                    <div>
                      <p className="font-medium">{item.keyword}</p>
                      <p className="text-xs text-zinc-500">
                        Priority: {item.priority} · Opportunity score {item.score}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button className="rounded-xl bg-white px-3 py-2 text-xs">
                        Add to Plan
                      </button>
                      <button className="rounded-xl bg-zinc-950 px-3 py-2 text-xs text-white">
                        AI Brief
                      </button>
                    </div>
                  </div>
                ))}

                {scored.length === 0 && (
                  <p className="rounded-2xl bg-zinc-100 p-5 text-sm text-zinc-500">
                    No keyword gaps detected yet.
                  </p>
                )}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-5">
              <div className="mb-4 flex items-center gap-2">
                <FileText size={18} />
                <h3 className="font-semibold">SERP Competitors</h3>
              </div>

              <div className="space-y-3">
                {competitors.map((item: any, index: number) => (
                  <div key={`${item.url}-${index}`} className="rounded-2xl bg-zinc-100 p-4">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">
                          #{index + 1} {item.title || "Untitled result"}
                        </p>
                        <p className="mt-1 break-all text-xs text-zinc-500">
                          {item.url}
                        </p>
                      </div>

                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          className="rounded-xl bg-white p-2"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>

                    <p className="text-sm text-zinc-600">
                      {item.snippet || "No snippet captured."}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-zinc-950 p-5 text-white">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles size={18} />
                <h3 className="font-semibold">Recommended Actions</h3>
              </div>

              <ul className="space-y-2 text-sm text-zinc-300">
                <li>Add top missing keywords naturally into the selected page.</li>
                <li>Create new H2 sections for high-priority keyword clusters.</li>
                <li>Compare competitor SERP titles with your page title.</li>
                <li>Use AI Brief to create an outline before editing content.</li>
              </ul>
            </section>
          </div>
        )}
      </aside>
    </div>
  );
}

function Metric({ title, value }: { title: string; value: any }) {
  return (
    <div className="rounded-3xl bg-white p-5">
      <p className="text-sm text-zinc-500">{title}</p>
      <h3 className="mt-3 text-3xl font-semibold">{value}</h3>
    </div>
  );
}
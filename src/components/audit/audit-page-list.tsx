"use client";

import { useMemo, useState } from "react";
import SiteIcon from "@/components/ui/site-icon";
import { Search } from "lucide-react";

const PAGE_SIZE = 10;

export default function AuditPageList({
  site,
  pages,
  selectedPage,
  onSelectPage,
}: any) {
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("all");
  const [pageNumber, setPageNumber] = useState(1);

  const filtered = useMemo(() => {
    return pages.filter((page: any) => {
      const matchesSearch =
        page.url?.toLowerCase().includes(search.toLowerCase()) ||
        page.title?.toLowerCase().includes(search.toLowerCase());

      const matchesSeverity =
        severity === "all" ||
        (page.issues || []).some((issue: any) => issue.severity === severity);

      return matchesSearch && matchesSeverity;
    });
  }, [pages, search, severity]);

  const paginated = filtered.slice(
    (pageNumber - 1) * PAGE_SIZE,
    pageNumber * PAGE_SIZE
  );

  return (
    <aside className="rounded-3xl bg-white p-5">
      <div className="mb-5 flex items-center gap-3">
        <SiteIcon domain={site.domain} size={44} />
        <div>
          <h2 className="font-semibold">{site.name}</h2>
          <p className="truncate text-xs text-zinc-500">{site.domain}</p>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2 rounded-2xl bg-zinc-100 px-4 py-3">
        <Search size={16} className="text-zinc-400" />
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPageNumber(1);
          }}
          placeholder="Search pages..."
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      <div className="mb-4 flex gap-2">
        {["all", "high", "medium", "low"].map((item) => (
          <button
            key={item}
            onClick={() => {
              setSeverity(item);
              setPageNumber(1);
            }}
            className={`rounded-full px-3 py-1 text-xs ${
              severity === item
                ? "bg-zinc-950 text-white"
                : "bg-zinc-100 text-zinc-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="max-h-[620px] space-y-3 overflow-y-auto pr-1">
        {paginated.map((page: any, index: number) => {
          const issues = Array.isArray(page.issues) ? page.issues.length : 0;
          const active = selectedPage?.id === page.id;

          return (
            <button
              key={page.id || page.url || `page-${index}`}
              onClick={() => onSelectPage(page)}
              className={`w-full rounded-2xl p-4 text-left transition ${
                active
                  ? "bg-zinc-950 text-white"
                  : "bg-zinc-100 hover:bg-zinc-200"
              }`}
            >
              <p className="truncate text-sm font-semibold">
                {page.title || "Untitled page"}
              </p>
              <p className="truncate text-xs opacity-70">{page.url}</p>

              <div className="mt-3 flex items-center justify-between text-xs">
                <span>SEO {page.seoScore || 0}</span>
                <span>{issues} issues</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between text-sm">
        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber((p) => p - 1)}
          className="rounded-xl bg-zinc-100 px-3 py-2 disabled:opacity-40"
        >
          Prev
        </button>

        <span className="text-zinc-500">Page {pageNumber}</span>

        <button
          disabled={pageNumber * PAGE_SIZE >= filtered.length}
          onClick={() => setPageNumber((p) => p + 1)}
          className="rounded-xl bg-zinc-100 px-3 py-2 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </aside>
  );
}
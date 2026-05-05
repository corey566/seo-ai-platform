"use client";

import { useEffect, useState } from "react";
import { Bell, Search, Globe2, Terminal } from "lucide-react";

type RunningSite = {
  id: string;
  name: string;
  domain: string;
  progress: number;
  pagesCount: number;
};

type CrawlLog = {
  id: string;
  message: string;
  url?: string;
  createdAt: string;
};

export default function DashboardTopbar() {
  const [running, setRunning] = useState<RunningSite[]>([]);
  const [open, setOpen] = useState(false);
  const [logs, setLogs] = useState<CrawlLog[]>([]);

  async function loadStatus() {
    const res = await fetch("/api/crawler-status");
    const data = await res.json();

    setRunning(data.running || []);

    if (data.running?.[0]?.id) {
      const logRes = await fetch(`/api/crawl-logs?siteId=${data.running[0].id}`);
      const logData = await logRes.json();
      setLogs(logData.logs || []);
    }
  }

  useEffect(() => {
    loadStatus();

    const interval = setInterval(() => {
      loadStatus();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const isRunning = running.length > 0;

  return (
    <header className="relative flex h-20 items-center justify-between border-b border-zinc-200 bg-zinc-100 px-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          SEO Intelligence Platform
        </h2>
        <p className="text-sm text-zinc-500">
          Audit, keywords, competitors, backlinks and AI insights.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-2xl bg-white px-4 py-2 md:flex">
          <Search size={16} className="text-zinc-400" />
          <input
            placeholder="Search keyword, site, page..."
            className="w-64 bg-transparent text-sm outline-none"
          />
        </div>

        <button className="flex h-10 items-center gap-2 rounded-2xl bg-white px-4 text-sm text-zinc-600">
          <Globe2 size={16} />
          Worldwide
        </button>

        <button
          onClick={() => setOpen(!open)}
          className={`flex h-10 items-center gap-2 rounded-2xl px-4 text-sm ${
            isRunning
              ? "bg-zinc-950 text-white"
              : "bg-white text-zinc-600"
          }`}
        >
          <Terminal size={16} />
          {isRunning ? `Crawler running (${running.length})` : "Crawler idle"}
        </button>

        <button className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-zinc-600">
          <Bell size={18} />
        </button>

        <div className="h-10 w-10 rounded-full bg-zinc-950" />
      </div>

      {open && (
        <div className="absolute right-6 top-20 z-50 w-[520px] rounded-3xl bg-zinc-950 p-5 text-white shadow-2xl">
          <h3 className="mb-3 font-semibold">Crawler Console</h3>

          {running.length > 0 ? (
            <div className="mb-4 space-y-2">
              {running.map((site) => (
                <div key={site.id} className="rounded-2xl bg-white/10 p-3">
                  <p className="text-sm font-medium">{site.name}</p>
                  <p className="text-xs text-zinc-300">{site.domain}</p>
                  <p className="mt-1 text-xs">
                    Pages: {site.pagesCount} · Progress: {site.progress}%
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mb-4 text-sm text-zinc-400">No crawler running.</p>
          )}

          <div className="max-h-80 space-y-2 overflow-y-auto rounded-2xl bg-black p-3 font-mono text-xs">
            {logs.map((log) => (
              <div key={log.id} className="text-zinc-300">
                <span className="text-emerald-400">›</span> {log.message}
                {log.url && (
                  <div className="truncate text-zinc-500">{log.url}</div>
                )}
              </div>
            ))}

            {logs.length === 0 && (
              <p className="text-zinc-500">No logs yet.</p>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
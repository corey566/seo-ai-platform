"use client";

import { useEffect, useState } from "react";
import { Globe, Plus, Search, Trash2 } from "lucide-react";
import SiteIcon from "@/components/ui/site-icon";
import { useSearchParams } from "next/navigation";

type Site = {
  id: string;
  name: string;
  domain: string;
  country: string;
  language: string;
  pagesCount?: number | null;
  seoScore?: number | null;
  status?: string | null;
  progress?: number | null;
};

export default function SitesPage() {
  const [sites, setSites] = useState<Site[]>([]);
  const [filteredSites, setFilteredSites] = useState<Site[]>([]);
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [country, setCountry] = useState("global");
  const [language, setLanguage] = useState("en");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  async function startAudit(siteId: string) {
    await fetch("/api/crawl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ siteId }),
    });

    await loadSites();
  }
  async function loadSites() {
    try {
      setLoading(true);

      const res = await fetch("/api/sites");

      if (!res.ok) {
        setSites([]);
        setFilteredSites([]);
        return;
      }

      const data = await res.json();

      setSites(data.sites || []);
      setFilteredSites(data.sites || []);
    } catch (error) {
      console.error("Failed to load sites:", error);
      setSites([]);
      setFilteredSites([]);
    } finally {
      setLoading(false);
    }
  }

  async function addSite() {
    if (!name || !domain) return;

    setLoading(true);

    await fetch("/api/sites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, domain, country, language }),
    });

    setName("");
    setDomain("");
    setCountry("global");
    setLanguage("en");

    await loadSites();
    setLoading(false);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      loadSites();
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    loadSites();
  }, []);

  useEffect(() => {
    const value = search.toLowerCase();

    setFilteredSites(
      sites.filter(
        (site) =>
          site.name.toLowerCase().includes(value) ||
          site.domain.toLowerCase().includes(value) ||
          site.country.toLowerCase().includes(value)
      )
    );
  }, [search, sites]);


  const params = useSearchParams();
  const selectedSiteId = params.get("site");


  const selectedSite = sites.find((site) => site.id === selectedSiteId);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium text-zinc-500">
            SEO AI Platform
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
            Sites
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-500">
            Add, monitor, audit and optimize all your websites from one clean dashboard.
          </p>
        </div>

        <div className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm">
          {sites.length} tracked sites
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-zinc-950 text-white shadow-sm">
              <Plus size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-zinc-950">
                Add Website
              </h2>
              <p className="text-sm text-zinc-500">
                Start tracking a new domain.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <input
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white"
              placeholder="Site name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white"
              placeholder="https://example.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />

            <div className="grid grid-cols-2 gap-3">
              <select
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="global">Worldwide</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="AE">United Arab Emirates</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
              </select>

              <select
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="ar">Arabic</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
            </div>

            <button
              onClick={addSite}
              disabled={loading}
              className="w-full rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Saving..." : "Add Site"}
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-zinc-950">
                Tracked Websites
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Websites saved in your SEO database.
              </p>
            </div>

            <div className="flex w-full items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 sm:w-72">
              <Search size={17} className="text-zinc-400" />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
                placeholder="Search websites..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {filteredSites.map((site, index) => (
              <div
                key={site.id || site.domain || `site-${index}`}
                onClick={() => {
                  window.location.href = `/audit?site=${site.id}`;
                }}
                className="group cursor-pointer rounded-[1.75rem] border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-zinc-100 ring-1 ring-zinc-200">
                      <SiteIcon domain={site.domain} size={42} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-base font-semibold text-zinc-950">
                        {site.name}
                      </p>
                      <p className="mt-1 truncate text-sm text-zinc-500">
                        {site.domain}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={async (e) => {
                      e.stopPropagation();
                      await fetch(`/api/sites/${site.id}`, {
                        method: "DELETE",
                      });
                      loadSites();
                    }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-zinc-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-zinc-50 p-3">
                    <p className="text-xs text-zinc-500">Pages</p>
                    <p className="mt-1 text-lg font-semibold text-zinc-950">
                      {site.pagesCount ?? 0}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-zinc-50 p-3">
                    <p className="text-xs text-zinc-500">SEO</p>
                    <p className="mt-1 text-lg font-semibold text-zinc-950">
                      {site.seoScore ?? 0}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-zinc-50 p-3">
                    <p className="text-xs text-zinc-500">Status</p>
                    <p className="mt-1 truncate text-sm font-semibold capitalize text-zinc-950">
                      {site.status || "idle"}
                    </p>
                  </div>
                </div>

                {site.status === "crawling" && (
                  <div className="mt-4">
                    <div className="mb-2 flex justify-between text-xs text-zinc-500">
                      <span>Crawling</span>
                      <span>{site.progress ?? 35}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
                      <div
                        className="h-full rounded-full bg-zinc-950 transition-all"
                        style={{ width: `${site.progress ?? 35}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                      {site.country}
                    </span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                      {site.language}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      startAudit(site.id);
                    }}
                    className="rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-zinc-800"
                  >
                    Run Audit
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredSites.length === 0 && (
            <div className="rounded-[1.75rem] border border-dashed border-zinc-300 bg-zinc-50 p-10 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-white text-zinc-400 shadow-sm">
                <Globe size={22} />
              </div>
              <p className="font-medium text-zinc-900">
                {loading ? "Loading sites..." : "No websites found"}
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Add a website or adjust your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
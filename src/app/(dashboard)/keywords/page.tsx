"use client";

import { useEffect, useState } from "react";
import KeywordsHeader from "@/components/keywords/keywords-header";
import KeywordsFilters from "@/components/keywords/keywords-filters";
import KeywordsTable from "@/components/keywords/keywords-table";
import KeywordsClusters from "@/components/keywords/keywords-clusters";
import KeywordsSerpDrawer from "@/components/keywords/keywords-serp-drawer";
import KeywordGapDrawer from "@/components/keywords/keyword-gap-drawer";

export default function KeywordsPage() {
  const [sites, setSites] = useState<any[]>([]);
  const [pages, setPages] = useState<any[]>([]);
  const [keywords, setKeywords] = useState<any[]>([]);
  const [gapOpen, setGapOpen] = useState(false);
  const [gapLoading, setGapLoading] = useState(false);
  const [gapKeyword, setGapKeyword] = useState<any>(null);
  const [gapData, setGapData] = useState<any>(null);
  const [selectedSite, setSelectedSite] = useState("");
  const [selectedPage, setSelectedPage] = useState("");
  const [country, setCountry] = useState("global");

  const [selectedKeyword, setSelectedKeyword] = useState<any>(null);
  async function runGap(keyword: any) {
    if (!selectedSite) {
      alert("Select a site first");
      return;
    }

    setGapKeyword(keyword);
    setGapOpen(true);
    setGapLoading(true);
    setGapData(null);

    const res = await fetch("/api/keywords/gap", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        siteId: selectedSite,
        keyword: keyword.keyword,
        country,
      }),
    });

    const data = await res.json();

    setGapData(data);
    setGapLoading(false);
  }
  async function loadSites() {
    const res = await fetch("/api/sites");
    const data = await res.json();
    setSites(data.sites);
  }

  async function loadPages(siteId: string) {
    const res = await fetch(`/api/pages?siteId=${siteId}`);
    const data = await res.json();
    setPages(data.pages);
  }

  async function loadKeywords() {
    if (!selectedSite) return;

    const res = await fetch(
      `/api/keywords?siteId=${selectedSite}&pageId=${selectedPage}&country=${country}`
    );
    const data = await res.json();
    setKeywords(data.keywords);
  }

  async function runResearch() {
    await fetch("/api/keywords/research", {
      method: "POST",
      body: JSON.stringify({
        siteId: selectedSite,
        pageId: selectedPage,
        country,
        language: "en",
      }),
    });
  }

  useEffect(() => {
    loadSites();
  }, []);

  useEffect(() => {
    if (selectedSite) loadPages(selectedSite);
  }, [selectedSite]);

  useEffect(() => {
    loadKeywords();
  }, [selectedSite, selectedPage, country]);

  return (
    <div className="space-y-6">
      <KeywordsHeader
        sites={sites}
        pages={pages}
        selectedSite={selectedSite}
        selectedPage={selectedPage}
        country={country}
        onSiteChange={setSelectedSite}
        onPageChange={setSelectedPage}
        onCountryChange={setCountry}
        onRun={runResearch}
      />

      <KeywordsFilters keywords={keywords} />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <KeywordsClusters keywords={keywords} />
        </div>

        <div className="col-span-8">
          <KeywordGapDrawer
            open={gapOpen}
            loading={gapLoading}
            keyword={gapKeyword}
            data={gapData}
            onClose={() => setGapOpen(false)}
          />
        </div>
      </div>

      {selectedKeyword && (
        <KeywordsSerpDrawer
          keyword={selectedKeyword}
          onClose={() => setSelectedKeyword(null)}
        />
      )}
    </div>
  );
}
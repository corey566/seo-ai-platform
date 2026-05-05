"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuditHeader from "@/components/audit/audit-header";
import AuditPageList from "@/components/audit/audit-page-list";
import AuditTabs from "@/components/audit/audit-tabs";
import AuditOverview from "@/components/audit/audit-overview";
import AuditStructure from "@/components/audit/audit-structure";
import AuditKeywords from "@/components/audit/audit-keywords";
import AuditIssues from "@/components/audit/audit-issues";
import AuditContent from "@/components/audit/audit-content";
import AuditImages from "@/components/audit/audit-images";
import AuditPerformance from "@/components/audit/audit-performance";
import AuditTechnical from "@/components/audit/audit-technical";
import AuditAccessibility from "@/components/audit/audit-accessibility";
export default function AuditPage() {
  const router = useRouter();
  const params = useSearchParams();
  const selectedSiteId = params.get("site");

  const [sites, setSites] = useState<any[]>([]);
  const [pages, setPages] = useState<any[]>([]);
  const [selectedPage, setSelectedPage] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");

  async function loadSites() {
    const res = await fetch("/api/sites");
    const data = await res.json();
    setSites(data.sites || []);
  }

  async function loadPages(siteId: string) {
    const res = await fetch(`/api/pages?siteId=${siteId}`);
    const data = await res.json();
    const loaded = data.pages || [];

    setPages(loaded);
    setSelectedPage(loaded[0] || null);
  }

  useEffect(() => {
    loadSites();
  }, []);

  useEffect(() => {
    if (selectedSiteId) loadPages(selectedSiteId);
  }, [selectedSiteId]);

  const selectedSite = useMemo(
    () => sites.find((site) => site.id === selectedSiteId),
    [sites, selectedSiteId]
  );

  const totalIssues = pages.reduce(
    (sum, page) => sum + (Array.isArray(page.issues) ? page.issues.length : 0),
    0
  );

  return (
    <div className="min-h-screen space-y-6">
      <AuditHeader
        sites={sites}
        selectedSite={selectedSite}
        selectedSiteId={selectedSiteId}
        pages={pages}
        totalIssues={totalIssues}
        onSelectSite={(id: string) => router.push(`/audit?site=${id}`)}
      />

      {!selectedSite ? (
        <div className="rounded-3xl bg-white p-10 text-center text-zinc-500">
          Select a website to view audit.
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[420px_1fr]">
          <AuditPageList
            site={selectedSite}
            pages={pages}
            selectedPage={selectedPage}
            onSelectPage={setSelectedPage}
          />

          <section className="rounded-3xl bg-white p-6">
            {!selectedPage ? (
              <p className="text-zinc-500">Select a page to inspect.</p>
            ) : (
              <>
                <AuditTabs activeTab={activeTab} onChange={setActiveTab} />

                <div className="mt-6">
                  {activeTab === "overview" && (
                    <AuditOverview page={selectedPage} pages={pages} />
                  )}

                  {activeTab === "structure" && (
                    <AuditStructure page={selectedPage} />
                  )}

                  {activeTab === "keywords" && (
                    <AuditKeywords page={selectedPage} />
                  )}

                  {activeTab === "issues" && (
                    <AuditIssues page={selectedPage} />
                  )}

                  {activeTab === "content" && (
                    <AuditContent page={selectedPage} />
                  )}
                  {activeTab === "images" && (
                    <AuditImages page={selectedPage} />
                  )}

                  {activeTab === "performance" && (
                    <AuditPerformance page={selectedPage} />
                  )}

                  {activeTab === "technical" && (
                    <AuditTechnical page={selectedPage} />
                  )}

                  {activeTab === "accessibility" && (
                    <AuditAccessibility page={selectedPage} />
                  )}
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
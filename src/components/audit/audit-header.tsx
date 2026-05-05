import SiteIcon from "@/components/ui/site-icon";
import { AlertTriangle, CheckCircle2, FileText, Gauge } from "lucide-react";

export default function AuditHeader({
  sites,
  selectedSite,
  selectedSiteId,
  pages,
  totalIssues,
  onSelectSite,
}: any) {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Website Audit
          </h1>
          <p className="mt-1 text-zinc-500">
            Technical SEO, content, keywords, images, performance and AI actions.
          </p>
        </div>

        <select
          value={selectedSiteId || ""}
          onChange={(e) => onSelectSite(e.target.value)}
          className="rounded-2xl bg-white px-5 py-3 text-sm outline-none"
        >
          <option value="">Select website</option>
          {sites.map((site: any) => (
            <option key={site.id} value={site.id}>
              {site.name} — {site.domain}
            </option>
          ))}
        </select>
      </div>

      {selectedSite && (
        <div className="flex items-center gap-3 rounded-3xl bg-white p-5">
          <SiteIcon domain={selectedSite.domain} size={48} />
          <div>
            <h2 className="font-semibold">{selectedSite.name}</h2>
            <p className="text-sm text-zinc-500">{selectedSite.domain}</p>
          </div>
        </div>
      )}

      {selectedSite && (
        <div className="grid gap-4 md:grid-cols-4">
          <Metric dark title="SEO Score" value={selectedSite.seoScore || 0} icon={<Gauge />} />
          <Metric title="Pages" value={selectedSite.pagesCount || pages.length} icon={<FileText />} />
          <Metric title="Issues" value={totalIssues} icon={<AlertTriangle />} />
          <Metric title="Status" value={selectedSite.status || "idle"} icon={<CheckCircle2 />} />
        </div>
      )}
    </div>
  );
}

function Metric({ title, value, icon, dark = false }: any) {
  return (
    <div className={`rounded-3xl p-5 ${dark ? "bg-zinc-950 text-white" : "bg-white"}`}>
      <div className="flex items-center justify-between">
        <p className={dark ? "text-sm text-zinc-300" : "text-sm text-zinc-500"}>
          {title}
        </p>
        <div className="h-5 w-5">{icon}</div>
      </div>
      <h3 className="mt-5 text-3xl font-semibold">{value}</h3>
    </div>
  );
}
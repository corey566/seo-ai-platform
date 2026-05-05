"use client";
import SiteIcon from "@/components/ui/site-icon";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Globe,
  Activity,
  Search,
  Users,
  Link2,
  MessagesSquare,
  FileText,
  Database,
  Settings,
  ChevronDown,
} from "lucide-react";

type Site = {
  id: string;
  name: string;
  domain: string;
};

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Sites", href: "/sites", icon: Globe },
  { name: "Keywords", href: "/keywords", icon: Search },
  { name: "Competitors", href: "/competitors", icon: Users },
  { name: "Backlinks", href: "/backlinks", icon: Link2 },
  { name: "Discussions", href: "/discussions", icon: MessagesSquare },
  { name: "Content Studio", href: "/content", icon: FileText },
  { name: "Indexing", href: "/indexing", icon: Database },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [sites, setSites] = useState<Site[]>([]);
  const [auditOpen, setAuditOpen] = useState(true);

  async function loadSites() {
    const res = await fetch("/api/sites");
    const data = await res.json();
    setSites(data.sites || []);
  }

  useEffect(() => {
    loadSites();
  }, []);

  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-zinc-200 bg-white p-5 lg:flex">
      <div className="mb-8 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-950 text-lg font-bold text-white">
          S
        </div>
        <div>
          <h1 className="text-xl font-semibold tracking-tight">SEOSet</h1>
          <p className="text-xs text-zinc-500">Open SEO Engine</p>
        </div>
      </div>

      <nav className="space-y-1">
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${pathname === "/dashboard"
              ? "bg-zinc-950 text-white"
              : "text-zinc-600 hover:bg-zinc-100"
            }`}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/sites"
          className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${pathname === "/sites"
              ? "bg-zinc-950 text-white"
              : "text-zinc-600 hover:bg-zinc-100"
            }`}
        >
          <Globe size={18} />
          Sites
        </Link>

        <button
          onClick={() => setAuditOpen(!auditOpen)}
          className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm ${pathname.startsWith("/audit")
              ? "bg-zinc-950 text-white"
              : "text-zinc-600 hover:bg-zinc-100"
            }`}
        >
          <span className="flex items-center gap-3">
            <Activity size={18} />
            Website Audit
          </span>
          <ChevronDown size={15} />
        </button>

        {auditOpen && (
          <div className="ml-8 space-y-1 py-2">
            {sites.map((site) => (
              <Link
                key={site.id}
                href={`/audit?site=${site.id}`}
                className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-zinc-100"
              >
                <SiteIcon domain={site.domain} size={32} />

                <div className="flex flex-col overflow-hidden">
                  <span className="truncate text-sm font-medium">
                    {site.name}
                  </span>
                  <span className="truncate text-xs text-zinc-500">
                    {site.domain}
                  </span>
                </div>
              </Link>
            ))}

            {sites.length === 0 && (
              <p className="px-3 py-2 text-xs text-zinc-400">
                No sites added yet
              </p>
            )}
          </div>
        )}

        {menu.slice(2).map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${active
                  ? "bg-zinc-950 text-white"
                  : "text-zinc-600 hover:bg-zinc-100"
                }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
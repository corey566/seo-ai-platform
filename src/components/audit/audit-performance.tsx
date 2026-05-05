export default function AuditPerformance({ page }: any) {
  const perf = page?.pageSpeed || {};

  const metrics = [
    ["Performance", perf.performance ?? "N/A"],
    ["LCP", perf.lcp ?? "N/A"],
    ["CLS", perf.cls ?? "N/A"],
    ["FID", perf.fid ?? "N/A"],
    ["TTFB", perf.ttfb ?? "N/A"],
  ];

  return (
    <div className="grid gap-4 md:grid-cols-5">
      {metrics.map(([label, value]) => (
        <div key={label} className="rounded-3xl bg-zinc-100 p-5">
          <p className="text-sm text-zinc-500">{label}</p>
          <h3 className="mt-2 text-xl font-semibold">{value}</h3>
        </div>
      ))}
    </div>
  );
}
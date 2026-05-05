export default function AuditAccessibility({ page }: any) {
  const acc = page.accessibility || {};

  const checks = [
    ["Alt Text Coverage", acc.altCoverage],
    ["Contrast Ratio", acc.contrast],
    ["ARIA Usage", acc.aria],
  ];

  return (
    <div className="space-y-4">
      {checks.map(([label, value]) => (
        <div
          key={label}
          className="rounded-3xl bg-white p-5 ring-1 ring-zinc-100"
        >
          <p className="text-xs text-zinc-500">{label}</p>
          <p className="mt-2 font-medium">
            {value ?? "Not analyzed"}
          </p>
        </div>
      ))}
    </div>
  );
}
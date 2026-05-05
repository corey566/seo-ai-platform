export default function AuditIssues({ page }: any) {
  const issues = page.issues || [];

  return (
    <div className="space-y-4">
      {issues.length === 0 ? (
        <div className="rounded-3xl bg-emerald-50 p-6 text-emerald-700">
          No major issues detected.
        </div>
      ) : (
        issues.map((issue: any, index: number) => (
          <div
            key={`${issue.type}-${issue.message}-${index}`}
            className="rounded-3xl bg-white p-5 ring-1 ring-zinc-100"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-semibold">{issue.message}</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Type: {issue.type}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  issue.severity === "high"
                    ? "bg-red-100 text-red-700"
                    : issue.severity === "medium"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-zinc-100 text-zinc-600"
                }`}
              >
                {issue.severity}
              </span>
            </div>

            <div className="mt-4 rounded-2xl bg-zinc-100 p-4 text-sm text-zinc-600">
              Affected area: {issue.selector || issue.type || "page element"}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
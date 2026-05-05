export default function AuditStructure({ page }: any) {
  return (
    <div className="space-y-5">
      <Panel title="Title & Meta">
        <Field label="Title" value={page.title} limit="Recommended: 50–60 characters" />
        <Field label="Meta Description" value={page.description} limit="Recommended: 120–160 characters" />
        <Field label="H1" value={page.h1} />
      </Panel>

      <Panel title="Heading Structure">
        <HeadingList title="H2 Headings" items={page.h2 || []} />
        <HeadingList title="H3 Headings" items={page.h3 || []} />
      </Panel>
    </div>
  );
}

function Panel({ title, children }: any) {
  return (
    <div className="rounded-3xl bg-zinc-100 p-5">
      <h3 className="mb-4 font-semibold">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Field({ label, value, limit }: any) {
  const missing = !value;

  return (
    <div className={`rounded-2xl p-4 ${missing ? "bg-red-50" : "bg-white"}`}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-zinc-500">{label}</p>
        {missing && (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs text-red-700">
            Missing
          </span>
        )}
      </div>
      <p className="mt-2 text-sm">{value || "Not found"}</p>
      {limit && <p className="mt-2 text-xs text-zinc-400">{limit}</p>}
    </div>
  );
}

function HeadingList({ title, items }: any) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-semibold">{title}</h4>
      <div className="space-y-2">
        {items.length === 0 ? (
          <p className="rounded-2xl bg-red-50 p-4 text-sm text-red-700">
            No headings found.
          </p>
        ) : (
          items.map((item: string, index: number) => (
            <p
              key={`${title}-${item}-${index}`}
              className="rounded-2xl bg-white p-4 text-sm"
            >
              {item}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
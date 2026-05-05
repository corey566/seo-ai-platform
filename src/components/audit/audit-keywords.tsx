export default function AuditKeywords({ page }: any) {
  const keywords = page.keywords || [];

  return (
    <div className="space-y-5">
      <div className="rounded-3xl bg-zinc-100 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold">Detected Keywords</h3>
            <p className="text-sm text-zinc-500">
              Extracted from visible page content. Use deep keyword research next.
            </p>
          </div>

          <a
            href={`/keywords?page=${page.id}`}
            className="rounded-2xl bg-zinc-950 px-4 py-3 text-sm text-white"
          >
            Deep Keyword Research
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {keywords.map((item: any, index: number) => (
            <span
              key={`${item.keyword}-${index}`}
              className="rounded-full bg-white px-3 py-2 text-sm"
            >
              {item.keyword}{" "}
              <span className="text-zinc-400">({item.count})</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
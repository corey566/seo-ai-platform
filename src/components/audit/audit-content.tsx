export default function AuditContent({ page }: any) {
  const content = page.content || "";
  const blocks = content
    .split(/(?<=[.!?])\s+/)
    .filter((block: string) => block.trim().length > 40)
    .slice(0, 40);

  return (
    <div className="space-y-5">
      <div className="rounded-3xl bg-zinc-100 p-5">
        <h3 className="font-semibold">Content Breakdown</h3>
        <p className="mt-1 text-sm text-zinc-500">
          Converted into readable blocks instead of one huge paragraph.
        </p>
      </div>

      <div className="space-y-3">
        {blocks.map((block: string, index: number) => (
          <div
            key={`content-block-${index}`}
            className="rounded-2xl bg-white p-4 text-sm leading-7 ring-1 ring-zinc-100"
          >
            {block}
          </div>
        ))}
      </div>
    </div>
  );
}
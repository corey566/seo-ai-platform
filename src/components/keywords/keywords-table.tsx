export default function KeywordsTable({
  keywords,
  onSelect,
  onGap,
}: {
  keywords: any[];
  onSelect: (keyword: any) => void;
  onGap: (keyword: any) => void;
}) {
  return (
    <div className="rounded-3xl bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="font-semibold">Keyword Opportunities</h2>
          <p className="text-sm text-zinc-500">
            Click a keyword for SERP preview or run gap analysis.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-100">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-zinc-100 text-left text-zinc-500">
            <tr>
              <th className="px-4 py-3">Keyword</th>
              <th className="px-4 py-3">Intent</th>
              <th className="px-4 py-3">Cluster</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {keywords.map((k, index) => (
              <tr
                key={k.id || `${k.keyword}-${index}`}
                className="border-t border-zinc-100 hover:bg-zinc-50"
              >
                <td
                  onClick={() => onSelect(k)}
                  className="cursor-pointer px-4 py-4 font-medium"
                >
                  {k.keyword}
                </td>
                <td className="px-4 py-4">
                  <Badge value={k.intent || "mixed"} />
                </td>
                <td className="px-4 py-4 text-zinc-600">
                  {k.cluster || "Unclustered"}
                </td>
                <td className="px-4 py-4 text-zinc-500">{k.source}</td>
                <td className="px-4 py-4 text-right">
                  <button
                    onClick={() => onGap(k)}
                    className="rounded-xl bg-zinc-950 px-3 py-2 text-xs text-white"
                  >
                    Gap
                  </button>
                </td>
              </tr>
            ))}

            {keywords.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-zinc-500">
                  No keywords found. Select a page and run research.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Badge({ value }: { value: string }) {
  const tone =
    value === "transactional"
      ? "bg-red-100 text-red-700"
      : value === "commercial"
      ? "bg-amber-100 text-amber-700"
      : value === "informational"
      ? "bg-blue-100 text-blue-700"
      : "bg-zinc-100 text-zinc-700";

  return <span className={`rounded-full px-3 py-1 text-xs ${tone}`}>{value}</span>;
}
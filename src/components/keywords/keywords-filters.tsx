export default function KeywordsFilters({ keywords }: any) {
  const total = keywords.length;
  const commercial = keywords.filter((k: any) => k.intent === "commercial").length;
  const informational = keywords.filter((k: any) => k.intent === "informational").length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card label="Total Keywords" value={total} />
      <Card label="Commercial" value={commercial} />
      <Card label="Informational" value={informational} />
    </div>
  );
}

function Card({ label, value }: any) {
  return (
    <div className="bg-white p-5 rounded-2xl">
      <p className="text-sm text-zinc-500">{label}</p>
      <h2 className="text-2xl font-semibold mt-2">{value}</h2>
    </div>
  );
}
const tabs = [
  ["overview", "Overview"],
  ["structure", "Structure"],
  ["keywords", "Keywords"],
  ["issues", "Issues"],
  ["images", "Images"],
  ["performance", "Performance"],
  ["technical", "Technical"],
  ["accessibility", "Accessibility"],
  ["content", "Content"],
];

export default function AuditTabs({ activeTab, onChange }: any) {
  return (
    <div className="flex flex-wrap gap-2 rounded-3xl bg-zinc-100 p-2">
      {tabs.map(([id, label]) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`rounded-2xl px-5 py-3 text-sm ${
            activeTab === id
              ? "bg-zinc-950 text-white"
              : "text-zinc-600 hover:bg-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
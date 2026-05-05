export default function KeywordsClusters({ keywords }: any) {
  const clusters: any = {};

  keywords.forEach((k: any) => {
    if (!clusters[k.cluster]) clusters[k.cluster] = [];
    clusters[k.cluster].push(k);
  });

  return (
    <div className="bg-white rounded-3xl p-5">
      <h3 className="font-semibold mb-4">Clusters</h3>

      {Object.keys(clusters).map((c) => (
        <div key={c} className="mb-3">
          <p className="font-medium">{c}</p>
          <p className="text-xs text-zinc-500">
            {clusters[c].length} keywords
          </p>
        </div>
      ))}
    </div>
  );
}
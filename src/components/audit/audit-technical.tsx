export default function AuditTechnical({ page }: any) {
  const tech = page.technical || {};

  return (
    <div className="space-y-4">
      <Block title="Indexing">
        {tech.indexable ? "Indexable" : "Blocked from indexing"}
      </Block>

      <Block title="Canonical">
        {tech.canonical || "Missing canonical tag"}
      </Block>

      <Block title="Robots">
        {tech.robots || "Not defined"}
      </Block>

      <Block title="HTTPS">
        {page.url?.startsWith("https") ? "Secure" : "Not secure"}
      </Block>
    </div>
  );
}

function Block({ title, children }: any) {
  return (
    <div className="rounded-3xl bg-white p-5 ring-1 ring-zinc-100">
      <p className="text-xs text-zinc-500">{title}</p>
      <p className="mt-2 font-medium">{children}</p>
    </div>
  );
}
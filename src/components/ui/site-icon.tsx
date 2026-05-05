import { getFaviconUrl } from "@/lib/utils/get-favicon";

export default function SiteIcon({
  domain,
  size = 40,
}: {
  domain: string;
  size?: number;
}) {
  const src = getFaviconUrl(domain);

  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-2xl bg-zinc-100 overflow-hidden"
    >
      <img
        src={src}
        alt="favicon"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
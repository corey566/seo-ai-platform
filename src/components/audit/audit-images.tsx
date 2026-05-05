export default function AuditImages({ page }: any) {
  const images = page.images || [];

  if (!images.length) {
    return (
      <div className="rounded-3xl bg-zinc-100 p-6 text-zinc-500">
        No images detected on this page.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {images.map((img: any, index: number) => {
        const missingAlt = !img.alt;
        const tooLarge = img.size && img.size > 300;

        return (
          <div
            key={`${img.src}-${index}`}
            className="rounded-3xl bg-white p-5 ring-1 ring-zinc-100"
          >
            <div className="flex gap-4">
              <img
                src={img.src}
                className="h-20 w-20 rounded-xl object-cover"
              />

              <div className="flex-1">
                <p className="text-sm break-all">{img.src}</p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {missingAlt && (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs text-red-700">
                      Missing ALT
                    </span>
                  )}

                  {tooLarge && (
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-700">
                      Large Image
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs text-zinc-500">
                  ALT: {img.alt || "Not provided"}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
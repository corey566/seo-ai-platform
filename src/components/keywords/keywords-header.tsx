export default function KeywordsHeader({
    sites,
    pages,
    selectedSite,
    selectedPage,
    country,
    onSiteChange,
    onPageChange,
    onCountryChange,
    onRun,
}: any) {
    return (
        <div className="rounded-3xl bg-white p-6 flex flex-wrap gap-4 items-center">
            <select
                value={selectedSite}
                onChange={(e) => onSiteChange(e.target.value)}
            >
                <option>Select Site</option>
                {sites.map((s: any) => (
                    <option key={s.id} value={s.id}>
                        {s.name}
                    </option>
                ))}
            </select>

            <select
                value={selectedPage}
                onChange={(e) => onPageChange(e.target.value)}
            >
                <option>Select Page</option>
                {pages.map((p: any) => (
                    <option key={p.id} value={p.id}>
                        {p.title || p.url}
                    </option>
                ))}
            </select>

            <select value={country} onChange={(e) => onCountryChange(e.target.value)}>
                <option value="global">Global</option>
                <option value="IN">India</option>
                <option value="US">USA</option>
            </select>

            <button
                onClick={onRun}  // ✅ already handled in parent
                className="bg-black text-white px-4 py-2 rounded-xl"
            >
                Run Research
            </button>

        </div>
    );
}
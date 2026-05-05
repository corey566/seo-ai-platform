export async function fetchAutocomplete(
  keyword: string,
  country = "global",
  language = "en"
) {
  try {
    const url = new URL(
      "https://suggestqueries.google.com/complete/search"
    );

    url.searchParams.set("client", "firefox");
    url.searchParams.set("q", keyword);

    // language
    url.searchParams.set("hl", language);

    // country targeting
    if (country !== "global") {
      url.searchParams.set("gl", country);
    }

    const res = await fetch(url.toString());
    const data = await res.json();

    return data[1] || [];
  } catch (e) {
    console.error("autocomplete error", e);
    return [];
  }
}
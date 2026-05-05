export function getFaviconUrl(domain: string) {
  try {
    const url = new URL(domain);

    return `https://www.google.com/s2/favicons?sz=64&domain=${url.hostname}`;
  } catch {
    return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
  }
}
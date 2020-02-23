export function fetchIdfromUrl(url) {
  return url.match(/\d+/g)[0];
}

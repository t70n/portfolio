export function openPdf(filename) {
  const base = import.meta?.env?.BASE_URL || '/';
  const url = `${base}pdf/${filename}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

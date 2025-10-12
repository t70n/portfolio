// src/utils.js
export function downloadCV(fileName) {
  const fileUrl = `/pdf/${fileName}`;
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

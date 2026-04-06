import { FileMeta } from "../types.js";

export function computeStats(files: FileMeta[]) {
  const totalFiles = files.length;
  const totalLines = files.reduce((sum, f) => sum + f.lines, 0);

  const fileTypes: Record<string, number> = {};
  const categories: Record<string, number> = {};

  for (const f of files) {
    fileTypes[f.ext] = (fileTypes[f.ext] || 0) + 1;
    categories[f.category] = (categories[f.category] || 0) + 1;
  }

  const largestFiles = [...files]
    .sort((a, b) => b.size - a.size)
    .slice(0, 10);

  return {
    totalFiles,
    totalLines,
    fileTypes,
    categories,
    largestFiles
  };
}
import fs from "fs/promises";
import path from "path";
import { FileMeta, Config } from "../types.js";

function categorize(file: string): string {
  if (file.startsWith("src/")) return "Source";
  if (file.startsWith("public/")) return "Assets";
  if (file.startsWith("scripts/")) return "Scripts";
  if (file.startsWith("data/")) return "Data";

  if (file.endsWith(".md")) return "Docs";
  if (file.includes("config") || file.endsWith(".json")) return "Config";

  return "Other";
}


export async function analyzeFiles(
  files: string[],
  config: Config
): Promise<FileMeta[]> {
  const results: FileMeta[] = [];

  for (const file of files) {
    const stat = await fs.stat(file);
    const content = await fs.readFile(file, "utf-8");

    const ext = path.extname(file);
    const lines = content.split("\n").length;

    const sizeKB = stat.size / 1024;

    results.push({
      path: file,
      size: stat.size,
      lines,
      ext,
      category: categorize(file),
      content:
        config.embedSource && sizeKB <= config.maxFileSizeKB
          ? content
          : undefined
    });
  }

  return results;
}
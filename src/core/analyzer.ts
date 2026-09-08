import fs from "fs/promises";
import path from "path";
import { FileMeta, Config } from "../types.js";

export function categorize(file: string): string {
  const basename = path.basename(file);
  const ext = path.extname(file).toLowerCase();

  if (file.startsWith("src/") || file.startsWith("lib/") || file.startsWith("app/")) {
    if (/\.(test|spec)\.(ts|js)$/.test(basename)) return "Tests";
    return "Source";
  }
  if (file.startsWith("public/") || file.startsWith("static/")) return "Assets";
  if (file.startsWith("scripts/")) return "Scripts";
  if (file.startsWith("data/")) return "Data";

  if (/\.(test|spec)\.(ts|js)$/.test(basename)) return "Tests";
  if (ext === ".md") return "Docs";
  if (ext === ".json") return "Config";
  if (file.includes("config") || basename.startsWith(".")) return "Config";
  if (ext === ".css" || ext === ".scss" || ext === ".less") return "Styles";
  if (ext === ".html" || ext === ".ejs" || ext === ".njk") return "Templates";
  if (ext === ".env") return "Env";
  if (ext === ".gitignore") return "Config";

  return "Other";
}

async function analyzeFile(file: string, config: Config): Promise<FileMeta | null> {
  try {
    const stat = await fs.stat(file);
    const content = await fs.readFile(file, "utf-8");
    const ext = path.extname(file);
    const lines = content.split("\n").length;
    const sizeKB = stat.size / 1024;

    return {
      path: file,
      size: stat.size,
      lines,
      ext,
      category: categorize(file),
      content: config.embedSource && sizeKB <= config.maxFileSizeKB ? content : undefined
    };
  } catch {
    console.warn(`⚠️  Skipped: ${file} (unreadable)`);
    return null;
  }
}

export async function analyzeFiles(
  files: string[],
  config: Config
): Promise<FileMeta[]> {
  const results = await Promise.all(files.map(f => analyzeFile(f, config)));
  return results.filter((r): r is FileMeta => r !== null);
}
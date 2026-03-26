import fg from "fast-glob";
import fs from "fs/promises";
import path from "path";

/* =========================
   ⚙️ CONFIGURATION
========================= */

const ROOT_DIR = process.cwd();
const OUTPUT_FILE = path.join(ROOT_DIR, "CODEBASE.md");

// Files we WANT
const INCLUDED_EXTENSIONS = [
  ".ts", ".tsx", ".js", ".jsx",
  ".json", ".md", ".css", ".scss",
  ".env", ".yml", ".yaml"
];

// Folders/files to ignore (customizable)
const IGNORE_PATTERNS = [
  "**/node_modules/**",
  "**/.next/**",
  "**/dist/**",
  "**/build/**",
  "**/.git/**",
];

// Important files to ALWAYS include
const PRIORITY_FILES = [
  "README.md",
  "package.json",
  "tsconfig.json",
  "next.config.ts",
  "vercel.json",
];

// Limit huge files
const MAX_FILE_SIZE = 200_000; // ~200KB

/* =========================
   📦 TYPES
========================= */

type FileMeta = {
  path: string;
  ext: string;
  lines: number;
  size: number;
  category: string;
};

/* =========================
   🧠 HELPERS
========================= */

function getLanguage(ext: string) {
  return ext.replace(".", "") || "";
}

function categorize(file: string): string {
  if (file.startsWith("src/")) return "Source";
  if (file.startsWith("public/")) return "Assets";
  if (file.startsWith("scripts/")) return "Scripts";
  if (file.startsWith("data/")) return "Data";

  if (file.endsWith(".md")) return "Docs";
  if (file.includes("config") || file.endsWith(".json")) return "Config";

  return "Other";
}

function buildTree(files: string[]) {
  const tree: any = {};

  for (const file of files) {
    const parts = file.split("/");
    let current = tree;

    for (const part of parts) {
      if (!current[part]) current[part] = {};
      current = current[part];
    }
  }

  function render(node: any, depth = 0): string {
    let output = "";
    for (const key of Object.keys(node)) {
      output += `${"  ".repeat(depth)}- ${key}\n`;
      output += render(node[key], depth + 1);
    }
    return output;
  }

  return render(tree);
}

/* =========================
   🔍 MAIN GENERATOR
========================= */

async function generate() {
  console.log("🔍 Scanning full project...");

  const files = await fg("**/*", {
    cwd: ROOT_DIR,
    ignore: IGNORE_PATTERNS,
    onlyFiles: true,
    dot: true, // include hidden files (.env)
  });

  const metas: FileMeta[] = [];

  for (const file of files) {
    const ext = path.extname(file);

    // Include if extension matches OR it's priority file
    const isPriority = PRIORITY_FILES.includes(path.basename(file));

    if (!INCLUDED_EXTENSIONS.includes(ext) && !isPriority) continue;

    const fullPath = path.join(ROOT_DIR, file);

    let content = "";
    try {
      content = await fs.readFile(fullPath, "utf-8");
    } catch {
      continue; // skip unreadable files
    }

    const size = content.length;

    metas.push({
      path: file,
      ext,
      lines: content.split("\n").length,
      size,
      category: categorize(file),
    });
  }

  /* =========================
     📊 STATS
  ========================= */

  const totalFiles = metas.length;
  const totalLines = metas.reduce((sum, f) => sum + f.lines, 0);

  const fileTypes: Record<string, number> = {};
  const categories: Record<string, number> = {};

  for (const f of metas) {
    fileTypes[f.ext] = (fileTypes[f.ext] || 0) + 1;
    categories[f.category] = (categories[f.category] || 0) + 1;
  }

  const largestFiles = [...metas]
    .sort((a, b) => b.size - a.size)
    .slice(0, 10);

  const tree = buildTree(metas.map(f => f.path));

  /* =========================
     🧾 BUILD OUTPUT
  ========================= */

  let output = `# 🧠 CODEBASE SNAPSHOT\n\n`;
  output += `Generated: ${new Date().toISOString()}\n\n`;

  output += `## 🔢 Project Stats\n\n`;
  output += `- Total files: ${totalFiles}\n`;
  output += `- Total lines: ${totalLines}\n\n`;

  output += `### 📦 File Types\n`;
  for (const [ext, count] of Object.entries(fileTypes)) {
    output += `- ${ext}: ${count}\n`;
  }

  output += `\n### 🗂 Categories\n`;
  for (const [cat, count] of Object.entries(categories)) {
    output += `- ${cat}: ${count}\n`;
  }

  output += `\n## 🌳 Project Structure\n\n`;
  output += "```\n" + tree + "```\n";

  output += `\n## 🧾 File Index\n\n`;
  for (const f of metas) {
    output += `- ${f.path} (${f.lines} lines)\n`;
  }

  output += `\n## 🔥 Largest Files\n\n`;
  for (const f of largestFiles) {
    output += `- ${f.path} (${f.lines} lines)\n`;
  }

  /* =========================
     📄 SOURCE CONTENT
  ========================= */

  output += `\n---\n\n## 📄 Source Code\n\n`;

  for (const f of metas) {
    if (f.size > MAX_FILE_SIZE) {
      output += `### 📁 ${f.path}\n\n`;
      output += `⚠️ Skipped (too large)\n\n`;
      continue;
    }

    const fullPath = path.join(ROOT_DIR, f.path);
    const content = await fs.readFile(fullPath, "utf-8");

    output += `### 📁 ${f.path}\n\n`;
    output += "```" + getLanguage(f.ext) + "\n";
    output += content.trim() + "\n";
    output += "```\n\n";
  }

  await fs.writeFile(OUTPUT_FILE, output);

  console.log("✅ Full CODEBASE.md generated");
}

generate();

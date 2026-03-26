import fg from "fast-glob";
import fs from "fs/promises";
import path from "path";

const ROOT_DIR = process.cwd();
const SRC_DIR = path.join(ROOT_DIR, "src");
const OUTPUT_FILE = path.join(ROOT_DIR, "CODEBASE.md");

const INCLUDED_EXTENSIONS = [
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".json",
  ".md",
  ".css",
  ".scss",
];

const IGNORE_PATTERNS = ["**/node_modules/**", "**/.next/**"];

type FileMeta = {
  path: string;
  ext: string;
  lines: number;
  size: number;
};

function getLanguage(ext: string) {
  return ext.replace(".", "") || "";
}

function buildTree(files: string[]) {
  const tree: any = {};

  for (const file of files) {
    const parts = file.split("/");
    let current = tree;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      if (!current[part]) {
        current[part] = {};
      }

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

async function generate() {
  console.log("🔍 Scanning files...");

  const files = await fg("**/*", {
    cwd: SRC_DIR,
    ignore: IGNORE_PATTERNS,
    onlyFiles: true,
  });

  const metas: FileMeta[] = [];

  for (const file of files) {
    const ext = path.extname(file);
    if (!INCLUDED_EXTENSIONS.includes(ext)) continue;

    const fullPath = path.join(SRC_DIR, file);
    const content = await fs.readFile(fullPath, "utf-8");

    metas.push({
      path: file,
      ext,
      lines: content.split("\n").length,
      size: content.length,
    });
  }

  // 📊 Stats
  const totalFiles = metas.length;
  const totalLines = metas.reduce((sum, f) => sum + f.lines, 0);

  const fileTypes: Record<string, number> = {};
  for (const f of metas) {
    fileTypes[f.ext] = (fileTypes[f.ext] || 0) + 1;
  }

  const largestFiles = [...metas]
    .sort((a, b) => b.size - a.size)
    .slice(0, 10);

  // 🌳 Tree
  const tree = buildTree(metas.map((f) => f.path));

  // 🧾 Start writing
  let output = `# 🧠 CODEBASE SNAPSHOT\n\n`;
  output += `Generated: ${new Date().toISOString()}\n\n`;

  // 🔢 Stats
  output += `## 🔢 Project Stats\n\n`;
  output += `- Total files: ${totalFiles}\n`;
  output += `- Total lines: ${totalLines}\n\n`;

  output += `### 📦 File Types\n`;
  for (const [ext, count] of Object.entries(fileTypes)) {
    output += `- ${ext}: ${count}\n`;
  }

  // 🌳 Structure
  output += `\n## 🌳 Project Structure\n\n`;
  output += "```\n" + tree + "```\n";

  // 🧾 Index
  output += `\n## 🧾 File Index\n\n`;
  for (const f of metas) {
    output += `- src/${f.path} (${f.lines} lines)\n`;
  }

  // 🔥 Largest files
  output += `\n## 🔥 Largest Files\n\n`;
  for (const f of largestFiles) {
    output += `- src/${f.path} (${f.lines} lines)\n`;
  }

  // 📄 Actual content
  output += `\n---\n\n## 📄 Source Code\n\n`;

  for (const f of metas) {
    const fullPath = path.join(SRC_DIR, f.path);
    const content = await fs.readFile(fullPath, "utf-8");

    output += `### 📁 src/${f.path}\n\n`;
    output += "```" + getLanguage(f.ext) + "\n";
    output += content.trim() + "\n";
    output += "```\n\n";
  }

  await fs.writeFile(OUTPUT_FILE, output);

  console.log("✅ CODEBASE.md generated with rich context");
}

generate();

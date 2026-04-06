import { TreeNode } from "./tree.js";
import { FileMeta } from "../types.js";
import { computeStats } from "./stats.js";

function getLanguage(ext: string) {
  return ext.replace(".", "") || "";
}

export function generateMarkdown(
  tree: TreeNode,
  files: FileMeta[]
): string {
  const stats = computeStats(files);

  let output = `# 🧠 CODEBASE CONTEXT\n\n`;
  output += `Generated: ${new Date().toISOString()}\n\n`;

  /* =========================
     📊 STATS
  ========================= */

  output += `## 🔢 Project Stats\n\n`;
  output += `- Total files: ${stats.totalFiles}\n`;
  output += `- Total lines: ${stats.totalLines}\n\n`;

  output += `### 📦 File Types\n`;
  for (const [ext, count] of Object.entries(stats.fileTypes)) {
    output += `- ${ext}: ${count}\n`;
  }

  output += `\n### 🗂 Categories\n`;
  for (const [cat, count] of Object.entries(stats.categories)) {
    output += `- ${cat}: ${count}\n`;
  }

  /* =========================
     🌳 TREE
  ========================= */

  function renderTree(node: TreeNode, depth = 0): string {
    let output = "";
    const indent = "  ".repeat(depth);

    if (node.name !== "root") {
      output += `${indent}- ${node.name}\n`;
    }

    if (node.children) {
      for (const child of Object.values(node.children)) {
        output += renderTree(child, depth + 1);
      }
    }

    return output;
  }

  output += `\n## 🌳 Project Structure\n\n`;
  output += "```\n" + renderTree(tree) + "```\n";

  /* =========================
     📄 INDEX
  ========================= */

  output += `\n## 🧾 File Index\n\n`;
  for (const f of files) {
    output += `- ${f.path} (${f.lines} lines)\n`;
  }

  /* =========================
     🔥 LARGEST FILES
  ========================= */

  output += `\n## 🔥 Largest Files\n\n`;
  for (const f of stats.largestFiles) {
    output += `- ${f.path} (${f.lines} lines)\n`;
  }

  /* =========================
     📄 SOURCE
  ========================= */

  output += `\n---\n\n## 📄 Source Code\n\n`;

  for (const f of files) {
    output += `### 📁 ${f.path}\n\n`;

    if (!f.content) {
      output += `⚠️ Skipped (too large)\n\n`;
      continue;
    }

    output += "```" + getLanguage(f.ext) + "\n";
    output += f.content.trim() + "\n";
    output += "```\n\n";
  }

  return output;
}
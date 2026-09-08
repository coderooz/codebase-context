import { scanFiles } from "./core/scanner.js";
import { analyzeFiles } from "./core/analyzer.js";
import { buildTree } from "./core/tree.js";
import { generateMarkdown } from "./core/generator.js";
import { defaultConfig } from "./config/default.js";
import fs from "fs/promises";

export async function run() {
  const files = await scanFiles(
    defaultConfig.include,
    defaultConfig.ignore
  );

  if (files.length === 0) {
    console.log("⚠️  No files found to process");
    return;
  }

  const analyzed = await analyzeFiles(files, defaultConfig);
  const tree = buildTree(analyzed);
  const markdown = generateMarkdown(tree, analyzed);

  try {
    await fs.writeFile("CODEBASE.md", markdown, "utf-8");
    console.log(`✅ CODEBASE.md generated (${analyzed.length} files)`);
  } catch (error) {
    console.error("❌ Failed to write CODEBASE.md:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}
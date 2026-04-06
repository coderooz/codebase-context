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

    const analyzed = await analyzeFiles(files, defaultConfig);
    const tree = buildTree(analyzed);
    const markdown = generateMarkdown(tree, analyzed);

  await fs.writeFile("CODEBASE.md", markdown, "utf-8");

  console.log("✅ CODEBASE.md generated");
}
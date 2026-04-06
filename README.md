# 🧠 Codebase Context

> Generate structured, AI-ready Markdown snapshots of your entire codebase.

[![npm version](https://img.shields.io/npm/v/@coderooz/codebase-context)](https://www.npmjs.com/package/@coderooz/codebase-context)
[![license](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![node](https://img.shields.io/badge/node-%3E%3D18-blue)]()
[![npm version](https://img.shields.io/npm/v/@coderooz/codebase-context)](https://www.npmjs.com/package/@coderooz/codebase-context)
[![npm downloads](https://img.shields.io/npm/dm/@coderooz/codebase-context)](https://www.npmjs.com/package/@coderooz/codebase-context)

---

## ✨ Overview

**Codebase Context** is a CLI tool that scans your project and produces a **single structured `CODEBASE.md` file**.

It is designed for:

* 🤖 Feeding complete context into AI models
* 🧠 Understanding large or unfamiliar repositories
* 📚 Generating documentation automatically
* ⚡ Debugging and auditing codebases efficiently

---

## 🚀 What It Generates

The output file (`CODEBASE.md`) includes:

* 📊 Project statistics (files, lines)
* 📦 File type breakdown
* 🗂 Category grouping
* 🌳 Full directory structure
* 🧾 File index with metadata
* 🔥 Largest files
* 📄 Source code (size-controlled)

---

## ⚙️ Installation

### Run instantly (recommended)

```bash
npx @coderooz/codebase-context
```

---

### Global install

```bash
npm install -g @coderooz/codebase-context
```

Then run:

```bash
codebase-context
```

### 📦 Package

[https://www.npmjs.com/package/@coderooz/codebase-context](https://www.npmjs.com/package/@coderooz/codebase-context)

---

## 🧪 Usage

Run inside your project root:

```bash
codebase-context
```

### Output

```bash
CODEBASE.md
```

---

## 🧠 How It Works

The CLI follows a modular pipeline:

```
scanFiles → analyzeFiles → buildTree → generateMarkdown
```

### Modules

| Module         | Responsibility                                |
| -------------- | --------------------------------------------- |
| `scanner.ts`   | File discovery using fast-glob                |
| `analyzer.ts`  | Extract metadata (size, lines, type, content) |
| `tree.ts`      | Build hierarchical structure                  |
| `stats.ts`     | Compute analytics                             |
| `generator.ts` | Generate Markdown output                      |

---

## 📦 Configuration

Default configuration:

```ts
export const defaultConfig = {
  include: ["**/*.ts", "**/*.js", "**/*.json", "**/*.md"],
  ignore: ["node_modules/**", "dist/**"],
  maxFileSizeKB: 50,
  embedSource: true,
  priority: ["package.json", "README.md"]
};
```

### Options Explained

| Option          | Description                   |
| --------------- | ----------------------------- |
| `include`       | File patterns to scan         |
| `ignore`        | Paths to exclude              |
| `maxFileSizeKB` | Max size for embedding source |
| `embedSource`   | Include file contents         |
| `priority`      | Important files (future use)  |

---

## 📁 Example Output

See:

```bash
CODEBASE.md
```

Example included in:

```
/example/CODEBASE.md
```

---

## 🧩 Use Cases

* Feed full repo context into AI tools (GPT, Gemini, etc.)
* Quickly understand unknown projects
* Generate internal documentation
* Analyze project structure
* Share architecture with teams

---

## 🏗️ Project Structure

```
src/
  core/
    scanner.ts
    analyzer.ts
    tree.ts
    stats.ts
    generator.ts

  config/
    default.ts

  cli.ts
  index.ts
```

---

## 🛠️ Development

### Setup

```bash
git clone https://github.com/coderooz/codebase-context.git
cd codebase-context
npm install
```

---

### Build

```bash
npm run build
```

---

### Run locally

```bash
node dist/cli.js
```

or:

```bash
npm link
codebase-context
```

---

## ⚠️ Important Notes

* Uses **ESM (NodeNext)** — all imports must include `.js`
* No `ts-node` in production
* CLI runs compiled output from `/dist`

---

## 🔥 Roadmap

* [ ] Config file support (`codebase.config.json`)
* [ ] Plugin system
* [ ] AST-based analysis
* [ ] Dependency graph generation
* [ ] AI summaries
* [ ] Multiple output formats (JSON / HTML)

---

## 🤝 Contributing

Contributions are welcome.

* Open issues for bugs or ideas
* Submit PRs for improvements

See `CONTRIBUTING.md`

---

## 📜 License

MIT License

---

## 👨‍💻 Author

Built by Coderooz
https://www.coderooz.in

---

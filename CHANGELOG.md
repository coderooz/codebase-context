# 📦 Changelog

All notable changes to this project will be documented in this file.

The format is based on **Keep a Changelog**
and this project adheres to **Semantic Versioning**.

---

## [2.0.0] - 2026-04-05

### 🚀 Major Release — CLI Architecture Rewrite

This version represents a **complete redesign** of the project from a script-based tool to a **modular CLI package**.

---

### ✨ Added

* Full CLI support (`npx @coderooz/codebase-context`)
* Modular architecture:

  * `scanner`
  * `analyzer`
  * `tree`
  * `stats`
  * `generator`
* Config system with:

  * include / ignore patterns
  * max file size control
  * source embedding toggle
* Project-wide scanning (not limited to `src/`)
* Category classification (Source, Assets, Config, Docs, etc.)
* Priority file handling (`README.md`, `package.json`, etc.)
* File size limits for large files
* Structured Markdown output pipeline
* Improved file tree generation
* Type-safe TypeScript architecture
* ESM-based build (`NodeNext`)

---

### ⚡ Improved

* Performance of file scanning and processing
* Output readability and structure
* File categorization logic
* Handling of hidden files (`.env`, configs)
* Error handling for unreadable files
* Large file handling (skip logic)
* Markdown formatting consistency

---

### 🔧 Changed

* Package renamed to scoped package:

  * `@coderooz/codebase-context`
* Execution model:

  * ❌ Removed `ts-node`
  * ✅ Compiled CLI (`dist/`)
* Entry point moved to CLI interface
* Output now includes:

  * categories
  * better stats
  * cleaner structure
* Default scanning behavior expanded beyond `src/`

---

### ❌ Removed

* Old `scripts/generate.ts` execution model
* Direct script-based usage
* Legacy configuration structure (`SCAN_CONFIG`)
* Tight coupling to `src/` directory

---

### 🧠 Internal Refactor

* Separated concerns into independent modules
* Introduced pipeline architecture:

  ```
  scan → analyze → build → generate
  ```
* Improved maintainability and extensibility

---

## [1.1.0] - 2026-03-26

### ✨ Added

* Enhanced file scanning:

  * Added support for `.env`, `.yml`, `.yaml`
* Category classification system
* Priority file inclusion logic
* File size limit handling (~200KB)
* Hidden file support (`dot: true`)
* Improved ignore patterns:

  * `dist`, `build`, `.git`, etc.

---

### ⚡ Improved

* Output formatting in `CODEBASE.md`
* Tree generation logic
* File metadata richness
* Sorting of largest files
* Readability of generated markdown

---

### 🔧 Changed

* Scanning scope expanded from `src/` → entire project
* Output paths simplified (removed `src/` prefix)
* Refactored generator structure

---

## [1.0.0] - 2026-03-26

### 🎉 Initial Release

---

### ✨ Added

* Basic codebase snapshot generator
* Markdown output (`CODEBASE.md`)
* File scanning using `fast-glob`
* File metadata:

  * line count
  * file size
  * extension
* Project statistics:

  * total files
  * total lines
* File type breakdown
* Directory tree generation
* Full source code embedding
* Largest files detection

---

### 📦 Project Setup

* Initial `package.json`
* TypeScript setup
* `ts-node` execution
* Basic CLI script (`scripts/generate.ts`)

---

### 📄 Documentation & Community

* README.md (initial version)
* MIT License (switched from Apache)
* CONTRIBUTING.md
* CODE_OF_CONDUCT.md
* SECURITY.md

---

### 🔧 DevOps / GitHub

* Issue templates (bug, feature, general, first contribution)
* Pull request template
* GitHub Actions:

  * Release workflow
  * PR labeler
  * Welcome bot
* Label configuration

---

## 🔮 Upcoming (Planned)

* Config file support (`codebase.config.json`)
* Plugin system
* AST-based analysis
* Dependency graph visualization
* AI-generated summaries
* Multi-format output (JSON, HTML)

---

## 🧾 Notes

* Version `2.0.0` introduces breaking changes (CLI + architecture)
* Users upgrading from `1.x` must switch to CLI usage

---

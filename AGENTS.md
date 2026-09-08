# Project Agents — codebase-context

**Project:** `@coderooz/codebase-context`
**Type:** TypeScript CLI tool
**Version:** 2.0.0

---

## Project Overview

A CLI tool that scans a codebase and generates a single structured `CODEBASE.md` file containing project statistics, directory tree, file index, and embedded source code. Designed for feeding complete context into AI models.

---

## Tech Stack

- TypeScript (ESM, NodeNext module resolution)
- Node.js >= 18
- Commander (CLI framework)
- fast-glob (file discovery)
- Build: `tsc` (no bundler)

---

## Architecture

Pipeline-based modular design:

```
scanFiles -> analyzeFiles -> buildTree -> generateMarkdown -> CODEBASE.md
```

### Source Modules

| Module | File | Responsibility |
|--------|------|----------------|
| Scanner | `src/core/scanner.ts` | File discovery via fast-glob |
| Analyzer | `src/core/analyzer.ts` | Metadata extraction, file categorization |
| Tree | `src/core/tree.ts` | Hierarchical directory tree construction |
| Stats | `src/core/stats.ts` | Analytics (file types, categories, largest files) |
| Generator | `src/core/generator.ts` | Markdown output generation |
| Config | `src/config/default.ts` | Default configuration |
| Types | `src/types.ts` | TypeScript interfaces (FileMeta, Config) |
| CLI | `src/cli.ts` | Commander program definition |
| Entry | `src/index.ts` | Pipeline orchestrator |

---

## Build & Run

```bash
npm install        # Install dependencies
npm run build      # Compile TypeScript -> dist/
node dist/cli.js   # Run directly
```

---

## Code Conventions

- **Module system:** ESM with `.js` extensions in imports
- **Strict mode:** Enabled in tsconfig
- **Naming:** camelCase for functions/variables, PascalCase for interfaces
- **Exports:** Named exports only
- **Error handling:** Try/catch with user-friendly messages
- **No comments in code** unless logic is non-obvious

---

## File Categories

The analyzer classifies files into these categories:

| Category | Rules |
|----------|-------|
| Source | `src/`, `lib/`, `app/` directories |
| Tests | `.test.ts`, `.spec.ts` files |
| Assets | `public/`, `static/` directories |
| Scripts | `scripts/` directory |
| Docs | `.md` files |
| Config | `.json`, config files, dotfiles |
| Styles | `.css`, `.scss`, `.less` |
| Templates | `.html`, `.ejs`, `.njk` |
| Env | `.env` files |

---

## Important Notes

- Uses **ESM (NodeNext)** — all imports must include `.js` extension
- No `ts-node` — CLI runs compiled output from `dist/`
- Output writes `CODEBASE.md` to current working directory
- Files > 50KB are excluded from source embedding

---

## Agent Roles

| Agent | Purpose |
|-------|---------|
| project-lead | Orchestrates work, delegates tasks |
| coder | Implements code changes |
| reviewer | Reviews code quality and security |
| tester | Writes and runs tests |
| documentor | Maintains documentation |
| devops | CI/CD and deployment |
| bug-fixer | Diagnoses and fixes bugs |
| architect | Architecture decisions |
| research | Searches documentation |

---

## Governance

- Follows global governance rules from `~/.config/opencode/GOVERNANCE.md`
- PRI at `.opencode/reference/PROJECT_REFERENCE_INDEX.md`
- Reports go in `.workspace/reports/` (gitignored)
- Root directory must remain clean

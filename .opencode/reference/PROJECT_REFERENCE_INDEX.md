# Project Reference Index (PRI)

**Project:** `@coderooz/codebase-context`
**Path:** `C:\Code_Works\HTML_CSS_JS\workProjects\projects\codebase-context`
**Last Verified:** 2026-09-08
**Version:** 2.0.0
**Status:** Active

---

## 1. Project Identity

| Field | Value |
|-------|-------|
| Name | `@coderooz/codebase-context` |
| Description | Generate compiled Markdown snapshots of your codebase |
| Type | TypeScript / Node.js CLI |
| License | MIT |
| Author | Ranit Saha (Coderooz) |
| GitHub | https://github.com/coderooz/codebase-context |
| npm | https://www.npmjs.com/package/@coderooz/codebase-context |

---

## 2. Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Language | TypeScript | ^5.0.0 |
| Runtime | Node.js | >=18 |
| Module System | ESM (NodeNext) | -- |
| Build | `tsc` | -- |
| CLI Framework | Commander | ^14.0.3 |
| File Globbing | fast-glob | ^3.3.3 |
| Package Manager | npm | -- |

---

## 3. Directory Structure

```
codebase-context/
  .github/
    ISSUE_TEMPLATE/
      bug_report.md
      feature_request.md
      first_contribution.md
      general.md
    workflows/
      labeler.yml          # Auto-label PRs
      package.yml          # Publish to npm on version change
      release.yml          # Create GitHub release on version change
      security.yml         # CodeQL security scanning
      stale.yml            # Close stale issues/PRs
      welcome.yml          # Greet first-time contributors
    CODEOWNERS             # @coderooz owns all
    config.yml             # Issue template config
    dependabot.yml         # Weekly dependency updates
    FUNDING.yml            # Sponsor links
    labeler.yml            # Label rules
    PULL_REQUEST_TEMPLATE.md

  .opencode/
    agents/                # 9 role-based agent files
    reference/
      PROJECT_REFERENCE_INDEX.md  # This file
    OPENCODE_STATE.md      # Full OpenCode state report
    .gitignore
    node_modules/          # (gitignored)
    package.json
    package-lock.json

  .workspace/              # Development artifacts (gitignored)
    ai/
    generated/
    logs/
    planning/
    reports/
    research/
    sessions/
    temp/
    validation/

  bin/
    cli.js                 # CLI entry point (shebang + import)

  docs/                    # Project documentation site
    app.js
    architecture.md
    CODEBASE.md
    favicon.ico
    favicon.svg
    index.html
    robots.txt
    site.webmanifest
    sitemap.xml
    styles.css

  example/
    CODEBASE.md            # Example generated output

  src/
    config/
      default.ts           # Default configuration
    core/
      analyzer.ts          # File metadata extraction + categorization
      generator.ts         # Markdown output generation
      scanner.ts           # File discovery (fast-glob)
      stats.ts             # Analytics computation
      tree.ts              # Hierarchical tree builder
    cli.ts                 # CLI entry (Commander)
    index.ts               # Main orchestrator (pipeline)
    types.ts               # TypeScript interfaces

  .gitignore
  .npmrc
  CHANGELOG.md
  CODE_OF_CONDUCT.md
  CONTRIBUTING.md
  LICENSE
  package.json
  README.md
  SECURITY.md
  tsconfig.json
```

---

## 4. Source Code Modules

### 4.1 Entry Points

| File | Role | Description |
|------|------|-------------|
| `bin/cli.js` | CLI entry | Shebang script, imports `dist/cli.js` |
| `src/cli.ts` | CLI definition | Commander program setup, calls `run()` |
| `src/index.ts` | Orchestrator | Pipeline: scan -> analyze -> build tree -> generate markdown |

### 4.2 Core Modules (`src/core/`)

| File | Exports | Description |
|------|---------|-------------|
| `scanner.ts` | `scanFiles(include, ignore)` | Discovers files using fast-glob |
| `analyzer.ts` | `categorize(file)`, `analyzeFiles(files, config)` | Extracts metadata, categorizes files |
| `tree.ts` | `TreeNode`, `buildTree(files)` | Builds hierarchical directory tree |
| `stats.ts` | `computeStats(files)` | Computes file type/category analytics |
| `generator.ts` | `generateMarkdown(tree, files)` | Generates CODEBASE.md output |

### 4.3 Configuration (`src/config/`)

| File | Exports | Description |
|------|---------|-------------|
| `default.ts` | `defaultConfig` | Default scanning configuration |

### 4.4 Types (`src/types.ts`)

| Interface | Fields | Description |
|-----------|--------|-------------|
| `FileMeta` | path, size, lines, ext, category, content? | File metadata |
| `Config` | include, ignore, maxFileSizeKB, embedSource, priority | Configuration |

---

## 5. Build & Run

| Command | Description |
|---------|-------------|
| `npm run build` | Compile TypeScript to `dist/` |
| `npx @coderooz/codebase-context` | Run via npx (recommended) |
| `codebase-context` | Run after global install |
| `node dist/cli.js` | Run compiled output directly |

---

## 6. Pipeline Architecture

```
scanFiles (scanner.ts)
  -> analyzeFiles (analyzer.ts)
    -> buildTree (tree.ts)
      -> generateMarkdown (generator.ts)
        -> CODEBASE.md
```

---

## 7. Configuration Reference

```ts
const defaultConfig: Config = {
  include: ["**/*.ts", "**/*.js", "**/*.json", "**/*.md"],
  ignore: ["node_modules/**", "dist/**"],
  maxFileSizeKB: 50,
  embedSource: true,
  priority: ["package.json", "README.md"]
};
```

---

## 8. GitHub Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `release.yml` | Push to main | Auto-create GitHub release on version bump |
| `package.yml` | Push to main | Auto-publish to npm on version bump |
| `security.yml` | Push/PR/schedule | CodeQL security scanning |
| `stale.yml` | Weekly | Close stale issues/PRs |
| `welcome.yml` | First issue/PR | Greet new contributors |
| `labeler.yml` | PR opened/sync | Auto-label PRs by file paths |

---

## 9. Dependencies

### Runtime (2)
- `commander` ^14.0.3 — CLI argument parsing
- `fast-glob` ^3.3.3 — File globbing

### Dev (2)
- `@types/node` ^20.0.0 — Node.js type definitions
- `typescript` ^5.0.0 — TypeScript compiler

---

## 10. Key Files for Governance

| File | Status | Notes |
|------|--------|-------|
| `README.md` | Present | Professional, complete |
| `LICENSE` | Present | MIT, correct author |
| `CHANGELOG.md` | Present | v1.0.0 -> v2.0.0 |
| `SECURITY.md` | Present | Needs version update |
| `CONTRIBUTING.md` | Present | Needs reference update |
| `CODE_OF_CONDUCT.md` | Present | Contributor Covenant 2.0 |
| `AGENTS.md` | Present | Project-level agent config |
| `.gitignore` | Present | Comprehensive |
| `.npmrc` | Present | -- |
| `tsconfig.json` | Present | ESM NodeNext |

---

## Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-09-08 | Initial PRI creation — verified full project structure |

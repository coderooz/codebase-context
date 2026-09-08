# Developer Notes

**Last Updated:** 2026-09-08
**For:** Future developers working on `@coderooz/codebase-context`

---

## Quick Start

```bash
git clone https://github.com/coderooz/codebase-context.git
cd codebase-context
npm install
npm run build
node dist/cli.js
```

---

## Architecture Overview

The project follows a **pipeline architecture**:

```
scanFiles -> analyzeFiles -> buildTree -> generateMarkdown -> CODEBASE.md
```

Each step is a pure function that transforms data and passes it to the next. This makes the system easy to test, extend, and reason about.

---

## Module Responsibilities

### `src/core/scanner.ts`
- Uses `fast-glob` to discover files matching include/ignore patterns
- Returns an array of file paths
- Supports dotfiles via `dot: true`

### `src/core/analyzer.ts`
- Reads each file and extracts metadata (size, lines, extension)
- Categorizes files (Source, Tests, Assets, Config, Docs, etc.)
- Optionally embeds file content (controlled by `config.embedSource`)
- Files over `maxFileSizeKB` are excluded from embedding

### `src/core/tree.ts`
- Takes analyzed files and builds a hierarchical `TreeNode` structure
- Uses path separators to split into directory levels
- Returns a tree rooted at `{ name: "root", children: {} }`

### `src/core/stats.ts`
- Computes aggregate statistics from analyzed files
- Returns: total files, total lines, file type breakdown, category breakdown, top 10 largest files

### `src/core/generator.ts`
- Takes the tree + file metadata and generates Markdown
- Sections: Stats, Tree, File Index, Largest Files, Source Code
- Source code is fenced with language hints based on file extension

### `src/config/default.ts`
- Exports `defaultConfig` with scanning patterns and limits
- Future: support custom config files (`codebase.config.json`)

### `src/types.ts`
- `FileMeta`: path, size, lines, ext, category, content?
- `Config`: include, ignore, maxFileSizeKB, embedSource, priority

---

## Key Design Decisions

### ESM with NodeNext
- All imports use `.js` extensions even for `.ts` source files
- Required by NodeNext module resolution
- Build output is plain JS in `dist/`

### No ts-node
- The CLI runs compiled output from `dist/`
- `bin/cli.js` has a shebang and imports `../dist/cli.js`
- This keeps runtime dependencies minimal

### Pipeline over classes
- Each module exports pure functions
- No shared state between modules
- Easy to test and swap implementations

---

## Common Tasks

### Adding a new file category

Edit `src/core/analyzer.ts` in the `categorize()` function:

```ts
if (ext === ".your-ext") return "YourCategory";
```

### Adding a new output section

Edit `src/core/generator.ts` and add a new section in `generateMarkdown()`.

### Changing default config

Edit `src/config/default.ts`.

### Adding CLI options

Edit `src/cli.ts` to add Commander options, then thread them through `src/index.ts`.

---

## Testing Manually

1. Build: `npm run build`
2. Run in the project itself: `node dist/cli.js`
3. Check the generated `CODEBASE.md`
4. Run in a different project to verify cross-project compatibility

---

## Deployment

- **npm:** Push to `main` with a version bump in `package.json` — GitHub Actions auto-publishes
- **GitHub Release:** Same push auto-creates a release from CHANGELOG.md
- **Security:** CodeQL runs weekly and on every PR

---

## Troubleshooting

### "No files found to process"
- Check that `include` patterns in config match files in your project
- Ensure you're running from the project root

### Build fails with module errors
- Verify all imports use `.js` extensions
- Ensure `tsconfig.json` uses `"module": "NodeNext"`

### Large files not embedded
- Default limit is 50KB (`maxFileSizeKB: 50`)
- Files over this are skipped in source code output but still listed in the index

---

## File Organization

```
.github/           # GitHub config, workflows, templates
.opencode/         # OpenCode agent config and state
.workspace/        # Development artifacts (gitignored)
bin/               # CLI entry point
docs/              # Documentation site
example/           # Example generated output
src/               # Source code
dist/              # Compiled output (gitignored)
```

---

## Governance

This project follows global governance rules:
- PRI at `.opencode/reference/PROJECT_REFERENCE_INDEX.md`
- Reports in `.workspace/reports/` (gitignored)
- Root directory stays clean
- See `~/.config/opencode/GOVERNANCE.md` for full rules

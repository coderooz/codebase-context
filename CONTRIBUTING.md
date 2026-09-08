# Contributing to Codebase Context

Thanks for taking the time to contribute. This project makes codebases easier to understand, share, and feed into AI tools.

---

## Philosophy

- **Clarity over cleverness**
- **Performance with simplicity**
- **Extensibility by design**
- **Developer-first experience**

---

## Ways to Contribute

### Report Bugs

Open an issue with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Node.js version and OS

### Suggest Features

Open an issue describing:
- What problem it solves
- Why it matters
- (Optional) Proposed implementation

### Submit Code

- Fix bugs
- Improve performance
- Add features
- Refactor for clarity

---

## Development Setup

```bash
git clone https://github.com/coderooz/codebase-context.git
cd codebase-context
npm install
```

### Build

```bash
npm run build
```

### Run locally

```bash
node dist/cli.js
```

Or link globally:

```bash
npm link
codebase-context
```

---

## Project Structure

```
src/
  core/
    scanner.ts       # File discovery (fast-glob)
    analyzer.ts      # Metadata extraction, categorization
    tree.ts          # Directory tree builder
    stats.ts         # Analytics computation
    generator.ts     # Markdown output generation
  config/
    default.ts       # Default configuration
  cli.ts             # CLI entry (Commander)
  index.ts           # Pipeline orchestrator
  types.ts           # TypeScript interfaces

bin/
  cli.js             # CLI entry point (shebang)

docs/                # Project documentation site
example/             # Example generated output
```

---

## Code Guidelines

### Do

- Keep functions small and focused
- Write readable, self-explanatory code
- Use consistent naming conventions
- Use ESM imports with `.js` extensions
- Handle errors gracefully

### Avoid

- Over-engineering
- Unnecessary dependencies
- Breaking existing behavior without reason
- `var` — use `const` or `let`
- `any` — use `unknown` and narrow with type guards

---

## Commit Guidelines

Use conventional commit messages:

```bash
feat: add support for custom config files
fix: handle empty directories gracefully
refactor: simplify tree generation logic
docs: update README with new examples
chore: update dependencies
```

---

## Pull Request Process

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Build: `npm run build`
5. Test: Run `node dist/cli.js` in a sample project
6. Commit and push
7. Open a Pull Request

### PR Expectations

- Explain **what** and **why**
- Keep changes focused
- Link related issues (if any)
- Ensure `npm run build` passes

---

## Ideas You Can Work On

- Config file support (`codebase.config.json`)
- Plugin system
- AST-based analysis
- Dependency graph generation
- AI summaries
- Multiple output formats (JSON / HTML)
- Custom ignore patterns via CLI flags

---

## Questions?

Open an issue or start a discussion on GitHub.

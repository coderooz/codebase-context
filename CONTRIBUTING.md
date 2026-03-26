# 🤝 Contributing to Codebase Snapshot

First off — thanks for taking the time to contribute.
This project aims to make codebases easier to understand, share, and feed into AI tools.

---

## 🧠 Philosophy

This project values:

* **Clarity over cleverness**
* **Performance with simplicity**
* **Extensibility by design**
* **Developer-first experience**

If your contribution improves any of these — you're on the right track.

---

## 🚀 Ways to Contribute

You can contribute in several ways:

### 🐛 Report Bugs

* Found something broken or unexpected?
* Open an issue with:

  * Clear description
  * Steps to reproduce
  * Expected vs actual behavior

---

### ✨ Suggest Features

* Open an issue describing:

  * What problem it solves
  * Why it matters
  * (Optional) Proposed implementation

---

### 🔧 Submit Code

* Fix bugs
* Improve performance
* Add features
* Refactor for clarity

---

## 🛠️ Development Setup

```bash
git clone https://github.com/coderooz/codebase-snapshot.git
cd codebase-snapshot
npm install
```

Run the generator:

```bash
npm run generate
```

---

## 📁 Project Structure (Quick Overview)

```bash
scripts/        → core generator logic
example/        → sample outputs
```

---

## 📏 Code Guidelines

### ✅ Do:

* Keep functions small and focused
* Write readable, self-explanatory code
* Use consistent naming
* Add comments where logic is non-obvious

### 🚫 Avoid:

* Over-engineering
* Unnecessary dependencies
* Breaking existing behavior without reason

---

## 🧪 Testing Your Changes

Before submitting:

* Run the generator
* Verify output (`CODEBASE.md`) looks correct
* Ensure no crashes on edge cases (missing files, empty dirs, etc.)

---

## 📌 Commit Guidelines

Use clear, meaningful commit messages:

```bash
feat: add support for root-level file scanning
fix: handle missing files gracefully
refactor: simplify tree generation logic
```

---

## 🔀 Pull Request Process

1. Fork the repo
2. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes
4. Commit and push
5. Open a Pull Request

---

### PR Expectations

* Explain **what** and **why**
* Keep changes focused
* Link related issues (if any)

---

## 🧠 Ideas You Can Work On

* CLI interface (`npx codebase-snapshot`)
* Config file support (`codebase.config.json`)
* Dependency graph generation
* AI-generated summaries
* Output customization (JSON / HTML)

---

## 💬 Discussions

For questions, ideas, or brainstorming:

* Open an issue
* Start a discussion

---

## 🙌 Final Note

Even small contributions matter.

Improving documentation, fixing typos, or suggesting ideas — all of it helps move the project forward.

Let’s build something developers actually *love* to use.

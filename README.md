# 🧠 Codebase Snapshot

> Generate a complete, AI-ready Markdown snapshot of your entire codebase.

![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D18-blue)

---

## ✨ Why this exists

Understanding large codebases is hard. Feeding them into AI tools is even harder.

This tool solves that by generating a **single structured `.md` file** containing:

* 📊 Project statistics
* 🌳 File structure
* 📦 File type breakdown
* 🧾 Indexed file list
* 🔥 Largest files
* 📄 Full source code

---

## 🚀 Features

* ✅ Multi-directory scanning (`src`, `scripts`, root, etc.)
* ✅ Include specific files (`README.md`, `tsconfig.json`, etc.)
* ✅ Full source embedding
* ✅ File stats (lines, size)
* ✅ Tree structure generation
* ✅ AI-ready output format
* ✅ Extensible config system

---

## 📦 Installation

```bash
git clone https://github.com/coderooz/codebase-snapshot.git
cd codebase-snapshot
npm install
```

---

## ⚙️ Usage

```bash
npx ts-node scripts/generate.ts
```

Output:

```
CODEBASE.md
```

---

## 🧩 Configuration

Edit the `SCAN_CONFIG`:

```ts
const SCAN_CONFIG = [
  { name: "Source", base: "src", recursive: true },
  { name: "Root Files", base: ".", includeFiles: ["README.md", "tsconfig.json"] },
  { name: "Scripts", base: "scripts", recursive: true },
];
```

---

## 🧠 Use Cases

* Feed full context into AI tools
* Understand unfamiliar repositories instantly
* Create auto-documentation
* Debug large projects faster
* Share architecture with teams

---

## 📄 Example Output

See: `CODEBASE.md`

---

## 🔥 Roadmap

* [ ] Dependency graph visualization
* [ ] Diff mode (compare snapshots)
* [ ] CLI packaging (`npx codebase-snapshot`)
* [ ] Ignore rules via config file
* [ ] AI summary generation

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

## 📜 License

[MIT License](/LICENSE)

---

## 👨‍💻 Author

Built by [Coderooz](https://www.coderooz.in/about)

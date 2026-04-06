# 🧠 CODEBASE CONTEXT

Generated: 2026-04-05T17:10:32.317Z

## 🔢 Project Stats

- Total files: 20
- Total lines: 3731

### 📦 File Types
- .md: 7
- .json: 3
- .js: 1
- .ts: 9

### 🗂 Categories
- Docs: 7
- Config: 3
- Other: 1
- Source: 9

## 🌳 Project Structure

```
  - CODEBASE.md
  - CODE_OF_CONDUCT.md
  - CONTRIBUTING.md
  - package-lock.json
  - package.json
  - README.md
  - SECURITY.md
  - tsconfig.json
  - bin/cli.js
  - docs/architecture.md
  - src/cli.ts
  - src/index.ts
  - src/types.ts
  - example/CODEBASE.md
  - src/core/analyzer.ts
  - src/core/generator.ts
  - src/core/scanner.ts
  - src/core/stats.ts
  - src/core/tree.ts
  - src/config/default.ts
```

## 🧾 File Index

- CODEBASE.md (1987 lines)
- CODE_OF_CONDUCT.md (129 lines)
- CONTRIBUTING.md (168 lines)
- package-lock.json (961 lines)
- package.json (37 lines)
- README.md (116 lines)
- SECURITY.md (22 lines)
- tsconfig.json (35 lines)
- bin/cli.js (2 lines)
- docs/architecture.md (1 lines)
- src/cli.ts (13 lines)
- src/index.ts (21 lines)
- src/types.ts (16 lines)
- example/CODEBASE.md (4 lines)
- src/core/analyzer.ts (47 lines)
- src/core/generator.ts (98 lines)
- src/core/scanner.ts (8 lines)
- src/core/stats.ts (26 lines)
- src/core/tree.ts (31 lines)
- src/config/default.ts (9 lines)

## 🔥 Largest Files

- CODEBASE.md (1987 lines)
- package-lock.json (961 lines)
- CODE_OF_CONDUCT.md (129 lines)
- CONTRIBUTING.md (168 lines)
- src/core/generator.ts (98 lines)
- README.md (116 lines)
- src/core/analyzer.ts (47 lines)
- package.json (37 lines)
- tsconfig.json (35 lines)
- src/index.ts (21 lines)

---

## 📄 Source Code

### 📁 CODEBASE.md

⚠️ Skipped (too large)

### 📁 CODE_OF_CONDUCT.md

```md
# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the
  overall community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or
  advances of any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email
  address, without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
contact@coderooz.in.
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series
of actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or
permanent ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior,  harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within
the community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.

Community Impact Guidelines were inspired by [Mozilla's code of conduct
enforcement ladder](https://github.com/mozilla/diversity).

[homepage]: https://www.contributor-covenant.org

For answers to common questions about this code of conduct, see the FAQ at
https://www.contributor-covenant.org/faq. Translations are available at
https://www.contributor-covenant.org/translations.
```

### 📁 CONTRIBUTING.md

```md
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
```

### 📁 package-lock.json

```json
{
  "name": "@coderooz/codebase-context",
  "version": "2.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "@coderooz/codebase-context",
      "version": "2.0.0",
      "license": "MIT",
      "dependencies": {
        "commander": "^14.0.3",
        "fast-glob": "^3.3.3",
        "inquirer": "^13.3.2"
      },
      "bin": {
        "codebase-context": "bin/cli.js"
      },
      "devDependencies": {
        "@types/inquirer": "^9.0.9",
        "@types/node": "^20.19.39",
        "ts-node": "^10.9.1",
        "typescript": "^5.9.3"
      }
    },
    "node_modules/@cspotcode/source-map-support": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
      "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "0.3.9"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@inquirer/ansi": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@inquirer/ansi/-/ansi-2.0.4.tgz",
      "integrity": "sha512-DpcZrQObd7S0R/U3bFdkcT5ebRwbTTC4D3tCc1vsJizmgPLxNJBo+AAFmrZwe8zk30P2QzgzGWZ3Q9uJwWuhIg==",
      "license": "MIT",
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      }
    },
    "node_modules/@inquirer/checkbox": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@inquirer/checkbox/-/checkbox-5.1.2.tgz",
      "integrity": "sha512-PubpMPO2nJgMufkoB3P2wwxNXEMUXnBIKi/ACzDUYfaoPuM7gSTmuxJeMscoLVEsR4qqrCMf5p0SiYGWnVJ8kw==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^2.0.4",
        "@inquirer/core": "^11.1.7",
        "@inquirer/figures": "^2.0.4",
        "@inquirer/type": "^4.0.4"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/confirm": {
      "version": "6.0.10",
      "resolved": "https://registry.npmjs.org/@inquirer/confirm/-/confirm-6.0.10.tgz",
      "integrity": "sha512-tiNyA73pgpQ0FQ7axqtoLUe4GDYjNCDcVsbgcA5anvwg2z6i+suEngLKKJrWKJolT//GFPZHwN30binDIHgSgQ==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^11.1.7",
        "@inquirer/type": "^4.0.4"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/core": {
      "version": "11.1.7",
      "resolved": "https://registry.npmjs.org/@inquirer/core/-/core-11.1.7.tgz",
      "integrity": "sha512-1BiBNDk9btIwYIzNZpkikIHXWeNzNncJePPqwDyVMhXhD1ebqbpn1mKGctpoqAbzywZfdG0O4tvmsGIcOevAPQ==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^2.0.4",
        "@inquirer/figures": "^2.0.4",
        "@inquirer/type": "^4.0.4",
        "cli-width": "^4.1.0",
        "fast-wrap-ansi": "^0.2.0",
        "mute-stream": "^3.0.0",
        "signal-exit": "^4.1.0"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/editor": {
      "version": "5.0.10",
      "resolved": "https://registry.npmjs.org/@inquirer/editor/-/editor-5.0.10.tgz",
      "integrity": "sha512-VJx4XyaKea7t8hEApTw5dxeIyMtWXre2OiyJcICCRZI4hkoHsMoCnl/KbUnJJExLbH9csLLHMVR144ZhFE1CwA==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^11.1.7",
        "@inquirer/external-editor": "^2.0.4",
        "@inquirer/type": "^4.0.4"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/expand": {
      "version": "5.0.10",
      "resolved": "https://registry.npmjs.org/@inquirer/expand/-/expand-5.0.10.tgz",
      "integrity": "sha512-fC0UHJPXsTRvY2fObiwuQYaAnHrp3aDqfwKUJSdfpgv18QUG054ezGbaRNStk/BKD5IPijeMKWej8VV8O5Q/eQ==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^11.1.7",
        "@inquirer/type": "^4.0.4"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/external-editor": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@inquirer/external-editor/-/external-editor-2.0.4.tgz",
      "integrity": "sha512-Prenuv9C1PHj2Itx0BcAOVBTonz02Hc2Nd2DbU67PdGUaqn0nPCnV34oDyyoaZHnmfRxkpuhh/u51ThkrO+RdA==",
      "license": "MIT",
      "dependencies": {
        "chardet": "^2.1.1",
        "iconv-lite": "^0.7.2"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/figures": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@inquirer/figures/-/figures-2.0.4.tgz",
      "integrity": "sha512-eLBsjlS7rPS3WEhmOmh1znQ5IsQrxWzxWDxO51e4urv+iVrSnIHbq4zqJIOiyNdYLa+BVjwOtdetcQx1lWPpiQ==",
      "license": "MIT",
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      }
    },
    "node_modules/@inquirer/input": {
      "version": "5.0.10",
      "resolved": "https://registry.npmjs.org/@inquirer/input/-/input-5.0.10.tgz",
      "integrity": "sha512-nvZ6qEVeX/zVtZ1dY2hTGDQpVGD3R7MYPLODPgKO8Y+RAqxkrP3i/3NwF3fZpLdaMiNuK0z2NaYIx9tPwiSegQ==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^11.1.7",
        "@inquirer/type": "^4.0.4"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/number": {
      "version": "4.0.10",
      "resolved": "https://registry.npmjs.org/@inquirer/number/-/number-4.0.10.tgz",
      "integrity": "sha512-Ht8OQstxiS3APMGjHV0aYAjRAysidWdwurWEo2i8yI5xbhOBWqizT0+MU1S2GCcuhIBg+3SgWVjEoXgfhY+XaA==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^11.1.7",
        "@inquirer/type": "^4.0.4"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/password": {
      "version": "5.0.10",
      "resolved": "https://registry.npmjs.org/@inquirer/password/-/password-5.0.10.tgz",
      "integrity": "sha512-QbNyvIE8q2GTqKLYSsA8ATG+eETo+m31DSR0+AU7x3d2FhaTWzqQek80dj3JGTo743kQc6mhBR0erMjYw5jQ0A==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^2.0.4",
        "@inquirer/core": "^11.1.7",
        "@inquirer/type": "^4.0.4"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/prompts": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/@inquirer/prompts/-/prompts-8.3.2.tgz",
      "integrity": "sha512-yFroiSj2iiBFlm59amdTvAcQFvWS6ph5oKESls/uqPBect7rTU2GbjyZO2DqxMGuIwVA8z0P4K6ViPcd/cp+0w==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/checkbox": "^5.1.2",
        "@inquirer/confirm": "^6.0.10",
        "@inquirer/editor": "^5.0.10",
        "@inquirer/expand": "^5.0.10",
        "@inquirer/input": "^5.0.10",
        "@inquirer/number": "^4.0.10",
        "@inquirer/password": "^5.0.10",
        "@inquirer/rawlist": "^5.2.6",
        "@inquirer/search": "^4.1.6",
        "@inquirer/select": "^5.1.2"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/rawlist": {
      "version": "5.2.6",
      "resolved": "https://registry.npmjs.org/@inquirer/rawlist/-/rawlist-5.2.6.tgz",
      "integrity": "sha512-jfw0MLJ5TilNsa9zlJ6nmRM0ZFVZhhTICt4/6CU2Dv1ndY7l3sqqo1gIYZyMMDw0LvE1u1nzJNisfHEhJIxq5w==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^11.1.7",
        "@inquirer/type": "^4.0.4"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/search": {
      "version": "4.1.6",
      "resolved": "https://registry.npmjs.org/@inquirer/search/-/search-4.1.6.tgz",
      "integrity": "sha512-3/6kTRae98hhDevENScy7cdFEuURnSpM3JbBNg8yfXLw88HgTOl+neUuy/l9W0No5NzGsLVydhBzTIxZP7yChQ==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/core": "^11.1.7",
        "@inquirer/figures": "^2.0.4",
        "@inquirer/type": "^4.0.4"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/select": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@inquirer/select/-/select-5.1.2.tgz",
      "integrity": "sha512-kTK8YIkHV+f02y7bWCh7E0u2/11lul5WepVTclr3UMBtBr05PgcZNWfMa7FY57ihpQFQH/spLMHTcr0rXy50tA==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^2.0.4",
        "@inquirer/core": "^11.1.7",
        "@inquirer/figures": "^2.0.4",
        "@inquirer/type": "^4.0.4"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@inquirer/type": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/@inquirer/type/-/type-4.0.4.tgz",
      "integrity": "sha512-PamArxO3cFJZoOzspzo6cxVlLeIftyBsZw/S9bKY5DzxqJVZgjoj1oP8d0rskKtp7sZxBycsoer1g6UeJV1BBA==",
      "license": "MIT",
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",
      "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@tsconfig/node10": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.12.tgz",
      "integrity": "sha512-UCYBaeFvM11aU2y3YPZ//O5Rhj+xKyzy7mvcIoAjASbigy8mHMryP5cK7dgjlz2hWxh1g5pLw084E0a/wlUSFQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node12": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz",
      "integrity": "sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node14": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz",
      "integrity": "sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node16": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz",
      "integrity": "sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/inquirer": {
      "version": "9.0.9",
      "resolved": "https://registry.npmjs.org/@types/inquirer/-/inquirer-9.0.9.tgz",
      "integrity": "sha512-/mWx5136gts2Z2e5izdoRCo46lPp5TMs9R15GTSsgg/XnZyxDWVqoVU3R9lWnccKpqwsJLvRoxbCjoJtZB7DSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/through": "*",
        "rxjs": "^7.2.0"
      }
    },
    "node_modules/@types/node": {
      "version": "20.19.39",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.39.tgz",
      "integrity": "sha512-orrrD74MBUyK8jOAD/r0+lfa1I2MO6I+vAkmAWzMYbCcgrN4lCrmK52gRFQq/JRxfYPfonkr4b0jcY7Olqdqbw==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/through": {
      "version": "0.0.33",
      "resolved": "https://registry.npmjs.org/@types/through/-/through-0.0.33.tgz",
      "integrity": "sha512-HsJ+z3QuETzP3cswwtzt2vEIiHBk/dCcHGhbmG5X3ecnwFD/lPrMpliGXxSCg03L9AhrdwA4Oz/qfspkDW+xGQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/acorn": {
      "version": "8.16.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.16.0.tgz",
      "integrity": "sha512-UVJyE9MttOsBQIDKw1skb9nAwQuR5wuGD3+82K6JgJlm/Y+KI92oNsMNGZCYdDsVtRHSak0pcV5Dno5+4jh9sw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "8.3.5",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.5.tgz",
      "integrity": "sha512-HEHNfbars9v4pgpW6SO1KSPkfoS0xVOM/9UzkJltjlsHZmJasxg8aXkuZa7SMf8vKGIBhpUsPluQSqhJFCqebw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.11.0"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/arg": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
      "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/chardet": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/chardet/-/chardet-2.1.1.tgz",
      "integrity": "sha512-PsezH1rqdV9VvyNhxxOW32/d75r01NY7TQCmOqomRo15ZSOKbpTFVsfjghxo6JloQUCGnH4k1LGu0R4yCLlWQQ==",
      "license": "MIT"
    },
    "node_modules/cli-width": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-4.1.0.tgz",
      "integrity": "sha512-ouuZd4/dm2Sw5Gmqy6bGyNNNe1qt9RpmxveLSO7KcgsTnU7RXfsw+/bukWGo1abgBiMAic068rclZsO4IWmmxQ==",
      "license": "ISC",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/commander": {
      "version": "14.0.3",
      "resolved": "https://registry.npmjs.org/commander/-/commander-14.0.3.tgz",
      "integrity": "sha512-H+y0Jo/T1RZ9qPP4Eh1pkcQcLRglraJaSLoyOtHxu6AapkjWVCy2Sit1QQ4x3Dng8qDlSsZEet7g5Pq06MvTgw==",
      "license": "MIT",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/create-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
      "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/diff": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.4.tgz",
      "integrity": "sha512-X07nttJQkwkfKfvTPG/KSnE2OMdcUCao6+eXF3wmnIQRn2aPAHH3VxDbDOdegkd6JbPsXqShpvEOHfAT+nCNwQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-string-truncated-width": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/fast-string-truncated-width/-/fast-string-truncated-width-3.0.3.tgz",
      "integrity": "sha512-0jjjIEL6+0jag3l2XWWizO64/aZVtpiGE3t0Zgqxv0DPuxiMjvB3M24fCyhZUO4KomJQPj3LTSUnDP3GpdwC0g==",
      "license": "MIT"
    },
    "node_modules/fast-string-width": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/fast-string-width/-/fast-string-width-3.0.2.tgz",
      "integrity": "sha512-gX8LrtNEI5hq8DVUfRQMbr5lpaS4nMIWV+7XEbXk2b8kiQIizgnlr12B4dA3ZEx3308ze0O4Q1R+cHts8kyUJg==",
      "license": "MIT",
      "dependencies": {
        "fast-string-truncated-width": "^3.0.2"
      }
    },
    "node_modules/fast-wrap-ansi": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/fast-wrap-ansi/-/fast-wrap-ansi-0.2.0.tgz",
      "integrity": "sha512-rLV8JHxTyhVmFYhBJuMujcrHqOT2cnO5Zxj37qROj23CP39GXubJRBUFF0z8KFK77Uc0SukZUf7JZhsVEQ6n8w==",
      "license": "MIT",
      "dependencies": {
        "fast-string-width": "^3.0.2"
      }
    },
    "node_modules/fastq": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
      "integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.2.tgz",
      "integrity": "sha512-im9DjEDQ55s9fL4EYzOAv0yMqmMBSZp6G0VvFyTMPKWxiSBHUj9NW/qqLmXUwXrrM7AvqSlTCfvqRb0cM8yYqw==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/inquirer": {
      "version": "13.3.2",
      "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-13.3.2.tgz",
      "integrity": "sha512-bh/OjBGxNR9qvfQj1n5bxtIF58mbOTp2InN5dKuwUK03dXcDGFsjlDinQRuXMZ4EGiJaFieUWHCAaxH2p7iUBw==",
      "license": "MIT",
      "dependencies": {
        "@inquirer/ansi": "^2.0.4",
        "@inquirer/core": "^11.1.7",
        "@inquirer/prompts": "^8.3.2",
        "@inquirer/type": "^4.0.4",
        "mute-stream": "^3.0.0",
        "run-async": "^4.0.6",
        "rxjs": "^7.8.2"
      },
      "engines": {
        "node": ">=23.5.0 || ^22.13.0 || ^21.7.0 || ^20.12.0"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/make-error": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
      "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/mute-stream": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-3.0.0.tgz",
      "integrity": "sha512-dkEJPVvun4FryqBmZ5KhDo0K9iDXAwn08tMLDinNdRBNPcYEDiWYysLcc6k3mjTMlbP9KyylvRpd4wFtwrT9rw==",
      "license": "ISC",
      "engines": {
        "node": "^20.17.0 || >=22.9.0"
      }
    },
    "node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/run-async": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/run-async/-/run-async-4.0.6.tgz",
      "integrity": "sha512-IoDlSLTs3Yq593mb3ZoKWKXMNu3UpObxhgA/Xuid5p4bbfi2jdY1Hj0m1K+0/tEuQTxIGMhQDqGjKb7RuxGpAQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/rxjs": {
      "version": "7.8.2",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.8.2.tgz",
      "integrity": "sha512-dhKf903U/PQZY6boNNtAGdWbG85WAbjT/1xYoZIC7FAY0yWapOBQVsVrDl58W86//e1VpMNBtRV4MaXfdMySFA==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.1.0"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/ts-node": {
      "version": "10.9.2",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz",
      "integrity": "sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@cspotcode/source-map-support": "^0.8.0",
        "@tsconfig/node10": "^1.0.7",
        "@tsconfig/node12": "^1.0.7",
        "@tsconfig/node14": "^1.0.0",
        "@tsconfig/node16": "^1.0.2",
        "acorn": "^8.4.1",
        "acorn-walk": "^8.1.1",
        "arg": "^4.1.0",
        "create-require": "^1.1.0",
        "diff": "^4.0.1",
        "make-error": "^1.1.1",
        "v8-compile-cache-lib": "^3.0.1",
        "yn": "3.1.1"
      },
      "bin": {
        "ts-node": "dist/bin.js",
        "ts-node-cwd": "dist/bin-cwd.js",
        "ts-node-esm": "dist/bin-esm.js",
        "ts-node-script": "dist/bin-script.js",
        "ts-node-transpile-only": "dist/bin-transpile.js",
        "ts-script": "dist/bin-script-deprecated.js"
      },
      "peerDependencies": {
        "@swc/core": ">=1.2.50",
        "@swc/wasm": ">=1.2.50",
        "@types/node": "*",
        "typescript": ">=2.7"
      },
      "peerDependenciesMeta": {
        "@swc/core": {
          "optional": true
        },
        "@swc/wasm": {
          "optional": true
        }
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/v8-compile-cache-lib": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",
      "integrity": "sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/yn": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
      "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    }
  }
}
```

### 📁 package.json

```json
{
  "name": "@coderooz/codebase-context",
  "version": "2.0.0",
  "description": "Generate compiled Markdown snapshots of your codebase",
  "type": "module",
  "bin": {
    "codebase-context": "./bin/cli.js"
  },
  "files": [
    "dist",
    "bin"
  ],
  "scripts": {
    "build": "tsc"
  },
  "keywords": [
    "codebase",
    "documentation",
    "ai",
    "markdown",
    "developer-tools"
  ],
  "author": "Coderooz",
  "license": "MIT",
  "dependencies": {
    "commander": "^14.0.3",
    "fast-glob": "^3.3.3",
    "inquirer": "^13.3.2"
  },
  "devDependencies": {
    "@types/inquirer": "^9.0.9",
    "@types/node": "^20.19.39",
    "ts-node": "^10.9.1",
    "typescript": "^5.9.3"
  }
}
```

### 📁 README.md

```md
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
```

### 📁 SECURITY.md

```md
# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

## Reporting a Vulnerability

Use this section to tell people how to report a vulnerability.

Tell them where to go, how often they can expect to get an update on a
reported vulnerability, what to expect if the vulnerability is accepted or
declined, etc.
```

### 📁 tsconfig.json

```json
{
  "compilerOptions": {
    /* Output */
    "outDir": "dist",
    "rootDir": "src",

    /* Language */
    "target": "ES2022",
    "lib": ["ES2022"],

    /* Module System (CRITICAL) */
    "module": "NodeNext",
    "moduleResolution": "NodeNext",

    /* Interop */
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,

    /* Strictness */
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,

    /* Node */
    "types": ["node"],

    /* Source Maps (useful for debugging CLI) */
    "sourceMap": true,

    /* Build Behavior */
    "noEmitOnError": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

### 📁 bin/cli.js

```js
#!/usr/bin/env node
import("../dist/cli.js");
```

### 📁 docs/architecture.md

⚠️ Skipped (too large)

### 📁 src/cli.ts

```ts
import { Command } from "commander";
import { run } from "./index.js";

const program = new Command();

program
  .name("codebase-context")
  .description("Generate structured codebase context")
  .action(async () => {
    await run();
  });

program.parse();
```

### 📁 src/index.ts

```ts
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
```

### 📁 src/types.ts

```ts
export interface FileMeta {
  path: string;
  size: number;
  lines: number;
  ext: string;
  category: string;
  content?: string;
}

export interface Config {
  include: string[];
  ignore: string[];
  maxFileSizeKB: number;
  embedSource: boolean;
  priority: string[];
}
```

### 📁 example/CODEBASE.md

```md
## Example File

> This file is what the `generate.ts` file will generate and store the codebase that can be added/used as context for ai agents.
```

### 📁 src/core/analyzer.ts

```ts
import fs from "fs/promises";
import path from "path";
import { FileMeta, Config } from "../types.js";

function categorize(file: string): string {
  if (file.startsWith("src/")) return "Source";
  if (file.startsWith("public/")) return "Assets";
  if (file.startsWith("scripts/")) return "Scripts";
  if (file.startsWith("data/")) return "Data";

  if (file.endsWith(".md")) return "Docs";
  if (file.includes("config") || file.endsWith(".json")) return "Config";

  return "Other";
}


export async function analyzeFiles(
  files: string[],
  config: Config
): Promise<FileMeta[]> {
  const results: FileMeta[] = [];

  for (const file of files) {
    const stat = await fs.stat(file);
    const content = await fs.readFile(file, "utf-8");

    const ext = path.extname(file);
    const lines = content.split("\n").length;

    const sizeKB = stat.size / 1024;

    results.push({
      path: file,
      size: stat.size,
      lines,
      ext,
      category: categorize(file),
      content:
        config.embedSource && sizeKB <= config.maxFileSizeKB
          ? content
          : undefined
    });
  }

  return results;
}
```

### 📁 src/core/generator.ts

```ts
import { TreeNode } from "./tree.js";
import { FileMeta } from "../types.js";
import { computeStats } from "./stats.js";

function getLanguage(ext: string) {
  return ext.replace(".", "") || "";
}

export function generateMarkdown(
  tree: TreeNode,
  files: FileMeta[]
): string {
  const stats = computeStats(files);

  let output = `# 🧠 CODEBASE CONTEXT\n\n`;
  output += `Generated: ${new Date().toISOString()}\n\n`;

  /* =========================
     📊 STATS
  ========================= */

  output += `## 🔢 Project Stats\n\n`;
  output += `- Total files: ${stats.totalFiles}\n`;
  output += `- Total lines: ${stats.totalLines}\n\n`;

  output += `### 📦 File Types\n`;
  for (const [ext, count] of Object.entries(stats.fileTypes)) {
    output += `- ${ext}: ${count}\n`;
  }

  output += `\n### 🗂 Categories\n`;
  for (const [cat, count] of Object.entries(stats.categories)) {
    output += `- ${cat}: ${count}\n`;
  }

  /* =========================
     🌳 TREE
  ========================= */

  function renderTree(node: TreeNode, depth = 0): string {
    let output = "";
    const indent = "  ".repeat(depth);

    if (node.name !== "root") {
      output += `${indent}- ${node.name}\n`;
    }

    if (node.children) {
      for (const child of Object.values(node.children)) {
        output += renderTree(child, depth + 1);
      }
    }

    return output;
  }

  output += `\n## 🌳 Project Structure\n\n`;
  output += "```\n" + renderTree(tree) + "```\n";

  /* =========================
     📄 INDEX
  ========================= */

  output += `\n## 🧾 File Index\n\n`;
  for (const f of files) {
    output += `- ${f.path} (${f.lines} lines)\n`;
  }

  /* =========================
     🔥 LARGEST FILES
  ========================= */

  output += `\n## 🔥 Largest Files\n\n`;
  for (const f of stats.largestFiles) {
    output += `- ${f.path} (${f.lines} lines)\n`;
  }

  /* =========================
     📄 SOURCE
  ========================= */

  output += `\n---\n\n## 📄 Source Code\n\n`;

  for (const f of files) {
    output += `### 📁 ${f.path}\n\n`;

    if (!f.content) {
      output += `⚠️ Skipped (too large)\n\n`;
      continue;
    }

    output += "```" + getLanguage(f.ext) + "\n";
    output += f.content.trim() + "\n";
    output += "```\n\n";
  }

  return output;
}
```

### 📁 src/core/scanner.ts

```ts
import fg from "fast-glob";

export async function scanFiles(include: string[], ignore: string[]) {
  return await fg(include, {
    ignore,
    dot: false
  });
}
```

### 📁 src/core/stats.ts

```ts
import { FileMeta } from "../types.js";

export function computeStats(files: FileMeta[]) {
  const totalFiles = files.length;
  const totalLines = files.reduce((sum, f) => sum + f.lines, 0);

  const fileTypes: Record<string, number> = {};
  const categories: Record<string, number> = {};

  for (const f of files) {
    fileTypes[f.ext] = (fileTypes[f.ext] || 0) + 1;
    categories[f.category] = (categories[f.category] || 0) + 1;
  }

  const largestFiles = [...files]
    .sort((a, b) => b.size - a.size)
    .slice(0, 10);

  return {
    totalFiles,
    totalLines,
    fileTypes,
    categories,
    largestFiles
  };
}
```

### 📁 src/core/tree.ts

```ts
import path from "path";
import { FileMeta } from "../types.js";

export interface TreeNode {
  name: string;
  children?: Record<string, TreeNode>;
  file?: FileMeta;
}

export function buildTree(files: FileMeta[]): TreeNode {
  const root: TreeNode = { name: "root", children: {} };

  for (const file of files) {
    const parts = file.path.split(path.sep);
    let current = root;

    for (const part of parts) {
      current.children ||= {};

      if (!current.children[part]) {
        current.children[part] = { name: part };
      }

      current = current.children[part];
    }

    current.file = file;
  }

  return root;
}
```

### 📁 src/config/default.ts

```ts
import { Config } from "../types.js";

export const defaultConfig: Config = {
  include: ["**/*.ts", "**/*.js", "**/*.json", "**/*.md"],
  ignore: ["node_modules/**", "dist/**"],
  maxFileSizeKB: 50,
  embedSource: true,
  priority: ["package.json", "README.md"]
};
```


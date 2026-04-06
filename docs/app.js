const SECTIONS = [
  "overview",
  "quickstart",
  "usage",
  "output",
  "architecture",
  "configuration",
  "roadmap"
];

const SITE = {
  title: "Codebase Context",
  tagline: "Generate structured, AI-ready snapshots of your codebase",

  sections: {
    overview: {
      title: "Overview",
      body: `
Codebase Context is a CLI tool that scans your entire project and generates a structured Markdown representation.

It is designed for:

- AI context feeding
- Codebase understanding
- Documentation generation
`
    },

    quickstart: {
      title: "Quick Start",
      body: `
Run directly:

\`\`\`bash
npx @coderooz/codebase-context
\`\`\`

This generates:

\`\`\`
CODEBASE.md
\`\`\`
`
    },

    usage: {
      title: "Usage",
      body: `
Global install:

\`\`\`bash
npm install -g @coderooz/codebase-context
\`\`\`

Run:

\`\`\`bash
codebase-context
\`\`\`
`
    },

    output: {
      title: "Output Structure",
      body: `
The generated file includes:

- Project stats
- File type breakdown
- Categories
- File index
- Largest files
- Full source code

Designed for AI ingestion.
`
    },

    architecture: {
      title: "Architecture",
      body: `
Pipeline:

scanner → analyzer → tree → generator

Modules:

- scanner → file discovery
- analyzer → metadata extraction
- tree → hierarchy
- generator → markdown output
`
    },

    configuration: {
      title: "Configuration",
      body: `
Default config:

- include patterns
- ignore patterns
- max file size
- source embedding

Future:

\`codebase.config.json\`
`
    },

    roadmap: {
      title: "Roadmap",
      body: `
- AST parsing
- Plugin system
- Dependency graph
- AI summaries
`
    }
  }
};

function render() {
  document.getElementById("hero").innerHTML = `
    <h2>${SITE.title}</h2>
    <p>${SITE.tagline}</p>
  `;

  document.getElementById("sidebar").innerHTML =
    SECTIONS.map(id => `<a href="#${id}">${SITE.sections[id].title}</a>`).join("");

  document.getElementById("content").innerHTML =
    SECTIONS.map(id => `
      <section id="${id}">
        <h2>${SITE.sections[id].title}</h2>
        <pre>${SITE.sections[id].body}</pre>
      </section>
    `).join("");
}

render();
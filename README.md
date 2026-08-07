# Nanxi Chen — Personal Homepage

An academic personal homepage built with [Astro](https://astro.build/). The page is static, fast, and deployed automatically to GitHub Pages through GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Astro, usually <http://localhost:4321>.

Create a production build locally with:

```bash
npm run check
npm run build
npm run preview
```

## Add a publication with Markdown

Create a new file under [`src/content/publications/`](src/content/publications/), for example `my-new-paper.md`:

```markdown
---
year: 2026
category: scientific-ml
type: Journal article
title: "The title of my paper"
authors: "N. Chen, A. Collaborator"
venue: "Journal Name · 12 · 345"
citations: 0
paperUrl: "https://doi.org/..."
scholarUrl: "https://scholar.google.com/..."
codeUrl: "https://github.com/NanxiiChen/my-paper-code"
codeLabel: "my-paper-code"
---

A short description of the work. You can use normal Markdown here, including
[links](https://example.com), lists, and emphasis.
```

The file will automatically become a publication card after restarting the dev server or rebuilding. `codeUrl` is optional; only add it when the repository corresponds to that specific paper.

All publication abstracts are stored in the Markdown bodies and shown under **Abstract**.

Supported categories are:

- `scientific-ml`
- `wind`
- `software`

## Update profile information

Edit [`src/data/profile.ts`](src/data/profile.ts) to update:

- email address
- ResearchGate URL
- education timeline
- Google Scholar, GitHub, and ORCID links
- research areas

The ResearchGate field remains intentionally blank until the exact public profile URL is supplied.

## Deploy to GitHub Pages

1. Create or use the repository `NanxiiChen/nanxi-homepage`.
2. Push the project to the `main` branch.
3. In **Settings → Pages**, choose **GitHub Actions** as the source if GitHub asks for a source.
4. Every push to `main` runs `.github/workflows/deploy.yml`, builds Astro, and deploys `dist/`.

For a project repository named `nanxi-homepage`, the expected URL is:

```text
https://nanxiichen.github.io/nanxi-homepage/
```

The project-site base path is configured in [`astro.config.mjs`](astro.config.mjs). If the repository name changes, update `base` there.

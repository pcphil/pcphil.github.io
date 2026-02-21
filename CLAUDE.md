# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn          # Install dependencies
yarn start    # Start local dev server (hot reload)
yarn build    # Build static site to ./build
yarn typecheck # Run TypeScript type checking
yarn clear    # Clear Docusaurus cache
yarn serve    # Serve the built site locally
```

No test suite is configured for this project.

## Architecture

This is a **Docusaurus 3.9** static site (Philip Chung's personal blog/goodreads site) deployed to GitHub Pages at `pcphil.github.io`.

**Deployment:** Pushes to `main` automatically trigger CI via `.github/workflows/deploy.yml`, which builds and deploys to the `gh-pages` branch.

**Key config:** `docusaurus.config.ts` controls site metadata, navbar, footer, and plugin options. The `v4: true` future flag is enabled for Docusaurus v4 compatibility.

**Content structure:**
- `blog/` — Blog posts (Markdown/MDX). Authors defined in `blog/authors.yml`, tags in `blog/tags.yml`. Posts use frontmatter with `slug`, `title`, `authors`, and `tags`. Use `<!-- truncate -->` to set the preview cutoff.
- `docs/` — Documentation pages. Sidebar is auto-generated from the filesystem via `sidebars.ts`.
- `src/pages/` — Custom React pages (e.g., `index.tsx` for the homepage).
- `src/components/` — Shared React components.
- `static/` — Static assets copied as-is to `build/`.

**Author:** The site author is `Philip` (Philip Chung) defined in `blog/authors.yml`. Use `authors: [Philip]` in blog post frontmatter.

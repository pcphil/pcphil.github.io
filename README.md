# pcphil.github.io

Philip Chung's personal portfolio and blog, built with [Docusaurus 3](https://docusaurus.io/).

Live at **[pcphil.github.io](https://pcphil.github.io)**

## Features

- Scroll-animated portfolio sections (About, Experience, Projects)
- Blog with RSS/Atom feeds
- Light/dark mode (follows system preference)
- Responsive design

## Development

```bash
yarn          # Install dependencies
yarn start    # Start local dev server with hot reload
yarn build    # Build static site to ./build
yarn serve    # Serve the built site locally
yarn typecheck # Run TypeScript type checking
```

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via the CI workflow in `.github/workflows/deploy.yml`.

## Project Structure

```
blog/           Blog posts (Markdown/MDX)
src/
  components/   React components (HeroSection, AboutSection, etc.)
  css/          Global styles
  pages/        Custom pages (homepage)
static/         Static assets (favicon, logo)
```

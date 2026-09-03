# John Albert Presentacion — Portfolio

A responsive portfolio for John Albert Presentacion, Senior Solutions Architect and Senior Java Backend Engineer. It presents selected case studies, enterprise experience, technical capabilities, and contact information.

## Stack

- React 19 and TypeScript
- Vite 8
- styled-components for theme state and global theme tokens
- Vitest and Testing Library
- GitHub Pages deployment

## Local development

Requirements: Node.js 22+ and npm 11+.

```bash
npm ci
npm run dev
```

The development server prints its local URL when it starts.

## Quality checks

```bash
npm run verify
```

This runs ESLint, the test suite, TypeScript checking, and a production build. Pull requests and pushes to `master` run the same checks through GitHub Actions.

## Editing portfolio content

- Career history, skills, and case studies: `src/data/portfolio.ts`
- Page composition and contact links: `src/components/LandingPage.tsx`
- Case-study presentation: `src/components/CaseStudyCard.tsx`
- Theme behavior: `src/components/DarkModeToggle.tsx`
- Visual system and responsive layout: `src/styles/MainPage.css`
- Search and social metadata: `index.html`

Images displayed by the site live in `src/assets/optimized`. Keep new images compressed and include explicit dimensions in rendered markup to avoid layout shift.

## Production build and deployment

```bash
npm run build
npm run deploy
```

Vite writes the production site to `dist`. The deploy command verifies the project first and publishes `dist` to the `gh-pages` branch. The configured base path is `/Portfolio_Frontend/`.

Live site: [jatpresentacion97.github.io/Portfolio_Frontend](https://jatpresentacion97.github.io/Portfolio_Frontend/)

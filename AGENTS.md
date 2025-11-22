# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router lives in `src/app`; each route folder contains a `page.tsx` (e.g., `src/app/reading/page.tsx`, `src/app/report/page.tsx`, `src/app/profile/page.tsx`) and uses the shared `layout.tsx`.
- UI building blocks are in `src/app/components` (currently `Nav.tsx`); global styles sit in `src/app/globals.css`, with page-specific styles in `.module.css` files.
- Static assets reside in `public/`. TypeScript and Next config files at the repo root (`tsconfig.json`, `next.config.ts`, `eslint.config.mjs`). The `@/*` path alias resolves to `src/*`.

## Build, Test, and Development Commands
- `npm install` — install dependencies (Node 18+ recommended).
- `npm run dev` — start the local dev server at `http://localhost:3000` (add `-- --port 3001` to change ports).
- `npm run build` — production build and type-check; run before shipping.
- `npm run start` — serve the built app locally.
- `npm run lint` — ESLint with `eslint-config-next` (core-web-vitals + TypeScript).

## Coding Style & Naming Conventions
- Use TypeScript, functional React components, and keep route files as default exports. Prefer explicit prop types over `any`.
- Components and files under `src/app/components` use `PascalCase` (`Nav.tsx`); route folders stay lowercase (`reading`, `report`, etc.). Import local code via `@/…`.
- CSS Modules (`*.module.css`) for page-scoped styles; `globals.css` for shared tokens/layout. Maintain 2-space indentation and align with ESLint output.

## Testing Guidelines
- No automated test suite is present. Before opening a PR, at minimum run `npm run lint` and `npm run build`, then spot-check affected pages in the browser.
- If you introduce logic beyond static content, add lightweight tests under `src/app/__tests__` using your preferred React Testing Library setup and keep fixtures close to the feature.

## Commit & Pull Request Guidelines
- Write imperative, concise commit subjects (e.g., `Add reading report chart`) and group related changes into a single commit when practical. Reference issues with `#id` when available.
- PRs should include: a brief summary of changes, screenshots/GIFs for UI tweaks, notes on data or copy updates, and a checklist of commands you ran (lint/build). Mention any known gaps or follow-ups.

## Security & Configuration Tips
- The prototype is static; avoid embedding secrets or real user data. If you add environment variables, use `.env.local` (gitignored) and document required keys in the README.
- Keep assets lightweight and place them in `public/`; verify external links or embeds before merging.***

# Repository Guidelines

## Project Structure & Module Organization
- `src/app` — Next.js App Router. Server components live in `page.tsx` files, API handlers in `api/**/route.ts`, and shared layout/metadata in `layout.tsx`.
- `src/core` — domain entities and repository contracts. Avoid framework imports here to keep the layer pure.
- `src/application` — use cases plus factories that wire repositories and infrastructure.
- `src/infrastructure` — Axios clients, HTTP repository implementations, and temporary mock data backing the REST API.
- `src/presentation` — React UI composed by App Router pages. Reuse these components to keep server code slim.

## Build, Test, and Development Commands
- `npm run dev` — start the development server with Turbopack at `http://localhost:3000`.
- `npm run build` — produce the production bundle (`.next/`).
- `npm run start` — serve the compiled build; run after `npm run build`.
- `npm run lint` — execute ESLint checks (TypeScript + Next.js rules).

## Coding Style & Naming Conventions
- TypeScript (`.ts`/`.tsx`) only; keep React components functional.
- Use PascalCase for React components (`CompanyOverview`), camelCase for helpers (`resolveApiBaseUrl`), and SCREAMING_CASE for constants (`DEFAULT_API_PATH`).
- Tailwind CSS drives styling; prefer utility classes over inline styles.
- Run `npm run lint` before pushing. Configure your editor to use the repository TypeScript and ESLint settings.

## Testing Guidelines
- No formal test suite exists yet. When adding tests, colocate Playwright or Jest specs under `src/__tests__` or alongside features (e.g., `CompanyOverview.test.tsx`).
- Name test files with the `.test.ts[x]` suffix and prefer descriptive test titles that state behaviour.
- Ensure new commands are documented in `README.md` if a testing stack is added.

## Commit & Pull Request Guidelines
- Use concise, imperative commit messages (e.g., `Add product detail SEO hook`). Group related changes per commit.
- Pull requests should include: a summary of changes, affected routes or components, test results (paste command output), and screenshots for UX updates.
- Reference Jira/Trello tickets or GitHub issues in the PR description using `Closes #123` when applicable.

## Architecture Overview
- The project follows a Clean Architecture approach: UI → use cases → repositories → infrastructure.
- When integrating real APIs, replace mock data by implementing repositories under `src/infrastructure/repositories` and updating factory wiring only. Avoid importing infrastructure code directly into presentation or core layers.

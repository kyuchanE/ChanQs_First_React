# Repository Guidelines

## Architecture Direction
- BFF uses Clean Architecture: `core` → `application` → `infrastructure` → `presentation`.
- Frontend is DTO-first: UI consumes only BFF DTOs, not Domain entities.
- External REST API is accessed through `infrastructure` repositories with Remote DTOs and validators.

## Project Structure & Module Organization
- `src/app` — Next.js App Router. Server components live in `page.tsx`, and BFF handlers live in `api/**/route.ts`.
- `src/app/api/v1` — BFF HTTP endpoints (versioned). Keep handlers thin; delegate to use cases.
- `src/core/entities` — domain entities (no framework imports).
- `src/core/repositories` — repository contracts (interfaces).
- `src/core/errors` — domain error models.
- `src/application/use-cases` — business use cases. Pure orchestration of domain rules.
- `src/application/factories` — wiring for repositories/use-cases.
- `src/infrastructure/http/clients` — Axios/fetch clients for external REST APIs.
- `src/infrastructure/http/axiosClient.ts` — external API 전용 Axios client (BFF 호출 금지).
- `src/infrastructure/dtos/remote` — Remote DTOs matching external API schemas.
- `src/infrastructure/validators` — input/response validation (zod, etc.).
- `src/infrastructure/mappers` — Remote DTO → Domain mapping.
- `src/infrastructure/repositories` — concrete repository implementations calling external APIs.
- `src/presentation/dtos/bff` — BFF → Front DTOs (view contracts).
- `src/presentation/mappers` — Domain → BFF DTO mapping.
- `src/presentation/components` — shared UI components.

## Data Flow Rules
- External API → Remote DTO → Validation → Domain → Use Case → BFF DTO → Frontend.
- UI layer never imports from `core` or `infrastructure`.
- BFF endpoints never return Domain entities directly.

## Security & Reliability Requirements
- Validate all external API responses before mapping (schema validation required).
- Normalize and standardize errors to a single BFF Error DTO.
- Enforce request timeouts, retries, and rate limits at the BFF boundary.
- Never pass secrets/tokens to the frontend; store them server-side only.
- Sanitize user input for BFF endpoints; block SSRF/URL injection.
- Use explicit allowlists for upstream hosts and HTTP methods.
- Log correlation IDs and redact PII in logs.

## Build, Test, and Development Commands
- `npm run dev` — start the development server with Turbopack at `http://localhost:3000`.
- `npm run build` — produce the production bundle (`.next/`).
- `npm run start` — serve the compiled build; run after `npm run build`.
- `npm run lint` — execute ESLint checks (TypeScript + Next.js rules).

## Coding Style & Naming Conventions
- TypeScript (`.ts`/`.tsx`) only; keep React components functional.
- Use PascalCase for React components (`CompanyOverview`), camelCase for helpers (`resolveApiBaseUrl`), and SCREAMING_CASE for constants (`DEFAULT_API_PATH`).
- Tailwind CSS drives styling; prefer utility classes over inline styles.
- State management split: React Query for server state, Zustand for client state.
- Run `npm run lint` before pushing.

## Testing Guidelines
- No formal test suite exists yet. When adding tests, colocate specs under `src/__tests__` or alongside features.
- Name test files with the `.test.ts[x]` suffix and prefer descriptive test titles.
- Ensure new commands are documented in `README.md` if a testing stack is added.

## Commit & Pull Request Guidelines
- Use concise, imperative commit messages (e.g., `Add product detail SEO hook`).
- Pull requests should include: summary, affected routes/components, test results, and screenshots for UX updates.
- Reference tickets/issues in the PR description using `Closes #123` when applicable.

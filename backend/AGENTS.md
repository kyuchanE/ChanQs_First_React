# Repository Guidelines

## Goal
- Node + Express 기반 REST API 서버 구축
- PostgreSQL 연동
- Docker 컨테이너 배포
- Clean Architecture 구조 사용
- 서비스 소개 데이터 제공 API 및 관리자(백오피스) API 구축

## Project Structure & Module Organization
- Core TypeScript source lives in `src/`, organized with a clean architecture split:
  - `src/config` for environment and app-wide configuration.
  - `src/application` for use cases; orchestrates domain behaviour.
  - `src/domain` for entities and repository contracts.
  - `src/infrastructure/http` for Express adapters (controllers, routes, middleware).
  - `src/server.ts` bootstraps the HTTP server; `src/app.ts` wires middleware and routes.
- Compile output is emitted to `dist/` via the TypeScript build.
- Create new tests under `tests/` mirroring the module layout.

## Directory Responsibilities
- `src/config`: environment variables and app-wide configuration.
- `src/application`: use cases and application orchestration logic.
- `src/domain`: entities and repository contracts.
- `src/infrastructure/http`: Express adapters (controllers, routes, middleware).
- `src/app.ts`: middleware and routing composition.
- `src/server.ts`: HTTP server bootstrap.
- `dist`: compiled output.
- `tests`: test suite (to be added).

## Build, Test, and Development Commands
- `npm run dev` — start the Express server in watch mode through `tsx src/server.ts`.
- `npm run build` — compile TypeScript to ESM JavaScript in `dist/` using `tsc`.
- `npm start` — run the compiled server from `dist/server.js`.
- `npm test` — currently a placeholder; replace with the project’s real test runner when available.

## Coding Style & Naming Conventions
- Language: TypeScript with strict compiler settings (`strict`, `noUncheckedIndexedAccess`, `isolatedModules`).
- Modules must use explicit `.js` extensions in relative imports (ESM + `module: nodenext`).
- Prefer PascalCase for classes/types, camelCase for functions and variables, and kebab-case for file names.
- Use 2-space indentation and keep functions focused; extract new use cases into `src/application/use-cases`.
- Add comments only where logic is non-obvious; follow existing concise tone.

## Testing Guidelines
- Adopt a Node-friendly test runner such as Vitest or Jest; place specs under `tests/` following `<feature>.spec.ts`.
- Ensure health checks and critical use cases have coverage before merging.
- Run the full suite locally and include output when relevant in pull requests.

## Commit & Pull Request Guidelines
- Write commits in the imperative mood (e.g., `Add health check use case`); keep scope narrow.
- Pull requests should explain the change set, reference related issues, and note testing performed.
- Include API contract updates, configuration requirements, and screenshots or curl responses for new endpoints when useful.

## Security & Configuration Tips
- Environment variables are validated via `src/config/env.ts`; update the Zod schema whenever new settings are introduced.
- Store secrets in `.env.*` files ignored by VCS; do not commit sensitive values.

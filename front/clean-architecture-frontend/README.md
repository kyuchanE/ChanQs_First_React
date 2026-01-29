## ChanQ Digital Frontend

Node.js + React SSR marketing site for ChanQ Digital, scaffolded with Next.js 14 (App Router) and organised using a lightweight Clean Architecture layout. Axios powers REST communication with the internal API routes, enabling a clear separation between domain use cases and infrastructure concerns.
State management is split: React Query for server state, Zustand for client state.

### Getting Started

```bash
npm install
npm run dev
```

The application runs on `http://localhost:3000`. Product detail pages are statically generated and hydrated via server-side Axios calls.

### Project Structure

- `src/core` – enterprise entities and repository contracts
- `src/application` – use cases plus factories that wire dependencies
- `src/infrastructure` – Axios HTTP client, repository implementations, and mock data exposed through API routes
- `src/presentation` – UI components consumed by the App Router
- `src/app` – Next.js app directory with server components, SEO metadata, and REST API handlers

### State Management

- Server state: React Query
- Client state: Zustand

### API Configuration

`src/infrastructure/http/axiosClient.ts`는 외부 API 전용으로 사용합니다.
외부 API 기본 URL은 `EXTERNAL_API_BASE_URL`에서만 읽습니다.

### Available Scripts

- `npm run dev` – run the development server with Turbopack
- `npm run build` – create the production bundle
- `npm run start` – serve the production build
- `npm run lint` – run ESLint checks

### SEO

- Global metadata defined in `src/app/layout.tsx`
- Dynamic product metadata powered by `generateMetadata` in `src/app/products/[slug]/page.tsx`
- Custom 404 page at `src/app/not-found.tsx`

### Next Steps

- Swap the mock data in `src/infrastructure/mock/data.ts` with live API integrations
- Extend the presentation layer with analytics, testimonials, or pricing sections as needed

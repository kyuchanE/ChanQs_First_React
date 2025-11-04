## ChanQ Digital Frontend

Node.js + React SSR marketing site for ChanQ Digital, scaffolded with Next.js 14 (App Router) and organised using a lightweight Clean Architecture layout. Axios powers REST communication with the internal API routes, enabling a clear separation between domain use cases and infrastructure concerns.

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

### API Configuration

Axios instances resolve the API base URL in the following order:

1. `API_BASE_URL`
2. `NEXT_PUBLIC_API_BASE_URL`
3. Host headers (during SSR)
4. `/api` (client-side fallback)

When deploying behind a custom domain, set `API_BASE_URL` to the fully qualified origin that exposes the `/api` routes.

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

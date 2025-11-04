import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 px-6 py-12 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        404 — Not Found
      </span>
      <h1 className="text-3xl font-semibold text-slate-900">
        The page you were looking for has moved or no longer exists.
      </h1>
      <p className="max-w-xl text-sm text-slate-600">
        Double-check the URL or explore our product portfolio to see how we can help your team deliver faster.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-white transition hover:bg-slate-700"
        >
          Back to home <span aria-hidden>→</span>
        </Link>
        <Link
          href="/products/ops-orchestrator"
          className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-5 py-2 text-slate-900 transition hover:bg-slate-900 hover:text-white"
        >
          View products
        </Link>
      </div>
    </main>
  );
}

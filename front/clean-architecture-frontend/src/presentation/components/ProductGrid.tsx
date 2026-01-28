import { ProductType } from "@/core/entities/product";
import Link from "next/link";

type ProductGridProps = {
  products: ProductType[];
};

const categoryGradients: Record<string, string> = {
  Automation: "from-amber-500/80 via-orange-500/70 to-rose-500/60",
  Analytics: "from-sky-500/70 via-cyan-500/70 to-emerald-500/70",
  "Customer Experience": "from-violet-500/70 via-indigo-500/70 to-blue-500/70",
};

const getGradientForCategory = (category: string): string =>
  categoryGradients[category] ?? "from-slate-600/60 via-slate-700/60 to-slate-800/60";

export const ProductGrid = ({ products }: ProductGridProps) => (
  <section className="space-y-6">
    <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Products built for measurable outcomes
        </h2>
        <p className="text-sm text-slate-600">
          Explore the solutions delivering performance for teams across finance, retail, and logistics.
        </p>
      </div>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
      >
        Talk to product specialists <span aria-hidden>→</span>
      </Link>
    </header>
    <div className="grid gap-6 md:grid-cols-3">
      {products.map((product) => (
        <article
          key={product.id}
          className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div
            className={`relative h-40 bg-gradient-to-br ${getGradientForCategory(
              product.category,
            )}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">
              {product.category}
            </span>
            <span className="absolute left-4 bottom-4 text-lg font-semibold text-white">
              {product.name}
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-4 p-6">
            <p className="text-sm text-slate-600">{product.summary}</p>
            <ul className="space-y-2 text-sm text-slate-700">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="text-amber-500">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between pt-4 text-sm">
              <span className="font-semibold text-slate-900">{product.price}</span>
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition group-hover:text-amber-500"
              >
                View details
                <span aria-hidden className="transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

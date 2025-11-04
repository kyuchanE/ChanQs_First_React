import { Product } from "@/core/entities/product";
import Link from "next/link";

type ProductDetailSectionProps = {
  product: Product;
};

const detailGradients: Record<string, string> = {
  Automation: "from-amber-600 via-orange-500 to-rose-500",
  Analytics: "from-sky-600 via-cyan-500 to-emerald-500",
  "Customer Experience": "from-violet-600 via-indigo-500 to-blue-500",
};

const getGradient = (category: string) =>
  detailGradients[category] ?? "from-slate-700 via-slate-800 to-slate-900";

export const ProductDetailSection = ({ product }: ProductDetailSectionProps) => (
  <article className="space-y-16">
    <header className="space-y-6">
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${getGradient(
          product.category,
        )} px-12 py-16 text-white shadow-xl`}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/90">
          {product.category}
        </span>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          {product.name}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/80">{product.description}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/90">
          <span className="rounded-full border border-white/30 px-3 py-1">
            {product.price}
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
          >
            Contact sales <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      </div>
    </header>
    <section className="grid gap-10 md:grid-cols-[2fr,1fr] md:items-start">
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Where it shines</h2>
        <ul className="space-y-3 text-sm text-slate-700">
          {product.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Features</h2>
        <ul className="space-y-4 text-sm text-slate-700">
          {product.features.map((feature) => (
            <li key={feature.title}>
              <h3 className="font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <footer className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 p-10 text-center">
      <h2 className="text-xl font-semibold text-slate-900">
        Ready to see {product.name} in action?
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Share your priorities and we&apos;ll tailor a walkthrough for your team.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-white transition hover:bg-slate-700"
        >
          Schedule a demo <span aria-hidden>→</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-5 py-2 text-slate-900 transition hover:bg-slate-900 hover:text-white"
        >
          Download product brief
        </Link>
      </div>
    </footer>
  </article>
);

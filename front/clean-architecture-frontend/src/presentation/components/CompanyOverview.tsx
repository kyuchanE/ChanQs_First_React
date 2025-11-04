import { CompanyProfile } from "@/core/entities/company";
import Link from "next/link";

type CompanyOverviewProps = {
  company: CompanyProfile;
};

export const CompanyOverview = ({ company }: CompanyOverviewProps) => (
  <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-12 py-16 text-white shadow-xl">
    <div className="relative z-10 grid gap-10 md:grid-cols-[2fr,1fr] md:items-center">
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-slate-100">
          {company.tagline}
        </span>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          {company.name}
        </h1>
        <p className="max-w-2xl text-lg text-slate-200">{company.description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
          <span className="rounded-full border border-white/20 px-3 py-1">
            Since {company.foundedYear}
          </span>
          <span className="rounded-full border border-white/20 px-3 py-1">
            {company.employees}+ teammates
          </span>
          <span className="rounded-full border border-white/20 px-3 py-1">
            HQ · {company.headquarters}
          </span>
        </div>
        <Link
          href={company.ctaHref}
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/25 transition hover:bg-amber-200"
        >
          {company.ctaLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
      <dl className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div>
          <dt className="text-sm uppercase tracking-widest text-slate-200">
            Mission
          </dt>
          <dd className="text-base font-medium text-white">{company.mission}</dd>
        </div>
        <div>
          <dt className="text-sm uppercase tracking-widest text-slate-200">
            Vision
          </dt>
          <dd className="text-base font-medium text-white">{company.vision}</dd>
        </div>
        <div>
          <dt className="text-sm uppercase tracking-widest text-slate-200">
            Connect
          </dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {company.socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
              >
                {link.platform}
              </Link>
            ))}
          </dd>
        </div>
      </dl>
    </div>
    <div className="absolute inset-y-0 right-[-15%] hidden w-1/3 rotate-6 rounded-full bg-gradient-to-tr from-amber-400/30 via-amber-300/20 to-amber-200/10 blur-3xl md:block" />
  </section>
);

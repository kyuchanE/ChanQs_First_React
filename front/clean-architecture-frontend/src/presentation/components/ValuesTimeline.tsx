import { CompanyProfile } from "@/core/entities/company";

type ValuesTimelineProps = {
  company: CompanyProfile;
};

export const ValuesTimeline = ({ company }: ValuesTimelineProps) => (
  <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-12 shadow-sm md:grid-cols-[1fr,1fr]">
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-900">
        The principles guiding every engagement
      </h2>
      <ul className="grid gap-3">
        {company.values.map((value) => (
          <li
            key={value}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-900">
        Milestones we are proud of
      </h2>
      <ol className="relative space-y-6 border-l border-dashed border-slate-200 pl-6">
        {company.milestones.map((milestone) => (
          <li key={milestone.year} className="relative">
            <span className="absolute left-[-38px] top-2 h-2 w-2 rounded-full bg-amber-400" />
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              {milestone.year}
            </p>
            <p className="text-sm text-slate-700">{milestone.achievement}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

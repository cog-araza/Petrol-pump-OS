import { Icon, SectionHeading } from "./ui";

const phases = [
  { days: "Days 1–15", title: "Data foundation", text: "Excel data cleaning and database setup" },
  { days: "Days 16–30", title: "Visibility", text: "Dashboard MVP" },
  { days: "Days 31–45", title: "Prediction", text: "Forecasting engine" },
  { days: "Days 46–60", title: "Control", text: "Alerts and anomaly detection" },
  { days: "Days 61–75", title: "Intelligence", text: "AI business intelligence layer" },
  { days: "Days 76–90", title: "AI manager", text: "AI manager and owner reports" },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="section-soft scroll-mt-8">
      <div className="shell">
        <SectionHeading eyebrow="90-day roadmap" title="From raw Excel files to an intelligent operating system." description="A focused build plan that starts with your real business data and earns complexity one useful layer at a time." />
        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="absolute left-[16.66%] right-[16.66%] top-[31px] hidden h-px bg-slate-200 lg:block" />
          {phases.map((phase, index) => <article key={phase.days} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,31,51,.04)] transition duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-[0_18px_45px_rgba(15,31,51,.08)]"><div className="relative flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-navy text-sm font-semibold text-white shadow-lg shadow-navy/10">{String(index + 1).padStart(2,"0")}</span><span className="rounded-full bg-emerald/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald">{phase.days}</span></div><p className="mt-6 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">{phase.title}</p><h3 className="mt-2 text-lg font-semibold text-navy">{phase.text}</h3><div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-400"><Icon name="clock" className="size-3.5" />15-day sprint</div></article>)}
        </div>
      </div>
    </section>
  );
}

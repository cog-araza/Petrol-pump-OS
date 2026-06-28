import { Icon, type IconName, SectionHeading } from "./ui";

const problems: { icon: IconName; title: string; text: string }[] = [
  { icon: "bars", title: "Manual Excel reporting", text: "Hours lost compiling sheets that are already out of date." },
  { icon: "inventory", title: "Inventory mismatch", text: "Book stock and physical stock rarely tell the same story." },
  { icon: "drop", title: "Fuel loss and leakage", text: "Small daily variances quietly become significant losses." },
  { icon: "target", title: "Nozzle blind spots", text: "No clear view of performance at the nozzle level." },
  { icon: "card", title: "Payment reconciliation", text: "Cash, card, credit, and bank totals take too long to match." },
  { icon: "clock", title: "Delayed decisions", text: "Owners learn about problems after the opportunity has passed." },
];

export function ProblemSolution() {
  return (
    <>
      <section className="section bg-white">
        <div className="shell">
          <SectionHeading eyebrow="The daily reality" title="Your pump generates data. But not answers." description="Disconnected records and manual processes make it difficult to see what is happening today, where money is being lost, and what to do next." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((item) => <article key={item.title} className="group bg-white p-6 transition hover:bg-slate-50 sm:p-8"><div className="grid size-11 place-items-center rounded-xl bg-red-50 text-red-500 transition group-hover:-translate-y-1"><Icon name={item.icon} className="size-5" /></div><h3 className="mt-5 font-semibold text-navy">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-soft relative overflow-hidden">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow">One source of truth</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-navy sm:text-5xl">From scattered numbers to confident decisions.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">PetrolPumpOS brings sales, inventory, nozzle readings, cash, card, and stock data into one clear view, then turns it into practical AI recommendations.</p>
            <div className="mt-8 space-y-4">{["See the full business in real time", "Spot exceptions before they become losses", "Give every shift a clear, accountable close"].map((text) => <div className="flex items-center gap-3 text-sm font-medium text-slate-700" key={text}><span className="grid size-6 place-items-center rounded-full bg-emerald/10 text-emerald"><Icon name="check" className="size-3.5" /></span>{text}</div>)}</div>
          </div>
          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,31,51,.08)] sm:p-8">
            <div className="absolute -right-14 -top-14 size-36 rounded-full bg-emerald/10 blur-3xl" />
            <div className="relative flex items-center gap-4 border-b border-slate-100 pb-6"><span className="grid size-12 place-items-center rounded-2xl bg-navy text-white"><Icon name="spark" className="size-5" /></span><div><p className="text-xs font-semibold uppercase tracking-[.14em] text-emerald">AI morning brief</p><h3 className="mt-1 font-semibold text-navy">Monday business summary</h3></div></div>
            <div className="relative mt-6 space-y-4">{[
              ["Sales", "Revenue is up 8.4% vs last Monday", "trend" as IconName],
              ["Inventory", "Diesel stock will reach reorder level in 2 days", "inventory" as IconName],
              ["Attention", "Nozzle 04 variance is above normal range", "warning" as IconName],
            ].map(([label, text, icon]) => <div key={label} className="flex gap-3 rounded-2xl bg-slate-50 p-4"><span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-white text-emerald shadow-sm"><Icon name={icon as IconName} className="size-4" /></span><div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p><p className="mt-1 text-sm font-medium leading-5 text-slate-700">{text}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

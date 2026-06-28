import { Icon, type IconName } from "./ui";

const benefits: { icon: IconName; title: string }[] = [
  { icon: "shield", title: "Reduce losses" },
  { icon: "inventory", title: "Prevent stockouts" },
  { icon: "people", title: "Improve accountability" },
  { icon: "clock", title: "Make faster decisions" },
  { icon: "trend", title: "Increase profitability" },
  { icon: "target", title: "Prepare for expansion" },
];

export function Benefits() {
  return (
    <section className="section bg-white">
      <div className="shell">
        <div className="overflow-hidden rounded-[32px] bg-navy px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div><span className="eyebrow">Built for outcomes</span><h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">A clearer business is a stronger business.</h2><p className="mt-4 leading-7 text-slate-300">Give owners and managers the visibility to protect every litre, every rupee, and every opportunity.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">{benefits.map((item) => <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[.045] p-4 transition hover:border-emerald/30 hover:bg-white/[.07]"><span className="grid size-9 place-items-center rounded-xl bg-emerald/10 text-[#58e6b3]"><Icon name={item.icon} className="size-4" /></span><span className="text-sm font-medium">{item.title}</span></div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

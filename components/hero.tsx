import { Icon } from "./ui";

const miniMetrics = [
  { label: "Today's revenue", value: "Rs 1.24M", change: "+8.4%" },
  { label: "Fuel sold", value: "4,860 L", change: "+5.1%" },
  { label: "Stock health", value: "72%", change: "Healthy" },
];

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[680px] lg:mx-0">
      <div className="absolute -inset-8 rounded-full bg-emerald/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#101f35] p-3 shadow-[0_35px_90px_rgba(0,0,0,.38)] sm:p-4">
        <div className="flex items-center justify-between border-b border-white/8 px-2 pb-3">
          <div className="flex items-center gap-2"><span className="size-2.5 rounded-full bg-[#ff6b6b]"/><span className="size-2.5 rounded-full bg-[#ffd166]"/><span className="size-2.5 rounded-full bg-emerald"/></div>
          <div className="text-[9px] font-semibold uppercase tracking-[.16em] text-slate-400">Owner dashboard</div>
          <div className="grid size-6 place-items-center rounded-lg bg-white/5"><Icon name="bell" className="size-3.5 text-slate-400" /></div>
        </div>
        <div className="p-2 pt-4 sm:p-4">
          <div className="mb-4 flex items-end justify-between">
            <div><p className="text-[10px] text-slate-400">Monday, 22 June</p><p className="mt-1 text-sm font-semibold text-white sm:text-base">Business overview</p></div>
            <span className="rounded-full bg-emerald/10 px-2.5 py-1 text-[9px] font-semibold text-[#58e6b3]">Live updates</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {miniMetrics.map((item) => <div key={item.label} className="rounded-xl border border-white/6 bg-white/[.035] p-2.5 sm:p-3"><p className="truncate text-[8px] text-slate-400 sm:text-[10px]">{item.label}</p><p className="mt-1.5 text-[13px] font-semibold text-white sm:text-lg">{item.value}</p><p className="mt-1 text-[8px] font-medium text-[#58e6b3] sm:text-[9px]">{item.change}</p></div>)}
          </div>
          <div className="mt-2 grid grid-cols-[1.65fr_1fr] gap-2">
            <div className="rounded-xl border border-white/6 bg-white/[.035] p-3">
              <div className="flex items-center justify-between"><p className="text-[9px] font-medium text-slate-300 sm:text-[10px]">Weekly sales</p><p className="text-[8px] text-slate-500">Last 7 days</p></div>
              <div className="mt-3 flex h-24 items-end gap-1.5 sm:h-32 sm:gap-2">{[45,58,51,72,64,83,76].map((height, i) => <div key={i} className="group flex h-full flex-1 items-end"><div className="w-full rounded-t-[3px] bg-gradient-to-t from-emerald/35 to-emerald transition group-hover:brightness-125" style={{height: `${height}%`}} /></div>)}</div>
              <div className="mt-2 flex justify-between text-[7px] text-slate-500 sm:text-[8px]">{["M","T","W","T","F","S","S"].map((d, i) => <span key={i}>{d}</span>)}</div>
            </div>
            <div className="rounded-xl border border-white/6 bg-white/[.035] p-3">
              <p className="text-[9px] font-medium text-slate-300 sm:text-[10px]">Inventory</p>
              <div className="mx-auto mt-3 grid size-16 place-items-center rounded-full sm:size-20" style={{background:"conic-gradient(#11b981 0 72%, #26364a 72% 100%)"}}><div className="grid size-12 place-items-center rounded-full bg-[#142338] text-center sm:size-16"><div><b className="text-xs text-white sm:text-sm">72%</b><p className="text-[6px] text-slate-500 sm:text-[7px]">remaining</p></div></div></div>
              <div className="mt-3 rounded-lg bg-amber-400/8 p-2 text-[7px] leading-3 text-amber-200 sm:text-[8px]"><span className="font-semibold">AI tip:</span> Order diesel within 2 days.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#182a42]/95 p-3 shadow-2xl backdrop-blur sm:flex">
        <span className="grid size-9 place-items-center rounded-xl bg-emerald/15 text-[#58e6b3]"><Icon name="spark" className="size-4" /></span><div><p className="text-[9px] text-slate-400">AI insight</p><p className="text-[10px] font-semibold text-white">Petrol demand rising 12%</p></div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero-grid relative min-h-[800px] bg-navy pb-24 pt-32 text-white lg:flex lg:min-h-[840px] lg:items-center lg:py-28">
      <div className="orb absolute right-[-10%] top-[-20%] size-[520px] rounded-full bg-emerald/10 blur-[120px]" />
      <div className="shell relative grid items-center gap-16 lg:grid-cols-[.88fr_1.12fr] lg:gap-12 xl:gap-20">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/10 px-3.5 py-2 text-xs font-medium text-[#6ee7b7]"><span className="size-1.5 rounded-full bg-[#6ee7b7] shadow-[0_0_10px_#6ee7b7]" />Built for Pakistan's fuel businesses</div>
          <h1 className="mt-7 text-5xl font-semibold leading-[.98] tracking-[-0.055em] sm:text-6xl xl:text-7xl">Run your petrol pump with <span className="text-gradient">clarity.</span></h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300 sm:text-xl">The AI-powered operating system for smarter petrol pump management, from the forecourt to the finance desk.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#features" className="button-primary">View Features <Icon name="arrow" className="size-4" /></a>
            <a href="#dashboard" className="button-secondary">See Dashboard Preview</a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400"><span className="flex items-center gap-2"><Icon name="check" className="size-4 text-emerald" />No hardware required</span><span className="flex items-center gap-2"><Icon name="check" className="size-4 text-emerald" />Built around your data</span><span className="flex items-center gap-2"><Icon name="check" className="size-4 text-emerald" />Mobile ready</span></div>
        </div>
        <HeroMockup />
      </div>
    </section>
  );
}

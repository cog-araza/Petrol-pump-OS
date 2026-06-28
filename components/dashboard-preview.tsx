import { Icon, type IconName, SectionHeading } from "./ui";

const metrics: { label: string; value: string; note: string; icon: IconName; tone?: string }[] = [
  { label: "Today's Revenue", value: "Rs 1,248,600", note: "+8.4% vs yesterday", icon: "trend" },
  { label: "Petrol Sold", value: "3,240 L", note: "67% of today's volume", icon: "fuel" },
  { label: "Diesel Sold", value: "1,620 L", note: "33% of today's volume", icon: "drop" },
  { label: "Inventory Remaining", value: "24,850 L", note: "5.2 days estimated cover", icon: "inventory" },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="section scroll-mt-8 bg-navy text-white">
      <div className="shell">
        <SectionHeading light eyebrow="Future dashboard vision" title="Your entire business. One calm view." description="A preview of the live operational cockpit we are building for owners and managers. All figures shown are illustrative." />
        <div className="mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1c30] shadow-[0_40px_100px_rgba(0,0,0,.3)]">
          <div className="flex items-center justify-between border-b border-white/8 px-5 py-4 sm:px-7"><div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-lg bg-emerald text-white"><Icon name="fuel" className="size-4" /></span><div><p className="text-sm font-semibold">Owner Overview</p><p className="text-[10px] text-slate-500">Demo Station · Lahore</p></div></div><div className="flex items-center gap-3"><span className="hidden rounded-full bg-emerald/10 px-3 py-1 text-[10px] text-[#58e6b3] sm:block">● Live data</span><span className="grid size-8 place-items-center rounded-full bg-white/5 text-xs font-semibold text-slate-300">AK</span></div></div>
          <div className="p-4 sm:p-7">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{metrics.map((item) => <div key={item.label} className="dashboard-card"><div className="flex items-start justify-between"><p className="text-xs text-slate-400">{item.label}</p><span className="grid size-8 place-items-center rounded-lg bg-emerald/10 text-[#58e6b3]"><Icon name={item.icon} className="size-4" /></span></div><p className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">{item.value}</p><p className="mt-2 text-[10px] font-medium text-[#58e6b3]">{item.note}</p></div>)}</div>
            <div className="mt-3 grid gap-3 xl:grid-cols-[1.45fr_.9fr]">
              <div className="dashboard-card min-h-72">
                <div className="flex items-center justify-between"><div><p className="text-sm font-semibold">Cash vs Card Sales</p><p className="mt-1 text-[10px] text-slate-500">Hourly sales composition</p></div><span className="rounded-lg border border-white/8 px-2.5 py-1.5 text-[9px] text-slate-400">Today⌄</span></div>
                <div className="mt-8 flex h-36 items-end gap-2 sm:gap-4">{[55,70,61,85,72,92,76,88,68,79,62,71].map((height, i) => <div key={i} className="flex h-full flex-1 items-end"><div className="relative w-full rounded-t-sm bg-emerald/25" style={{height:`${height}%`}}><div className="absolute inset-x-0 bottom-0 rounded-t-sm bg-emerald" style={{height:`${35 + (i % 4) * 9}%`}} /></div></div>)}</div>
                <div className="mt-5 flex gap-5 text-[10px] text-slate-400"><span className="flex items-center gap-2"><i className="size-2 rounded-full bg-emerald"/>Cash Rs 786k</span><span className="flex items-center gap-2"><i className="size-2 rounded-full bg-emerald/25"/>Card Rs 463k</span></div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <div className="dashboard-card flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-400/10 text-blue-300"><Icon name="inventory" className="size-5" /></span><div><p className="text-xs text-slate-400">Recommended Fuel Order</p><p className="mt-1 text-lg font-semibold">8,000 L Diesel</p><p className="mt-1 text-[10px] text-blue-300">Order by Tuesday, 11:00 AM</p></div></div>
                <div className="dashboard-card flex gap-4 border-amber-300/15 bg-amber-300/[.035]"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-amber-300/10 text-amber-300"><Icon name="warning" className="size-5" /></span><div><div className="flex items-center gap-2"><p className="text-xs text-slate-400">Loss Alert</p><span className="rounded bg-red-400/10 px-1.5 py-0.5 text-[8px] font-bold text-red-300">REVIEW</span></div><p className="mt-1 text-lg font-semibold">Nozzle 04</p><p className="mt-1 text-[10px] leading-4 text-amber-200">Variance 0.42% above normal range</p></div></div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-5 text-center text-xs text-slate-500">Concept preview · Dummy data only · Final modules will evolve through field testing</p>
      </div>
    </section>
  );
}

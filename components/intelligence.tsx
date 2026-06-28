import { Icon, type IconName } from "./ui";

const capabilities: { icon: IconName; title: string; text: string }[] = [
  { icon: "trend", title: "Forecast demand", text: "Anticipate product demand from your actual sales history." },
  { icon: "shield", title: "Detect unusual losses", text: "Surface variance patterns that deserve immediate review." },
  { icon: "inventory", title: "Recommend fuel orders", text: "Balance stock cover, forecast demand, and delivery timing." },
  { icon: "chart", title: "Explain performance", text: "Understand why sales changed, not only that they changed." },
  { icon: "message", title: "Summarize every day", text: "Receive owner-ready management updates in plain language." },
];

export function Intelligence() {
  return (
    <section id="intelligence" className="section scroll-mt-10 bg-white">
      <div className="shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <div>
          <span className="eyebrow">AI intelligence</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-navy sm:text-5xl">Not another report. A better next move.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">PetrolPumpOS is designed to help owners move from reviewing yesterday to shaping tomorrow, with recommendations grounded in their own operation.</p>
          <div className="mt-9 space-y-3">{capabilities.map((item) => <div key={item.title} className="group flex gap-4 rounded-2xl border border-transparent p-3 transition hover:border-slate-200 hover:bg-slate-50"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald/10 text-emerald"><Icon name={item.icon} className="size-5" /></span><div><h3 className="text-sm font-semibold text-navy">{item.title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{item.text}</p></div></div>)}</div>
        </div>
        <div className="ai-panel relative overflow-hidden rounded-[32px] bg-navy p-6 text-white shadow-[0_30px_80px_rgba(15,31,51,.18)] sm:p-9">
          <div className="absolute right-[-15%] top-[-12%] size-64 rounded-full bg-emerald/15 blur-[70px]" />
          <div className="relative flex items-center justify-between"><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-2xl bg-emerald text-white"><Icon name="brain" className="size-5" /></span><div><p className="font-semibold">PetrolPumpOS AI</p><p className="text-[10px] text-slate-400">Daily owner intelligence</p></div></div><span className="rounded-full border border-emerald/20 bg-emerald/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#58e6b3]">Analysis ready</span></div>
          <div className="relative mt-8 rounded-2xl rounded-tl-md bg-white/[.06] p-5 text-sm leading-7 text-slate-200">Good morning. Yesterday's revenue increased <strong className="text-white">8.4%</strong>, mainly because evening petrol volume was stronger than usual. Diesel stock is now your priority.</div>
          <div className="relative mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-white/8 bg-white/[.035] p-4"><p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Recommended action</p><p className="mt-2 text-sm font-medium leading-6">Order 8,000 L diesel before Tuesday morning.</p></div><div className="rounded-2xl border border-white/8 bg-white/[.035] p-4"><p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Watch closely</p><p className="mt-2 text-sm font-medium leading-6">Review Nozzle 04 variance with the shift manager.</p></div></div>
          <div className="relative mt-5 flex items-center gap-3 border-t border-white/8 pt-5 text-xs text-slate-400"><span className="grid size-8 place-items-center rounded-lg bg-[#25D366]/10 text-[#58e6b3]"><Icon name="message" className="size-4" /></span>Daily summary ready for WhatsApp delivery</div>
        </div>
      </div>
    </section>
  );
}

import { Icon, type IconName, SectionHeading } from "./ui";

const features: { icon: IconName; title: string; text: string }[] = [
  { icon: "chart", title: "Sales Analytics", text: "Track revenue, volume, product mix, and trends across every shift." },
  { icon: "fuel", title: "Nozzle Performance", text: "Compare throughput, variance, and uptime nozzle by nozzle." },
  { icon: "inventory", title: "Inventory Management", text: "Know available stock, days of cover, and reorder timing." },
  { icon: "shield", title: "Fuel Loss Detection", text: "Flag unusual variance, leakage, or handling patterns early." },
  { icon: "card", title: "Cash/Card Reconciliation", text: "Close shifts faster across cash, cards, credit, and banking." },
  { icon: "trend", title: "Demand Forecasting", text: "Plan purchasing around expected demand and seasonal patterns." },
  { icon: "brain", title: "AI Daily Reports", text: "Get a clear owner summary without reading every operational report." },
  { icon: "message", title: "WhatsApp Alerts", text: "Receive important stock, loss, and performance alerts where you work." },
  { icon: "people", title: "Staff Performance", text: "Create visibility and accountability across shifts and teams." },
  { icon: "target", title: "Profitability Insights", text: "Understand margins, expenses, and the actions that improve profit." },
];

export function Features() {
  return (
    <section id="features" className="section scroll-mt-10 bg-white">
      <div className="shell">
        <SectionHeading eyebrow="A complete operating picture" title="Everything you need to run a smarter forecourt." description="One focused platform for the operational, financial, and strategic questions petrol pump owners face every day." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((item, index) => <article key={item.title} className={`feature-card group ${index === 0 || index === 9 ? "lg:col-span-1" : ""}`}><span className="grid size-11 place-items-center rounded-xl bg-emerald/10 text-emerald transition duration-300 group-hover:bg-emerald group-hover:text-white"><Icon name={item.icon} className="size-5" /></span><h3 className="mt-5 text-[15px] font-semibold text-navy">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}

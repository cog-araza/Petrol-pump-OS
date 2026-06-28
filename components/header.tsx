import { Icon } from "./ui";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 font-semibold tracking-tight ${light ? "text-white" : "text-navy"}`} aria-label="PetrolPumpOS home">
      <span className="grid size-9 place-items-center rounded-xl bg-emerald text-white shadow-[0_6px_18px_rgba(17,185,129,.25)]"><Icon name="fuel" className="size-5" /></span>
      <span className="text-lg">PetrolPump<span className="text-emerald">OS</span></span>
    </a>
  );
}

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="shell flex h-20 items-center justify-between">
        <Brand light />
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex" aria-label="Main navigation">
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#dashboard">Dashboard</a>
          <a className="nav-link" href="#intelligence">AI Intelligence</a>
          <a className="nav-link" href="#roadmap">Roadmap</a>
        </nav>
        <a href="#features" className="hidden rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:border-emerald/50 hover:bg-white/15 sm:block">Explore platform</a>
        <a href="#features" className="grid size-10 place-items-center rounded-xl border border-white/15 text-white sm:hidden" aria-label="Explore features"><Icon name="bars" className="size-5" /></a>
      </div>
    </header>
  );
}

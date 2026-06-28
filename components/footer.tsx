import { Brand } from "./header";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="shell flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div><Brand /><p className="mt-3 text-sm text-slate-500">Built for modern petrol pump owners.</p></div>
        <div className="text-left sm:text-right"><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Contact</p><a href="mailto:hello@petrolpumpos.com" className="mt-2 block text-sm font-medium text-navy transition hover:text-emerald">hello@petrolpumpos.com</a></div>
      </div>
      <div className="shell mt-8 border-t border-slate-100 pt-6 text-xs text-slate-400">© 2026 PetrolPumpOS. Product concept for Pakistan's fuel retail sector.</div>
    </footer>
  );
}

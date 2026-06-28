"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Building2,
  CreditCard,
  Droplets,
  Fuel,
  Gauge,
  LayoutDashboard,
  LogOut,
  PackagePlus,
  ReceiptText,
  Settings,
  ShieldCheck,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";
import { branches } from "@/data/mock";
import { cn } from "@/lib/format";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Shift Management", href: "/shifts", icon: ShieldCheck },
  { label: "Nozzle Readings", href: "/nozzle-readings", icon: Droplets },
  { label: "Tank Dip Readings", href: "/tank-dips", icon: Gauge },
  { label: "Fuel Deliveries", href: "/fuel-deliveries", icon: PackagePlus },
  { label: "Sales", href: "/sales", icon: WalletCards },
  { label: "Mobil Oil Sales", href: "/mobil-oil", icon: Fuel },
  { label: "Expenses", href: "/expenses", icon: ReceiptText },
  { label: "Credit Customers", href: "/credit-customers", icon: CreditCard },
  { label: "Inventory", href: "/inventory", icon: BarChart3 },
  { label: "Reports", href: "/reports", icon: ReceiptText },
  { label: "Forecasting", href: "/forecasting", icon: TrendingUp },
  { label: "Staff Management", href: "/staff", icon: Users },
  { label: "Branches / Stations", href: "/branches", icon: Building2 },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#eef3f1] text-slate-950">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-white/10 bg-[#071827] text-white xl:flex xl:flex-col">
        <div className="border-b border-white/10 p-6">
          <Link href="/" className="block">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">PGL / PARCO Gunvor</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight">PetrolPumpOS</h2>
          </Link>
          <p className="mt-3 rounded-2xl bg-white/8 px-3 py-2 text-xs text-slate-300">
            V1 frontend prototype · dummy data
          </p>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white",
                  active && "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20",
                )}
                href={item.href}
                key={item.href}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-white/10 p-4">
          <Link className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-semibold text-slate-300 hover:bg-white/10" href="/login">
            <LogOut className="h-4 w-4" />
            Mock login
          </Link>
        </div>
      </aside>

      <div className="xl:pl-72">
        <header className="sticky top-0 z-20 border-b border-white/80 bg-white/80 px-4 py-4 backdrop-blur-xl md:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Owner control room</p>
              <h1 className="text-lg font-black text-slate-950 md:text-2xl">Shahid Mohsin · PetrolPumpOS</h1>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-emerald-400">
                {branches.map((branch) => (
                  <option key={branch.id}>{branch.name}</option>
                ))}
              </select>
              <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-emerald-400">
                <option>Owner</option>
                <option>Manager</option>
                <option>Cashier</option>
                <option>Staff/Filler</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 xl:hidden">
            {navItems.map((item) => (
              <Link
                className={cn(
                  "shrink-0 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600",
                  pathname === item.href && "border-emerald-500 bg-emerald-50 text-emerald-700",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </header>
        <main className="px-4 py-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  );
}

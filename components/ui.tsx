import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "arrow"
  | "bars"
  | "bell"
  | "brain"
  | "card"
  | "chart"
  | "check"
  | "clock"
  | "drop"
  | "fuel"
  | "inventory"
  | "message"
  | "people"
  | "shield"
  | "spark"
  | "target"
  | "trend"
  | "warning";

const paths: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  bars: <><path d="M4 18V9"/><path d="M10 18V5"/><path d="M16 18v-7"/><path d="M22 18H2"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
  brain: <><path d="M9.5 4A3.5 3.5 0 0 0 6 7.5v.25A3.5 3.5 0 0 0 5 14.5 3.5 3.5 0 0 0 9.5 20H12V4Z"/><path d="M14.5 4A3.5 3.5 0 0 1 18 7.5v.25a3.5 3.5 0 0 1 1 6.75 3.5 3.5 0 0 1-4.5 5.5H12V4Z"/><path d="M8 10h2M14 14h2"/></>,
  card: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></>,
  chart: <><path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-7"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  drop: <path d="M12 2S5 9 5 15a7 7 0 0 0 14 0c0-6-7-13-7-13Z"/>,
  fuel: <><path d="M5 21V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v17"/><path d="M3 21h15M7 6h7v5H7zM16 6l3 3v7a2 2 0 0 0 4 0v-5l-3-3"/></>,
  inventory: <><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="m4 7v10l8 4 8-4V7M12 11v10"/></>,
  message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A8 8 0 1 1 21 15Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></>,
  people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
  spark: <><path d="m12 3-1.6 4.4L6 9l4.4 1.6L12 15l1.6-4.4L18 9l-4.4-1.6L12 3Z"/><path d="m5 15-.8 2.2L2 18l2.2.8L5 21l.8-2.2L8 18l-2.2-.8L5 15Z"/></>,
  target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
  trend: <><path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/></>,
  warning: <><path d="M10.3 3.7 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></>,
};

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
    </div>
  );
}

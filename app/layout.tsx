import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetrolPumpOS | PGL ERP & Analytics",
  description:
    "Frontend-first petrol pump ERP, analytics, reporting, and forecasting prototype for PGL / PARCO Gunvor Limited.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

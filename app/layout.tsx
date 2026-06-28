import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetrolPumpOS | Smarter Petrol Pump Management",
  description:
    "An AI-powered operating system for modern petrol pump owners in Pakistan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

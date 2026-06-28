import { AppShell } from "@/components/shell/app-shell";
import { Badge, Card, SectionHeader } from "@/components/ui/card";
import { roles } from "@/data/mock";

export default function SettingsPage() {
  return (
    <AppShell>
      <SectionHeader
        eyebrow="Configuration"
        title="Settings"
        description="Frontend settings preview for station profile, roles, products, shifts, and future integrations."
      />
      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <h2 className="text-xl font-black">Station setup</h2>
          <div className="mt-5 grid gap-4">
            {[
              ["Company", "PGL / PARCO Gunvor Limited"],
              ["Owner", "Shahid Mohsin"],
              ["Products", "Hi Super, HOBC, Diesel, Mobil Oil"],
              ["Shifts", "6 AM - 6 PM, 6 PM - 6 AM"],
              ["Storage capacity", "126,000 litres"],
            ].map(([label, value]) => (
              <div className="rounded-2xl bg-slate-50 p-4" key={label}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
                <p className="mt-1 font-black text-slate-800">{value}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-black">Mock role permissions</h2>
          <div className="mt-5 space-y-3">
            {roles.map((role, index) => (
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4" key={role}>
                <span className="font-bold">{role}</span>
                <Badge tone={index < 2 ? "green" : "blue"}>{index < 2 ? "Full access" : "Limited access"}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

import { Dashboard } from "@/components/dashboard/dashboard";
import { AppShell } from "@/components/shell/app-shell";
import { SectionHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <AppShell>
      <SectionHeader
        eyebrow="Station dashboard"
        title="PGL Main Station overview"
        description="A premium frontend prototype for petrol pump operations, analytics, stock control, and AI management recommendations. All data shown here is realistic dummy data."
      />
      <Dashboard />
    </AppShell>
  );
}

import { AppShell } from "@/components/shell/app-shell";
import { Card, GhostButton, SectionHeader } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { reportCards, salesEntries } from "@/data/mock";

export default function ReportsPage() {
  return (
    <AppShell>
      <SectionHeader
        eyebrow="Management reporting"
        title="Reports"
        description="Report library for daily, shift, product, payment, credit, tank, variance, mobil oil, expense, staff, and monthly summaries."
        action={<GhostButton>Export selected report</GhostButton>}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reportCards.map((report) => {
          const Icon = report.icon;
          return (
            <Card className="transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/5" key={report.title}>
              <Icon className="h-6 w-6 text-emerald-600" />
              <h2 className="mt-4 text-lg font-black">{report.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{report.description}</p>
            </Card>
          );
        })}
      </div>
      <div className="mt-6">
        <DataTable
          title="Daily sales report preview"
          rows={salesEntries}
          columns={[
            { key: "date", label: "Date" },
            { key: "shift", label: "Shift" },
            { key: "cash", label: "Cash" },
            { key: "card", label: "Card" },
            { key: "credit", label: "Credit" },
            { key: "total", label: "Total" },
            { key: "difference", label: "Difference" },
          ]}
        />
      </div>
    </AppShell>
  );
}

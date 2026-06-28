import { Building2 } from "lucide-react";
import { AppShell } from "@/components/shell/app-shell";
import { Badge, Card, SectionHeader } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { branches } from "@/data/mock";

export default function BranchesPage() {
  return (
    <AppShell>
      <SectionHeader
        eyebrow="Multi-branch platform"
        title="Branches / stations"
        description="PetrolPumpOS is structured for multiple companies and branches from day one, even though V1 uses one live station."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {branches.map((branch) => (
          <Card key={branch.id}>
            <div className="flex items-start justify-between gap-4">
              <Building2 className="h-7 w-7 text-emerald-600" />
              <Badge tone={branch.status === "Live" ? "green" : "slate"}>{branch.status}</Badge>
            </div>
            <h2 className="mt-5 text-2xl font-black">{branch.name}</h2>
            <p className="mt-2 text-sm text-slate-500">{branch.company}</p>
            <p className="mt-4 text-sm font-bold text-slate-700">Manager: {branch.manager}</p>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <DataTable
          title="Company and branch registry"
          rows={branches}
          columns={[
            { key: "name", label: "Branch" },
            { key: "company", label: "Company" },
            { key: "city", label: "City" },
            { key: "manager", label: "Manager" },
            { key: "status", label: "Status" },
          ]}
        />
      </div>
    </AppShell>
  );
}

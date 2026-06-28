import { AppShell } from "@/components/shell/app-shell";
import { Card, SectionHeader } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { staff } from "@/data/mock";

export default function StaffPage() {
  return (
    <AppShell>
      <SectionHeader
        eyebrow="People"
        title="Staff management"
        description="Mock role-based structure for super admin, owner, manager, cashier, and staff/fillers."
      />
      <div className="grid gap-4 md:grid-cols-5">
        {["Super Admin", "Owner", "Manager", "Cashier", "Staff/Filler"].map((role) => (
          <Card key={role}>
            <p className="text-sm font-bold text-slate-500">{role}</p>
            <p className="mt-2 text-3xl font-black">{role === "Staff/Filler" ? "4" : "1"}</p>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <DataTable
          title="Staff attendance and role table"
          rows={staff}
          columns={[
            { key: "name", label: "Name" },
            { key: "role", label: "Role" },
            { key: "shift", label: "Shift" },
            { key: "phone", label: "Phone" },
            { key: "status", label: "Status" },
          ]}
        />
      </div>
    </AppShell>
  );
}

import { ModulePage } from "@/components/forms/module-page";
import { fieldSets, salesEntries } from "@/data/mock";

const rows = [
  { date: "2026-06-28", shift: "Shift 1", manager: "Ali Raza", cashier: "Bilal Khan", openingCash: "PKR 250,000", closingCash: "PKR 986,500", status: "Closed" },
  { date: "2026-06-28", shift: "Shift 2", manager: "Ali Raza", cashier: "Bilal Khan", openingCash: "PKR 220,000", closingCash: "PKR 833,000", status: "Active" },
  ...salesEntries.map((entry) => ({ date: entry.date, shift: entry.shift, manager: "Ali Raza", cashier: "Bilal Khan", openingCash: entry.cash, closingCash: entry.total, status: "Reviewed" })),
];

export default function ShiftsPage() {
  return (
    <ModulePage
      eyebrow="Operations"
      title="Shift management"
      description="Record managers, cashiers, fillers, guards, opening cash, closing cash, and shift notes."
      formTitle="New shift entry"
      formDescription="Staff-friendly daily shift form with required-field validation."
      fields={fieldSets.shift}
      rows={rows}
      columns={[
        { key: "date", label: "Date" },
        { key: "shift", label: "Shift" },
        { key: "manager", label: "Manager" },
        { key: "cashier", label: "Cashier" },
        { key: "openingCash", label: "Opening cash" },
        { key: "closingCash", label: "Closing cash" },
        { key: "status", label: "Status" },
      ]}
      tableTitle="Recent shift records"
    />
  );
}

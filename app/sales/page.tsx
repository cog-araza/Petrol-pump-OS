import { ModulePage } from "@/components/forms/module-page";
import { fieldSets, salesEntries } from "@/data/mock";

export default function SalesPage() {
  return (
    <ModulePage
      eyebrow="Finance"
      title="Sales entry"
      description="Capture cash, card, credit, total sales, cash in hand, and shortage or excess."
      formTitle="Daily sales entry"
      formDescription="Total sales and cash difference auto-calculate while staff enters values."
      fields={fieldSets.sales}
      mode="sales"
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
      tableTitle="Recent sales entries"
    />
  );
}

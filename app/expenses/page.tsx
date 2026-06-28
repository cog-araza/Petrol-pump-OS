import { ModulePage } from "@/components/forms/module-page";
import { expenses, fieldSets } from "@/data/mock";

export default function ExpensesPage() {
  return (
    <ModulePage
      eyebrow="Finance"
      title="Expenses"
      description="Record operating expenses, who paid, descriptions, and future receipt upload placeholders."
      formTitle="Expense entry"
      formDescription="Simple validation keeps daily cash reporting cleaner."
      fields={fieldSets.expense}
      rows={expenses}
      columns={[
        { key: "date", label: "Date" },
        { key: "category", label: "Category" },
        { key: "amount", label: "Amount" },
        { key: "paidBy", label: "Paid by" },
        { key: "description", label: "Description" },
      ]}
      tableTitle="Recent expenses"
    />
  );
}

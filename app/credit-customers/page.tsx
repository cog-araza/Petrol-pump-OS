import { ModulePage } from "@/components/forms/module-page";
import { creditCustomers, fieldSets } from "@/data/mock";

export default function CreditCustomersPage() {
  return (
    <ModulePage
      eyebrow="Receivables"
      title="Credit customers"
      description="Track customer vehicle, product, litres, amount, payment status, and due date."
      formTitle="Credit sale entry"
      formDescription="Designed for fast counter entry while keeping future customer ledgers possible."
      fields={fieldSets.creditCustomer}
      rows={creditCustomers}
      columns={[
        { key: "customer", label: "Customer" },
        { key: "vehicle", label: "Vehicle" },
        { key: "product", label: "Product" },
        { key: "litres", label: "Litres" },
        { key: "amount", label: "Amount" },
        { key: "status", label: "Status" },
        { key: "dueDate", label: "Due date" },
      ]}
      tableTitle="Credit customer ledger"
    />
  );
}

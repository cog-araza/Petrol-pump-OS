import { ModulePage } from "@/components/forms/module-page";
import { deliveries, fieldSets } from "@/data/mock";

export default function FuelDeliveriesPage() {
  return (
    <ModulePage
      eyebrow="Stock in"
      title="Fuel deliveries"
      description="Record supplier invoices, product, tank destination, quantity received, purchase rate, and vehicle details."
      formTitle="Fuel delivery / stock in"
      formDescription="Total cost auto-calculates from quantity and purchase rate."
      fields={fieldSets.delivery}
      mode="delivery"
      rows={deliveries}
      columns={[
        { key: "date", label: "Date" },
        { key: "supplier", label: "Supplier" },
        { key: "product", label: "Product" },
        { key: "quantity", label: "Quantity" },
        { key: "tank", label: "Tank" },
        { key: "invoice", label: "Invoice" },
        { key: "cost", label: "Total cost" },
      ]}
      tableTitle="Recent fuel deliveries"
    />
  );
}

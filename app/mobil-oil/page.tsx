import { ModulePage } from "@/components/forms/module-page";
import { fieldSets, mobilOilSales } from "@/data/mock";

export default function MobilOilPage() {
  return (
    <ModulePage
      eyebrow="Lubricants"
      title="Mobil oil sales"
      description="Track lubricant quantity, buying price, selling price, staff member, and profit."
      formTitle="Mobil oil sale"
      formDescription="Profit auto-calculates from selling price minus purchase price multiplied by quantity."
      fields={fieldSets.mobilOil}
      mode="mobilOil"
      rows={mobilOilSales}
      columns={[
        { key: "date", label: "Date" },
        { key: "product", label: "Product" },
        { key: "quantity", label: "Quantity" },
        { key: "purchase", label: "Purchase" },
        { key: "selling", label: "Selling" },
        { key: "profit", label: "Profit" },
        { key: "staff", label: "Staff" },
      ]}
      tableTitle="Recent mobil oil sales"
    />
  );
}

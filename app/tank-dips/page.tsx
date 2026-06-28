import { ModulePage } from "@/components/forms/module-page";
import { fieldSets, tankLevels } from "@/data/mock";

const rows = tankLevels.map((tank) => ({
  tank: tank.name,
  fuel: tank.product,
  openingDip: `${tank.current + 780} L`,
  closingDip: `${tank.current} L`,
  calculated: `${tank.current} L`,
  variance: tank.current < tank.safeLevel ? "Low stock" : "Normal",
}));

export default function TankDipsPage() {
  return (
    <ModulePage
      eyebrow="Inventory control"
      title="Tank dip readings"
      description="Capture opening and closing tank dips to compare physical stock against calculated stock."
      formTitle="Tank dip entry"
      formDescription="Use clean tank-level inputs today; backend conversion tables can be connected later."
      fields={fieldSets.tankDip}
      rows={rows}
      columns={[
        { key: "tank", label: "Tank" },
        { key: "fuel", label: "Fuel" },
        { key: "openingDip", label: "Opening dip" },
        { key: "closingDip", label: "Closing dip" },
        { key: "calculated", label: "Calculated litres" },
        { key: "variance", label: "Variance" },
      ]}
      tableTitle="Current tank readings"
    />
  );
}

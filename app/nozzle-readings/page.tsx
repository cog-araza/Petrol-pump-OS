import { ModulePage } from "@/components/forms/module-page";
import { fieldSets, nozzleReadings } from "@/data/mock";

export default function NozzleReadingsPage() {
  return (
    <ModulePage
      eyebrow="Fuel sales"
      title="Nozzle readings"
      description="Enter opening and closing nozzle readings, calculate litres sold, and track staff assignment."
      formTitle="Nozzle reading entry"
      formDescription="Litres and amount auto-calculate from closing minus opening reading."
      fields={fieldSets.nozzle}
      mode="nozzle"
      rows={nozzleReadings}
      columns={[
        { key: "dispenser", label: "Dispenser" },
        { key: "nozzle", label: "Nozzle" },
        { key: "fuel", label: "Fuel" },
        { key: "opening", label: "Opening" },
        { key: "closing", label: "Closing" },
        { key: "litres", label: "Litres" },
        { key: "amount", label: "Amount" },
        { key: "staff", label: "Staff" },
      ]}
      tableTitle="Recent nozzle readings"
      tableDescription="Dummy dispenser-level performance data."
    />
  );
}

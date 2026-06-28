import { AppShell } from "@/components/shell/app-shell";
import { Card, Badge, SectionHeader } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { productSales, tankLevels } from "@/data/mock";
import { formatNumber } from "@/lib/format";

export default function InventoryPage() {
  const inventoryRows = tankLevels.map((tank) => ({
    tank: tank.name,
    product: tank.product,
    capacity: `${formatNumber(tank.capacity)} L`,
    current: `${formatNumber(tank.current)} L`,
    safeLevel: `${formatNumber(tank.safeLevel)} L`,
    status: tank.current < tank.safeLevel ? "Low stock" : "Healthy",
  }));

  return (
    <AppShell>
      <SectionHeader
        eyebrow="Stock control"
        title="Inventory / stock"
        description="Track storage capacity, tank balance, product movement, and low stock alerts for the current station."
      />
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-black">Tank levels</h2>
            <Badge tone="orange">Low stock rules active</Badge>
          </div>
          <div className="space-y-5">
            {tankLevels.map((tank) => {
              const percent = Math.round((tank.current / tank.capacity) * 100);
              const low = tank.current < tank.safeLevel;
              return (
                <div key={tank.id}>
                  <div className="mb-2 flex justify-between text-sm font-bold">
                    <span>{tank.name} · {tank.product}</span>
                    <span className={low ? "text-orange-600" : "text-emerald-700"}>{percent}%</span>
                  </div>
                  <div className="h-4 rounded-full bg-slate-100">
                    <div className={low ? "h-4 rounded-full bg-orange-500" : "h-4 rounded-full bg-emerald-500"} style={{ width: `${percent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
        <DataTable
          title="Tank stock table"
          description="Export button is a placeholder for V1."
          rows={inventoryRows}
          columns={[
            { key: "tank", label: "Tank" },
            { key: "product", label: "Product" },
            { key: "capacity", label: "Capacity" },
            { key: "current", label: "Current" },
            { key: "safeLevel", label: "Safe level" },
            { key: "status", label: "Status" },
          ]}
        />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {productSales.map((product) => (
          <Card key={product.product}>
            <p className="text-sm font-bold text-slate-500">{product.product}</p>
            <p className="mt-2 text-3xl font-black">{product.litres ? `${formatNumber(product.litres)} L` : "Lubricants"}</p>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}

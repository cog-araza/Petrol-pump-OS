import { AlertTriangle, ArrowUpRight, Fuel, Sparkles } from "lucide-react";
import { Card, Badge } from "@/components/ui/card";
import { PaymentMixChart, ProductSalesChart, RevenueTrendChart } from "@/components/charts/sales-chart";
import { aiRecommendations, dashboardMetrics, productSales, quickStats, tankLevels } from "@/data/mock";
import { formatNumber } from "@/lib/format";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
        {dashboardMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card className="transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/5" key={metric.label}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">{metric.label}</p>
                  <p className="mt-3 text-3xl font-black tracking-tight text-slate-950">{metric.value}</p>
                  <p className="mt-2 text-sm font-semibold text-emerald-700">{metric.change}</p>
                </div>
                <span className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                  <Icon className="h-6 w-6" />
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.45fr_0.9fr]">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-950">7-day revenue trend</h2>
              <p className="text-sm text-slate-500">Dummy PKR values for the current station.</p>
            </div>
            <Badge>Live preview</Badge>
          </div>
          <RevenueTrendChart />
        </Card>
        <Card>
          <h2 className="text-xl font-black text-slate-950">AI recommendation preview</h2>
          <p className="mt-1 text-sm text-slate-500">No real AI yet. These are sample management insights.</p>
          <div className="mt-5 space-y-3">
            {aiRecommendations.map((item) => (
              <div className="flex gap-3 rounded-2xl bg-slate-50 p-3" key={item}>
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <h2 className="text-xl font-black text-slate-950">Product-wise litres sold</h2>
          <ProductSalesChart />
        </Card>
        <Card>
          <h2 className="text-xl font-black text-slate-950">Cash vs card vs credit</h2>
          <PaymentMixChart />
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-950">Inventory remaining</h2>
            <Badge tone="orange">126,000 L total capacity</Badge>
          </div>
          <div className="space-y-4">
            {tankLevels.map((tank) => {
              const percentage = Math.round((tank.current / tank.capacity) * 100);
              const low = tank.current < tank.safeLevel;
              return (
                <div key={tank.id}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-800">
                      {tank.name} · {tank.product}
                    </span>
                    <span className={low ? "font-black text-orange-600" : "font-bold text-slate-600"}>
                      {formatNumber(tank.current)} L / {formatNumber(tank.capacity)} L
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className={low ? "h-full bg-orange-500" : "h-full bg-emerald-500"} style={{ width: `${percentage}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          {quickStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card className="bg-slate-950 text-white" key={stat.label}>
                <Icon className="h-6 w-6 text-emerald-300" />
                <p className="mt-5 text-sm text-slate-300">{stat.label}</p>
                <p className="mt-2 text-2xl font-black">{stat.value}</p>
                <ArrowUpRight className="mt-4 h-4 w-4 text-emerald-300" />
              </Card>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {productSales.map((product) => (
          <Card key={product.product}>
            <Fuel className="h-5 w-5 text-emerald-600" />
            <p className="mt-3 text-sm font-semibold text-slate-500">{product.product}</p>
            <p className="mt-1 text-2xl font-black text-slate-950">
              {product.litres ? `${formatNumber(product.litres)} L` : "PKR 120,000"}
            </p>
          </Card>
        ))}
      </div>

      <Card className="border-orange-200 bg-orange-50">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-3">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <div>
              <h2 className="font-black text-orange-950">Loss alert</h2>
              <p className="text-sm font-semibold text-orange-800">Diesel dip variance is 0.7% above normal tolerance. Recheck Tank 1 reading and Dispenser 2 nozzle calibration.</p>
            </div>
          </div>
          <Badge tone="orange">Review today</Badge>
        </div>
      </Card>
    </div>
  );
}

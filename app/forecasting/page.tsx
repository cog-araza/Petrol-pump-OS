import { Brain, TrendingUp } from "lucide-react";
import { ForecastChart } from "@/components/charts/sales-chart";
import { AppShell } from "@/components/shell/app-shell";
import { Badge, Card, SectionHeader } from "@/components/ui/card";
import { aiRecommendations, forecasts } from "@/data/mock";

export default function ForecastingPage() {
  return (
    <AppShell>
      <SectionHeader
        eyebrow="Forecasting preview"
        title="Demand forecast and AI manager"
        description="V1 uses dummy forecast data only. This page is designed so a real forecasting engine can be connected later."
      />
      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-black">Weekly sales forecast</h2>
            <Badge>Dummy model output</Badge>
          </div>
          <ForecastChart data={forecasts} />
        </Card>
        <Card className="bg-slate-950 text-white">
          <Brain className="h-7 w-7 text-emerald-300" />
          <h2 className="mt-5 text-2xl font-black">Tomorrow forecast</h2>
          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm text-slate-300">Hi Super demand</p>
              <p className="text-3xl font-black">6,600 L</p>
            </div>
            <div>
              <p className="text-sm text-slate-300">HOBC demand</p>
              <p className="text-3xl font-black">4,550 L</p>
            </div>
            <div>
              <p className="text-sm text-slate-300">Diesel demand</p>
              <p className="text-3xl font-black">5,750 L</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Recommended reorder quantity", "18,000 L HOBC"],
          ["Low stock warning", "HOBC below safe level"],
          ["Expected revenue", "PKR 2,810,000"],
          ["Expected gross profit", "PKR 884,000"],
        ].map(([label, value]) => (
          <Card key={label}>
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <p className="mt-2 text-2xl font-black">{value}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-6 border-orange-200 bg-orange-50">
        <h2 className="font-black text-orange-950">Possible abnormal variance alert</h2>
        <p className="mt-2 text-sm font-semibold text-orange-800">Diesel variance may exceed expected range if current dip pattern continues.</p>
      </Card>
      <div className="mt-6 grid gap-3">
        {aiRecommendations.map((item) => (
          <Card key={item}>
            <p className="font-semibold text-slate-700">{item}</p>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}

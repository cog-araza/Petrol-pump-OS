"use client";

import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Card, PrimaryButton } from "@/components/ui/card";
import type { FormField } from "@/types";
import { formatCurrency, formatNumber } from "@/lib/format";

type FormValues = Record<string, string>;

function toNumber(value: string) {
  return Number(value || 0);
}

export function DataEntryForm({
  title,
  description,
  fields,
  mode,
}: {
  title: string;
  description: string;
  fields: FormField[];
  mode?: "nozzle" | "sales" | "mobilOil" | "delivery";
}) {
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  const computed = useMemo(() => {
    if (mode === "nozzle") {
      const litres = Math.max(0, toNumber(values.closingReading) - toNumber(values.openingReading));
      const total = litres * toNumber(values.rate);
      return [
        { label: "Litres sold", value: `${formatNumber(litres)} L` },
        { label: "Total amount", value: formatCurrency(total) },
      ];
    }

    if (mode === "sales") {
      const total = toNumber(values.cashSales) + toNumber(values.cardSales) + toNumber(values.creditSales);
      const difference = toNumber(values.cashInHand) - toNumber(values.cashSales);
      return [
        { label: "Total sales", value: formatCurrency(total) },
        { label: "Cash difference", value: formatCurrency(difference) },
      ];
    }

    if (mode === "mobilOil") {
      const profit = (toNumber(values.sellingPrice) - toNumber(values.purchasePrice)) * toNumber(values.quantity);
      return [{ label: "Profit", value: formatCurrency(profit) }];
    }

    if (mode === "delivery") {
      const cost = toNumber(values.quantity) * toNumber(values.purchaseRate);
      return [{ label: "Total cost", value: formatCurrency(cost) }];
    }

    return [];
  }, [mode, values]);

  function updateValue(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSaved(false);
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if (field.required && !values[field.name]) {
        nextErrors[field.name] = `${field.label} is required`;
      }
    });

    if (mode === "nozzle" && toNumber(values.closingReading) < toNumber(values.openingReading)) {
      nextErrors.closingReading = "Closing reading must be greater than opening reading";
    }

    setErrors(nextErrors);
    setSaved(Object.keys(nextErrors).length === 0);
  }

  return (
    <Card>
      <div className="mb-5">
        <h2 className="text-xl font-black text-slate-950">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
      <form className="grid gap-4 md:grid-cols-2" onSubmit={submit}>
        {fields.map((field) => {
          const common =
            "mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-emerald-400 focus:bg-white";

          return (
            <label className={field.type === "textarea" ? "md:col-span-2" : ""} key={field.name}>
              <span className="text-sm font-bold text-slate-700">
                {field.label} {field.required ? <span className="text-red-500">*</span> : null}
              </span>
              {field.type === "select" ? (
                <select className={common} value={values[field.name] ?? ""} onChange={(event) => updateValue(field.name, event.target.value)}>
                  <option value="">Select {field.label.toLowerCase()}</option>
                  {field.options?.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  className={`${common} min-h-28 resize-none`}
                  placeholder={field.placeholder}
                  value={values[field.name] ?? ""}
                  onChange={(event) => updateValue(field.name, event.target.value)}
                />
              ) : (
                <input
                  className={common}
                  placeholder={field.placeholder}
                  type={field.type ?? "text"}
                  value={field.type === "file" ? undefined : values[field.name] ?? ""}
                  onChange={(event) => updateValue(field.name, event.target.value)}
                />
              )}
              {errors[field.name] ? <span className="mt-1 block text-xs font-semibold text-red-600">{errors[field.name]}</span> : null}
            </label>
          );
        })}

        {computed.length ? (
          <div className="grid gap-3 rounded-3xl bg-slate-950 p-4 text-white md:col-span-2 md:grid-cols-2">
            {computed.map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">{item.label}</p>
                <p className="mt-1 text-2xl font-black">{item.value}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center">
          <PrimaryButton type="submit">Save Entry</PrimaryButton>
          {saved ? (
            <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              Entry saved locally in mock state.
            </div>
          ) : null}
        </div>
      </form>
    </Card>
  );
}

"use client";

import { useActionState, useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, PrimaryButton } from "@/components/ui/card";
import type { FieldDef } from "@/types";
import { formatCurrency, formatNumber } from "@/lib/format";
import { type ActionState, idleState } from "@/lib/actions/helpers";

type PreviewMode = "nozzle" | "sales" | "mobilOil" | "delivery";

function toNumber(value: string | undefined) {
  return Number(value || 0);
}

export function DataEntryForm({
  title,
  description,
  fields,
  action,
  mode,
  submitLabel = "Save Entry",
  hiddenValues,
}: {
  title: string;
  description: string;
  fields: FieldDef[];
  action: (state: ActionState, formData: FormData) => Promise<ActionState>;
  mode?: PreviewMode;
  submitLabel?: string;
  hiddenValues?: Record<string, string>;
}) {
  const [state, formAction, pending] = useActionState(action, idleState);
  const [values, setValues] = useState<Record<string, string>>({});

  function update(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  const computed = (() => {
    if (mode === "nozzle") {
      const litres = Math.max(0, toNumber(values.closingReading) - toNumber(values.openingReading));
      return [{ label: "Litres sold", value: `${formatNumber(litres)} L` }];
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
  })();

  const common =
    "mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-emerald-400 focus:bg-white";

  return (
    <Card>
      <div className="mb-5">
        <h2 className="text-xl font-black text-slate-950">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
      <form action={formAction} onSubmit={() => setValues({})} className="grid gap-4 md:grid-cols-2">
        {hiddenValues
          ? Object.entries(hiddenValues).map(([name, value]) => <input key={name} type="hidden" name={name} value={value} />)
          : null}
        {fields.map((field) => {
          const error = state.errors?.[field.name];
          return (
            <label className={field.type === "textarea" ? "md:col-span-2" : ""} key={field.name}>
              <span className="text-sm font-bold text-slate-700">
                {field.label} {field.required ? <span className="text-red-500">*</span> : null}
              </span>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  defaultValue={field.defaultValue ?? ""}
                  required={field.required}
                  className={common}
                  onChange={(e) => update(field.name, e.target.value)}
                >
                  <option value="">Select {field.label.toLowerCase()}</option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  className={`${common} min-h-28 resize-none`}
                  placeholder={field.placeholder}
                  required={field.required}
                  defaultValue={field.defaultValue}
                  onChange={(e) => update(field.name, e.target.value)}
                />
              ) : (
                <input
                  name={field.name}
                  className={common}
                  placeholder={field.placeholder}
                  type={field.type ?? "text"}
                  step={field.step}
                  required={field.required}
                  readOnly={field.readOnly}
                  defaultValue={field.defaultValue}
                  onChange={(e) => update(field.name, e.target.value)}
                />
              )}
              {error ? <span className="mt-1 block text-xs font-semibold text-red-600">{error}</span> : null}
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
          <PrimaryButton type="submit" disabled={pending}>
            {pending ? "Saving…" : submitLabel}
          </PrimaryButton>
          {state.ok && state.message ? (
            <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              {state.message}
            </div>
          ) : null}
          {!state.ok && state.message ? (
            <div className="flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
              <AlertCircle className="h-4 w-4" />
              {state.message}
            </div>
          ) : null}
        </div>
      </form>
    </Card>
  );
}

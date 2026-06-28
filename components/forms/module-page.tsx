import { AppShell } from "@/components/shell/app-shell";
import { DataEntryForm } from "@/components/forms/data-entry-form";
import { DataTable } from "@/components/ui/data-table";
import { GhostButton, SectionHeader } from "@/components/ui/card";
import type { FormField, TableColumn } from "@/types";

export function ModulePage<T extends Record<string, unknown>>({
  eyebrow,
  title,
  description,
  formTitle,
  formDescription,
  fields,
  rows,
  columns,
  tableTitle,
  tableDescription,
  mode,
}: {
  eyebrow: string;
  title: string;
  description: string;
  formTitle: string;
  formDescription: string;
  fields: FormField[];
  rows: T[];
  columns: TableColumn<T>[];
  tableTitle: string;
  tableDescription?: string;
  mode?: "nozzle" | "sales" | "mobilOil" | "delivery";
}) {
  return (
    <AppShell>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        action={<GhostButton>Date filter</GhostButton>}
      />
      <div className="grid gap-6 2xl:grid-cols-[0.92fr_1.08fr]">
        <DataEntryForm title={formTitle} description={formDescription} fields={fields} mode={mode} />
        <DataTable title={tableTitle} description={tableDescription} columns={columns} rows={rows} />
      </div>
    </AppShell>
  );
}

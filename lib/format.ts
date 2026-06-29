import { formatPKR, toPaisa } from "@/lib/money";

/**
 * @deprecated Operates on rupee floats. Prefer formatPKR(paisa) from lib/money.
 * Kept during the migration for client-side previews that compute in rupees.
 */
export function formatCurrency(value: number) {
  return formatPKR(toPaisa(value));
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-PK").format(value);
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

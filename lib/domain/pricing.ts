import { asPaisa, type Paisa } from "@/lib/money";

export type PriceRow = {
  productId: string;
  ratePaisa: number;
  effectiveFrom: string; // ISO date
};

/**
 * The applicable rate for a product on a given date = the most recent price whose
 * effectiveFrom is on or before that date. Returns null if no price applies yet.
 */
export function rateForProductOn(prices: PriceRow[], productId: string, date: string): Paisa | null {
  const applicable = prices
    .filter((p) => p.productId === productId && p.effectiveFrom <= date)
    .sort((a, b) => (a.effectiveFrom < b.effectiveFrom ? 1 : -1));
  if (applicable.length === 0) return null;
  return asPaisa(applicable[0].ratePaisa);
}

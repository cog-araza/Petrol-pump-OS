import { describe, expect, it } from "vitest";
import { lowStock, tankBalanceL } from "@/lib/domain/inventory";
import { rateForProductOn } from "@/lib/domain/pricing";

const tank = { capacityL: 42000, safeLevelL: 12000 };

describe("tankBalanceL", () => {
  it("adds deliveries and subtracts sales", () => {
    const bal = tankBalanceL(tank, 17840, [{ litres: 24000 }, { litres: -5000 }]);
    expect(bal).toBe(36840);
  });

  it("clamps to capacity and to zero", () => {
    expect(tankBalanceL(tank, 40000, [{ litres: 10000 }])).toBe(42000);
    expect(tankBalanceL(tank, 1000, [{ litres: -5000 }])).toBe(0);
  });
});

describe("lowStock", () => {
  it("warns and suggests a reorder below safe level", () => {
    const r = lowStock(tank, 5920);
    expect(r.warn).toBe(true);
    expect(r.reorderL).toBe(36000);
    expect(r.pctRemaining).toBe(14);
  });

  it("does not warn above safe level", () => {
    expect(lowStock(tank, 20000).warn).toBe(false);
    expect(lowStock(tank, 20000).reorderL).toBe(0);
  });
});

describe("rateForProductOn", () => {
  const prices = [
    { productId: "p1", ratePaisa: 17000000, effectiveFrom: "2026-06-01" },
    { productId: "p1", ratePaisa: 17500000, effectiveFrom: "2026-06-20" },
    { productId: "p2", ratePaisa: 12000000, effectiveFrom: "2026-06-10" },
  ];

  it("returns the most recent applicable price", () => {
    expect(rateForProductOn(prices, "p1", "2026-06-25")).toBe(17500000);
    expect(rateForProductOn(prices, "p1", "2026-06-15")).toBe(17000000);
  });

  it("returns null when no price applies yet", () => {
    expect(rateForProductOn(prices, "p2", "2026-06-05")).toBeNull();
  });
});

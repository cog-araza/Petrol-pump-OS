import {
  AlertTriangle,
  Banknote,
  BarChart3,
  Car,
  CreditCard,
  Droplets,
  Fuel,
  Gauge,
  LineChart,
  PackageCheck,
  ReceiptText,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";
import type { Branch, FormField, ForecastPoint, Metric, SalesPoint, StaffMember, Tank } from "@/types";

export const roles = ["Super Admin", "Owner", "Manager", "Cashier", "Staff/Filler"];

export const branches: Branch[] = [
  {
    id: "pgl-main",
    name: "PGL Main Station",
    company: "PGL / PARCO Gunvor Limited",
    city: "Pakistan",
    manager: "Shahid Mohsin",
    status: "Live",
  },
  {
    id: "pgl-future-1",
    name: "Future Branch Template",
    company: "PGL / PARCO Gunvor Limited",
    city: "Future Expansion",
    manager: "To be assigned",
    status: "Setup",
  },
];

export const products = ["Hi Super", "HOBC", "Diesel", "Mobil Oil"];
export const shifts = ["Shift 1 (6:00 AM - 6:00 PM)", "Shift 2 (6:00 PM - 6:00 AM)"];
export const dispensers = ["Dispenser 1", "Dispenser 2", "Dispenser 3", "Dispenser 4"];
export const nozzles = ["Nozzle 1", "Nozzle 2", "Nozzle 3", "Nozzle 4"];
export const tanks = ["Tank 1 - Diesel", "Tank 2A - HOBC", "Tank 2B - Hi Super", "Tank 3 - Hi Super"];

export const dashboardMetrics: Metric[] = [
  { label: "Today's Revenue", value: "PKR 2,684,500", change: "+11.8% vs yesterday", tone: "green", icon: Banknote },
  { label: "Total Litres Sold", value: "15,780 L", change: "6,240 Hi Super", tone: "blue", icon: Fuel },
  { label: "Gross Profit Estimate", value: "PKR 846,230", change: "31.5% blended margin", tone: "green", icon: TrendingUp },
  { label: "Variance Alerts", value: "2 active", change: "Diesel dip variance", tone: "orange", icon: AlertTriangle },
];

export const productSales = [
  { product: "Hi Super", litres: 6240, revenue: 1060800, color: "#16a34a" },
  { product: "HOBC", litres: 4320, revenue: 864000, color: "#0284c7" },
  { product: "Diesel", litres: 5220, revenue: 639450, color: "#f97316" },
  { product: "Mobil Oil", litres: 0, revenue: 120000, color: "#7c3aed" },
];

export const paymentMix = [
  { name: "Cash", value: 1350200 },
  { name: "Card", value: 982400 },
  { name: "Credit", value: 351900 },
];

export const tankLevels: Tank[] = [
  { id: "tank-1", name: "Tank 1", product: "Diesel", capacity: 42000, current: 17840, safeLevel: 12000 },
  { id: "tank-2a", name: "Tank 2A", product: "HOBC", capacity: 21000, current: 5920, safeLevel: 7000 },
  { id: "tank-2b", name: "Tank 2B", product: "Hi Super", capacity: 21000, current: 12140, safeLevel: 6500 },
  { id: "tank-3", name: "Tank 3", product: "Hi Super", capacity: 21000, current: 13880, safeLevel: 6500 },
];

export const sales7Days: SalesPoint[] = [
  { date: "Mon", revenue: 2180000, litres: 12840, hiSuper: 4820, hobc: 3160, diesel: 4860 },
  { date: "Tue", revenue: 2415000, litres: 14080, hiSuper: 5380, hobc: 3520, diesel: 5180 },
  { date: "Wed", revenue: 2324000, litres: 13690, hiSuper: 5110, hobc: 3300, diesel: 5280 },
  { date: "Thu", revenue: 2546000, litres: 14920, hiSuper: 5960, hobc: 3900, diesel: 5060 },
  { date: "Fri", revenue: 2684500, litres: 15780, hiSuper: 6240, hobc: 4320, diesel: 5220 },
  { date: "Sat", revenue: 2892000, litres: 16910, hiSuper: 6810, hobc: 4700, diesel: 5400 },
  { date: "Sun", revenue: 2498000, litres: 14640, hiSuper: 5660, hobc: 3820, diesel: 5160 },
];

export const sales30Days = Array.from({ length: 30 }, (_, index) => ({
  date: `Day ${index + 1}`,
  revenue: 1900000 + ((index * 73429) % 980000),
  litres: 11200 + ((index * 431) % 5100),
}));

export const forecasts: ForecastPoint[] = [
  { day: "Tomorrow", hiSuper: 6600, hobc: 4550, diesel: 5750 },
  { day: "Tue", hiSuper: 6350, hobc: 4210, diesel: 5480 },
  { day: "Wed", hiSuper: 6810, hobc: 4700, diesel: 5890 },
  { day: "Thu", hiSuper: 7040, hobc: 4890, diesel: 6120 },
  { day: "Fri", hiSuper: 7420, hobc: 5100, diesel: 6340 },
];

export const staff: StaffMember[] = [
  { id: "st-1", name: "Ali Raza", role: "Manager", shift: "Shift 1", phone: "0300-0000001", status: "Present" },
  { id: "st-2", name: "Bilal Khan", role: "Cashier", shift: "Shift 1", phone: "0300-0000002", status: "Present" },
  { id: "st-3", name: "Hamza Ahmed", role: "Staff/Filler", shift: "Shift 1", phone: "0300-0000003", status: "Present" },
  { id: "st-4", name: "Usman Tariq", role: "Staff/Filler", shift: "Shift 2", phone: "0300-0000004", status: "Off Duty" },
  { id: "st-5", name: "Naveed Iqbal", role: "Staff/Filler", shift: "Shift 2", phone: "0300-0000005", status: "Present" },
  { id: "st-6", name: "Guard A", role: "Staff/Filler", shift: "Shift 1", phone: "0300-0000006", status: "Present" },
  { id: "st-7", name: "Guard B", role: "Staff/Filler", shift: "Shift 2", phone: "0300-0000007", status: "Off Duty" },
];

export const nozzleReadings = [
  { dispenser: "Dispenser 3", nozzle: "Nozzle 1", fuel: "Hi Super", opening: 128900, closing: 130540, litres: 1640, amount: "PKR 278,800", staff: "Hamza Ahmed" },
  { dispenser: "Dispenser 4", nozzle: "Nozzle 1", fuel: "HOBC", opening: 88420, closing: 89610, litres: 1190, amount: "PKR 238,000", staff: "Naveed Iqbal" },
  { dispenser: "Dispenser 1", nozzle: "Nozzle 2", fuel: "Diesel", opening: 151120, closing: 152940, litres: 1820, amount: "PKR 222,950", staff: "Usman Tariq" },
  { dispenser: "Dispenser 2", nozzle: "Nozzle 1", fuel: "Diesel", opening: 119600, closing: 121020, litres: 1420, amount: "PKR 173,950", staff: "Ali Raza" },
];

export const deliveries = [
  { date: "2026-06-27", supplier: "PARCO", product: "Diesel", quantity: "24,000 L", tank: "Tank 1", invoice: "PGL-7781", cost: "PKR 5,832,000" },
  { date: "2026-06-25", supplier: "PARCO", product: "Hi Super", quantity: "18,000 L", tank: "Tank 3", invoice: "PGL-7742", cost: "PKR 4,590,000" },
  { date: "2026-06-23", supplier: "PARCO", product: "HOBC", quantity: "12,000 L", tank: "Tank 2A", invoice: "PGL-7718", cost: "PKR 3,180,000" },
];

export const salesEntries = [
  { date: "2026-06-28", shift: "Shift 1", cash: "PKR 735,000", card: "PKR 488,200", credit: "PKR 140,000", total: "PKR 1,363,200", difference: "+PKR 1,500" },
  { date: "2026-06-28", shift: "Shift 2", cash: "PKR 615,200", card: "PKR 494,200", credit: "PKR 211,900", total: "PKR 1,321,300", difference: "-PKR 2,200" },
];

export const expenses = [
  { date: "2026-06-28", category: "Utilities", amount: "PKR 18,500", paidBy: "Manager", description: "Electricity advance" },
  { date: "2026-06-27", category: "Maintenance", amount: "PKR 7,800", paidBy: "Cashier", description: "Nozzle service" },
  { date: "2026-06-26", category: "Staff", amount: "PKR 12,000", paidBy: "Owner", description: "Guard overtime" },
];

export const creditCustomers = [
  { customer: "Alpha Logistics", vehicle: "LES-4471", product: "Diesel", litres: 780, amount: "PKR 95,550", status: "Due", dueDate: "2026-07-05" },
  { customer: "City Traders", vehicle: "ICT-2210", product: "Hi Super", litres: 260, amount: "PKR 44,200", status: "Partial", dueDate: "2026-07-02" },
  { customer: "Mohsin Farms", vehicle: "RIN-8872", product: "Diesel", litres: 1180, amount: "PKR 144,550", status: "Paid", dueDate: "2026-06-30" },
];

export const mobilOilSales = [
  { date: "2026-06-28", product: "Mobil Super 1000", quantity: 18, purchase: "PKR 1,800", selling: "PKR 2,250", profit: "PKR 8,100", staff: "Bilal Khan" },
  { date: "2026-06-27", product: "Mobil Delvac MX", quantity: 11, purchase: "PKR 2,900", selling: "PKR 3,500", profit: "PKR 6,600", staff: "Hamza Ahmed" },
];

export const aiRecommendations = [
  "Hi Super stock may fall below safe level in 2 days.",
  "Diesel demand is expected to increase tomorrow.",
  "Shift 1 performed 8% better than Shift 2 this week.",
  "Dispenser 3 has the highest sales volume.",
  "Credit sales increased by 12% compared to last week.",
];

export const reportCards = [
  { title: "Daily Sales Report", icon: ReceiptText, description: "Revenue, litres, payments, and shift summary." },
  { title: "Shift Report", icon: Users, description: "Manager, cashier, fillers, cash and notes." },
  { title: "Product-wise Sales", icon: BarChart3, description: "Hi Super, HOBC, Diesel, and lubricants." },
  { title: "Cash vs Card Report", icon: WalletCards, description: "Payment reconciliation and shortages." },
  { title: "Credit Sales Report", icon: CreditCard, description: "Customers, vehicles, ageing, and dues." },
  { title: "Tank Stock Report", icon: Gauge, description: "Dip readings, stock balance, and low stock." },
  { title: "Inventory Variance", icon: AlertTriangle, description: "Nozzle vs tank variance and loss alerts." },
  { title: "Mobil Oil Report", icon: PackageCheck, description: "Lubricant quantity, margin, and staff." },
  { title: "Expense Report", icon: ReceiptText, description: "Categories, paid by, receipts, and totals." },
  { title: "Staff Performance", icon: Users, description: "Attendance and nozzle-level performance." },
  { title: "Monthly Summary", icon: LineChart, description: "Sales, profit, expenses, and growth." },
];

export const fieldSets: Record<string, FormField[]> = {
  shift: [
    { name: "date", label: "Date", type: "date", required: true },
    { name: "shift", label: "Shift", type: "select", options: shifts, required: true },
    { name: "manager", label: "Manager", type: "select", options: staff.map((person) => person.name), required: true },
    { name: "cashier", label: "Cashier", type: "select", options: staff.map((person) => person.name), required: true },
    { name: "fillers", label: "Fillers", placeholder: "Ali, Hamza, Naveed", required: true },
    { name: "guards", label: "Guards", placeholder: "Guard A, Guard B" },
    { name: "openingCash", label: "Opening cash", type: "number", required: true },
    { name: "closingCash", label: "Closing cash", type: "number", required: true },
    { name: "notes", label: "Notes", type: "textarea" },
  ],
  nozzle: [
    { name: "date", label: "Date", type: "date", required: true },
    { name: "shift", label: "Shift", type: "select", options: shifts, required: true },
    { name: "dispenser", label: "Dispenser", type: "select", options: dispensers, required: true },
    { name: "nozzle", label: "Nozzle", type: "select", options: nozzles, required: true },
    { name: "fuelType", label: "Fuel type", type: "select", options: ["Hi Super", "HOBC", "Diesel"], required: true },
    { name: "openingReading", label: "Opening reading", type: "number", required: true },
    { name: "closingReading", label: "Closing reading", type: "number", required: true },
    { name: "rate", label: "Rate per litre", type: "number", required: true },
    { name: "staffAssigned", label: "Staff assigned", type: "select", options: staff.map((person) => person.name), required: true },
  ],
  tankDip: [
    { name: "date", label: "Date", type: "date", required: true },
    { name: "shift", label: "Shift", type: "select", options: shifts, required: true },
    { name: "tank", label: "Tank", type: "select", options: tanks, required: true },
    { name: "fuelType", label: "Fuel type", type: "select", options: ["Hi Super", "HOBC", "Diesel"], required: true },
    { name: "openingDip", label: "Opening dip", type: "number", required: true },
    { name: "closingDip", label: "Closing dip", type: "number", required: true },
    { name: "calculatedLitres", label: "Calculated litres", type: "number" },
    { name: "notes", label: "Notes", type: "textarea" },
  ],
  delivery: [
    { name: "date", label: "Date", type: "date", required: true },
    { name: "supplier", label: "Supplier", placeholder: "PARCO", required: true },
    { name: "product", label: "Product", type: "select", options: ["Hi Super", "HOBC", "Diesel"], required: true },
    { name: "quantity", label: "Quantity received", type: "number", required: true },
    { name: "tank", label: "Tank", type: "select", options: tanks, required: true },
    { name: "invoice", label: "Invoice number", required: true },
    { name: "purchaseRate", label: "Purchase rate", type: "number", required: true },
    { name: "vehicle", label: "Driver / vehicle details" },
    { name: "notes", label: "Notes", type: "textarea" },
  ],
  sales: [
    { name: "date", label: "Date", type: "date", required: true },
    { name: "shift", label: "Shift", type: "select", options: shifts, required: true },
    { name: "cashSales", label: "Cash sales", type: "number", required: true },
    { name: "cardSales", label: "Card sales", type: "number", required: true },
    { name: "creditSales", label: "Credit sales", type: "number", required: true },
    { name: "cashInHand", label: "Cash in hand", type: "number", required: true },
  ],
  mobilOil: [
    { name: "date", label: "Date", type: "date", required: true },
    { name: "productName", label: "Product name", required: true },
    { name: "quantity", label: "Quantity sold", type: "number", required: true },
    { name: "purchasePrice", label: "Purchase price", type: "number", required: true },
    { name: "sellingPrice", label: "Selling price", type: "number", required: true },
    { name: "staffMember", label: "Staff member", type: "select", options: staff.map((person) => person.name), required: true },
  ],
  expense: [
    { name: "date", label: "Date", type: "date", required: true },
    { name: "category", label: "Category", type: "select", options: ["Utilities", "Maintenance", "Staff", "Office", "Other"], required: true },
    { name: "amount", label: "Amount", type: "number", required: true },
    { name: "paidBy", label: "Paid by", type: "select", options: ["Owner", "Manager", "Cashier"], required: true },
    { name: "description", label: "Description", type: "textarea", required: true },
    { name: "receipt", label: "Receipt upload placeholder", type: "file" },
  ],
  creditCustomer: [
    { name: "customerName", label: "Customer name", required: true },
    { name: "vehicleNumber", label: "Vehicle number", required: true },
    { name: "product", label: "Product", type: "select", options: ["Hi Super", "HOBC", "Diesel"], required: true },
    { name: "litres", label: "Litres", type: "number", required: true },
    { name: "amount", label: "Amount", type: "number", required: true },
    { name: "status", label: "Payment status", type: "select", options: ["Due", "Partial", "Paid"], required: true },
    { name: "dueDate", label: "Due date", type: "date", required: true },
  ],
};

export const quickStats = [
  { label: "Top dispenser", value: "Dispenser 3", icon: Car },
  { label: "Top nozzle", value: "D3 / Nozzle 1", icon: Droplets },
  { label: "Recommended fuel order", value: "18,000 L HOBC", icon: Fuel },
  { label: "Low stock warning", value: "HOBC below safe level", icon: AlertTriangle },
];

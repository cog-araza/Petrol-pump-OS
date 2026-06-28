# PetrolPumpOS

PetrolPumpOS is a frontend-first petrol pump ERP and analytics prototype for **PGL / PARCO Gunvor Limited**. It is built for Shahid Mohsin as a premium working V1 interface for station operations, finance, inventory, reports, and forecasting previews.

This version uses realistic dummy data only. It does not include a real backend, database, authentication system, or live AI.

## Included

- Multi-branch app shell with branch switching
- Mock role structure: Super Admin, Owner, Manager, Cashier, Staff/Filler
- Dashboard overview with revenue, litres, product sales, cash/card/credit, profit, tank levels, alerts, and recommendations
- Login screen with mock role selector
- Shift management
- Nozzle readings entry with auto-calculated litres and amount
- Tank dip readings
- Fuel deliveries / stock-in with total cost preview
- Sales entry with cash/card/credit totals and cash difference
- Mobil oil sales with profit calculation
- Expenses with receipt upload placeholder
- Credit customer ledger
- Inventory and tank stock views
- Reports library and report preview table
- Forecasting preview with dummy demand data
- Staff management
- Branch/station management
- Settings preview

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Recharts
- Lucide React icons
- Local mock data

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Production Build

```bash
npm run build
npm start
```

## Project Control Room

Use GitHub and Git as the control room for PetrolPumpOS.

- `main` is the stable working version.
- `dev` is the testing and integration version.
- `feature/dashboard` is for dashboard work.
- `feature/data-entry` is for pump data entry workflows.
- `feature/forecasting` is for demand forecasting and AI planning.
- Codex should work on one feature branch at a time.
- Feature branches merge into `dev` after they work.
- `dev` merges into `main` only after it is stable.
- Never make risky or direct feature edits on `main`.

## Project Structure

```text
app/                    Next.js routes
components/charts/       Recharts visualizations
components/dashboard/    Dashboard widgets
components/forms/        Data-entry and module page components
components/shell/        Sidebar, top bar, branch and role selectors
components/ui/           Cards, badges, buttons, tables
data/                    Dummy station, sales, inventory, staff, and forecast data
lib/                     Formatting and utility helpers
types/                   Shared TypeScript types
```

## Important

All values, customers, staff names, alerts, forecasts, and station records are sample data. Replace them only after a real database and access-control layer are designed.

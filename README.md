# PetrolPumpOS Landing Page

A responsive product website and dashboard concept for **PetrolPumpOS**, an AI-powered petrol pump operating system for fuel station businesses in Pakistan.

This repository contains the public-facing landing page only. Dashboard metrics are illustrative and no customer data is used. There is no backend, database, authentication, or live AI integration yet.

## Included

- Responsive SaaS landing page
- Product problem and solution narrative
- Ten platform feature modules
- Detailed dashboard preview with mock data
- AI intelligence concept
- 90-day implementation roadmap
- Business benefits and contact footer
- Reusable React components and SVG icon system

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

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
app/
  globals.css          Global theme and Tailwind styles
  layout.tsx           Metadata and root layout
  page.tsx             Landing page composition
components/
  benefits.tsx
  dashboard-preview.tsx
  features.tsx
  footer.tsx
  header.tsx
  hero.tsx
  intelligence.tsx
  problem-solution.tsx
  roadmap.tsx
  ui.tsx               Shared icons and section heading
```

## Important

All dashboard values, station names, alerts, and forecasts are dummy examples. Replace the contact placeholder in `components/footer.tsx` before publishing.

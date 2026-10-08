# Architecture — Evolvo Web

## Intent

Evolvo Web is a Vite React marketing experience featuring services, case study listing/detail, contact, and thank-you flows — a lighter SPA sibling to the Next.js Evolvo site.

## System shape

Client-side routed SPA optimized for static hosting on Vercel.

## Stack decisions

- React
- Vite
- TypeScript
- TanStack Query
- Tailwind + shadcn/ui
- GSAP

## Boundaries

- Secrets stay in environment variables / secret managers — never in git.
- Client bundles only receive public configuration (`NEXT_PUBLIC_*` / `VITE_*`).
- Tenant or role checks belong in middleware / server layers, not UI-only gates.
- Heavy or long-running work should not run inside short-lived serverless handlers unless designed for it.

## Quality bar

- Prefer typed contracts at API and domain boundaries.
- Ship a vertical slice (auth → persisted outcome) before a broad feature surface.
- Document trade-offs in PRs when changing data models or auth.


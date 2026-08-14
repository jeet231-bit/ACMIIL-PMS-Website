# ACE PMS Website

Marketing site for **ACMIIL Portfolio Management Services** — a GARP-driven PMS,
the Asit C. Mehta heritage reimagined by the Pantomath Group.

A multi-page React single-page application built with Vite, TypeScript, Tailwind CSS
and React Router.

## Pages

Home · About · Philosophy & Process · Strategies · Performance · Why ACE PMS ·
Insights & Media · Resources · Contact

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server on http://localhost:3000
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # type-check with tsc
```

## Tech stack

- React 19 + React Router 7
- Vite 6
- Tailwind CSS 4
- lucide-react (icons)

## Content & data

All marketing copy and figures live in [`src/data/content.ts`](src/data/content.ts),
sourced from the ACE PMS content revamp deck (figures as on 30 June 2026). Several
data points (alpha figures, leadership titles, registration numbers, fee schedule) are
pending management/compliance confirmation before go-live.

## Notes

- Forms are front-end only (toast confirmations); no backend is wired up yet.
- Factsheet / resource downloads are placeholders pending the actual PDF assets.

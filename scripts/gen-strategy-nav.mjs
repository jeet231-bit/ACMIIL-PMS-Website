/*
 * Generates src/data/strategyNav.json from data/strategy-nav.xlsx.
 *
 * The Excel holds daily rebased NAV (₹1 at inception) for each strategy and its
 * benchmark. This downsamples to a clean monthly series so the "Since-inception
 * value expansion" chart shows REAL movement (not a smooth curve).
 *
 * Runs automatically on `npm run build` (prebuild). To refresh the graph, drop
 * the new month's spreadsheet in as data/strategy-nav.xlsx and push — Vercel
 * rebuilds and the chart updates. Run locally with `npm run gen:nav`.
 *
 * Non-fatal by design: if the Excel is missing/unreadable, the previously
 * committed strategyNav.json is left untouched and the build continues.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(dir, '..');
const SRC = path.join(ROOT, 'data', 'strategy-nav.xlsx');
const OUT = path.join(ROOT, 'src', 'data', 'strategyNav.json');

// Excel column layout: Date | Multicap | Bse500 | MultiAsset | NiftyMA | TenTrillion | Bluechip | Bse500
const MAP = { multicap: [1, 2], multiasset: [3, 4], tentrillion: [5, 7] };

const serialToDate = (n) => new Date(Date.UTC(1899, 11, 30) + Math.round(n) * 86400000);
const ym = (d) => `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;

async function main() {
  if (!fs.existsSync(SRC)) {
    console.warn(`[gen-strategy-nav] ${SRC} not found — keeping existing strategyNav.json`);
    return;
  }
  const xlsx = (await import('xlsx')).default;
  const wb = xlsx.readFile(SRC);
  const rows = xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, raw: true, blankrows: false });
  const data = rows.slice(1).filter((r) => typeof r[0] === 'number');

  const strategies = {};
  for (const [key, [sCol, bCol]] of Object.entries(MAP)) {
    const byMonth = new Map();
    for (const r of data) {
      const sv = r[sCol];
      if (sv === null || sv === undefined || sv === '') continue;
      const d = serialToDate(r[0]);
      byMonth.set(ym(d), { d, s: Number(sv), b: Number(r[bCol]) });
    }
    const months = [...byMonth.values()].sort((a, b) => a.d - b.d);
    if (!months.length) continue;
    const s0 = months[0].s;
    const b0 = months[0].b;
    strategies[key] = {
      since: months[0].d.toISOString().slice(0, 10),
      asOf: months[months.length - 1].d.toISOString().slice(0, 10),
      points: months.map((m) => [
        Math.round((m.s / s0) * 10000) / 10000,
        Math.round((m.b / b0) * 10000) / 10000,
      ]),
    };
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ source: 'data/strategy-nav.xlsx', strategies }));
  const n = Object.entries(strategies)
    .map(([k, v]) => `${k}:${v.points.length}`)
    .join(' ');
  console.log(`[gen-strategy-nav] wrote ${path.relative(ROOT, OUT)} (${n})`);
}

main().catch((err) => {
  console.warn('[gen-strategy-nav] failed, keeping existing JSON:', err.message);
});

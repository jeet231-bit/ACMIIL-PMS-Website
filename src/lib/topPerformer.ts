import strategyNav from '../data/strategyNav.json';
import { STRATEGIES } from '../data/content';

// Latest-month return per strategy from the month-end NAV series, used to flag
// the current top monthly performer (the ★). Refreshes automatically whenever
// the NAV data is updated.
const NAV = strategyNav.strategies as Record<string, { points: number[][] }>;

function lastMonthReturn(id: string): number {
  const pts = NAV[id]?.points;
  if (!pts || pts.length < 2) return -Infinity;
  const last = pts[pts.length - 1]?.[0];
  const prev = pts[pts.length - 2]?.[0];
  return prev && prev > 0 ? last / prev - 1 : -Infinity;
}

export const TOP_MONTHLY_STRATEGY_ID: string = STRATEGIES.reduce(
  (best, s) => (lastMonthReturn(s.id) > lastMonthReturn(best) ? s.id : best),
  STRATEGIES[0].id,
);

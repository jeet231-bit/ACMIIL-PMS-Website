import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Download } from 'lucide-react';
import { STRATEGIES, PERFORMANCE } from '../data/content';
import { Disclaimer } from './shared';
import { useToast } from './toast';

const PERIOD_LABELS = ['1 Year', '3 Years', '5 Years', 'Since Inception'];

// Data-driven compounding growth curves (₹1 cr → end value) for the SVG chart.
// value(f) = end^f, so both lines start at ₹1 cr (f=0) and reach their actual
// since-inception value (f=1). The strategy line sets the y-scale.
function buildGrowthChart(sEnd: number, bEnd: number) {
  const N = 32;
  const x0 = 8;
  const x1 = 492;
  const yBottom = 186;
  const yTop = 16;
  const maxV = sEnd;
  const yFor = (v: number) => yBottom - ((v - 1) / (maxV - 1)) * (yBottom - yTop);
  const xFor = (f: number) => x0 + f * (x1 - x0);
  const s: Array<[number, number]> = [];
  const b: Array<[number, number]> = [];
  for (let i = 0; i <= N; i++) {
    const f = i / N;
    s.push([xFor(f), yFor(Math.pow(sEnd, f))]);
    b.push([xFor(f), yFor(Math.pow(bEnd, f))]);
  }
  const toPath = (pts: Array<[number, number]>) =>
    pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const sPath = toPath(s);
  return {
    sPath,
    bPath: toPath(b),
    sArea: `${sPath} L ${x1},${yBottom} L ${x0},${yBottom} Z`,
    start: s[0],
    sEndPt: s[s.length - 1],
    bEndPt: b[b.length - 1],
  };
}

interface StrategyShowcaseProps {
  eyebrow: string;
  title: string;
  lead: string;
  /** Seed the active tab (e.g. from a URL param). */
  initialTabId?: string;
  /** Fired when the user switches tabs — lets a parent sync the URL. */
  onTabChange?: (id: string) => void;
  /** Teaser mode: trims the tallest blocks and links out to the full page. */
  compact?: boolean;
}

// The interactive strategy showcase: tab selector, left objectives card,
// right analytics card (growth chart + compound values + returns). Shared by
// the Strategies page and the home page.
export const StrategyShowcase: React.FC<StrategyShowcaseProps> = ({
  eyebrow,
  title,
  lead,
  initialTabId,
  onTabChange,
  compact = false,
}) => {
  const showToast = useToast();
  const [activeId, setActiveId] = useState<string>(
    initialTabId && STRATEGIES.some((s) => s.id === initialTabId)
      ? initialTabId
      : STRATEGIES[0].id
  );

  useEffect(() => {
    if (initialTabId && STRATEGIES.some((s) => s.id === initialTabId)) {
      setActiveId(initialTabId);
    }
  }, [initialTabId]);

  const selectTab = (id: string) => {
    setActiveId(id);
    onTabChange?.(id);
  };

  const active = STRATEGIES.find((s) => s.id === activeId) || STRATEGIES[0];
  const perf = PERFORMANCE.tables.find((t) => t.strategy === active.name);
  const benchmarkName =
    perf?.benchmarkName ?? active.keyFacts.find((f) => f.k === 'Benchmark')?.v ?? 'Benchmark';
  const chart = buildGrowthChart(active.growth.strategyValue, active.growth.benchmarkValue);
  // Rendered y (px) of a viewBox y within the h-56 (224px) SVG, offset by pt-4 (16px).
  const topPx = (vy: number) => 16 + (vy / 200) * 224;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header with tab selector */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-accent-600 tracking-widest uppercase block font-mono">
            {eyebrow}
          </span>
          <h2 className="font-extrabold tracking-tight text-slate-900 text-3xl sm:text-4xl">
            {title}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light max-w-xl">{lead}</p>
        </div>

        {/* Strategy selection tabs */}
        <div className="flex flex-wrap gap-2 shrink-0 sm:justify-end">
          {STRATEGIES.map((s) => (
            <button
              key={s.id}
              onClick={() => selectTab(s.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-200 focus:outline-none text-center ${
                activeId === s.id
                  ? 'bg-ink-900 border-ink-900 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {s.name.replace('ACE ', '').replace(' Opportunities', '')}
              {s.tag === 'Flagship' && (
                <span className="ml-1.5 text-[9px] text-amber-400 font-mono">★</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div key={active.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
        {/* Left objectives card — 5 cols */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/60 shadow-sm space-y-6">
          <div className="space-y-1.5 pb-4 border-b border-slate-200">
            <h3 className="font-extrabold tracking-tight text-slate-900 text-xl sm:text-2xl">
              {active.name}
            </h3>
            <span className="text-xs text-slate-500 italic font-light block">
              &ldquo;{active.tagline}&rdquo;
            </span>
          </div>

          {/* Positioning points as check-cards */}
          <div className="space-y-2.5">
            {active.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-2.5 p-3 bg-white rounded-xl border border-slate-100 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs font-medium text-slate-700 leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Key facts grid */}
          <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-5 text-xs">
            {active.keyFacts.map((fact) => (
              <div key={fact.k}>
                <span className="text-slate-400 block font-mono text-[9px] uppercase">{fact.k}</span>
                <span className="font-extrabold text-slate-900">{fact.v}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              onClick={() =>
                showToast(
                  `The latest ${active.name} factsheet will be available for download from the Resources section.`
                )
              }
              className="flex-1 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-ink-900 hover:bg-ink-800 transition inline-flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Download factsheet
            </button>
            <Link
              to="/contact"
              className="flex-1 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-accent-500 hover:bg-accent-600 transition text-center"
            >
              Request a callback
            </Link>
          </div>
        </div>

        {/* Right analytics card — 7 cols */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Growth simulation chart */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-2 border-b border-slate-100 gap-2">
              <div>
                <span className="text-[10px] text-slate-400 block font-mono uppercase font-bold">
                  SINCE-INCEPTION VALUE EXPANSION
                </span>
                <span className="text-xs text-slate-500">
                  Illustrative growth of ₹1 crore at actual since-inception CAGR
                </span>
              </div>
              <div className="flex gap-4 text-xs font-mono font-bold">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent-500"></span>
                  <span>{active.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-slate-300"></span>
                  <span>{benchmarkName}</span>
                </div>
              </div>
            </div>

            <div className="relative pt-4">
              <svg className="w-full h-56" viewBox="0 0 500 200" preserveAspectRatio="none">
                {/* Background grid */}
                <line x1="0" y1="16" x2="500" y2="16" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="59" x2="500" y2="59" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="101" x2="500" y2="101" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="143" x2="500" y2="143" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="186" x2="500" y2="186" stroke="#f1f5f9" strokeWidth="1" />

                <defs>
                  <linearGradient id="strategyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E4611F" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#E4611F" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Strategy area + benchmark + strategy lines (data-driven) */}
                <path d={chart.sArea} fill="url(#strategyGrad)" />
                <path d={chart.bPath} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4" />
                <path d={chart.sPath} fill="none" stroke="#E4611F" strokeWidth="3" />

                <circle cx={chart.start[0]} cy={chart.start[1]} r="3.5" fill="#94a3b8" />
                <circle cx={chart.bEndPt[0]} cy={chart.bEndPt[1]} r="4" fill="#94a3b8" />
                <circle cx={chart.sEndPt[0]} cy={chart.sEndPt[1]} r="5" fill="#E4611F" stroke="#ffffff" strokeWidth="2" />
              </svg>

              {/* Start-value label at inception — mirrors the end-value labels */}
              <span
                className="absolute left-1 -translate-y-1/2 text-[11px] font-bold text-slate-500 bg-white/85 px-1 rounded"
                style={{ top: topPx(chart.start[1]) - 14 }}
              >
                ₹1 Cr
              </span>

              {/* End-value labels, aligned to each line's end */}
              <span
                className="absolute right-1 -translate-y-1/2 text-xs font-extrabold text-accent-600 bg-white/85 px-1 rounded"
                style={{ top: topPx(chart.sEndPt[1]) }}
              >
                {active.growth.strategy}
              </span>
              <span
                className="absolute right-1 -translate-y-1/2 text-[11px] font-bold text-slate-400 bg-white/85 px-1 rounded"
                style={{ top: topPx(chart.bEndPt[1]) }}
              >
                {active.growth.benchmark}
              </span>

              <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono mt-2 uppercase">
                <span>Inception</span>
                <span>As on {active.asOn}</span>
              </div>
            </div>

            {/* Compound value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <span className="text-[9px] text-accent-700 font-mono tracking-wider font-bold block uppercase">
                  {active.name}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-950 block mt-0.5">
                  {active.growth.strategy}
                </span>
                <span className="text-[10px] text-slate-500 font-medium font-mono">
                  At {active.growth.strategyCagr}% since-inception CAGR*
                </span>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <span className="text-[9px] text-slate-400 font-mono block uppercase font-bold">
                  {benchmarkName}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-700 block mt-0.5">
                  {active.growth.benchmark}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  At {active.growth.benchmarkCagr}% since-inception CAGR
                </span>
              </div>
            </div>
          </div>

          {/* Returns across horizons */}
          {perf && (
            <div className="space-y-3.5 border-t border-slate-100 pt-5">
              {/* Full tile grid — full view only */}
              {!compact && (
                <>
                  <div className="flex justify-between items-center gap-3 flex-wrap">
                    <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase block font-bold">
                      RETURNS ACROSS HORIZONS (CAGR %)
                    </span>
                    <span className="text-[10px] text-slate-400 italic">As on {active.asOn}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PERIOD_LABELS.map((label, i) => (
                      <div
                        key={label}
                        className="p-3 rounded-xl border bg-slate-50/60 border-slate-100 flex flex-col justify-between"
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-xs font-semibold text-slate-900 block">{label}</span>
                          <span className="text-xs font-extrabold tracking-tight text-slate-900">
                            {perf.rows.portfolio[i].toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200/60 h-1.5 rounded-full overflow-hidden mt-2">
                          <div
                            className="h-full rounded-full bg-accent-500 transition-all duration-300"
                            style={{
                              width: `${Math.min(Math.max((perf.rows.portfolio[i] / 30) * 100, 4), 100)}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono mt-1.5 block">
                          vs {perf.rows.benchmark[i].toFixed(1)}% benchmark · +
                          {perf.rows.alpha[i].toFixed(1)}% alpha
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <p className="text-[11px] text-slate-500 font-light leading-relaxed pt-1">
                {active.performanceNote}{' '}
                <Link to="/performance" className="font-bold text-ink-700 hover:text-accent-600">
                  See the Performance page →
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>

      {compact ? (
        <div className="mt-10 text-center">
          <Link
            to="/strategies"
            className="text-xs font-bold text-ink-700 inline-flex items-center gap-1.5 border-b-2 border-accent-500 pb-0.5 hover:text-accent-600 transition"
          >
            Compare all our strategies in full detail →
          </Link>
        </div>
      ) : (
        <Disclaimer>
          Growth-of-₹1-crore curves reflect each strategy's actual since-inception CAGR. ACE
          Multicap & ACE Ten Trillion as on 31 July 2026; ACE Multi-Asset as on 30 June 2026. Past
          performance is not indicative of future results and is subject to market risk. See the
          Performance page for methodology and full disclosures.
        </Disclaimer>
      )}
    </div>
  );
};

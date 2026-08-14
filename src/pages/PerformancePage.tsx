import { PERFORMANCE } from '../data/content';
import { PageHero, SectionHeading, Disclaimer } from '../components/shared';

const PERIODS = ['1 Yr', '3 Yr', '5 Yr', 'Since Incep.'];

const fmt = (v: number) => `${v.toFixed(1)}%`;

export default function PerformancePage() {
  return (
    <>
      <PageHero
        eyebrow="PERFORMANCE"
        title={
          <>
            Consistency <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">Delivered</span>
          </>
        }
      />

      {/* Strategy performance tables */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Performance (TWRR)" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PERFORMANCE.tables.map((table) => (
              <div
                key={table.strategy}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm"
              >
                <div className="flex justify-between items-baseline mb-4 gap-3 flex-wrap">
                  <h3 className="font-extrabold text-lg text-slate-900">
                    {table.strategy}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-mono">({table.since})</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-xs font-sans min-w-[420px]">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 font-medium font-mono uppercase tracking-widest text-[9px]">
                        <th className="py-2.5 px-3"></th>
                        {PERIODS.map((p) => (
                          <th key={p} className="py-2.5 px-3 text-right">
                            {p}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/70 text-slate-700">
                      <tr>
                        <td className="py-3 px-3 font-bold text-slate-900">Portfolio</td>
                        {table.rows.portfolio.map((v, i) => (
                          <td key={i} className="py-3 px-3 text-right font-mono font-semibold text-slate-900">
                            {fmt(v)}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="py-3 px-3 text-slate-500">{table.benchmarkName}</td>
                        {table.rows.benchmark.map((v, i) => (
                          <td key={i} className="py-3 px-3 text-right font-mono text-slate-500">
                            {fmt(v)}
                          </td>
                        ))}
                      </tr>
                      <tr className="bg-slate-200/70">
                        <td className="py-3 px-3 font-bold text-ink-900 font-mono uppercase text-[10px] tracking-wider rounded-l-lg">
                          Alpha
                        </td>
                        {table.rows.alpha.map((v, i) => (
                          <td
                            key={i}
                            className={`py-3 px-3 text-right font-mono font-bold ${
                              i === table.rows.alpha.length - 1 ? 'rounded-r-lg' : ''
                            } ${v >= 0 ? 'text-accent-600' : 'text-rose-600'}`}
                          >
                            {v >= 0 ? '+' : ''}
                            {fmt(v)}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <Disclaimer>{PERFORMANCE.tableNote}</Disclaimer>
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import { TrendingUp, FileText, ArrowRight } from 'lucide-react';
import { PERFORMANCE, REGULATORY } from '../data/content';
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
            Performance, <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">in full</span>
          </>
        }
        lead={PERFORMANCE.intro.body}
      />

      {/* Strategy performance tables */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TIME-WEIGHTED LEDGER"
            title="Strategy performance (CAGR %, as on 30 June 2026)"
          />
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
                      <tr className="bg-ink-900 text-white">
                        <td className="py-3 px-3 font-bold text-amber-400 font-mono uppercase text-[10px] tracking-wider rounded-l-lg">
                          Alpha
                        </td>
                        {table.rows.alpha.map((v, i) => (
                          <td
                            key={i}
                            className={`py-3 px-3 text-right font-mono font-bold ${
                              i === table.rows.alpha.length - 1 ? 'rounded-r-lg' : ''
                            } ${v >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}
                          >
                            +{fmt(v)}
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

      {/* Growth of ₹1 crore */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="GROWTH OF ₹1 CRORE"
            title="What ₹1 crore at inception became"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PERFORMANCE.growth.map((g) => (
              <div
                key={g.strategy}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-3 text-center"
              >
                <div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center border border-emerald-100 mx-auto">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">{g.strategy}</h4>
                <span className="text-xl font-extrabold text-ink-700 block tracking-tight">
                  {g.value}
                </span>
                <span className="text-[11px] text-slate-500 font-mono block">{g.benchmark}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] text-slate-400 italic mt-6">
            {PERFORMANCE.growthNote}
          </p>
        </div>
      </section>

      {/* Rolling returns */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CONSISTENCY OVER CYCLES"
            title={PERFORMANCE.rolling.title}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PERFORMANCE.rolling.items.map((item) => (
              <div
                key={item}
                className="border-l-2 border-accent-500 pl-5 py-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PMS Bazaar rankings */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="RECOGNITION" title={PERFORMANCE.rankings.title} center />
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs font-sans min-w-[520px]">
                <thead>
                  <tr className="bg-ink-700 text-white font-mono uppercase tracking-widest text-[9px]">
                    {PERFORMANCE.rankings.header.map((h, i) => (
                      <th
                        key={h}
                        className={`py-3 px-4 ${i === 0 ? 'rounded-l-lg' : 'text-center'} ${
                          i === PERFORMANCE.rankings.header.length - 1 ? 'rounded-r-lg' : ''
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {PERFORMANCE.rankings.rows.map((row) => (
                    <tr key={row[0]} className="hover:bg-slate-50/60 transition">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{row[0]}</td>
                      {row.slice(1).map((cell, i) => (
                        <td key={i} className="py-3.5 px-4 text-center font-mono">
                          {cell.startsWith('1 /') ? (
                            <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-bold text-[10px]">
                              {cell}
                            </span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Disclaimer>{PERFORMANCE.rankings.note}</Disclaimer>
          </div>
        </div>
      </section>

      {/* Full disclosures */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-8 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-ink-50 rounded-lg text-ink-700">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-xl text-slate-900">Full disclosures</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
              {PERFORMANCE.intro.body}
            </p>
            <p className="text-xs text-slate-500 font-light leading-relaxed">*{REGULATORY.footnote}</p>
            <Link
              to="/resources"
              className="text-xs font-bold text-ink-700 inline-flex items-center gap-1.5 border-b-2 border-accent-500 pb-0.5 hover:text-accent-600 transition"
            >
              Monthly factsheets &amp; disclosure documents in Resources{' '}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

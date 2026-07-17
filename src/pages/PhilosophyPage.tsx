import { Link } from 'react-router-dom';
import {
  Check,
  X,
  Anchor,
  Zap,
  ArrowRight,
  ShieldAlert,
  Scale,
} from 'lucide-react';
import { PHILOSOPHY_PAGE, GARP_TEASER } from '../data/content';
import { PhilosophyPillars } from '../components/PhilosophyPillars';
import { PageHero, SectionHeading } from '../components/shared';

export default function PhilosophyPage() {
  const P = PHILOSOPHY_PAGE;

  return (
    <>
      <PageHero
        eyebrow="PHILOSOPHY & PROCESS"
        title={
          <>
            Growth at a <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">Reasonable</span> Price
          </>
        }
        lead={P.heroBody}
      />

      {/* Six beliefs */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR SIX BELIEFS"
            title="What we believe before we invest"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {P.beliefs.map((belief, idx) => (
              <div
                key={belief}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
              >
                <span className="font-mono text-[11px] text-accent-600 border border-slate-200 w-8 h-8 rounded-lg grid place-items-center font-semibold bg-white shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed pt-1">
                  {belief}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four pillars — dual-engine style */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="THE FOUR MANDATED PILLARS"
            title="Non-negotiable thresholds for every company we own"
            lead={GARP_TEASER.body}
            center
          />
          <PhilosophyPillars />
        </div>
      </section>

      {/* Core–Satellite framework */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FRAMEWORK" title={P.coreSatellite.title} center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-ink-900 text-white rounded-2xl p-8 space-y-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/10 rounded-lg text-amber-400">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base uppercase tracking-wide">
                    {P.coreSatellite.core.title}
                  </h4>
                </div>
                <p className="text-xs text-ink-100/70 leading-relaxed font-light">
                  {P.coreSatellite.core.body}
                </p>
              </div>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-accent-50 rounded-lg text-accent-600">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-900 uppercase tracking-wide">
                  {P.coreSatellite.satellite.title}
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                {P.coreSatellite.satellite.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process stepper */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PROCESS: INSTITUTIONALISED DNA"
            title={P.process.title}
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {P.process.steps.map((step, idx) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl border-t-2 border-ink-700 border-x border-b border-slate-200/60 p-5 space-y-2 shadow-sm"
              >
                <span className="font-mono text-accent-600 text-xs tracking-widest font-bold">
                  STAGE 0{idx + 1}
                </span>
                <h4 className="font-extrabold text-base text-slate-900 min-h-[48px]">
                  {step.title}
                </h4>
                <p className="text-[11px] text-slate-500 font-light leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[11px] text-slate-400 italic mt-8">{P.process.note}</p>
        </div>
      </section>

      {/* Screening funnel */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SCREENING: FROM 1,000 TO 25"
            title={P.screening.title}
            lead={P.screening.intro}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {P.screening.filters.map((filter, idx) => (
              <div
                key={filter.title}
                className="flex items-start gap-3.5 p-5 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <span className="font-mono text-[11px] text-white bg-ink-700 w-8 h-8 rounded-lg grid place-items-center font-semibold shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{filter.title}</h4>
                  <p className="text-xs text-slate-500 font-light mt-1 leading-relaxed">
                    {filter.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry/exit + Risk */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-ink-50 rounded-lg text-ink-700">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-xl text-slate-900">
                  {P.entryExit.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                {P.entryExit.body}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-700">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-xl text-slate-900">{P.risk.title}</h3>
              </div>
              <div className="space-y-2.5">
                {P.risk.items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs text-slate-700 font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="AVOIDING PITFALLS" title={P.avoid.title} center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {P.avoid.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
              >
                <div className="h-5 w-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3 h-3" />
                </div>
                <span className="text-xs text-slate-700 font-light leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/strategies"
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-accent-500 hover:bg-accent-600 transition inline-flex items-center gap-1.5"
            >
              See the strategies this powers <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

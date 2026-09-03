import { Link } from 'react-router-dom';
import {
  Check,
  X,
  Anchor,
  Zap,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import { PHILOSOPHY_PAGE } from '../data/content';
import { PageHero, SectionHeading } from '../components/shared';
import { ScaleFramework } from '../components/ScaleFramework';

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

      {/* The ACE SCALE framework — orbital */}
      <ScaleFramework />

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

      {/* Risk & discipline — embedded guardrails + what we avoid */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="RISK & DISCIPLINE"
            title="Guardrails we hold, and the traps we avoid"
            center
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Embedded risk limits */}
            <div className="bg-ink-900 text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/10 rounded-lg text-emerald-300">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-lg leading-tight">{P.risk.title}</h3>
                </div>
                <div className="space-y-2.5 pt-1">
                  {P.risk.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="h-5 w-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-ink-100/80 font-light leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What we avoid */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-rose-50 rounded-lg text-rose-500">
                  <X className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 leading-tight">{P.avoid.title}</h3>
              </div>
              <div className="space-y-2.5 pt-1">
                {P.avoid.items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="h-5 w-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </div>
                    <span className="text-xs text-slate-700 font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
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

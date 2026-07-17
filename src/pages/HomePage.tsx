import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  HERO,
  CREDIBILITY_BAR,
  HERITAGE,
  GARP_TEASER,
  TRACK_RECORD,
  WHY_PILLARS,
  PMS_EXPLAINER,
  GETTING_STARTED,
  INSIGHT_PLACEHOLDERS,
  FAQS,
} from '../data/content';
import { PhilosophyPillars } from '../components/PhilosophyPillars';
import { SchedulerCta } from '../components/SchedulerCta';
import { StrategyShowcase } from '../components/StrategyShowcase';
import { SectionHeading, Disclaimer } from '../components/shared';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ============ HERO — split layout with comparison engine ============ */}
      <section className="relative bg-[#FAFAFA] pt-12 pb-24 overflow-hidden border-b border-slate-100 font-sans">
        {/* Ambient background styling */}
        <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none opacity-30">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-ink-50">
            <path d="M0,0 L100,0 L100,100 C80,80 60,95 0,80 Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-ink-50/60 via-accent-50/30 to-transparent rounded-full filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-700/5 border border-ink-700/10 mb-8 mt-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[10px] font-bold text-slate-700 tracking-wider uppercase font-mono">
              {HERO.eyebrow}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] text-slate-950">
                Portfolio{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">
                  Alpha
                </span>
                , Built on Discipline.
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                {HERO.subheadline}
              </p>

              {/* Sub features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2 pt-2">
                {HERO.proofStrip.map((item, idx) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 text-xs text-slate-700 font-medium font-mono"
                  >
                    <span
                      className={`h-2 w-2 rounded-full shrink-0 ${
                        idx < 2 ? 'bg-accent-500' : 'bg-slate-400'
                      }`}
                    ></span>
                    {item.value} — {item.label}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 pt-4">
                <Link
                  to="/strategies"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-ink-900 shadow-xl hover:shadow-2xl hover:bg-ink-800 transition-all duration-300 text-center flex items-center justify-center gap-2 focus:outline-none"
                >
                  <span>{HERO.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl text-xs font-semibold bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition duration-200 text-center focus:outline-none shadow-sm flex items-center justify-center"
                >
                  {HERO.secondaryCta}
                </Link>
              </div>
            </div>

            {/* Right graphical stat core */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="bg-ink-900 text-white rounded-2xl p-6 shadow-2xl border border-ink-800 space-y-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-pattern"></div>

                {/* Header widget */}
                <div className="flex justify-between items-center pb-4 border-b border-ink-800">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-ink-200/70 font-mono tracking-widest uppercase">
                      ACMIIL STRATEGY COMPARISON
                    </span>
                  </div>
                  <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2.5 py-0.5 rounded font-mono">
                    AS ON 30 JUN 2026
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1 text-ink-200/70">
                      <span>ACE Multicap CAGR (Since inception)</span>
                      <span className="font-bold text-white">18.6%</span>
                    </div>
                    <div className="w-full bg-ink-800 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-accent-500 h-full rounded-full transition-all duration-1000"
                        style={{ width: '84%' }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1 text-ink-200/70">
                      <span>BSE 500 TRI Benchmark CAGR</span>
                      <span className="font-bold text-ink-100">12.5%</span>
                    </div>
                    <div className="w-full bg-ink-800 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-ink-400 h-full rounded-full transition-all duration-1000"
                        style={{ width: '56%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-ink-800/50 rounded-xl p-4 border border-ink-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-ink-200/70 font-mono block uppercase">
                      Since-inception Alpha
                    </span>
                    <span className="text-lg font-bold text-white">+6.2% Alpha*</span>
                  </div>
                  <div className="h-10 w-10 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
                    <BarChart3 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>

                <div className="text-[10px] text-ink-200/60 text-center italic">
                  Underwritten by four decades of institutional trust &amp; stewardship.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Credibility metrics strip ============ */}
      <section className="bg-white border-b border-slate-200/80 py-8 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {CREDIBILITY_BAR.map((item) => (
              <div key={item.label} className="space-y-1 p-2">
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase block font-bold">
                  {item.label}
                </span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                    {item.value}
                  </span>
                  {item.suffix && (
                    <span className="text-sm sm:text-base font-bold text-amber-600">
                      {item.suffix}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 leading-normal font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Heritage, reimagined ============ */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE HERITAGE, REIMAGINED"
            title="Two strengths, one Portfolio Management Service"
            lead={HERITAGE.body}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-2">
              <span className="text-[10px] font-bold text-accent-600 tracking-widest uppercase font-mono block">
                HERITAGE
              </span>
              <h3 className="font-extrabold text-xl text-slate-900">
                Trust &amp; Legacy of ACMIIL
              </h3>
              <p className="text-xs text-slate-500 font-light">40+ years in Indian capital markets.</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-2">
              <span className="text-[10px] font-bold text-accent-600 tracking-widest uppercase font-mono block">
                ENERGY
              </span>
              <h3 className="font-extrabold text-xl text-slate-900">
                Research &amp; Execution of Pantomath
              </h3>
              <p className="text-xs text-slate-500 font-light">AIFs · research · execution.</p>
            </div>
            <div className="bg-ink-900 rounded-2xl border border-ink-800 p-6 shadow-md space-y-2 text-white">
              <span className="text-[10px] font-bold text-amber-400 tracking-widest uppercase font-mono block">
                RESULT
              </span>
              <h3 className="font-extrabold text-xl">A sharper, stronger PMS</h3>
              <p className="text-xs text-ink-100/70 font-light">More value for every investor.</p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              to="/about"
              className="text-xs font-bold text-ink-700 inline-flex items-center gap-1.5 border-b-2 border-accent-500 pb-0.5 hover:text-accent-600 transition"
            >
              Read our story <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ Philosophy — 4 pillars in dual-engine card style ============ */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-[10px] font-bold text-accent-600 tracking-widest uppercase block font-mono">
              THE FOUR MANDATED PILLARS
            </span>
            <h2 className="font-extrabold tracking-tight text-slate-900 text-3xl sm:text-4xl">
              Every company in our portfolios must pass these non-negotiable thresholds
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
              {GARP_TEASER.body}
            </p>
          </div>

          <PhilosophyPillars />

          <div className="mt-10 text-center">
            <Link
              to="/philosophy"
              className="text-xs font-bold text-ink-700 inline-flex items-center gap-1.5 border-b-2 border-accent-500 pb-0.5 hover:text-accent-600 transition"
            >
              How we invest — Philosophy &amp; Process <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ Strategies ============ */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <StrategyShowcase
          compact
          eyebrow="OUR STRATEGIES"
          title="Four purpose-built strategies, one philosophy"
          lead="Sorted by what you want to achieve, not by product jargon — select a mandate for a snapshot."
        />
      </section>

      {/* ============ Track record ============ */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-[10px] font-bold text-accent-600 tracking-widest uppercase block font-mono">
                TRACK RECORD
              </span>
              <h2 className="font-extrabold tracking-tight text-slate-900 text-3xl sm:text-4xl">
                {TRACK_RECORD.title}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                {TRACK_RECORD.body}
              </p>
              <Link
                to="/performance"
                className="text-xs font-bold text-ink-700 inline-flex items-center gap-1.5 border-b-2 border-accent-500 pb-0.5 hover:text-accent-600 transition"
              >
                See full performance &amp; disclosures <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {TRACK_RECORD.tiles.map((tile) => (
                <div
                  key={tile.label}
                  className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-1"
                >
                  <span className="text-2xl font-extrabold text-ink-700 block tracking-tight">
                    {tile.value}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono uppercase leading-tight block">
                    {tile.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Disclaimer>{TRACK_RECORD.disclaimer}</Disclaimer>
        </div>
      </section>

      {/* ============ Why ACMIIL ============ */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="WHY ACE PMS" title="Process over personality" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {WHY_PILLARS.map((pillar, idx) => (
              <div key={pillar.title} className="relative pl-14">
                <span className="absolute left-0 top-0.5 font-mono text-sm text-accent-600 border border-slate-200 w-10 h-10 rounded-lg grid place-items-center font-semibold bg-white">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold text-sm text-slate-900 leading-snug">{pillar.title}</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed mt-1">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Understanding PMS ============ */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="NEW TO PMS?"
            title={PMS_EXPLAINER.title}
            lead={PMS_EXPLAINER.body}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PMS_EXPLAINER.tiles.map((tile) => (
              <div key={tile.title} className="border-l-2 border-accent-500 pl-5 py-1">
                <h4 className="font-extrabold text-lg text-slate-900">{tile.title}</h4>
                <p className="text-xs text-slate-500 font-light mt-1">{tile.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Getting started — connected journey stepper ============ */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="GETTING STARTED"
            title={GETTING_STARTED.title}
            lead="From first conversation to a fully managed portfolio — four steps, no friction."
            center
          />

          {/* Connected stepper */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-ink-200 via-accent-400 to-ink-200"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {GETTING_STARTED.steps.map((step, idx) => (
                <div key={step.title} className="relative flex flex-col items-center text-center group">
                  <div
                    className={`h-12 w-12 rounded-full grid place-items-center font-mono text-sm font-bold shrink-0 z-10 ring-8 ring-[#FAFAFA] transition-transform duration-200 group-hover:scale-110 ${
                      idx === 0
                        ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30'
                        : 'bg-ink-900 text-white shadow-md'
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <h4 className="font-extrabold text-base text-slate-900 mt-4">{step.title}</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed mt-1.5 max-w-[220px]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key facts band */}
          <div className="mt-14 bg-ink-900 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-ink-800">
              {GETTING_STARTED.facts.map((fact) => (
                <div key={fact.k} className="p-6 space-y-1.5">
                  <span className="text-[10px] text-amber-400 font-mono tracking-widest uppercase block font-bold">
                    {fact.k}
                  </span>
                  <span className="text-sm font-bold text-white leading-snug block">{fact.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ Insights teaser ============ */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="INSIGHTS & MEDIA"
            title="Perspectives from our desk"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHT_PLACEHOLDERS.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-md transition"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-accent-700 font-bold uppercase bg-accent-50 border border-accent-100 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-slate-400">{item.date}</span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-lg leading-snug min-h-[52px]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{item.summary}</p>
                </div>
                <div className="pt-5 border-t border-slate-200 mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">ACMIIL PMS Desk</span>
                  <span className="text-[10px] text-slate-400 font-mono bg-white px-2 py-1 rounded border border-slate-100">
                    {item.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/insights"
              className="px-6 py-3 rounded-xl text-xs font-semibold bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition duration-200 inline-flex items-center gap-1.5 shadow-sm"
            >
              Read all insights <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Questions investors ask" center />
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center gap-4 p-4.5 text-left focus:outline-none px-5 py-4"
                >
                  <span className="font-extrabold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-accent-600 shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-500 font-light leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Closing CTA — interactive scheduler ============ */}
      <section className="py-20 bg-ink-900/5 border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold text-accent-600 tracking-widest uppercase block font-mono">
              <Sparkles className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
              READY TO BUILD A PORTFOLIO WITH AN EDGE?
            </span>
            <h2 className="font-extrabold tracking-tight text-slate-900 text-3xl sm:text-4xl">
              Speak to a portfolio specialist
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light">
              About the strategy that fits your goals — schedule a session below.
            </p>
          </div>
          <SchedulerCta />
        </div>
      </section>

      {/* Trust note */}
      <section className="py-8 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>
              SEBI-registered PMS · Minimum investment ₹50 lakh · No lock-in
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

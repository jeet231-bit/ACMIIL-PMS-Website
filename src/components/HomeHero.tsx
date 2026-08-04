import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HERO } from '../data/content';

// Clean, text-free cityscape render (16:9).
const CITYSCAPE_SRC = '/new-updated-image.png';

const HeroContent: FC = () => (
  <div className="max-w-xl py-14 lg:py-0">
    <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-[52px] leading-[1.08] text-slate-950">
      {HERO.headlineLead}
      <span className="text-accent-600">{HERO.headlineAccent}</span>
      {HERO.headlineTail}
    </h1>

    <p className="text-slate-600 text-sm sm:text-base font-light max-w-lg leading-relaxed mt-6">
      {HERO.subheadline}
    </p>

    <div className="flex flex-col sm:flex-row gap-3.5 mt-8">
      <Link
        to="/strategies"
        className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-ink-900 shadow-xl hover:bg-ink-800 hover:shadow-2xl transition-all duration-300 text-center inline-flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
      >
        <span>{HERO.primaryCta}</span>
        <ArrowRight className="w-4 h-4 text-amber-400" />
      </Link>
      <Link
        to="/contact"
        className="px-6 py-3.5 rounded-xl text-xs font-semibold bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition duration-200 text-center inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
      >
        {HERO.secondaryCta}
      </Link>
    </div>

    <p className="mt-10 text-[10px] text-slate-400/90 leading-relaxed">{HERO.rankingFootnote}</p>
  </div>
);

export const HomeHero: FC = () => (
  <section className="relative overflow-hidden border-b border-slate-100 bg-[#FAFAFA] font-sans">
    {/* Desktop — full-bleed cityscape with a left scrim for text legibility */}
    <div
      className="hidden lg:block absolute inset-0 bg-cover bg-top"
      style={{ backgroundImage: `url(${CITYSCAPE_SRC})` }}
      aria-hidden="true"
    />
    <div
      className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#FAFAFA] from-15% via-[#FAFAFA]/85 via-45% to-transparent"
      aria-hidden="true"
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:min-h-[620px] flex items-center">
      <HeroContent />
    </div>

    {/* Mobile — cityscape as a band beneath the content */}
    <div className="lg:hidden">
      <img
        src={CITYSCAPE_SRC}
        alt="India's structural growth — skyline, infrastructure, manufacturing and ports rising toward a $10 trillion economy"
        className="w-full"
        loading="eager"
      />
    </div>
  </section>
);

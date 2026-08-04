import { useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, Plus, Equal, Users, Building2, MapPin, ArrowRight } from 'lucide-react';
import { ABOUT } from '../data/content';
import { CountUp, useInView } from '../components/motion';

const STAT_ICONS: Record<string, FC<{ className?: string }>> = { Users, Building2, MapPin };

/* ---------------- 7.3 Group structure ---------------- */
const GroupStructure: FC = () => {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(0);
  const spring = reduce ? { duration: 0 } : { type: 'spring' as const, stiffness: 240, damping: 29 };

  return (
    <section id="group-structure" className="py-20 bg-white border-b border-slate-100 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold text-accent-600 tracking-widest uppercase block font-mono">
            {ABOUT.groupStructure.eyebrow}
          </span>
          <h2 className="font-extrabold tracking-tight text-slate-900 text-3xl sm:text-4xl">
            {ABOUT.groupStructure.title}
          </h2>
        </div>

        {/* Connector rail + rows */}
        <div className="relative">
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-slate-200 hidden sm:block" aria-hidden="true" />
          <div className="space-y-3">
            {ABOUT.groupStructure.entities.map((e, i) => {
              const isOpen = open === i;
              return (
                <div key={e.name} className="relative sm:pl-12">
                  {/* connector node */}
                  <span
                    className={`hidden sm:block absolute left-[19px] top-7 -translate-x-1/2 w-2.5 h-2.5 rounded-full ring-4 ring-white ${
                      e.primary ? 'bg-accent-500' : 'bg-slate-300'
                    }`}
                    aria-hidden="true"
                  />
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onMouseEnter={() => setOpen(i)}
                    onFocus={() => setOpen(i)}
                    onClick={() => setOpen(i)}
                    onKeyDown={(ev) => {
                      if (ev.key === 'Enter' || ev.key === ' ') {
                        ev.preventDefault();
                        setOpen(i);
                      }
                    }}
                    className={`rounded-2xl bg-white cursor-pointer transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 ${
                      e.primary
                        ? 'border border-l-4 border-l-accent-500 border-slate-200 p-5 sm:p-6 shadow-sm'
                        : 'border border-slate-200/80 p-4 sm:p-5'
                    } ${isOpen ? 'shadow-md' : 'hover:shadow-sm'}`}
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      {e.badge && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-white bg-accent-500 px-2.5 py-1 rounded-md shrink-0">
                          {e.badge}
                        </span>
                      )}
                      <h3
                        className={`font-bold text-slate-900 ${
                          e.primary ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                        }`}
                      >
                        {e.name}
                      </h3>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reduce ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={reduce ? undefined : { opacity: 0, height: 0 }}
                          transition={spring}
                          className="overflow-hidden"
                        >
                          <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-3">
                            {e.credential}
                          </p>
                          {e.caption && (
                            <p className="text-[11px] text-ink-600 font-medium mt-3 pt-3 border-t border-slate-100">
                              {e.caption}
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- 7.4 Group scale strip ---------------- */
const GroupScale: FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="group-scale" className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service lines */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-14">
          {ABOUT.scale.serviceLines.map((s, i) => (
            <span key={s} className="flex items-center gap-3">
              {i > 0 && <span className="text-slate-300" aria-hidden="true">·</span>}
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 font-mono">
                {s}
              </span>
            </span>
          ))}
        </div>

        {/* Stats with count-up */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ABOUT.scale.stats.map((stat) => {
            const Icon = STAT_ICONS[stat.icon] ?? Users;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm text-center space-y-2"
              >
                <div className="h-11 w-11 bg-ink-50 rounded-xl flex items-center justify-center border border-ink-100 mx-auto">
                  <Icon className="w-5 h-5 text-ink-700" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-ink-800 tracking-tight tabular-nums">
                  <CountUp value={stat.value} active={inView} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] text-slate-500 font-mono uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[10px] text-slate-400 italic mt-8">{ABOUT.scale.footnote}</p>
      </div>
    </section>
  );
};

/* ---------------- 7.5 Leadership ---------------- */
const Leadership: FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const reduce = useReducedMotion();
  const revealed = reduce || inView;
  const L = ABOUT.leadership;

  return (
    <section id="leadership" className="py-20 bg-white border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[10px] font-bold text-accent-600 tracking-widest uppercase block font-mono mb-2">
            LEADERSHIP
          </span>
          <h2 className="font-extrabold tracking-tight text-slate-900 text-3xl sm:text-4xl">
            {L.title}
          </h2>
        </div>

        <div className="bg-slate-50 rounded-3xl border border-slate-200/70 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Photograph */}
          <div className="lg:col-span-4 relative bg-ink-900 min-h-[320px]">
            <img
              src={L.photo}
              alt={`${L.name}, ${L.role}`}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          {/* Narrative */}
          <div className="lg:col-span-8 p-8 sm:p-10 space-y-5">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-accent-600">
                {L.name}
              </h3>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-mono mt-1.5">
                {L.role}
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              {L.bio}
            </p>

            {/* Career timeline */}
            <div ref={ref} className="pt-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block mb-5">
                Career milestones
              </span>
              <div className="relative">
                {/* draw-in line */}
                <div
                  className="absolute left-0 top-[7px] h-0.5 bg-accent-500/70 origin-left transition-transform duration-1000 ease-out"
                  style={{ right: 0, transform: revealed ? 'scaleX(1)' : 'scaleX(0)' }}
                  aria-hidden="true"
                />
                <ol className="relative flex justify-between gap-2">
                  {L.timeline.map((step, i) => (
                    <li
                      key={step}
                      className="flex flex-col items-center text-center flex-1 transition-opacity duration-500"
                      style={{
                        opacity: revealed ? 1 : 0,
                        transitionDelay: revealed ? `${i * 120}ms` : '0ms',
                      }}
                    >
                      <span
                        className={`w-3.5 h-3.5 rounded-full ring-4 ring-slate-50 shrink-0 ${
                          i === L.timeline.length - 1 ? 'bg-accent-500' : 'bg-ink-400'
                        }`}
                      />
                      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 mt-2.5 leading-tight">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-light italic border-t border-slate-200 pt-5 mt-2">
              {L.closingLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Page ---------------- */
export default function AboutPage() {
  return (
    <>
      {/* 7.1 Lineage breadcrumb */}
      <div className="bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav
            aria-label="Group lineage"
            className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[11px] font-medium text-slate-500"
          >
            {ABOUT.breadcrumb.map((node, i) => (
              <span key={node.label} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="w-3 h-3 text-accent-500 shrink-0" aria-hidden="true" />}
                <a href={node.href} className="hover:text-ink-700 transition whitespace-nowrap">
                  {node.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* 7.2 Hero */}
      <section className="relative bg-[#FAFAFA] pt-16 pb-20 overflow-hidden border-b border-slate-100 font-sans">
        <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none opacity-30">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-ink-50">
            <path d="M0,0 L100,0 L100,100 C80,80 60,95 0,80 Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-ink-50/60 via-accent-50/30 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-[46px] leading-[1.1] text-slate-950 max-w-4xl">
            A <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">Pantomath Group Company</span>, Full-service Financial Conglomerate.
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl mt-6">
            {ABOUT.hero.sub}
          </p>

          {/* Equation chips */}
          <div className="flex flex-wrap items-center gap-3 mt-10">
            <span className="inline-flex items-center px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-xs font-semibold text-ink-800">
              {ABOUT.hero.equation[0]}
            </span>
            <Plus className="w-4 h-4 text-accent-500 shrink-0" aria-hidden="true" />
            <span className="inline-flex items-center px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-xs font-semibold text-ink-800">
              {ABOUT.hero.equation[1]}
            </span>
            <Equal className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
            <span className="inline-flex items-center px-4 py-2.5 rounded-xl bg-ink-900 text-white shadow-md text-xs font-bold">
              {ABOUT.hero.equation[2]}
            </span>
          </div>
        </div>
      </section>

      {/* 7.3 Group structure */}
      <GroupStructure />

      {/* 7.4 Group scale */}
      <GroupScale />

      {/* 7.5 Leadership */}
      <Leadership />

      {/* 7.6 Closing CTA band */}
      <section className="py-16 bg-[#FAFAFA] font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ink-900 rounded-3xl px-6 sm:px-12 py-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="font-extrabold tracking-tight text-white text-2xl sm:text-3xl max-w-2xl mx-auto">
                {ABOUT.cta.title}
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/why-acmiil"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-ink-900 bg-white hover:bg-slate-100 transition inline-flex items-center justify-center gap-2"
                >
                  Why ACE PMS
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-accent-500 hover:bg-accent-600 transition inline-flex items-center justify-center gap-2"
                >
                  Schedule a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Landmark, Rocket, Plus, Equal, UserRound } from 'lucide-react';
import { ABOUT } from '../data/content';
import { PageHero, SectionHeading } from '../components/shared';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT ACE PMS"
        title={
          <>
            Four decades of trust, <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">reimagined</span>
          </>
        }
        lead={ABOUT.heroBody}
      />

      {/* Heritage + Pantomath */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="p-2.5 bg-ink-50 text-ink-700 rounded-lg inline-block">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-accent-600 tracking-widest uppercase block font-mono">
                HERITAGE
              </span>
              <h2 className="font-extrabold tracking-tight text-slate-900 text-2xl sm:text-3xl">
                {ABOUT.heritage.title}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                {ABOUT.heritage.body}
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-2.5 bg-accent-50 text-accent-600 rounded-lg inline-block">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-accent-600 tracking-widest uppercase block font-mono">
                THE PANTOMATH COLLABORATION
              </span>
              <h2 className="font-extrabold tracking-tight text-slate-900 text-2xl sm:text-3xl">
                {ABOUT.pantomath.title}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                {ABOUT.pantomath.body}
              </p>
            </div>
          </div>

          {/* Formula band */}
          <div className="mt-14 bg-ink-900 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
              <span className="font-extrabold text-lg sm:text-xl">
                {ABOUT.pantomath.formula[0]}
              </span>
              <Plus className="w-5 h-5 text-accent-400 shrink-0" />
              <span className="font-extrabold text-lg sm:text-xl">
                {ABOUT.pantomath.formula[1]}
              </span>
              <Equal className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="font-extrabold text-lg sm:text-xl text-amber-400">
                {ABOUT.pantomath.formula[2]}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="LEADERSHIP"
            title={ABOUT.leadership.title}
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ABOUT.leadership.members.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-ink-700 via-accent-500 to-amber-400 text-white grid place-items-center shrink-0">
                    <UserRound className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-950 text-base">{member.name}</h4>
                    <span className="text-[10px] text-accent-700 font-mono tracking-widest uppercase font-bold block mt-0.5">
                      {member.role}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{member.bio}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 font-light mt-8 italic">
            {ABOUT.leadership.supportLine}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="WHAT WE STAND FOR" title={ABOUT.values.title} center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT.values.items.map((item) => (
              <div key={item.title} className="border-l-2 border-accent-500 pl-5 py-1">
                <h4 className="font-extrabold text-lg text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-500 font-light mt-1 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/philosophy"
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-ink-700 hover:bg-ink-900 transition text-center inline-flex items-center justify-center gap-1.5"
            >
              Explore our philosophy <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl text-xs font-semibold bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition text-center"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

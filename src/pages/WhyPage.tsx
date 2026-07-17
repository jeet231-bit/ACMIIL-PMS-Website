import { Link } from 'react-router-dom';
import {
  Landmark,
  LineChart,
  Handshake,
  Settings2,
  Award,
  MessagesSquare,
  ArrowRight,
  Check,
} from 'lucide-react';
import { WHY_PILLARS, SERVICE_EDGE, FEES } from '../data/content';
import { PageHero, SectionHeading } from '../components/shared';

const EDGE_ICONS = [Landmark, LineChart, Handshake, Settings2, Award, MessagesSquare];

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="WHY ACE PMS"
        title={
          <>
            Process over <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">personality</span>
          </>
        }
        lead="Why investors choose ACE PMS — six concrete pillars, a service model built for HNI and UHNI investors, and transparent terms."
      />

      {/* Six pillars */}
      <section className="py-20 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="THE SIX PILLARS" title="Why investors choose ACE PMS" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {WHY_PILLARS.map((pillar, idx) => (
              <div key={pillar.title} className="relative pl-14">
                <span className="absolute left-0 top-0.5 font-mono text-sm text-accent-600 border border-slate-200 w-10 h-10 rounded-lg grid place-items-center font-semibold bg-white shadow-sm">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold text-sm text-slate-900 leading-snug">{pillar.title}</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed mt-1.5">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service edge */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE ACMIIL SERVICE EDGE"
            title="What working with us feels like"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_EDGE.map((item, idx) => {
              const Icon = EDGE_ICONS[idx % EDGE_ICONS.length];
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-3 hover:shadow-md transition"
                >
                  <div className="h-10 w-10 bg-ink-50 rounded-lg flex items-center justify-center border border-ink-100">
                    <Icon className="w-5 h-5 text-ink-700" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fees & onboarding */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FEES & ONBOARDING" title={FEES.title} center />
          <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FEES.points.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 font-light border-t border-slate-200 pt-4">
              {FEES.custodian}
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-accent-500 hover:bg-accent-600 transition inline-flex items-center gap-1.5"
            >
              Start the conversation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

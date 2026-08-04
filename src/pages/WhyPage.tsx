import { WHY_PILLARS } from '../data/content';
import { PageHero, SectionHeading } from '../components/shared';
import { WhyAcePmsSection } from '@/components/ui/impact-section';

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="WHY ACE PMS"
        title={
          <>
            Process over{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">
              personality
            </span>
          </>
        }
        lead="Why investors choose ACE PMS — concrete proof points and a defined, repeatable process built for HNI and UHNI investors."
      />

      {/* Interactive proof points — the page centrepiece */}
      <WhyAcePmsSection />

      {/* Six pillars */}
      <section className="py-20 bg-white font-sans">
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
    </>
  );
}

import { PageHero } from '../components/shared';
import { WhyAcePmsSection } from '@/components/ui/impact-section';

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="WHY ACE PMS"
        title={
          <>
            Process Over{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">
              Personality
            </span>
          </>
        }
        lead="Why investors choose ACE PMS — concrete proof points and a defined, repeatable process built for HNI and UHNI investors."
      />

      {/* Interactive proof points — the page centrepiece */}
      <WhyAcePmsSection />
    </>
  );
}

import { PageHero } from '../components/shared';
import { WhyAcePmsSection } from '@/components/ui/impact-section';

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="WHY ACE PMS"
        title={
          <>
            Proven across Cycles.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">
            </span>
          </>
        }
        lead={
          <span className="text-base sm:text-lg">
            Positioned to capture India’s journey towards a $10 trillion economy.
          </span>
        }
      />

      {/* Interactive proof points — the page centrepiece */}
      <WhyAcePmsSection />
    </>
  );
}

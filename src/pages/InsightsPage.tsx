import { PageHero } from '../components/shared';
import { MediaCoverage } from '../components/MediaCoverage';

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="INSIGHTS & MEDIA"
        title={
          <>
            Recognition and <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">Coverage</span>
          </>
        }
      />

      {/* Media coverage — magazine cards with tabs */}
      <MediaCoverage />
    </>
  );
}

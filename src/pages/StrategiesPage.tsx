import { useSearchParams } from 'react-router-dom';
import { PageHero } from '../components/shared';
import { StrategyShowcase } from '../components/StrategyShowcase';

export default function StrategiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab') || undefined;

  return (
    <>
      <PageHero
        eyebrow="OUR STRATEGIES"
        title={
          <>
            Strategies built around{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">
              your goals
            </span>
          </>
        }
        lead="Purpose-built strategies, united by one GARP philosophy. Sorted by what you want to achieve, not by product jargon."
      />

      <section id="strategies" className="py-20 bg-white font-sans">
        <StrategyShowcase
          eyebrow="OUR STRATEGIES, ONE PHILOSOPHY"
          title="Purpose-built portfolio strategies"
          lead="Each strategy is run on the same GARP discipline — select a mandate to review its construction, key facts and track record."
          initialTabId={tabFromUrl}
          onTabChange={(id) => setSearchParams({ tab: id }, { replace: true })}
        />
      </section>
    </>
  );
}

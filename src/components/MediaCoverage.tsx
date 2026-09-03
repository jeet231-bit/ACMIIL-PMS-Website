import { useState, type FC } from 'react';
import { ArrowRight, Download, ExternalLink, Newspaper } from 'lucide-react';
import { MEDIA_COVERAGE, type MediaItem } from '../data/content';
import { SectionHeading } from './shared';

const TABS = [
  { key: 'articles', label: 'Articles', kind: 'link' as const },
  { key: 'reports', label: 'Reports & Rankings', kind: 'pdf' as const },
];

const MediaCard: FC<{ item: MediaItem }> = ({ item }) => {
  const [imgOk, setImgOk] = useState(true);
  const isLink = item.kind === 'link';

  return (
    <a
      href={item.href}
      {...(isLink ? { target: '_blank', rel: 'noopener noreferrer' } : { download: '' })}
      className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition"
    >
      {/* Cover */}
      <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
        {imgOk ? (
          <img
            src={item.cover}
            alt=""
            loading="lazy"
            onError={() => setImgOk(false)}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full grid place-items-center bg-gradient-to-br from-ink-900 to-accent-500 text-white">
            <Newspaper className="w-8 h-8 opacity-90" />
          </div>
        )}
        <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider bg-white/90 text-ink-700 rounded px-2 py-1">
          {isLink ? 'Article' : 'Report'}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-400">
          <span className="text-accent-600 font-bold">{item.source}</span>
          {item.date && (
            <>
              <span>·</span>
              <span>{item.date}</span>
            </>
          )}
        </div>
        <h3 className="font-extrabold text-slate-900 leading-snug mt-2 flex-1">{item.title}</h3>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-ink-700 group-hover:text-accent-600 transition mt-4">
          {isLink ? (
            <>
              Read more <ExternalLink className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              Download PDF <Download className="w-3.5 h-3.5" />
            </>
          )}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </a>
  );
};

export const MediaCoverage: FC = () => {
  const [tab, setTab] = useState('articles');
  const active = TABS.find((t) => t.key === tab) ?? TABS[0];
  const items = MEDIA_COVERAGE.items.filter((i) => i.kind === active.kind);

  return (
    <section className="py-20 bg-white border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="MEDIA COVERAGE"
          title="Featured in the media"
          lead={MEDIA_COVERAGE.intro}
        />

        {/* Tabs */}
        <div className="grid grid-cols-2 w-full gap-1 bg-slate-100 rounded-xl p-1 mb-8">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition ${
                tab === t.key ? 'bg-white text-ink-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <MediaCard key={item.href} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

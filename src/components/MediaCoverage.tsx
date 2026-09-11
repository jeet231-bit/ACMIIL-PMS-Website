import { useState, type FC } from 'react';
import { ArrowRight, Download, ExternalLink, Newspaper, Play } from 'lucide-react';
import { MEDIA_COVERAGE, type MediaItem } from '../data/content';
import { SectionHeading } from './shared';

const TABS: { key: string; label: string; kinds: MediaItem['kind'][] }[] = [
  { key: 'articles', label: 'Articles', kinds: ['link'] },
  { key: 'reports', label: 'Reports & Rankings', kinds: ['pdf'] },
  { key: 'videos', label: 'Videos', kinds: ['video'] },
];

const MediaCard: FC<{ item: MediaItem }> = ({ item }) => {
  const [imgOk, setImgOk] = useState(true);
  const external = item.kind === 'link' || item.kind === 'video';
  const badge = item.kind === 'pdf' ? 'Report' : item.kind === 'video' ? 'Video' : 'Article';

  return (
    <a
      href={item.href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : { download: '' })}
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
        {item.kind === 'video' && (
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid place-items-center w-14 h-14 rounded-full bg-white/90 text-accent-600 shadow-lg group-hover:scale-105 transition">
              <Play className="w-6 h-6 translate-x-0.5 fill-current" />
            </span>
          </div>
        )}
        <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider bg-white/90 text-ink-700 rounded px-2 py-1">
          {badge}
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
        <div className="flex-1">
          <h3 className="font-extrabold text-slate-900 leading-snug mt-2">{item.title}</h3>
          {item.excerpt && (
            <p className="text-xs text-slate-500 font-light leading-relaxed mt-1.5">{item.excerpt}</p>
          )}
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-ink-700 group-hover:text-accent-600 transition mt-4">
          {item.kind === 'pdf' ? (
            <>
              Download PDF <Download className="w-3.5 h-3.5" />
            </>
          ) : item.kind === 'video' ? (
            <>
              Watch <Play className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              Read more <ExternalLink className="w-3.5 h-3.5" />
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
  const items = MEDIA_COVERAGE.items.filter((i) => active.kinds.includes(i.kind));

  return (
    <section className="py-20 bg-white border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="MEDIA COVERAGE"
          title="Featured in the media"
          lead={MEDIA_COVERAGE.intro}
        />

        {/* Tabs */}
        <div className="grid grid-cols-3 w-full gap-1 bg-slate-100 rounded-xl p-1 mb-8">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`rounded-lg px-2 sm:px-4 py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition ${
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

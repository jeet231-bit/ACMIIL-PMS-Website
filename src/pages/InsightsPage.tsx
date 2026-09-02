import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INSIGHTS_CATEGORIES } from '../data/content';
import { INSIGHTS, insightCategories, fmtInsightDate } from '../content/insights';
import { PageHero, SectionHeading } from '../components/shared';

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...insightCategories()];
  const filtered =
    activeCategory === 'All' ? INSIGHTS : INSIGHTS.filter((i) => i.category === activeCategory);

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

      {/* Categories */}
      <section className="py-16 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSIGHTS_CATEGORIES.map((cat) => (
              <div key={cat.title} className="border-l-2 border-accent-500 pl-5 py-1">
                <h4 className="font-extrabold text-lg text-slate-900">{cat.title}</h4>
                <p className="text-xs text-slate-500 font-light mt-1 leading-relaxed">{cat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-[#FAFAFA] border-b border-slate-200/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
            <SectionHeading eyebrow="LATEST" title="From our desk" />
            <div className="flex bg-white border border-slate-200 rounded-lg p-1 text-[11px] font-medium text-slate-500 overflow-x-auto mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-md transition font-semibold whitespace-nowrap ${
                    activeCategory === cat ? 'bg-ink-700 text-white shadow-sm' : 'hover:text-slate-950'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-slate-400 italic text-center py-16">
              No insights in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <Link
                  key={item.slug}
                  to={`/insights/${item.slug}`}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-accent-700 font-bold uppercase bg-accent-50 border border-accent-100 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                      <span className="text-slate-400">{fmtInsightDate(item.date)}</span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-lg leading-snug min-h-[52px] group-hover:text-ink-700 transition">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-light min-h-[56px]">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="pt-5 border-t border-slate-200 mt-5 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-ink-700 inline-flex items-center gap-1 group-hover:text-accent-600 transition">
                      Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    {item.readTime && (
                      <span className="text-[10px] text-slate-400 font-mono bg-slate-50 px-2 py-1 rounded border border-slate-100">
                        {item.readTime}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
          <p className="text-[11px] text-slate-400 italic mt-8 text-center">
            New notes are published monthly, alongside each strategy factsheet.
          </p>
        </div>
      </section>

    </>
  );
}

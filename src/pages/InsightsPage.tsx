import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import { INSIGHTS_CATEGORIES, INSIGHT_PLACEHOLDERS } from '../data/content';
import { PageHero, SectionHeading } from '../components/shared';
import { useToast } from '../components/toast';

export default function InsightsPage() {
  const showToast = useToast();
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...INSIGHTS_CATEGORIES.map((c) => c.title)];
  const filtered =
    activeCategory === 'All'
      ? INSIGHT_PLACEHOLDERS
      : INSIGHT_PLACEHOLDERS.filter((i) => i.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address to subscribe.');
      return;
    }
    showToast(`Subscribed! Our monthly note will be delivered to ${email}.`);
    setEmail('');
  };

  return (
    <>
      <PageHero
        eyebrow="INSIGHTS & MEDIA"
        title={
          <>
            Perspectives, notes and <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">coverage</span>
          </>
        }
        lead="Market notes from the fund manager, strategy commentary tied to the monthly factsheets, press coverage and evergreen explainers."
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
                    activeCategory === cat
                      ? 'bg-ink-700 text-white shadow-sm'
                      : 'hover:text-slate-950'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-md transition"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-accent-700 font-bold uppercase bg-accent-50 border border-accent-100 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-slate-400">{item.date}</span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-lg leading-snug min-h-[52px]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light min-h-[56px]">
                    {item.summary}
                  </p>
                </div>
                <div className="pt-5 border-t border-slate-200 mt-5 flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="text-[11px] font-bold text-ink-700 inline-flex items-center gap-1 hover:text-accent-600 transition"
                  >
                    Request a callback <ArrowRight className="w-3 h-3" />
                  </Link>
                  <span className="text-[10px] text-slate-400 font-mono bg-slate-50 px-2 py-1 rounded border border-slate-100">
                    {item.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 italic mt-8 text-center">
            New notes are published monthly, alongside each strategy factsheet.
          </p>
        </div>
      </section>

      {/* Newsletter capture */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ink-900 rounded-2xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            <div className="relative z-10 space-y-5">
              <h3 className="font-extrabold text-2xl sm:text-3xl">Get our monthly note</h3>
              <p className="text-ink-100/70 text-xs sm:text-sm font-light max-w-md mx-auto">
                One email a month from the fund manager's desk — markets, positioning and what we
                are watching.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-12 gap-2 pt-2"
              >
                <div className="sm:col-span-8">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-ink-800 text-white rounded-lg p-3 text-xs border border-ink-600 focus:outline-none focus:ring-1 focus:ring-accent-500 placeholder-ink-200/40 font-mono"
                  />
                </div>
                <div className="sm:col-span-4">
                  <button
                    type="submit"
                    className="w-full h-full bg-accent-500 hover:bg-accent-600 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg inline-flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" /> Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

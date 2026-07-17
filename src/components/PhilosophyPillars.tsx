import React from 'react';
import { Shield, TrendingUp, DollarSign, Lock, Sparkles } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../data/content';

const pillarIcon = (name: string) => {
  switch (name) {
    case 'Shield':
      return <Shield className="w-5 h-5" />;
    case 'TrendingUp':
      return <TrendingUp className="w-5 h-5" />;
    case 'DollarSign':
      return <DollarSign className="w-5 h-5" />;
    case 'Lock':
      return <Lock className="w-5 h-5" />;
    default:
      return <Sparkles className="w-5 h-5" />;
  }
};

const ICON_STYLES = [
  'bg-ink-50 text-ink-700',
  'bg-accent-50 text-accent-600',
  'bg-amber-50 text-amber-700',
  'bg-emerald-50 text-emerald-700',
];

const KICKER_STYLES = ['text-ink-600', 'text-accent-600', 'text-amber-700', 'text-emerald-700'];

// The four mandated pillars, rendered in the dual-engine card style:
// white card, icon+title header, description, key-value stat rows.
export const PhilosophyPillars: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {PHILOSOPHY_PILLARS.map((pillar, idx) => (
      <div
        key={pillar.title}
        className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm relative overflow-hidden hover:shadow-md transition"
      >
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent-500/10 to-transparent rounded-bl-full pointer-events-none"></div>

        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-lg ${ICON_STYLES[idx % ICON_STYLES.length]}`}>
            {pillarIcon(pillar.icon)}
          </div>
          <div>
            <h4 className="font-bold text-base text-slate-900 uppercase tracking-wide">
              {pillar.title}
            </h4>
            <span className={`text-[9px] font-mono uppercase tracking-wider block ${KICKER_STYLES[idx % KICKER_STYLES.length]}`}>
              {pillar.kicker}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed font-light">{pillar.description}</p>

        <div className="space-y-2 pt-2">
          {pillar.rows.map((row) => (
            <div
              key={row.k}
              className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center gap-3 text-xs"
            >
              <span className="text-slate-600 font-mono">{row.k}</span>
              <span className="font-bold text-slate-900 text-right">{row.v}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

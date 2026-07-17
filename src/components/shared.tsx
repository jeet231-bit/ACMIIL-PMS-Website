import React from 'react';

// Full-viewport light hero for inner pages — same color language as the home hero
export const PageHero: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
}> = ({ eyebrow, title, lead }) => (
  <section className="relative bg-[#FAFAFA] pt-16 pb-20 overflow-hidden border-b border-slate-100 font-sans">
    {/* Ambient background styling */}
    <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none opacity-30">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-ink-50">
        <path d="M0,0 L100,0 L100,100 C80,80 60,95 0,80 Z" fill="currentColor"></path>
      </svg>
    </div>
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-ink-50/60 via-accent-50/30 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-ink-700/5 border border-ink-700/10">
        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono">
          {eyebrow}
        </span>
      </div>
      <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] text-slate-950">
        {title}
      </h1>
      {lead && (
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
          {lead}
        </p>
      )}
    </div>
  </section>
);

export const SectionHeading: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  center?: boolean;
}> = ({ eyebrow, title, lead, center }) => (
  <div className={`space-y-3 mb-12 ${center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
    <span className="text-[10px] font-bold text-accent-600 tracking-widest uppercase block font-mono">
      {eyebrow}
    </span>
    <h2 className="font-extrabold tracking-tight text-slate-900 text-3xl sm:text-4xl">
      {title}
    </h2>
    {lead && (
      <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">{lead}</p>
    )}
  </div>
);

export const Disclaimer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[10px] text-slate-400 italic mt-6">{children}</p>
);

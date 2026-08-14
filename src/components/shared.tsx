import React from 'react';

/* Subtle, brand-coloured flowing artwork for the light inner-page heroes.
   Soft indigo→orange→amber ribbons on #FAFAFA — the light, understated
   cousin of an aurora-ribbon hero. */
export const HeroArt: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* soft brand glows */}
    <div
      className="absolute -top-40 right-[-8%] w-[42rem] h-[42rem] rounded-full blur-3xl"
      style={{ background: 'radial-gradient(circle at center, rgba(228,97,31,0.16), transparent 62%)' }}
    />
    <div
      className="absolute -bottom-48 left-[-12%] w-[38rem] h-[38rem] rounded-full blur-3xl"
      style={{ background: 'radial-gradient(circle at center, rgba(44,31,88,0.12), transparent 62%)' }}
    />
    {/* flowing ribbons */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 520"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <linearGradient id="heroRibbonA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2C1F58" stopOpacity="0" />
          <stop offset="0.5" stopColor="#4C3A82" stopOpacity="0.55" />
          <stop offset="1" stopColor="#E4611F" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroRibbonB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E4611F" stopOpacity="0" />
          <stop offset="0.55" stopColor="#E4611F" stopOpacity="0.5" />
          <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroRibbonC" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E4611F" stopOpacity="0" />
          <stop offset="0.5" stopColor="#E4611F" stopOpacity="0.7" />
          <stop offset="1" stopColor="#E4611F" stopOpacity="0" />
        </linearGradient>
        <filter id="heroSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>
      <g filter="url(#heroSoft)" opacity="0.4">
        <path d="M -120 260 C 360 150, 820 340, 1560 110" stroke="url(#heroRibbonA)" strokeWidth="30" strokeLinecap="round" />
        <path d="M -120 340 C 420 230, 940 420, 1560 200" stroke="url(#heroRibbonB)" strokeWidth="18" strokeLinecap="round" />
        <path d="M -120 200 C 320 130, 780 280, 1560 60" stroke="url(#heroRibbonC)" strokeWidth="7" strokeLinecap="round" />
      </g>
    </svg>
  </div>
);

// Full-viewport light hero for inner pages — same colour language as the home hero
export const PageHero: React.FC<{
  eyebrow?: string; // retained for callers; no longer rendered as a pill
  title: React.ReactNode;
  lead?: string;
}> = ({ title, lead }) => (
  <section className="relative bg-[#FAFAFA] pt-20 pb-20 overflow-hidden border-b border-slate-100 font-sans">
    <HeroArt />

    <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
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
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  center?: boolean;
}> = ({ eyebrow, title, lead, center }) => (
  <div className={`space-y-3 mb-12 ${center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
    {eyebrow && (
      <span className="text-[10px] font-bold text-accent-600 tracking-widest uppercase block font-mono">
        {eyebrow}
      </span>
    )}
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

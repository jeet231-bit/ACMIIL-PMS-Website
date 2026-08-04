// All copy sourced from ACMIIL_PMS_Content_Revamp_All_Pages.docx — teal (proposed) blocks only.
// Figures as on 30 June 2026, per the ACE PMS deck & factsheets.

export const CONTACT = {
  email: 'pms@acm.co.in',
  phones: ['022-2858 3759', '022-2858 3758'],
  address: 'Pantomath Nucleus House, Saki-Vihar Road, Andheri (East), Mumbai: 400072',
  officeHours: '9 to 6 pm',
};

export const REGULATORY = {
  legalName: 'Asit C. Mehta Investment Interrmediates Ltd.',
  descriptor: 'A Pantomath Group Company',
  sebiPms: 'INP000005801',
  bseNse: 'INZ000186336',
  researchAnalyst: 'INH000016490',
  dp: 'IN-DP-685-2022',
  footnote:
    'Data as on 30 June 2026. Returns are CAGR/TWRR; returns over 1 year are annualised. Past performance is not indicative of future results and is based on model client portfolios, post-expenses. PMS Bazaar rankings are for AMCs with minimum ₹200 cr AUM, FY26. Investments in the securities market are subject to market risk; read all related documents carefully before investing.',
};

export const HERO = {
  eyebrow:
    'ACE PMS · By Asit C. Mehta Investment Intermediates Ltd. — A Pantomath Group Company',
  headlineLead: "Built to Ride India's Ascent to a ",
  headlineAccent: '$10 Trillion',
  headlineTail: ' Economy',
  subheadline:
    "Investing in businesses positioned to benefit from India's structural transformation.",
  primaryCta: 'Explore Our Strategies',
  secondaryCta: 'Schedule a Conversation',
  chip: '$10 Tn · India 2035+',
  rankingFootnote:
    "*Rankings as per internal classification based on PMS Bazaar Report for March '26; AMCs with min. AUM of ₹200 crore and vintage of more than 3 years considered.",
};

// Structural growth themes — the 8 pillars of India's transformation.
export const HERO_THEMES = [
  { icon: 'Landmark', label: 'Financialisation' },
  { icon: 'Factory', label: 'Manufacturing' },
  { icon: 'Construction', label: 'Infrastructure' },
  { icon: 'ShoppingCart', label: 'Consumption' },
  { icon: 'Cpu', label: 'Digitisation' },
  { icon: 'Leaf', label: 'Energy Transition' },
  { icon: 'Shield', label: 'Defence' },
  { icon: 'TrendingUp', label: 'Capital Markets' },
];

export const CREDIBILITY_BAR = [
  {
    label: 'HERITAGE',
    value: '40',
    suffix: '+ yrs',
    text: 'Asit C. Mehta financial-services legacy — four decades at the heart of Indian capital markets',
  },
  {
    label: 'GROUP STRENGTH',
    value: 'Pantomath',
    suffix: '',
    text: "One of India's fastest-growing investment banks — AIFs, research, execution",
  },
  {
    label: 'REGULATION',
    value: 'SEBI',
    suffix: ' PM',
    text: 'Registered Portfolio Manager — Reg. No. INP000005801',
  },
  {
    label: 'RECOGNITION',
    value: 'Top',
    suffix: '-quartile',
    text: 'PMS Bazaar 3-yr & 5-yr category rankings, FY26*',
  },
];

export const HERITAGE = {
  title: 'Trust & Legacy of ACMIIL + Energy & Execution of Pantomath',
  body: "For four decades, the Asit C. Mehta name has stood for trust in Indian capital markets. That legacy is now paired with the Pantomath Group's research infrastructure and execution strength to build a sharper, stronger PMS — a strategic collaboration designed to create more value for investors.",
  stats: ['40+ years of heritage', "Backed by Pantomath's research and AIF platform"],
};

// Philosophy pillars — content of the 4-pillar grid, rendered in the dual-engine card style.
export const PHILOSOPHY_PILLARS = [
  {
    icon: 'Shield',
    title: 'Institutional Grade Quality',
    kicker: 'Governance First',
    description:
      'Skin in the game, absolute corporate governance, and capital allocation stewardship are non-negotiable filters.',
    rows: [
      { k: 'Promoter diligence', v: 'Forensic transaction review' },
      { k: 'Capital allocation history', v: '10-year review' },
      { k: 'Promoter pledge / auditor flags', v: 'Avoided outright' },
    ],
  },
  {
    icon: 'TrendingUp',
    title: 'Structural Scalability',
    kicker: 'Secular Tailwinds Focus',
    description:
      'Focusing on companies addressing massive multi-decade secular tailwinds. Market opportunities must be vast.',
    rows: [
      { k: 'Target industry growth', v: '≥1.5x of GDP' },
      { k: 'Pricing power', v: 'Strong brand stickiness' },
      { k: 'Business model', v: 'High fixed-cost leverage' },
    ],
  },
  {
    icon: 'DollarSign',
    title: 'Superb Financial Strength',
    kicker: '>20% Target ROCE/ROE',
    description:
      'Businesses must generate strong free cash flows and maintain stellar balance sheets to withstand economic cycles.',
    rows: [
      { k: 'Return on Capital Employed', v: 'Consistently high' },
      { k: 'Leverage', v: 'Net-debt free / conservative' },
      { k: 'Profit → cash conversion', v: 'High operational conversion' },
    ],
  },
  {
    icon: 'Lock',
    title: 'Margin of Safety',
    kicker: 'Active Valuation Discipline',
    description:
      'A great business is not a great investment if bought at bubble valuations. Disciplined entry valuations.',
    rows: [
      { k: 'Valuation anchor', v: 'DCF-guided forward multiples' },
      { k: 'Growth-adjusted pricing', v: 'PE / EV-EBITDA vs PEG' },
      { k: 'Risk-reward', v: 'Asymmetric profiles only' },
    ],
  },
];

export const GARP_TEASER = {
  title: 'Growth at a Reasonable Price',
  body: 'We buy high-quality, growing businesses — but only at sensible valuations. A GARP discipline, pioneered by Peter Lynch, sits at the core of every strategy we run.',
  points: [
    'High-growth industries with large, addressable markets',
    'Resilient, scalable businesses with durable moats',
    'Managements with strong capital allocation and minority-shareholder focus',
    'A focused 15–25 stock portfolio — agnostic to index weights, sector and theme',
  ],
};

export interface StrategyContent {
  id: string;
  tag: string;
  name: string;
  tagline: string;
  positioning: string;
  whoFor: string;
  bullets: string[];
  keyFacts: { k: string; v: string }[];
  performanceNote: string;
  homeCard: { description: string; metric: string; metricLabel: string };
  // Illustrative growth of ₹1 crore since inception (as on 30 June 2026)
  growth: { strategy: string; benchmark: string; strategyCagr: number; benchmarkCagr: number };
}

export const STRATEGIES: StrategyContent[] = [
  {
    id: 'multicap',
    tag: 'Flagship',
    name: 'ACE Multicap',
    tagline: 'Built for balanced performance',
    positioning:
      'Our flagship. Large-cap stability blended with mid- and small-cap growth for an optimal balance of consistency and compounding.',
    whoFor: 'Investors seeking smart equity diversification and balanced long-term growth.',
    bullets: [
      'GARP-led core of 18–25 high-quality businesses, agnostic to benchmark weights, market cap and sector',
      'Anchor + tactical construction to enhance alpha with long-term compounding',
      'Prioritises stability, leadership and earnings consistency',
      'Sectoral & thematic diversification to reduce volatility and drawdown',
    ],
    keyFacts: [
      { k: 'Inception', v: '23 Aug 2018' },
      { k: 'Benchmark', v: 'BSE 500 TRI' },
      { k: 'Style', v: 'GARP' },
      { k: 'Risk', v: 'High' },
      { k: 'Horizon', v: '3–5 yrs' },
      { k: 'Minimum', v: '₹50 lakh' },
      { k: 'Fee', v: '2.5% of AUM' },
    ],
    performanceNote:
      'Since-inception CAGR 18.6% vs 12.5% for BSE 500 TRI; ~6%+ post-fee alpha; top-5 PMS in 3 & 5-yr by PMS Bazaar, FY26.* Full data on the Performance page.',
    homeCard: {
      description:
        'Large-cap stability blended with mid/small-cap growth. For balanced, long-term compounding.',
      metric: '18.6%',
      metricLabel: 'Since-inception CAGR*',
    },
    growth: { strategy: '~₹3.9 Cr', benchmark: '~₹2.5 Cr', strategyCagr: 18.6, benchmarkCagr: 12.5 },
  },
  {
    id: 'tentrillion',
    tag: 'Growth',
    name: 'ACE Ten Trillion Opportunities',
    tagline: "Built to ride India's ascent to a $10-trillion economy",
    positioning:
      "A small–mid-cap (SMID) strategy backing future leaders in the sectors driving India's shift from consumption to infrastructure, manufacturing and formalisation.",
    whoFor: 'Investors early in their wealth-creation journey seeking long-term, scalable growth.',
    bullets: [
      'Selects scalable, future-ready businesses executing consistently on stated guidance',
      'Focus on sectors leading the formalisation and capital-formation cycle',
      'Sectoral & thematic diversification to reduce volatility and drawdown',
    ],
    keyFacts: [
      { k: 'Inception', v: '29 Dec 2017' },
      { k: 'Benchmark', v: 'BSE 500 TRI' },
      { k: 'Style', v: 'GARP' },
      { k: 'Risk', v: 'High' },
      { k: 'Horizon', v: '3–5 yrs' },
      { k: 'Minimum', v: '₹50 lakh' },
      { k: 'Fee', v: '2.5% of AUM' },
    ],
    performanceNote:
      'Since-inception CAGR 18.9% vs 12.2% for BSE 500 TRI; ~6%+ post-fee alpha since inception; among top-10 mid-small PMS in 3 & 5-yr by PMS Bazaar, FY26.*',
    homeCard: {
      description:
        "Riding India's shift from consumption to infrastructure and manufacturing.",
      metric: '18.9%',
      metricLabel: 'Since-inception CAGR*',
    },
    growth: { strategy: '~₹4.4 Cr', benchmark: '~₹3.1 Cr', strategyCagr: 18.9, benchmarkCagr: 12.2 },
  },
  {
    id: 'bluechip',
    tag: 'Stability',
    name: 'ACE Blue-chip',
    tagline: 'Built for leadership, stability and proven execution',
    positioning:
      "India's top-150 companies by market cap, blended with a small allocation to our best mid/small-cap ideas — for equity participation with lower volatility.",
    whoFor: 'Risk-averse investors who want peace of mind in their equity allocation.',
    bullets: [
      'GARP-led portfolio of 18–20 high-quality blue-chips with a high active share (agnostic to benchmark weights)',
      'Large-cap ~70% / mid-small ~30% allocation',
      'Prioritises stability, leadership and proven execution',
    ],
    keyFacts: [
      { k: 'Inception', v: '29 Dec 2017' },
      { k: 'Benchmark', v: 'BSE 500 TRI' },
      { k: 'Style', v: 'GARP' },
      { k: 'Horizon', v: '3–5 yrs' },
      { k: 'Minimum', v: '₹50 lakh' },
      { k: 'Fee', v: '2% of AUM' },
    ],
    performanceNote:
      'Top-ranked PMS in the large-cap category for FY26 by PMS Bazaar; ~4.6% alpha over 5 years.* Full data on the Performance page.',
    homeCard: {
      description:
        "India's top 150 companies with select mid and small-cap best ideas.",
      metric: '#1',
      metricLabel: 'Large-cap PMS, FY26*',
    },
    growth: { strategy: '~₹2.8 Cr', benchmark: '~₹2.7 Cr', strategyCagr: 12.8, benchmarkCagr: 12.2 },
  },
  {
    id: 'multiasset',
    tag: 'Income',
    name: 'ACE Multi-Asset',
    tagline: 'Asset-class diversification with an optional 0.5% monthly payout',
    positioning:
      'One portfolio spanning equity, global ETFs, fixed income, gold/silver, REITs/InvITs and alternates — for a balanced return goal with an optional regular income.',
    whoFor:
      'Income-seeking investors who want balanced allocation without giving up equity growth, and without juggling multiple folios.',
    bullets: [
      'Optional monthly payout of 0.5% of NAV (~6% p.a.), from the 7th month, for regular-income seekers',
      'Payout drawn from dividend, interest, capital gains and invested capital',
      'Limits volatility through asset diversification; limits drawdown through GARP discipline',
    ],
    keyFacts: [
      { k: 'Inception', v: '4 Oct 2018' },
      { k: 'Benchmark', v: 'Nifty Multi-Asset' },
      { k: 'Style', v: 'GARP' },
      { k: 'Risk', v: 'Moderate' },
      { k: 'Horizon', v: '3–5 yrs' },
      { k: 'Minimum', v: '₹1 crore' },
      { k: 'Fee', v: '2.5% of AUM' },
    ],
    performanceNote:
      'Since-inception CAGR 16.4% vs 11.5% for Nifty Multi-Asset; ~5%+ alpha since inception; top-ranked multi-asset PMS in 3 & 5-yr by PMS Bazaar, FY26.*',
    homeCard: {
      description:
        'Equity, debt and alternates in one portfolio, with an optional 0.5% monthly payout.',
      metric: '16.4%',
      metricLabel: 'Since-inception CAGR*',
    },
    growth: { strategy: '~₹3.2 Cr', benchmark: '~₹2.3 Cr', strategyCagr: 16.4, benchmarkCagr: 11.5 },
  },
];

export const GOAL_SELECTOR = [
  { question: 'Looking for growth and leadership?', strategy: 'ACE Multicap', id: 'multicap' },
  { question: 'Early in your wealth-creation journey?', strategy: 'ACE Ten Trillion Opportunities', id: 'tentrillion' },
  { question: 'Want peace of mind in equity allocation?', strategy: 'ACE Blue-chip', id: 'bluechip' },
  { question: 'Seeking balanced allocation with regular income?', strategy: 'ACE Multi-Asset', id: 'multiasset' },
];

export const TRACK_RECORD = {
  title: 'A track record measured in cycles, not quarters',
  body: 'Across our core strategies we have delivered roughly 6% post-fee alpha over benchmark across a near-decade vintage — returns measured across full market cycles, not quarters.*',
  tiles: [
    { value: '~9 yr', label: 'PMS vintage' },
    { value: '~6%', label: 'Post-fee alpha across core strategies*' },
    { value: 'Top-quartile', label: '3 & 5-yr PMS Bazaar rankings, FY26*' },
  ],
  disclaimer:
    'Past performance is not indicative of future results. Returns as on 30 June 2026. Subject to market risk. See Performance page for methodology and full disclosures.',
};

export const WHY_PILLARS = [
  {
    title: 'Process over personality',
    body: 'A framework crafted over four decades of market-cycle learning; returns come from repeatable process, not a single star manager.',
  },
  {
    title: 'A defined philosophy, applied with strict discipline',
    body: 'GARP across every strategy — governance, entry-valuation and capital-cycle as core filters.',
  },
  {
    title: 'Collective intelligence',
    body: "An investment committee with devil's-advocate review, over individual risk-taking.",
  },
  {
    title: 'An institutionalised research framework',
    body: 'Decision-making with clear accountability.',
  },
  {
    title: 'Governance, valuation and capital allocation',
    body: 'Core, non-negotiable filters behind every position.',
  },
  {
    title: 'Top-quartile performance',
    body: 'Both 3-yr and 5-yr timeframes (PMS Bazaar, FY26).*',
  },
];

export const SERVICE_EDGE = [
  { title: 'Trust & legacy', body: '40+ years in financial services' },
  { title: 'Track record', body: 'A near-decade PMS vintage of alpha*' },
  { title: 'Relationships', body: 'Strong connect with promoters and managements' },
  { title: 'Customisation', body: 'Bespoke solutions for HNI/UHNI investors' },
  { title: 'Recognition', body: 'Ranked among the top by PMS Bazaar*' },
  { title: 'Engagement', body: 'Regular, transparent client reviews' },
];

export const FEES = {
  title: 'Transparent, simple terms',
  points: [
    'Minimum investment: ₹50 lakh (₹1 crore for Multi-Asset)',
    'Fee options: 2.5% of AUM flat (Blue-chip 2%), or 1.5% + 15% performance fee over a 10% hurdle with high-water-mark',
    'No lock-in; exit load 1% up to 1 year',
    'Paperless digital onboarding; regular engagement & reviews',
  ],
  custodian:
    'Custodian & fund accounting: Orbis Financial Corporation Ltd. Full schedule of charges available in Resources.',
};

export const PMS_EXPLAINER = {
  title: "New to PMS? Here's the short version.",
  body: 'A Portfolio Management Service gives you a tailor-made portfolio of direct securities, managed by a SEBI-registered portfolio manager to your risk and return goals. Versus mutual funds, PMS offers greater transparency, customisation and direct ownership — designed for investors with ₹50 lakh or more to deploy.',
  tiles: [
    { title: 'Direct ownership & transparency', body: 'Securities held in your own name, with full transparency.' },
    { title: 'Customised to your goals', body: 'A portfolio aligned to your goals, horizon and risk appetite.' },
    { title: 'Managed by SEBI-registered experts', body: 'Run by a SEBI-registered portfolio manager and research team.' },
  ],
};

export const GETTING_STARTED = {
  title: 'Investing with us is straightforward',
  steps: [
    { title: 'Talk to a specialist', body: 'A short conversation on goals, risk and corpus.' },
    { title: 'Choose your strategy', body: 'Aligned to your objective and horizon.' },
    { title: 'Digital onboarding', body: 'Paperless account opening.' },
    { title: 'Ongoing engagement', body: 'Regular reviews and transparent reporting.' },
  ],
  facts: [
    { k: 'MINIMUM INVESTMENT', v: '₹50 lakh (₹1 crore for Multi-Asset)' },
    { k: 'LOCK-IN', v: 'None' },
    { k: 'EXIT LOAD', v: '1% up to 1 year' },
    { k: 'FEE OPTIONS', v: '2.5% flat, or 1.5% + 15% over a 10% hurdle*' },
  ],
};

export const FAQS = [
  {
    q: 'What is the minimum investment?',
    a: "₹50 lakh for our equity strategies, and ₹1 crore for ACE Multi-Asset, in line with SEBI's minimum for PMS.",
  },
  {
    q: 'What are the fees, and is there a lock-in?',
    a: 'You can choose a flat 2.5% of AUM (2% for ACE Blue-chip), or a 1.5% base plus a 15% performance fee over a 10% hurdle with a high-water-mark. There is no lock-in. An exit load of 1% applies for withdrawals within the first year.*',
  },
  {
    q: 'Can NRIs invest in PMS?',
    a: 'Yes. NRIs can invest after opening a PIS (Portfolio Investment Scheme) account as per RBI regulation.',
  },
  {
    q: 'Can I open an account with existing shares?',
    a: 'Yes. You can fund the account with a combination of cash and securities. Existing holdings are re-aligned to the model portfolio.',
  },
  {
    q: 'Can I withdraw partially?',
    a: 'Yes, provided your portfolio value stays above the applicable minimum. Portfolio managers cannot impose a lock-in, though an early-exit load may apply.',
  },
  {
    q: 'How often will I hear from you?',
    a: 'You receive regular, transparent reporting and periodic reviews with your relationship team. Reach us at pms@acm.co.in or 022-2858 3759.',
  },
];

// ---------- About ----------
export const ABOUT = {
  breadcrumb: [
    { label: 'Pantomath Group', href: '#group-structure' },
    { label: 'Asit C. Mehta Investment Intermediates Ltd.', href: '#group-structure' },
    { label: 'ACE PMS', href: '#leadership' },
  ],
  hero: {
    title: 'A Pantomath Group Company, Full-service Financial Conglomerate.',
    sub: "The Asit C. Mehta heritage — 40 years of trust and legacy — reimagined by Pantomath, India's fastest-growing investment bank.",
    equation: [
      'Trust & Legacy of ACMIIL',
      'Energy & Execution of Pantomath',
      'A sharper, stronger PMS business',
    ],
  },
  groupStructure: {
    eyebrow: 'THE GROUP BEHIND THE PLATFORM',
    title: 'One conglomerate, four institutional platforms',
    entities: [
      {
        name: 'Asit C. Mehta Investment Intermediates Ltd',
        credential:
          'Strong and established platform of over 40 years in Institutional Equities, Retail Broking and Portfolio Management Services.',
        primary: true,
        badge: 'ACE PMS',
        caption:
          'ACE PMS is the SEBI-registered portfolio management platform of ACMIIL (Reg. No. INP000005801).',
      },
      {
        name: 'Wealth Company Asset Management Pvt Ltd',
        credential:
          'Bharat Value Fund across various series manages ~₹7,000 crores in client assets.',
      },
      {
        name: 'Wealth Company Asset Management Holdings Pvt Ltd',
        credential:
          "India's first female-founded mutual fund house; launched four active funds simultaneously in 2025; ₹2,000 cr in debut NFO collections.",
      },
      {
        name: 'Pantomath Capital Advisors Pvt Ltd',
        credential:
          'Leading full-service investment bank — IPOs, QIPs, M&A, PE advisory; 150+ ECM transactions executed to date.',
      },
    ],
  },
  scale: {
    serviceLines: [
      'Investment Banking',
      'Asset Management',
      'Institutional Equities',
      'Stock Broking',
      'Wealth Management',
    ],
    stats: [
      { icon: 'Users', value: 600, suffix: '+', label: 'Team, Human Capital' },
      { icon: 'Building2', value: 200, suffix: '+', label: 'Franchise Offices' },
      { icon: 'MapPin', value: 14, suffix: '', label: 'Cities across 20+ states' },
    ],
    footnote: 'Group figures as on 30 June 2026.',
  },
  leadership: {
    title: 'Leadership',
    name: 'CA. Prathmesh Agrawal',
    role: 'Principal Officer & Fund Manager',
    photo: '/team/prathmesh-agrawal.png',
    bio: "Investment strategist with a proven track record of alpha creation and 15+ years' experience in Indian equities and the PMS industry. Earlier stints include Enam AMC, Varanium Group, Religare and Moody's Analytics.",
    timeline: ["Moody's Analytics", 'Religare', 'Varanium Group', 'Enam AMC', 'ACE PMS'],
    closingLine: "Supported by Pantomath Group's extensive research infrastructure.",
  },
  cta: {
    title: 'Four decades of heritage. One disciplined platform.',
  },
};

// ---------- Philosophy & Process ----------
export const PHILOSOPHY_PAGE = {
  heroTitle: 'Growth at a Reasonable Price — what we believe before we invest',
  heroBody:
    'We seek high-quality, growing businesses available at reasonable valuations — the GARP discipline pioneered by Peter Lynch.',
  beliefs: [
    'Invest in high-growth industries with a large, structurally addressable market (TAM)',
    'Own resilient, scalable businesses with enduring competitive advantages and moats',
    'Back managements with a strong capital-allocation and efficiency track record',
    'Favour minority-shareholder-friendly companies with a sharp focus on return on capital',
    'Run a focused 18–25 stock portfolio, agnostic to market cap, sector and theme',
    'Avoid over-diversification and consensus-driven ideas; keep churn moderate',
  ],
  coreSatellite: {
    title: 'A Core–Satellite framework',
    core: {
      title: 'Core (75–80%)',
      body: 'The anchor of the portfolio — stable, consistent compounders held 1–3 years, meeting our GARP screens: earnings/revenue growth ≥12%, debt-to-equity ≤2, PEG ≤2, and positive operating cash flow.',
    },
    satellite: {
      title: 'Satellite (20–25%)',
      body: 'Tactical, special-situation positions held under 12 months to enhance alpha — special-event and momentum opportunities such as management change, merger/demerger, seasonal or cyclical shifts, and supply–demand dislocations.',
    },
  },
  process: {
    title: 'A repeatable, committee-driven process',
    steps: [
      {
        title: 'Quality of Business',
        body: 'Strong moats, room for share/margin gains, secular growth, high entry barriers.',
      },
      {
        title: 'Quality of Management',
        body: 'Growth-oriented, minority-friendly, good governance, low promoter pledge and related-party transactions.',
      },
      {
        title: 'Quality of Earnings',
        body: 'Organic growth, efficient capital allocation, EPS/revenue growth >12%, EBITDA-to-cash conversion, ROCE >12%, low leverage.',
      },
      {
        title: 'Investment Thesis',
        body: 'Business-model deep-dive, financial modelling, stress-testing, peer and valuation-band analysis.',
      },
      {
        title: 'Investment Committee',
        body: "Idea challenged by FM + analyst, devil's-advocate check, risk–return and framework-fitness tests.",
      },
    ],
    note: 'Management meetings support the process but are not a pre-requisite.',
  },
  screening: {
    title: 'Every business earns its place',
    intro:
      'We filter a universe of 1,000+ businesses down to a portfolio of 15–25 — durable, scalable, fundamentally sound companies:',
    filters: [
      { title: 'Universe', body: 'BSE 1000 + select IPOs and companies' },
      { title: 'Qualitative', body: 'Governance, promoter track record, capital-allocation history' },
      { title: 'Scalability', body: 'Industry growth and longevity, TAM, competitive advantage and moats' },
      { title: 'Quantitative', body: 'Market cap > ₹1,000 cr, earnings/revenue growth > 12%, ROCE > 12%, positive CFO' },
      { title: 'Valuation', body: 'PEG, P/B vs. ROE spread, 3 & 5-yr PE bands, reverse DCF' },
      { title: 'Construction', body: '15–25 stocks, position-sized on risk-adjusted return potential' },
    ],
  },
  entryExit: {
    title: 'Disciplined entry, staggered exits, active rebalancing',
    body: 'Positions are built and trimmed against valuation bands and thesis milestones — staggered entry points on valuation comfort, and disciplined exits as targets are met or the thesis changes — with periodic rebalancing to manage risk limits.',
  },
  risk: {
    title: "Risk management isn't an add-on — it's embedded",
    items: [
      'Single-stock exposure capped at 15% (at cost/initiation)',
      'Single-sector exposure monitored below 40%',
      'Single corporate-group exposure capped at 25%',
      'Diversification across 10+ sectors and 5+ themes to control beta risk',
      'Thematic allocation reviewed for concentration; periodic rebalancing to hold risk limits',
    ],
  },
  avoid: {
    title: 'Avoiding pitfalls — what we don\'t do',
    items: [
      'High promoter pledge (typically >30%)',
      'Persistently weak or negative operating cash conversion',
      "'Buy at any price' — typically companies with PEG > 2",
      'Over-levered balance sheets (debt-to-equity ≥3 or interest coverage ≤1.5)',
      'Hot themes and market buzz where narrative is stronger than earnings',
      'Ultra short-term trading and high churn (≥50%)',
    ],
  },
};

// ---------- Performance ----------
export const PERFORMANCE = {
  intro: {
    title: 'Performance, in full',
    body: 'All figures are as on 30 June 2026. Returns up to 1 year are absolute; beyond 1 year are annualised (CAGR/TWRR). Figures are based on model client portfolios, post-expenses; individual portfolio returns may vary. Past performance is not indicative of future results. Investments are subject to market risk.',
  },
  // CAGR %, as on 30 June 2026
  tables: [
    {
      strategy: 'ACE Multicap',
      since: 'since 23 Aug 2018',
      benchmarkName: 'BSE 500 TRI',
      rows: {
        portfolio: [2.9, 25.8, 23.0, 18.6],
        benchmark: [-2.0, 12.5, 12.2, 12.5],
        alpha: [4.8, 13.3, 10.8, 6.2],
      },
    },
    {
      strategy: 'ACE Ten Trillion Opportunities',
      since: 'since 29 Dec 2017',
      benchmarkName: 'BSE 500 TRI',
      rows: {
        portfolio: [12.4, 29.5, 24.6, 18.9],
        benchmark: [-2.0, 12.5, 12.2, 12.2],
        alpha: [14.4, 17.0, 12.4, 6.8],
      },
    },
    {
      strategy: 'ACE Multi-Asset',
      since: 'since 04 Oct 2018',
      benchmarkName: 'Nifty Multi-Asset',
      rows: {
        portfolio: [6.7, 24.0, 19.6, 16.4],
        benchmark: [3.5, 11.3, 10.2, 11.5],
        alpha: [3.2, 12.7, 9.4, 4.9],
      },
    },
    {
      strategy: 'ACE Blue-chip',
      since: 'since 29 Dec 2017',
      benchmarkName: 'BSE 500 TRI',
      rows: {
        portfolio: [5.7, 19.1, 16.8, 12.8],
        benchmark: [-2.0, 12.5, 12.2, 12.2],
        alpha: [7.7, 6.6, 4.6, 0.6],
      },
    },
  ],
  tableNote:
    'Figures per the ACE PMS deck (data as on 30 June 2026), verified against the latest available performance material.',
  // Growth of ₹1 crore since inception (as on 30 June 2026). Values in ₹ crore.
  growth: [
    {
      strategy: 'ACE Multicap',
      terminalValue: 3.9,
      benchmarkValue: 2.5,
      benchmarkName: 'BSE 500 TRI',
      inception: '23 Aug 2018',
    },
    {
      strategy: 'ACE Ten Trillion',
      terminalValue: 4.4,
      benchmarkValue: 3.1,
      benchmarkName: 'BSE 500 TRI',
      inception: '29 Dec 2017',
    },
    {
      strategy: 'ACE Multi-Asset',
      terminalValue: 3.2,
      benchmarkValue: 2.3,
      benchmarkName: 'Nifty Multi-Asset',
      inception: '04 Oct 2018',
    },
  ],
  growthNote:
    'Since inception, as on 30 June 2026. Returns are annualised (TWRR) and net of expenses. Past performance is not indicative of future returns.',
  rankings: {
    title: 'PMS Bazaar rankings, FY26',
    header: ['Strategy', '1-Yr rank', '3-Yr rank', '5-Yr rank'],
    rows: [
      ['ACE Multicap', '25 / 143', '4 / 143', '1 / 112'],
      ['ACE Multi-Asset', '5 / 13', '1 / 13', '1 / 8'],
      ['ACE Ten Trillion Opportunities', '15 / 56', '7 / 56', '11 / 48'],
      ['ACE Blue-chip', '1 / 28', '3 / 28', '5 / 25'],
    ],
    note: 'PMS Bazaar rankings for relevant schemes with minimum 3-yr vintage and AMCs with minimum ₹200 cr AUM, as on 31 March 2026.',
  },
};

// ---------- Insights ----------
export const INSIGHTS_CATEGORIES = [
  { title: 'Strategy commentary', body: 'What drove each portfolio, tied to the monthly factsheets' },
  { title: 'In the media', body: 'Interviews, quotes and press mentions' },
];

export const INSIGHT_PLACEHOLDERS = [
  {
    category: 'Strategy commentary',
    title: 'What drove our portfolios this month',
    summary: 'Strategy-wise commentary tied to the monthly factsheets — attribution, changes and outlook.',
    date: 'June 2026',
    readTime: '6 min',
  },
  {
    category: 'In the media',
    title: 'ACMIIL PMS in the press',
    summary: 'Interviews, quotes and coverage of our strategies and market views.',
    date: 'June 2026',
    readTime: '3 min',
  },
];

// ---------- Resources ----------
export const RESOURCES = {
  title: 'Everything in one place',
  groups: [
    {
      title: 'Product decks',
      body: 'One current deck per strategy',
      items: ['ACE Multicap', 'ACE Ten Trillion Opportunities', 'ACE Blue-chip', 'ACE Multi-Asset'],
    },
    {
      title: 'Monthly factsheets',
      body: 'Filter by strategy + month/year; latest four surfaced at the top',
      items: ['ACE Multicap — June 2026', 'ACE Ten Trillion — June 2026', 'ACE Blue-chip — June 2026', 'ACE Multi-Asset — June 2026'],
    },
    {
      title: 'Compliance & disclosures',
      body: 'Regulatory documents and investor protections',
      items: ['Investor Charter', 'SEBI Disclosure Document', 'Fee illustration', 'Grievance redressal (SCORES)', 'PMS regulations'],
    },
    {
      title: 'Forms',
      body: 'Onboarding and account opening',
      items: ['Account opening form', 'PIS account guidance for NRIs'],
    },
  ],
};

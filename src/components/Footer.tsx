import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Scale, ArrowUpRight } from 'lucide-react';
import { CONTACT, REGULATORY, STRATEGIES } from '../data/content';

export const Footer = () => {
  return (
    <footer className="bg-ink-900 text-ink-100/70 border-t border-ink-800 pt-16 pb-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & legacy */}
          <div className="space-y-5">
            <div className="bg-white rounded-lg p-2.5 inline-block">
              <img src="/investmentz-logo.jpg" alt="Investmentz — Investor First" className="h-10 w-auto" />
            </div>
            <div>
              <span className="font-bold text-white tracking-tight text-base block">ACMIIL PMS</span>
              <span className="text-[9px] text-ink-200/60 tracking-wider block font-mono uppercase">
                {REGULATORY.legalName}
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              A GARP-driven Portfolio Management Service with nearly a decade of track record — the
              Asit C. Mehta heritage, reimagined by the Pantomath Group.
            </p>
            <div className="flex gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-ink-800 rounded-md border border-ink-600 text-[10px] text-emerald-400 font-mono">
                <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                SEBI-registered PM
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-ink-800 rounded-md border border-ink-600 text-[10px] text-amber-400 font-mono">
                {REGULATORY.descriptor}
              </div>
            </div>
          </div>

          {/* Column 2: Strategies */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Our Strategies</h4>
            <ul className="space-y-2 text-xs">
              {STRATEGIES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/strategies?tab=${s.id}`}
                    className="hover:text-white transition flex items-center justify-between group"
                  >
                    <span>{s.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        s.tag === 'Flagship'
                          ? 'text-amber-400 bg-amber-500/10 group-hover:bg-amber-500/20'
                          : 'text-ink-200/50'
                      }`}
                    >
                      {s.tag}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/philosophy" className="hover:text-white transition flex items-center gap-1 group">
                  <span>GARP Philosophy & Process</span>
                  <ArrowUpRight className="w-3 h-3 text-ink-400 group-hover:text-amber-400 transition" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/performance" className="hover:text-white transition">Performance & Disclosures</Link></li>
              <li><Link to="/why-acmiil" className="hover:text-white transition">Why ACE PMS</Link></li>
              <li><Link to="/insights" className="hover:text-white transition">Insights & Media</Link></li>
              <li><Link to="/resources" className="hover:text-white transition">Resources & Downloads</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact & Investor Grievance</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Corporate Desk</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-400" />
                <span>{CONTACT.phones.join(' / ')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-400" />
                <span>{CONTACT.email}</span>
              </li>
              <li className="text-[11px] text-ink-200/50">Office hours: {CONTACT.officeHours}</li>
            </ul>
          </div>
        </div>

        {/* Statutory disclosures */}
        <div className="border-t border-ink-800 pt-8 mt-8 text-[11px] leading-relaxed text-ink-200/60 space-y-4">
          <div className="flex items-center gap-1.5 text-ink-100/80 font-semibold text-xs">
            <Scale className="w-4.5 h-4.5 text-ink-200/60" />
            <span>DISCLAIMERS & STATUTORY DISCLOSURES</span>
          </div>

          <p>
            {REGULATORY.legalName} — {REGULATORY.descriptor}. SEBI PMS Reg. No. {REGULATORY.sebiPms} ·
            BSE/NSE {REGULATORY.bseNse} · Research Analyst {REGULATORY.researchAnalyst} · DP {REGULATORY.dp}.
          </p>

          <p>*{REGULATORY.footnote}</p>

          <p>
            Past performance is not indicative of future results. Returns as on 30 June 2026.
            Subject to market risk. See the Performance page for methodology and full disclosures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink-800 pt-6 text-[10px] text-ink-200/40 font-mono">
            <span>
              © {new Date().getFullYear()} {REGULATORY.legalName} All Rights Reserved. (ISO 9001:2015
              certified company)
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.investmentz.com/investor-charters"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink-100 transition"
              >
                Investor Charter
              </a>
              <a
                href="https://scores.sebi.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink-100 transition"
              >
                SEBI Complaints (SCORES)
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

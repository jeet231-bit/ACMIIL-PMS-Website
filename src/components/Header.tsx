import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { CONTACT } from '../data/content';
import { useToast } from './toast';

// Regular routed items (Downloads and Contact are rendered separately so the
// Downloads dropdown can sit between Insights and Contact).
const MENU_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/why-acmiil', label: 'Why ACE PMS' },
  { to: '/philosophy', label: 'Philosophy' },
  { to: '/strategies', label: 'Strategies' },
  { to: '/performance', label: 'Performance' },
  { to: '/insights', label: 'Insights' },
];

const DOWNLOADS = ['Presentation', 'Factsheet', 'Disclosure'];

export const Header = () => {
  const showToast = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadsOpen, setDownloadsOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg text-[11px] font-semibold tracking-wide uppercase transition duration-150 relative whitespace-nowrap ${
      isActive
        ? 'text-ink-700 font-bold bg-ink-50'
        : 'text-slate-500 hover:text-ink-700 hover:bg-slate-50/70'
    }`;

  const handleDownload = (doc: string) => {
    showToast(`The latest ${doc} will be available for download shortly.`);
    setDownloadsOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[90] w-full bg-white/90 backdrop-blur-md border-b border-slate-100/90 shadow-[0_2px_15px_rgba(0,0,0,0.02)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <img src="/investmentz-logo.jpg" alt="Investmentz — Investor First" className="h-11 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {MENU_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}

            {/* Downloads dropdown (does not navigate) */}
            <div
              className="relative"
              onMouseEnter={() => setDownloadsOpen(true)}
              onMouseLeave={() => setDownloadsOpen(false)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setDownloadsOpen(false);
              }}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={downloadsOpen}
                onClick={() => setDownloadsOpen((o) => !o)}
                className={`px-3 py-2 rounded-lg text-[11px] font-semibold tracking-wide uppercase transition duration-150 whitespace-nowrap inline-flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
                  downloadsOpen
                    ? 'text-ink-700 font-bold bg-ink-50'
                    : 'text-slate-500 hover:text-ink-700 hover:bg-slate-50/70'
                }`}
              >
                Downloads
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${downloadsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {downloadsOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-1 w-52 bg-white rounded-xl border border-slate-200 shadow-lg py-2 z-50 animate-fadeIn"
                >
                  {DOWNLOADS.map((doc) => (
                    <button
                      key={doc}
                      role="menuitem"
                      type="button"
                      onClick={() => handleDownload(doc)}
                      className="w-full text-left px-4 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-ink-700 transition focus:outline-none focus-visible:bg-slate-50"
                    >
                      {doc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              to="/contact"
              className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white bg-accent-500 hover:bg-accent-600 shadow-sm rounded-xl transition-all duration-200 inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Request a Callback</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>

          {/* Mobile trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 focus:outline-none p-2 rounded-lg hover:bg-slate-50"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1.5 animate-fadeIn max-h-[75vh] overflow-y-auto">
          {MENU_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider block ${
                  isActive ? 'bg-ink-700 text-white' : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Downloads group (non-navigating) */}
          <div className="px-4 pt-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-1.5">
              Downloads
            </span>
            <div className="flex flex-col gap-0.5">
              {DOWNLOADS.map((doc) => (
                <button
                  key={doc}
                  type="button"
                  onClick={() => handleDownload(doc)}
                  className="w-full text-left px-2 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
                >
                  {doc}
                </button>
              ))}
            </div>
          </div>

          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `w-full text-left px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider block ${
                isActive ? 'bg-ink-700 text-white' : 'text-slate-600 hover:bg-slate-50'
              }`
            }
          >
            Contact
          </NavLink>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-white bg-accent-500 rounded-xl shadow-md"
            >
              Request a Callback
            </Link>
            <div className="text-center text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <Mail className="w-3 h-3" /> {CONTACT.email} | SEBI-registered PMS
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

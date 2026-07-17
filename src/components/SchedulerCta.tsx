import React, { useState } from 'react';
import { Calendar, User, Mail, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useToast } from './toast';

// Preferred-date choices (dropdown style), next two working weeks feel
const DATE_OPTIONS = [
  'Monday, 20 July 2026',
  'Tuesday, 21 July 2026',
  'Wednesday, 22 July 2026',
  'Thursday, 23 July 2026',
  'Friday, 24 July 2026',
  'Monday, 27 July 2026',
  'Tuesday, 28 July 2026',
  'Wednesday, 29 July 2026',
];

const TIME_OPTIONS = ['10:00 AM', '11:30 AM', '02:30 PM', '04:00 PM', '05:30 PM'];

export const SchedulerCta: React.FC = () => {
  const showToast = useToast();
  const [form, setForm] = useState({
    name: '',
    email: '',
    time: TIME_OPTIONS[0],
    date: DATE_OPTIONS[0],
  });

  const isValid = form.name.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const handleConfirm = () => {
    if (!isValid) {
      showToast('Please enter your name and a valid email address to confirm the booking.');
      return;
    }
    showToast(
      `Thank you ${form.name}! Your priority briefing is requested for ${form.date} at ${form.time}. A confirmation will be sent to ${form.email}.`
    );
    setForm({ name: '', email: '', time: TIME_OPTIONS[0], date: DATE_OPTIONS[0] });
  };

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left — details form */}
        <div className="lg:col-span-6 space-y-5">
          <span className="text-[10px] font-bold text-slate-500 tracking-wider font-mono uppercase block">
            DIRECT MEMBER ADVISEMENT
          </span>
          <h3 className="font-extrabold text-slate-900 text-2xl sm:text-3xl leading-snug">
            Schedule a priority briefing session
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
            Book an exclusive 20-minute session with our portfolio specialists. Share your details
            and preferred slot — we confirm within one business day.
          </p>

          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-accent-500" /> Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Advait Nair"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white text-slate-900 rounded-lg p-2.5 text-xs border border-slate-200 focus:outline-none focus:ring-1 focus:ring-ink-700"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent-500" /> Email ID
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white text-slate-900 rounded-lg p-2.5 text-xs border border-slate-200 focus:outline-none focus:ring-1 focus:ring-ink-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent-500" /> Preferred Time
                </label>
                <select
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full bg-white text-slate-800 rounded-lg p-2.5 text-xs border border-slate-200 focus:outline-none focus:ring-1 focus:ring-ink-700"
                >
                  {TIME_OPTIONS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent-500" /> Preferred Date
                </label>
                <select
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-white text-slate-800 rounded-lg p-2.5 text-xs border border-slate-200 focus:outline-none focus:ring-1 focus:ring-ink-700"
                >
                  {DATE_OPTIONS.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 flex items-center gap-1.5 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Your details are confidential and used only to arrange your consultation.</span>
          </div>
        </div>

        {/* Right — verify details card */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
          <span className="text-[10px] font-mono text-slate-400 block border-b border-slate-100 pb-2 uppercase tracking-wider">
            ✍️ Verify your booking details
          </span>

          <div className="space-y-2.5">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 flex justify-between items-center gap-4">
              <span className="shrink-0">Name:</span>
              <span className={`font-extrabold tracking-wide text-right ${form.name ? 'text-slate-900' : 'text-slate-300'}`}>
                {form.name || 'Not provided'}
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 flex justify-between items-center gap-4">
              <span className="shrink-0">Email ID:</span>
              <span className={`font-extrabold tracking-wide text-right break-all ${form.email ? 'text-slate-900' : 'text-slate-300'}`}>
                {form.email || 'Not provided'}
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 flex justify-between items-center gap-4">
              <span className="shrink-0">Preferred Time:</span>
              <span className="font-extrabold text-slate-900 tracking-wide text-right">{form.time}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 flex justify-between items-center gap-4">
              <span className="shrink-0">Preferred Date:</span>
              <span className="font-extrabold text-slate-900 tracking-wide text-right">{form.date}</span>
            </div>
          </div>

          <div
            className={`flex items-center gap-2 text-[11px] rounded-lg px-3 py-2 border ${
              isValid
                ? 'text-emerald-700 bg-emerald-50 border-emerald-100'
                : 'text-slate-400 bg-slate-50 border-slate-100'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isValid ? 'text-emerald-600' : 'text-slate-300'}`} />
            {isValid
              ? 'Details look complete — confirm your booking below.'
              : 'Fill in your name and email to enable confirmation.'}
          </div>

          <button
            type="button"
            onClick={handleConfirm}
            className="w-full py-3 rounded-xl text-xs font-bold text-white uppercase tracking-wider bg-accent-500 hover:bg-accent-600 transition flex items-center justify-center gap-1.5"
          >
            <Calendar className="w-4.5 h-4.5 text-amber-200" />
            <span>Confirm Advisor Booking</span>
          </button>
        </div>
      </div>
    </div>
  );
};

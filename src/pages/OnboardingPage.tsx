import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { UploadCloud, CheckCircle2, Loader2, ArrowLeft, ShieldCheck, FileCheck2 } from 'lucide-react';
import { PageHero } from '../components/shared';
import { cms, REDIRECT_EMAIL } from '../lib/cms/backend';
import type { OnboardingFile } from '../lib/cms/types';
import { ONBOARDING_FLOWS, type OnboardingDoc } from '../data/onboarding';

const inputCls =
  'w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white transition';

export default function OnboardingPage() {
  const [searchParams] = useSearchParams();
  const [flowKey, setFlowKey] = useState<'client' | 'distributor'>(
    searchParams.get('flow') === 'distributor' ? 'distributor' : 'client'
  );
  const flow = ONBOARDING_FLOWS.find((f) => f.key === flowKey)!;

  const [categoryKey, setCategoryKey] = useState(flow.categories[0].key);
  const category =
    flow.categories.find((c) => c.key === categoryKey) ?? flow.categories[0];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [pan, setPan] = useState('');
  const [notes, setNotes] = useState('');
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  // Docs shown for the current category (core docs + any letterhead annexures).
  const allDocs: OnboardingDoc[] = useMemo(
    () => [...category.docs, ...(category.annexures ?? [])],
    [category]
  );
  const requiredDocs = allDocs.filter((d) => !d.optional);
  const missingDocs = requiredDocs.filter((d) => !files[d.key]);

  const switchFlow = (key: 'client' | 'distributor') => {
    const next = ONBOARDING_FLOWS.find((f) => f.key === key)!;
    setFlowKey(key);
    setCategoryKey(next.categories[0].key);
    setFiles({});
    setError(null);
  };

  const switchCategory = (key: string) => {
    setCategoryKey(key);
    setFiles({});
    setError(null);
  };

  const setDoc = (key: string, file: File | null) =>
    setFiles((prev) => ({ ...prev, [key]: file }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (missingDocs.length > 0) {
      setError(`Please attach: ${missingDocs.map((d) => d.label).join(', ')}.`);
      return;
    }
    setBusy(true);
    try {
      const payload: OnboardingFile[] = allDocs
        .filter((d) => files[d.key])
        .map((d) => ({ key: d.key, label: d.label, file: files[d.key] as File }));
      const context = `[${flow.label} · ${category.label}]`;
      await cms.submitOnboarding({
        fullName: fullName.trim(),
        email: email.trim(),
        mobile: mobile.trim(),
        pan: pan.trim().toUpperCase(),
        notes: [context, notes.trim()].filter(Boolean).join(' — ') || undefined,
        files: payload,
      });
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  if (done) {
    return (
      <>
        <PageHero
          eyebrow="ONBOARDING"
          title={
            <>
              Application{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">
                Received
              </span>
            </>
          }
        />
        <section className="py-24 bg-white font-sans">
          <div className="max-w-lg mx-auto px-4 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 grid place-items-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">Thank you, {fullName || 'investor'}.</h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Your details and documents ({flow.label} · {category.label}) have been securely
              submitted to our onboarding desk. A specialist will reach out to you shortly to
              complete your account opening.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-700 border-b-2 border-accent-500 pb-0.5 hover:text-accent-600 transition"
            >
              Back to home
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="ONBOARDING"
        title={
          <>
            Open Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink-700 to-accent-600">
              PMS Account
            </span>
          </>
        }
        lead="Choose your account type, share your details and upload the documents required for that category. Everything is transmitted securely to our onboarding desk — a specialist will take it from there."
      />

      <section className="py-16 bg-white font-sans">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-ink-700 transition mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to sign-in
          </Link>

          {/* Flow tabs: Client vs Distributor */}
          <div className="grid grid-cols-2 gap-2 bg-slate-100 rounded-xl p-1 mb-5">
            {ONBOARDING_FLOWS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => switchFlow(f.key)}
                className={`rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition ${
                  flowKey === f.key
                    ? 'bg-white text-ink-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-2">
            {flow.categories.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => switchCategory(c.key)}
                className={`px-3.5 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider border transition ${
                  categoryKey === c.key
                    ? 'bg-accent-500 border-accent-500 text-white shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-accent-300'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          {category.note && (
            <p className="text-[11px] text-slate-400 font-light mb-6">{category.note}</p>
          )}
          <div className="mb-6" />

          <form onSubmit={submit} className="space-y-8">
            {/* Personal / contact details */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/60 p-6 sm:p-7 space-y-4">
              <h3 className="font-extrabold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-600" /> Your details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Full name / entity name
                  </span>
                  <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputCls} />
                </label>
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    PAN number (optional)
                  </span>
                  <input
                    value={pan}
                    onChange={(e) => setPan(e.target.value.toUpperCase())}
                    maxLength={10}
                    placeholder="ABCDE1234F"
                    className={`${inputCls} font-mono uppercase`}
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Email
                  </span>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} />
                </label>
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Mobile
                  </span>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    pattern="[0-9+ ]{10,15}"
                    placeholder="+91 …"
                    className={inputCls}
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Anything we should know (optional)
                </span>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} className={inputCls} />
              </label>
            </div>

            {/* Documents for the selected category */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/60 p-6 sm:p-7 space-y-4">
              <div>
                <h3 className="font-extrabold text-slate-900 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-accent-600" /> Required documents · {category.label}
                </h3>
                <p className="text-[11px] text-slate-500 font-light mt-1">
                  PDF or image (JPG/PNG), up to ~10 MB each. Items marked{' '}
                  <span className="font-semibold text-slate-600">Optional</span> can be skipped if not
                  applicable.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {allDocs.map((doc) => {
                  const chosen = files[doc.key];
                  return (
                    <label
                      key={doc.key}
                      className={`block cursor-pointer rounded-xl border p-4 transition ${
                        chosen ? 'bg-emerald-50/40 border-emerald-300 ring-1 ring-emerald-100' : 'bg-slate-50 border-slate-200 hover:border-ink-400'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        {chosen ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <UploadCloud className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        )}
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-slate-800 block leading-snug">
                            {doc.label}
                            {doc.optional && (
                              <span className="ml-1.5 text-[9px] font-mono uppercase tracking-wider text-slate-400">
                                Optional
                              </span>
                            )}
                          </span>
                          <span className="text-[10px] text-slate-400 font-light block mt-0.5 truncate">
                            {chosen ? chosen.name : 'Tap to upload'}
                          </span>
                        </div>
                      </div>
                      <input
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={(e) => setDoc(doc.key, e.target.files?.[0] ?? null)}
                        className="hidden"
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            {error && (
              <p className="text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={busy}
                className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 disabled:opacity-60 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg inline-flex items-center justify-center gap-2 transition"
              >
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
                {busy ? 'Submitting securely…' : 'Submit application'}
              </button>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Your documents are encrypted in transit and reviewed only by our onboarding desk
                ({REDIRECT_EMAIL}). We never share KYC data with third parties.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

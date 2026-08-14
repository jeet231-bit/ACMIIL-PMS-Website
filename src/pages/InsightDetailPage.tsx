import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { getInsight, fmtInsightDate, type InsightPost } from '../content/insights';
import { HeroArt } from '../components/shared';

/* Render the post body: "## " -> heading, "- " -> bullet list, else paragraph. */
function Body({ blocks }: { blocks: string[] }) {
  const out: React.ReactNode[] = [];
  let bullets: string[] = [];

  const flush = (key: string) => {
    if (bullets.length) {
      out.push(
        <ul key={key} className="list-disc pl-5 space-y-2 text-slate-600 text-[15px] leading-relaxed">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>,
      );
      bullets = [];
    }
  };

  blocks.forEach((block, i) => {
    if (block.startsWith('- ')) {
      bullets.push(block.slice(2));
      return;
    }
    flush(`ul-${i}`);
    if (block.startsWith('## ')) {
      out.push(
        <h2 key={i} className="font-extrabold text-slate-900 text-xl sm:text-2xl mt-10 mb-2">
          {block.slice(3)}
        </h2>,
      );
    } else {
      out.push(
        <p key={i} className="text-slate-600 text-[15px] leading-relaxed">
          {block}
        </p>,
      );
    }
  });
  flush('ul-final');

  return <div className="space-y-5">{out}</div>;
}

export default function InsightDetailPage() {
  const { slug } = useParams();
  const post: InsightPost | undefined = slug ? getInsight(slug) : undefined;

  if (!post) {
    return (
      <section className="py-24 bg-white font-sans">
        <div className="max-w-lg mx-auto px-4 text-center space-y-4">
          <h1 className="text-2xl font-extrabold text-slate-900">Insight not found</h1>
          <p className="text-sm text-slate-500 font-light">
            This post may have been moved or unpublished.
          </p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-700 border-b-2 border-accent-500 pb-0.5 hover:text-accent-600 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to insights
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="relative bg-[#FAFAFA] pt-14 pb-14 overflow-hidden border-b border-slate-100 font-sans">
        <HeroArt />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-ink-700 transition mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All insights
          </Link>
          <div className="flex items-center gap-3 text-[11px] font-mono mb-4">
            <span className="text-accent-700 font-bold uppercase bg-accent-50 border border-accent-100 px-2 py-0.5 rounded">
              {post.category}
            </span>
            <span className="text-slate-400">{fmtInsightDate(post.date)}</span>
            {post.readTime && (
              <span className="text-slate-400 inline-flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
            )}
          </div>
          <h1 className="font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-slate-950">
            {post.title}
          </h1>
          {post.author && (
            <p className="text-xs text-slate-500 font-medium mt-4">{post.author}</p>
          )}
        </div>
      </section>

      {/* Body */}
      <article className="py-16 bg-white font-sans">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.cover && (
            <img
              src={post.cover}
              alt={post.title}
              className="w-full rounded-2xl border border-slate-200/80 mb-10"
              loading="lazy"
            />
          )}

          <Body blocks={post.body} />

          {/* Footer CTA */}
          <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-ink-700 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> More insights
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold text-[11px] uppercase tracking-wider px-5 py-3 rounded-lg transition"
            >
              Speak to a specialist <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Insights are file-managed. To publish a new post, add an object to   */
/* insights.json and push — Vercel rebuilds and it appears on the site. */
/*                                                                     */
/* body: array of blocks. A block that starts with "## " renders as a  */
/* heading, "- " as a bullet, anything else as a paragraph.            */
/* ------------------------------------------------------------------ */

import data from './insights.json';

export interface InsightPost {
  slug: string;
  category: string;
  title: string;
  date: string; // ISO (YYYY-MM-DD) — used for sorting and display
  readTime?: string;
  author?: string;
  cover?: string; // optional image URL/path (e.g. /insights/foo.jpg)
  excerpt: string;
  body: string[];
}

/** All posts, newest first. */
export const INSIGHTS: InsightPost[] = (data as InsightPost[])
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date));

export const getInsight = (slug: string): InsightPost | undefined =>
  INSIGHTS.find((p) => p.slug === slug);

export const insightCategories = (): string[] =>
  Array.from(new Set(INSIGHTS.map((p) => p.category)));

export const fmtInsightDate = (iso: string): string =>
  new Date(iso).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });

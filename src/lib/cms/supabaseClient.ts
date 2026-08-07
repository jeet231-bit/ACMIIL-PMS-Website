/* ------------------------------------------------------------------ */
/* Supabase browser client.                                            */
/*                                                                     */
/* The anon key is PUBLIC by design — it ships in every Supabase       */
/* frontend and is protected by Row Level Security, not by secrecy.    */
/* The literal fallbacks below let production builds work even when     */
/* the CI has no .env; override via VITE_SUPABASE_* for other projects. */
/*                                                                     */
/* The service_role key is NEVER referenced here or anywhere in the    */
/* frontend — it lives only in Supabase Edge Function secrets.         */
/* ------------------------------------------------------------------ */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://rddoxqixhubnnvayfnjv.supabase.co';

const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkZG94cWl4aHVibm52YXlmbmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5OTc0ODYsImV4cCI6MjEwMTU3MzQ4Nn0.YnDi0jcGWNfyjhGbPEQIp5kiSzqQCeuVvaJ8oHeaiyU';

export const SUPABASE_CONFIGURED = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storageKey: 'acepms_supabase_auth',
  },
});

/** Storage bucket names (created by supabase/schema.sql). */
export const BUCKETS = {
  documents: 'documents', // public — factsheets, decks, forms
  onboarding: 'onboarding', // private — sensitive client KYC uploads
} as const;

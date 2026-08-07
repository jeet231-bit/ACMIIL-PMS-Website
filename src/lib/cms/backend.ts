/* ------------------------------------------------------------------ */
/* Active CMS backend selector.                                        */
/*                                                                     */
/* When Supabase env vars are present (they are — see supabaseClient), */
/* the whole CMS (team auth, documents, articles, onboarding) runs on  */
/* Supabase. The mock remains as an automatic fallback for any         */
/* environment without Supabase configured.                            */
/*                                                                     */
/* Going live requires the one-time setup in supabase/schema.sql       */
/* (tables, storage buckets, RLS) plus team accounts created in the     */
/* Supabase dashboard — see SUPABASE_SETUP.md.                         */
/* ------------------------------------------------------------------ */

import { mockBackend } from './mockBackend';
import { supabaseBackend } from './supabaseBackend';
import { SUPABASE_CONFIGURED } from './supabaseClient';
import type { CmsBackend } from './types';

export const cms: CmsBackend = SUPABASE_CONFIGURED ? supabaseBackend : mockBackend;

/** True once the live Supabase backend is active. */
export const CMS_IS_LIVE = cms.mode === 'supabase';

export { ORBIS, REDIRECT_EMAIL } from './config';

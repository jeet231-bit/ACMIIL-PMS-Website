// Supabase Edge Function: notify
// Emails form submissions (client onboarding, callbacks) to the PMS desk via Resend.
//
// Deploy:   supabase functions deploy notify
// Secret:   supabase secrets set RESEND_API_KEY=re_xxx
//
// The frontend calls this via supabase.functions.invoke('notify', { body }).

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const esc = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const { type, to, submission } = await req.json();
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    const recipient = to || 'pms@acm.co.in';

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ ok: false, error: 'RESEND_API_KEY not configured' }), {
        status: 200, // non-fatal — the submission is already stored in the DB
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const subject =
      type === 'client_onboarding'
        ? `New client onboarding — ${submission?.fullName ?? 'Unknown'}`
        : `New website submission (${type ?? 'general'})`;

    const docRows = Array.isArray(submission?.documents)
      ? submission.documents
          .map((d: { label: string; fileName: string }) => `<li>${esc(d.label)} — ${esc(d.fileName)}</li>`)
          .join('')
      : '';

    const html = `
      <div style="font-family:system-ui,Arial,sans-serif;font-size:14px;color:#1B1140">
        <h2 style="color:#E4611F;margin:0 0 12px">${esc(subject)}</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:4px 12px 4px 0;color:#64748b">Name</td><td><b>${esc(submission?.fullName)}</b></td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#64748b">Email</td><td>${esc(submission?.email)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#64748b">Mobile</td><td>${esc(submission?.mobile)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#64748b">PAN</td><td>${esc(submission?.pan)}</td></tr>
          ${submission?.notes ? `<tr><td style="padding:4px 12px 4px 0;color:#64748b">Notes</td><td>${esc(submission.notes)}</td></tr>` : ''}
        </table>
        ${docRows ? `<h3 style="margin:16px 0 6px">Documents attached in Supabase Storage</h3><ul>${docRows}</ul>` : ''}
        <p style="color:#94a3b8;font-size:12px;margin-top:16px">
          Files are stored in the private <b>onboarding</b> bucket. Open the Supabase dashboard
          (client_onboarding table) to review and download.
        </p>
      </div>`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Use your own verified domain sender once set up in Resend, e.g. 'ACE PMS <onboarding@acm.co.in>'.
        from: 'ACE PMS <onboarding@resend.dev>',
        to: [recipient],
        reply_to: submission?.email,
        subject,
        html,
      }),
    });

    const body = await res.json();
    return new Response(JSON.stringify({ ok: res.ok, body }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

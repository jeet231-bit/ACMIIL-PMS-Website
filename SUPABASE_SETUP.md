# ACE PMS — Supabase go-live setup

The website is already wired to Supabase (project `rddoxqixhubnnvayfnjv`). These are
the one-time dashboard steps that light everything up. ~15 minutes.

> ⚠️ **First: rotate your `service_role` key.** It was shared in chat. Go to
> **Settings → API → `service_role` → Reset**. The website never uses it — only the
> public **anon** key (which is safe to expose; it's protected by Row Level Security).

---

## 1. Create the tables, storage buckets & security rules
1. Open **Supabase → SQL Editor → New query**.
2. Paste the entire contents of [`supabase/schema.sql`](supabase/schema.sql) and click **Run**.
3. This creates the `documents`, `articles`, `client_onboarding` tables, the `documents`
   (public) and `onboarding` (private) storage buckets, all RLS policies, and seeds the
   Resources/Insights pages with the original placeholder content.

After this, the public **Resources** and **Insights** pages populate immediately.

## 2. Create the internal team's login accounts
Everyone on the team is a **Super Admin** (full access to the Console).

1. **Authentication → Users → Add user** (one per team member).
2. Enter their **company email** and a password, and **tick "Auto Confirm User"**.
   - ⚠️ If you forget Auto Confirm, the account stays **unconfirmed** and sign-in fails
     with "Invalid login credentials". Either re-add with Auto Confirm, or (simplest for an
     internal tool) turn OFF **Authentication → Sign In / Providers → Email → "Confirm email"**
     so accounts work without email confirmation.
   - Also make sure the email you sign in with **matches exactly** what you created
     (a one-letter typo → "Invalid login credentials").
3. Optional: set a display name under the user's **User Metadata** as
   `{ "full_name": "Prathmesh Agrawal" }` — this shows in the Console top bar.

They can now sign in at **/login → Internal PMS Team** and manage content in the Console
(`/admin`), which appears live on the site.

> Tip: keep "Allow new users to sign up" **off** (Authentication → Providers → Email) so only
> admin-created accounts exist.

### 2a. Self-service signup (any email, no dashboard trips)
So you don't have to add every teammate by hand, the **Create team account** option on
`/login → Internal PMS Team` lets anyone register with **any email** — gated by a shared
**team access code** that's checked server-side (so the public can't sign up).

One-time setup:
```bash
supabase secrets set TEAM_SIGNUP_CODE=choose-a-strong-shared-code
supabase functions deploy team-signup
```
Then share the code with your team. They register once (any work email, password ≥ 8 chars,
+ the code) and are immediately signed in as Super Admins — pre-confirmed, no email step.
Rotate the code anytime with `supabase secrets set TEAM_SIGNUP_CODE=…`.

> Security: because this CMS can view client KYC, keep the access code private and strong.
> Without the deployed function + secret, the "Create account" button returns a clear error and
> you fall back to adding users in the dashboard (step 2).

### 2b. (Optional) Populate the Console "Access" screen
The Access tab lists all team users. Reading the auth-user list needs the service_role, so it
runs in an Edge Function:
```bash
supabase functions deploy team-users
```
Until it's deployed, the Access screen still works — it just shows the current user only.
Adding/removing users is always done in **Authentication → Users**.

## 3. Turn on email notifications (onboarding + callbacks → pms@acm.co.in)
Submissions are always stored in Supabase; this step also emails them to the desk.

1. Create a free account at **resend.com** and generate an API key.
   - To send *from* your own domain (`onboarding@acm.co.in`), verify the domain in Resend
     and update the `from:` line in `supabase/functions/notify/index.ts`. Otherwise the
     default `onboarding@resend.dev` sender works for testing.
2. Install the Supabase CLI and deploy the function (from the `website/` folder):
   ```bash
   supabase login
   supabase link --project-ref rddoxqixhubnnvayfnjv
   supabase secrets set RESEND_API_KEY=re_your_key_here
   supabase functions deploy notify
   ```
3. Done — new client onboarding submissions now email **pms@acm.co.in** with the applicant's
   details and a list of the uploaded KYC files (the files themselves live in the private
   `onboarding` bucket; open the `client_onboarding` table to download them).

If you skip step 3, nothing breaks — submissions still land safely in the
`client_onboarding` table for you to review in the dashboard.

---

## How it maps to the site
| Area | Where it lives |
|---|---|
| Team login | `/login` → Internal PMS Team (Supabase Auth) |
| Upload factsheets/decks, publish articles | `/admin` (Content Studio) |
| Public documents | **Resources** page (from `documents` table + `documents` bucket) |
| Public articles/media | **Insights** page + home teaser (from `articles` table) |
| Existing clients & distributors | `/login` → Orbis (`orbisonline.in`) |
| New client onboarding | `/onboarding` → `client_onboarding` table + `onboarding` bucket + email |

## Config in code (change if needed)
- Orbis URL & notification inbox: `src/lib/cms/config.ts`
- Supabase URL / anon key: `.env` (and safe fallbacks in `src/lib/cms/supabaseClient.ts`)

/* ------------------------------------------------------------------ */
/* Static integration config — Orbis portal + notification inbox.      */
/* ------------------------------------------------------------------ */

/** All form submissions (onboarding, callbacks) are emailed here. */
export const REDIRECT_EMAIL = 'pms@acm.co.in';

/**
 * Orbis Reporting System — existing clients AND existing distributors
 * both authenticate on the same portal.
 */
export const ORBIS = {
  clientUrl: 'https://www.orbisonline.in/portal/Account/Login.aspx',
  partnerUrl: 'https://www.orbisonline.in/portal/Account/Login.aspx',
};

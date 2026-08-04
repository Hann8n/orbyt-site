import * as Sentry from "@sentry/astro";

function isOAuthCallbackEvent(event) {
  const requestURL = event.request?.url ?? "";
  const transaction = event.transaction ?? "";
  return requestURL.includes("/oauth/callback") || transaction.includes("/oauth/callback");
}

Sentry.init({
  dsn: "https://2e9379d25cdf5a4cb5ee39cff7900919@o4510432459096064.ingest.us.sentry.io/4511281726750720",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  // OAuth callbacks carry one-time codes and state in the query string. Drop the
  // entire route from error and performance telemetry instead of attempting to
  // maintain a field-by-field redaction list.
  beforeSend(event) {
    return isOAuthCallbackEvent(event) ? null : event;
  },
  beforeSendTransaction(event) {
    return isOAuthCallbackEvent(event) ? null : event;
  },
  // Track server response times and slow requests
  tracesSampleRate: 0.1,
});

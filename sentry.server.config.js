import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://2e9379d25cdf5a4cb5ee39cff7900919@o4510432459096064.ingest.us.sentry.io/4511281726750720",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  // Track server response times and slow requests
  tracesSampleRate: 0.1,
});

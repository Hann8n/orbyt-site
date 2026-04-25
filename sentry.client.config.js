import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://2e9379d25cdf5a4cb5ee39cff7900919@o4510432459096064.ingest.us.sentry.io/4511281726750720",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  // Session replay to see exactly what users did before an error
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  // Capture replays for all errors
  replaysOnErrorSampleRate: 1.0,
  // Track page load times and server response times
  tracesSampleRate: 0.1,
});

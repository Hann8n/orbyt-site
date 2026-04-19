/// <reference path="../worker-configuration.d.ts" />

declare module 'cloudflare:workers' {
  export const env: Env;
}

declare namespace App {
  interface Locals {
    locale: string;
    /** ISO 3166-1 alpha-2 country code from Cloudflare geo-IP (e.g. "GB", "US") */
    countryCode?: string;
  }
}

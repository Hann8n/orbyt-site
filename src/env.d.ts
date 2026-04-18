/// <reference path="../worker-configuration.d.ts" />

declare namespace Cloudflare {
  interface Env {
    orbyt_altstore_adp: R2Bucket;
    ADMIN_SECRET: string;
  }
}

declare module 'cloudflare:workers' {
  export const env: Env;
}

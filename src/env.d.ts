/// <reference path="../worker-configuration.d.ts" />

declare module 'cloudflare:workers' {
  export const env: Env;
}

declare namespace App {
  interface Locals {
    locale: string;
  }
}

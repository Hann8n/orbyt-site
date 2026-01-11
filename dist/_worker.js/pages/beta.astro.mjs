globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, r as renderTemplate, k as renderHead } from '../chunks/astro/server_OX3wzgTe.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = true;
const $$Beta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html data-astro-cid-qtdh6zdz> <head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"><title>Join the waitlist</title><script async src="https://tally.so/widgets/embed.js"><\/script>', '</head> <body data-astro-cid-qtdh6zdz> <iframe data-tally-src="https://tally.so/r/nWx7zQ?transparentBackground=1&formEventsForwarding=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="Join the waitlist" data-astro-cid-qtdh6zdz></iframe> </body> </html>'])), renderHead());
}, "/Users/jack/orbyt-site/src/pages/beta.astro", void 0);

const $$file = "/Users/jack/orbyt-site/src/pages/beta.astro";
const $$url = "/beta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Beta,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

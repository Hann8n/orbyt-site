globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderHead, r as renderTemplate } from '../chunks/astro/server_OX3wzgTe.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-zetdm5md> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>404 - Page Not Found | Orbyt</title><!-- Favicon setup --><link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"><link rel="icon" href="/favicon_io/favicon.ico"><link rel="manifest" href="/favicon_io/site.webmanifest"><!-- Theme colors for mobile browsers --><meta name="theme-color" content="#000000"><meta name="msapplication-TileColor" content="#000000">${renderHead()}</head> <body data-astro-cid-zetdm5md> <div class="container" data-astro-cid-zetdm5md> <div class="error-number" data-astro-cid-zetdm5md>404</div> <h1 class="error-title" data-astro-cid-zetdm5md>Page Not Found</h1> <p class="error-message" data-astro-cid-zetdm5md>There's nothing to see here...</p> <div class="navigation-buttons" data-astro-cid-zetdm5md> <a href="/" class="nav-button" data-astro-cid-zetdm5md>Go Home</a> </div> </div> </body></html>`;
}, "/Users/jack/orbyt-site/src/pages/404.astro", void 0);

const $$file = "/Users/jack/orbyt-site/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

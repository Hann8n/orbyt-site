globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, k as renderHead } from '../chunks/astro/server_bQadTECP.mjs';
import { a as fetchProfile, t as toAbsoluteUrl, g as getImageMimeType } from '../chunks/bluesky-api_BUKKakHI.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$handle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$handle;
  const { handle } = Astro2.params;
  let profileData = null;
  if (handle) {
    profileData = await fetchProfile(handle);
  }
  if (!profileData) {
    return new Response(null, { status: 404 });
  }
  profileData?.displayName || handle || "Profile";
  const description = profileData?.description || `Profile page for @${handle}`;
  const avatar = profileData?.avatar || "/images/Default-avatar.png";
  const ogImage = toAbsoluteUrl(avatar);
  const ogUrl = `https://getorbyt.com/@${handle}`;
  const ogTitle = `@${handle} on orbyt`;
  const ogDescription = description.length > 200 ? description.substring(0, 200) + "..." : description;
  const ogImageWidth = 1200;
  const ogImageHeight = 1200;
  const ogImageType = getImageMimeType(avatar);
  const ogImageAlt = description.length > 200 ? description.substring(0, 200) : description;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-n44cr2l3> <head><meta charset="utf-8"><!-- Critical: Inline font-face for immediate availability (no network delay) --><!-- Preload Figtree font to start download early --><link rel="preload" href="/fonts/Figtree/Figtree-VariableFont_wght.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/css/normalize.css"><link rel="stylesheet" href="/css/skeleton.css"><link rel="stylesheet" href="/css/shared.css"><link rel="stylesheet" href="/css/profile.css"><title>', '</title><meta name="description"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:secure_url"', '><meta property="og:image:type"', '><meta property="og:image:width"', '><meta property="og:image:height"', '><meta property="og:image:alt"', '><meta property="og:url"', '><meta property="og:type" content="profile"><meta property="profile:username"', '><meta property="og:site_name" content="orbyt"><meta property="og:locale" content="en_US"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="viewport" content="width=device-width, initial-scale=1"><!-- Favicon setup --><link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"><link rel="icon" type="image/x-icon" href="/favicon_io/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"><link rel="manifest" href="/favicon_io/site.webmanifest">', '</head> <body data-astro-cid-n44cr2l3> <div id="profile"', ` data-astro-cid-n44cr2l3> <header class="hidden" data-astro-cid-n44cr2l3> <div class="links" data-astro-cid-n44cr2l3> <a href="/" class="logo-wordmark" data-astro-cid-n44cr2l3> <span class="logo-text" data-astro-cid-n44cr2l3>orbyt</span> </a> <a class="install-button mobile" href="/beta" data-astro-cid-n44cr2l3>
Waitlist
<svg class="svg-button" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-n44cr2l3> <path d="M1.93892 19.9988L18.9736 2.96362" stroke="black" stroke-width="3.993" data-astro-cid-n44cr2l3></path> <path d="M19 16.7368L19 2.93875L5.20193 2.93875" stroke="black" stroke-width="3.993" data-astro-cid-n44cr2l3></path> </svg> </a> </div> <svg class="hr-inline mobile" height="7" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-n44cr2l3> <defs data-astro-cid-n44cr2l3> <pattern id="squigglePattern" width="374" height="7" patternUnits="userSpaceOnUse" data-astro-cid-n44cr2l3> <path d="M0 1C5.50021 1 5.50021 5.84456 11.0004 5.84456C16.5006 5.84456 16.5006 1 22.0008 1C27.501 1 27.501 5.84456 33.0013 5.84456C38.5015 5.84456 38.5015 1 44.0017 1C49.5019 1 49.5019 5.84456 55.0021 5.84456C60.5023 5.84456 60.5023 1 66.0025 1C71.5027 1 71.5027 5.84456 77.0029 5.84456C82.5031 5.84456 82.5031 1 87.9998 1C93.5 1 93.5 5.84456 98.9967 5.84456C104.497 5.84456 104.497 1 109.994 1C115.494 1 115.494 5.84456 120.99 5.84456C126.491 5.84456 126.491 1 131.991 1C137.491 1 137.491 5.84456 142.991 5.84456C148.491 5.84456 148.491 1 153.992 1C159.492 1 159.492 5.84456 164.988 5.84456C170.489 5.84456 170.489 1 175.985 1C181.486 1 181.486 5.84456 186.986 5.84456C192.486 5.84456 192.486 1 197.986 1C203.486 1 203.486 5.84456 208.987 5.84456C214.487 5.84456 214.487 1 219.987 1C225.487 1 225.487 5.84456 230.987 5.84456C236.488 5.84456 236.488 1 241.988 1C247.488 1 247.488 5.84456 252.988 5.84456C258.488 5.84456 258.488 1 263.989 1C269.489 1 269.489 5.84456 274.989 5.84456C280.489 5.84456 280.489 1 285.99 1C291.49 1 291.49 5.84456 296.99 5.84456C302.49 5.84456 302.49 1 307.99 1C313.491 1 313.491 5.84456 318.991 5.84456C324.491 5.84456 324.491 1 329.991 1C335.491 1 335.491 5.84456 340.992 5.84456C346.492 5.84456 346.492 1 351.992 1C357.492 1 357.492 5.84456 362.996 5.84456C368.5 5.84456 368.496 1 374 1" stroke="#f3f5fe" stroke-width="2" stroke-miterlimit="10" data-astro-cid-n44cr2l3></path> </pattern> </defs> <rect fill="url(#squigglePattern)" width="100%" height="100%" data-astro-cid-n44cr2l3></rect> </svg> <div class="author" data-astro-cid-n44cr2l3> <img class="avatar" src="/images/Default-avatar.png" alt="Avatar" data-astro-cid-n44cr2l3> <h1 class="username" data-astro-cid-n44cr2l3></h1> <div class="bio" data-astro-cid-n44cr2l3></div> </div> <svg class="hr-inline desktop" width="374" height="7" viewBox="0 0 374 7" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-n44cr2l3> <path d="M0 1C5.50021 1 5.50021 5.84456 11.0004 5.84456C16.5006 5.84456 16.5006 1 22.0008 1C27.501 1 27.501 5.84456 33.0013 5.84456C38.5015 5.84456 38.5015 1 44.0017 1C49.5019 1 49.5019 5.84456 55.0021 5.84456C60.5023 5.84456 60.5023 1 66.0025 1C71.5027 1 71.5027 5.84456 77.0029 5.84456C82.5031 5.84456 82.5031 1 87.9998 1C93.5 1 93.5 5.84456 98.9967 5.84456C104.497 5.84456 104.497 1 109.994 1C115.494 1 115.494 5.84456 120.99 5.84456C126.491 5.84456 126.491 1 131.991 1C137.491 1 137.491 5.84456 142.991 5.84456C148.491 5.84456 148.491 1 153.992 1C159.492 1 159.492 5.84456 164.988 5.84456C170.489 5.84456 170.489 1 175.985 1C181.486 1 181.486 5.84456 186.986 5.84456C192.486 5.84456 192.486 1 197.986 1C203.486 1 203.486 5.84456 208.987 5.84456C214.487 5.84456 214.487 1 219.987 1C225.487 1 225.487 5.84456 230.987 5.84456C236.488 5.84456 236.488 1 241.988 1C247.488 1 247.488 5.84456 252.988 5.84456C258.488 5.84456 258.488 1 263.989 1C269.489 1 269.489 5.84456 274.989 5.84456C280.489 5.84456 280.489 1 285.99 1C291.49 1 291.49 5.84456 296.99 5.84456C302.49 5.84456 302.49 1 307.99 1C313.491 1 313.491 5.84456 318.991 5.84456C324.491 5.84456 324.491 1 329.991 1C335.491 1 335.491 5.84456 340.992 5.84456C346.492 5.84456 346.492 1 351.992 1C357.492 1 357.492 5.84456 362.996 5.84456C368.5 5.84456 368.496 1 374 1" stroke="#f3f5fe" stroke-width="2" stroke-miterlimit="10" data-astro-cid-n44cr2l3></path> </svg> <div class="install-button-wrapper desktop" data-astro-cid-n44cr2l3> <a class="install-button" href="/beta" data-astro-cid-n44cr2l3>
Waitlist
<svg class="svg-button" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-n44cr2l3> <path d="M1.93892 19.9988L18.9736 2.96362" stroke="black" stroke-width="3.993" data-astro-cid-n44cr2l3></path> <path d="M19 16.7368L19 2.93875L5.20193 2.93875" stroke="black" stroke-width="3.993" data-astro-cid-n44cr2l3></path> </svg> </a> </div> </header> <div class="posts" data-astro-cid-n44cr2l3> <footer style="display: none;" data-astro-cid-n44cr2l3> <a id="load-more" data-astro-cid-n44cr2l3>Load more</a> </footer> </div> </div> <script type="module">
  import { populateVideoGrid, getUserHandleFromURL, getCurrentCursor, initProfile } from '/js/bluesky-profile.js';
  
  // Explicitly initialize profile when this HTML loads
  // This ensures profile loads when navigating back from other pages
  initProfile();
  
  const loadingHTML = '<div class="loading"><p>Fetching videos&hellip;</p></div>';

  async function loadMore() {
    const cursor = getCurrentCursor();
    const footer = document.querySelector('footer');
    const loadMoreBtn = document.getElementById('load-more');
    
    if (!footer || !loadMoreBtn || !cursor) {
      if (footer) footer.style.display = 'none';
      return;
    }

    loadMoreBtn.remove();
    footer.insertAdjacentHTML('beforeend', loadingHTML);

    try {
      const handle = getUserHandleFromURL();
      if (!handle) return;
      
      const nextCursor = await populateVideoGrid(handle, cursor);
      footer.querySelector('.loading')?.remove();
      
      if (nextCursor) {
        footer.style.display = 'flex';
        footer.appendChild(loadMoreBtn);
      } else {
        footer.style.display = 'none';
      }
    } catch (error) {
      console.error('Error loading more posts:', error);
      footer.querySelector('.loading')?.remove();
      footer.style.display = 'flex';
      footer.appendChild(loadMoreBtn);
    }
  }

  document.getElementById('load-more')?.addEventListener('click', (e) => {
    e.preventDefault();
    loadMore();
  });

  // Auto-load more if needed after initial load
  setTimeout(() => {
    if (document.querySelectorAll('.post').length < 6 && getCurrentCursor()) {
      loadMore();
    }
  }, 1000);
<\/script> </body> </html>`])), ogTitle, addAttribute(ogDescription, "content"), addAttribute(ogTitle, "content"), addAttribute(ogDescription, "content"), addAttribute(ogImage, "content"), addAttribute(ogImage, "content"), addAttribute(ogImageType, "content"), addAttribute(ogImageWidth.toString(), "content"), addAttribute(ogImageHeight.toString(), "content"), addAttribute(ogImageAlt, "content"), addAttribute(ogUrl, "content"), addAttribute(handle, "content"), addAttribute(ogTitle, "content"), addAttribute(ogDescription, "content"), addAttribute(ogImage, "content"), renderHead(), addAttribute(handle, "data-handle"));
}, "/Users/jack/orbyt-site/src/pages/@[handle].astro", void 0);

const $$file = "/Users/jack/orbyt-site/src/pages/@[handle].astro";
const $$url = "/@[handle]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$handle,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

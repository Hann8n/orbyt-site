globalThis.process ??= {}; globalThis.process.env ??= {};
import { p as decodeKey } from './chunks/astro/server_bQadTECP.mjs';
import './chunks/astro-designed-error-pages_QuSyPnLq.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_B5EK0Th3.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jack/orbyt-site/","cacheDir":"file:///Users/jack/orbyt-site/node_modules/.astro/","outDir":"file:///Users/jack/orbyt-site/dist/","srcDir":"file:///Users/jack/orbyt-site/src/","publicDir":"file:///Users/jack/orbyt-site/public/","buildClientDir":"file:///Users/jack/orbyt-site/dist/","buildServerDir":"file:///Users/jack/orbyt-site/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"beta/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/beta","isIndex":false,"type":"page","pattern":"^\\/beta\\/?$","segments":[[{"content":"beta","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/beta.astro","pathname":"/beta","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"terms/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_postId_.0QV4ZSJU.css"}],"routeData":{"route":"/@[handle]/[postid]","isIndex":false,"type":"page","pattern":"^\\/@([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"@","dynamic":false,"spread":false},{"content":"handle","dynamic":true,"spread":false}],[{"content":"postId","dynamic":true,"spread":false}]],"params":["handle","postId"],"component":"src/pages/@[handle]/[postId].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"header[data-astro-cid-n44cr2l3] .logo-wordmark[data-astro-cid-n44cr2l3]{display:flex;align-items:center;text-decoration:none;transition:opacity .2s ease}header[data-astro-cid-n44cr2l3] .logo-wordmark[data-astro-cid-n44cr2l3]:hover{opacity:.8}header[data-astro-cid-n44cr2l3] .logo-text[data-astro-cid-n44cr2l3]{font-family:Figtree,sans-serif;font-weight:900;font-size:42px;letter-spacing:-.02em;line-height:1;color:#ccd7e9}.install-button[data-astro-cid-n44cr2l3]{background-color:#ccd7e9!important;color:#000!important}.install-button[data-astro-cid-n44cr2l3] .svg-button[data-astro-cid-n44cr2l3]{display:inline-block;width:16px;height:16px;flex-shrink:0;margin-left:8px;transition:transform .2s ease}.install-button[data-astro-cid-n44cr2l3]:hover .svg-button[data-astro-cid-n44cr2l3]{transform:translate(2px)}.install-button[data-astro-cid-n44cr2l3] .svg-button[data-astro-cid-n44cr2l3] path[data-astro-cid-n44cr2l3]{stroke:#000!important;fill:none;stroke-linecap:round;stroke-linejoin:round}@media screen and (max-width:540px){header[data-astro-cid-n44cr2l3] .logo-text[data-astro-cid-n44cr2l3]{font-size:32px}}@font-face{font-family:Figtree;src:url(/fonts/Figtree/Figtree-VariableFont_wght.woff2) format(\"woff2\");font-weight:300 900;font-style:normal;font-display:fallback}\n"}],"routeData":{"route":"/@[handle]","isIndex":false,"type":"page","pattern":"^\\/@([^/]+?)\\/?$","segments":[[{"content":"@","dynamic":false,"spread":false},{"content":"handle","dynamic":true,"spread":false}]],"params":["handle"],"component":"src/pages/@[handle].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jack/orbyt-site/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/jack/orbyt-site/src/pages/beta.astro",{"propagation":"none","containsHead":true}],["/Users/jack/orbyt-site/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["/Users/jack/orbyt-site/src/pages/terms.astro",{"propagation":"none","containsHead":true}],["/Users/jack/orbyt-site/src/pages/@[handle]/[postId].astro",{"propagation":"none","containsHead":true}],["/Users/jack/orbyt-site/src/pages/@[handle].astro",{"propagation":"none","containsHead":true}],["/Users/jack/orbyt-site/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/beta@_@astro":"pages/beta.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/@[handle]/[postId]@_@astro":"pages/@_handle_/_postid_.astro.mjs","\u0000@astro-page:src/pages/@[handle]@_@astro":"pages/@_handle_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_IuiXme5s.mjs","/Users/jack/orbyt-site/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/Users/jack/orbyt-site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_EtFuQezZ.mjs","/Users/jack/orbyt-site/src/pages/@[handle]/[postId].astro?astro&type=script&index=1&lang.ts":"_astro/_postId_.astro_astro_type_script_index_1_lang.C0ITug2l.js","/Users/jack/orbyt-site/src/pages/@[handle]/[postId].astro?astro&type=script&index=0&lang.ts":"_astro/_postId_.astro_astro_type_script_index_0_lang.CdxItCIG.js","/Users/jack/orbyt-site/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CJLuASfc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/jack/orbyt-site/src/pages/@[handle]/[postId].astro?astro&type=script&index=0&lang.ts","window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"UA-157537168-1\");"],["/Users/jack/orbyt-site/src/pages/index.astro?astro&type=script&index=0&lang.ts","window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-XXXXXXXXXX\");"]],"assets":["/_astro/_postId_.0QV4ZSJU.css","/TV-Raw.png","/TV-Raw.webp","/callback.html","/oauth-client-metadata.json","/_astro/_postId_.astro_astro_type_script_index_1_lang.C0ITug2l.js","/api/channels.json","/api/headers.json","/css/embed.css","/css/fonts.css","/css/normalize.css","/css/post.css","/css/profile.css","/css/shared.css","/css/skeleton.css","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/favicon_dark/android-chrome-192x192.png","/favicon_dark/android-chrome-512x512.png","/favicon_dark/apple-touch-icon.png","/favicon_dark/favicon-16x16.png","/favicon_dark/favicon-32x32.png","/favicon_dark/favicon.ico","/favicon_dark/site.webmanifest","/favicon_io/android-chrome-192x192.png","/favicon_io/android-chrome-512x512.png","/favicon_io/apple-touch-icon.png","/favicon_io/favicon-16x16.png","/favicon_io/favicon-32x32.png","/favicon_io/favicon.ico","/favicon_io/site.webmanifest","/favicon_light/android-chrome-192x192.png","/favicon_light/android-chrome-512x512.png","/favicon_light/apple-touch-icon.png","/favicon_light/favicon-16x16.png","/favicon_light/favicon-32x32.png","/favicon_light/favicon.ico","/favicon_light/site.webmanifest","/js/bluesky-profile.js","/js/post-view.js","/js/query-client.js","/images/Default-avatar.png","/images/orbyt-logotype.png","/images/orbyt-logotype.webp","/api/banners/3053370.png","/_worker.js/_astro/_postId_.0QV4ZSJU.css","/_worker.js/chunks/_@astrojs-ssr-adapter_BZni74Oi.mjs","/_worker.js/chunks/astro-designed-error-pages_QuSyPnLq.mjs","/_worker.js/chunks/astro_Cfid5KuU.mjs","/_worker.js/chunks/bluesky-api_BUKKakHI.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/image-endpoint_B3OLRbLP.mjs","/_worker.js/chunks/index_B-S-t5eM.mjs","/_worker.js/chunks/noop-middleware_B5EK0Th3.mjs","/_worker.js/chunks/path_CH3auf61.mjs","/_worker.js/chunks/remote_CrdlObHx.mjs","/_worker.js/chunks/sharp_EtFuQezZ.mjs","/_worker.js/pages/404.astro.mjs","/_worker.js/pages/@_handle_.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/beta.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/privacy.astro.mjs","/_worker.js/pages/terms.astro.mjs","/fonts/Figtree/Figtree-VariableFont_wght-Italic.woff2","/fonts/Figtree/Figtree-VariableFont_wght.woff2","/images/post/Orbyt-with-background.png","/images/post/placeholder.png","/images/post/play.svg","/_worker.js/chunks/astro/server_bQadTECP.mjs","/_worker.js/pages/@_handle_/_postid_.astro.mjs","/404.html","/beta/index.html","/privacy/index.html","/terms/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"qDwc9DZ3fj5SGHTAxkk8EZXJkTCwFBPGjSKM/MWzMks=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };

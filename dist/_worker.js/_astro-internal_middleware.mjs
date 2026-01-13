globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_QuSyPnLq.mjs';
import './chunks/astro/server_bQadTECP.mjs';
import { s as sequence } from './chunks/index_B-S-t5eM.mjs';

const onRequest$2 = async (context, next) => {
  const pathname = context.url.pathname;
  if (pathname.startsWith("/@")) {
    return next();
  }
  if (pathname === "/") {
    return next();
  }
  const knownRoutes = ["/beta", "/privacy", "/terms"];
  if (knownRoutes.includes(pathname)) {
    return next();
  }
  const staticPatterns = [
    "/callback.html",
    "/oauth-client-metadata.json",
    "/css/",
    "/js/",
    "/images/",
    "/api/",
    "/favicon_",
    "/fonts/"
  ];
  const isStaticFile = staticPatterns.some((pattern) => {
    if (pattern.endsWith("/")) {
      return pathname.startsWith(pattern);
    }
    return pathname === pattern || pathname.startsWith(pattern);
  });
  if (isStaticFile) {
    return next();
  }
  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0];
  if (firstSegment && firstSegment.includes(".")) {
    const restOfPath = pathSegments.slice(1).join("/");
    const newPath = restOfPath ? `/@${firstSegment}/${restOfPath}` : `/@${firstSegment}`;
    const redirectUrl = new URL(newPath + context.url.search + context.url.hash, context.url.origin);
    return Response.redirect(redirectUrl.toString(), 301);
  }
  return next();
};

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	onRequest$2
	
);

export { onRequest };

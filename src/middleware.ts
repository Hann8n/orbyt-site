import type { MiddlewareHandler } from 'astro';

/**
 * Middleware to automatically add @ prefix to profile URLs
 * Redirects /domain.tld to /@domain.tld so proper 404 handling works
 */
export const onRequest: MiddlewareHandler = async (context, next) => {
  const pathname = context.url.pathname;

  // Skip if already has @ prefix
  if (pathname.startsWith('/@')) {
    return next();
  }

  // Skip root path
  if (pathname === '/') {
    return next();
  }

  // Skip known routes
  const knownRoutes = ['/beta', '/privacy', '/terms'];
  if (knownRoutes.includes(pathname)) {
    return next();
  }

  // Skip static file patterns
  const staticPatterns = [
    '/callback.html',
    '/oauth-client-metadata.json',
    '/css/',
    '/js/',
    '/images/',
    '/api/',
    '/favicon_',
    '/fonts/',
  ];

  const isStaticFile = staticPatterns.some((pattern) => {
    if (pattern.endsWith('/')) {
      return pathname.startsWith(pattern);
    }
    return pathname === pattern || pathname.startsWith(pattern);
  });

  if (isStaticFile) {
    return next();
  }

  // Check if the first path segment contains at least one dot (domain pattern)
  // Profile URLs are always at least domain.tld (e.g., wsj.com, example.co.uk)
  // Split pathname and check first segment
  const pathSegments = pathname.split('/').filter(Boolean); // Remove empty strings
  const firstSegment = pathSegments[0];

  // If first segment contains a dot, it's likely a domain (profile handle)
  if (firstSegment && firstSegment.includes('.')) {
    // Redirect to /@{firstSegment}/{rest of path}
    // This handles both /wsj.com and /wsj.com/post-id cases
    const restOfPath = pathSegments.slice(1).join('/');
    const newPath = restOfPath 
      ? `/@${firstSegment}/${restOfPath}`
      : `/@${firstSegment}`;
    
    // Redirect to the proper URL, preserving query params and hash
    // This ensures the browser URL changes and proper 404 handling works
    // Using Cloudflare's Response.redirect() with absolute URL and 301 status
    // Construct URL properly using URL constructor to ensure validity
    const redirectUrl = new URL(newPath, context.url.origin);
    redirectUrl.search = context.url.search;
    redirectUrl.hash = context.url.hash;
    return Response.redirect(redirectUrl.toString(), 301);
  }

  // No match, continue normal routing
  return next();
};

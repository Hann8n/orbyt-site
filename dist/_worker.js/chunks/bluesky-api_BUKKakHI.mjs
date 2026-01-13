globalThis.process ??= {}; globalThis.process.env ??= {};
const BLUESKY_API_BASE = "https://public.api.bsky.app/xrpc";
const SITE_URL = "https://getorbyt.com";
const API_TIMEOUT = 5e3;
async function fetchWithTimeout(url, timeout = API_TIMEOUT) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}
async function fetchProfile(handle) {
  try {
    const url = `${BLUESKY_API_BASE}/app.bsky.actor.getProfile?actor=${encodeURIComponent(handle)}`;
    const response = await fetchWithTimeout(url);
    if (!response.ok) return null;
    const data = await response.json();
    if (data.error || !data.handle) return null;
    return {
      handle: data.handle,
      displayName: data.displayName,
      description: data.description,
      avatar: data.avatar,
      did: data.did
    };
  } catch {
    return null;
  }
}
async function resolveHandle(handle) {
  try {
    const url = `${BLUESKY_API_BASE}/com.atproto.identity.resolveHandle?handle=${encodeURIComponent(handle)}`;
    const response = await fetchWithTimeout(url);
    if (!response.ok) return null;
    const data = await response.json();
    return data.did || null;
  } catch {
    return null;
  }
}
async function fetchPost(handle, postId) {
  try {
    const did = await resolveHandle(handle);
    if (!did) return null;
    const atUri = `at://${did}/app.bsky.feed.post/${postId}`;
    const url = `${BLUESKY_API_BASE}/app.bsky.feed.getPosts?uris=${encodeURIComponent(atUri)}`;
    const response = await fetchWithTimeout(url);
    if (!response.ok) return null;
    const data = await response.json();
    if (!data.posts || data.posts.length === 0) return null;
    const post = data.posts[0];
    let thumbnail;
    let videoUrl;
    let aspectRatio;
    if (post.embed) {
      if (post.embed.$type === "app.bsky.embed.video#view") {
        thumbnail = post.embed.thumbnail;
        aspectRatio = post.embed.aspectRatio;
        if (post.embed.playlist) {
          videoUrl = post.embed.playlist;
        } else if (post.embed.cid && post.uri) {
          const didMatch = post.uri.match(/did:plc:[^/]+/);
          const did2 = didMatch ? didMatch[0] : null;
          if (did2) {
            videoUrl = `https://video.bsky.app/watch/${encodeURIComponent(did2)}/${encodeURIComponent(post.embed.cid)}/playlist.m3u8`;
          }
        }
      } else if (post.embed.$type === "app.bsky.embed.recordWithMedia" && post.embed.media) {
        if (post.embed.media.$type === "app.bsky.embed.video#view") {
          thumbnail = post.embed.media.thumbnail;
          aspectRatio = post.embed.media.aspectRatio;
          if (post.embed.media.playlist) {
            videoUrl = post.embed.media.playlist;
          } else if (post.embed.media.cid && post.uri) {
            const didMatch = post.uri.match(/did:plc:[^/]+/);
            const did2 = didMatch ? didMatch[0] : null;
            if (did2) {
              videoUrl = `https://video.bsky.app/watch/${encodeURIComponent(did2)}/${encodeURIComponent(post.embed.media.cid)}/playlist.m3u8`;
            }
          }
        }
      } else if (post.embed.$type === "app.bsky.embed.images#view" && post.embed.images && post.embed.images[0]) {
        thumbnail = post.embed.images[0].thumb || post.embed.images[0].fullsize;
      }
    }
    return {
      text: post.record?.text || "",
      createdAt: post.record?.createdAt,
      // ISO 8601 timestamp
      indexedAt: post.indexedAt,
      // ISO 8601 timestamp
      likeCount: post.likeCount || 0,
      author: {
        handle: post.author?.handle || handle,
        displayName: post.author?.displayName,
        avatar: post.author?.avatar
      },
      embed: {
        thumbnail,
        videoUrl,
        aspectRatio
      }
    };
  } catch {
    return null;
  }
}
function toAbsoluteUrl(url, fallback = "/images/post/Orbyt-with-background.png") {
  if (!url) return `${SITE_URL}${fallback}`;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${SITE_URL}${url}`;
  return `${SITE_URL}/${url}`;
}
function getImageMimeType(url) {
  if (!url) return "image/jpeg";
  const urlLower = url.toLowerCase();
  if (urlLower.includes(".png") || urlLower.endsWith("png")) {
    return "image/png";
  }
  if (urlLower.includes(".webp") || urlLower.endsWith("webp")) {
    return "image/webp";
  }
  if (urlLower.includes(".gif") || urlLower.endsWith("gif")) {
    return "image/gif";
  }
  if (urlLower.includes(".jpg") || urlLower.includes(".jpeg") || urlLower.endsWith("jpg") || urlLower.endsWith("jpeg")) {
    return "image/jpeg";
  }
  return "image/jpeg";
}

export { fetchProfile as a, fetchPost as f, getImageMimeType as g, toAbsoluteUrl as t };

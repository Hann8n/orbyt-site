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
    if (post.embed) {
      if (post.embed.$type === "app.bsky.embed.video#view" && post.embed.thumbnail) {
        thumbnail = post.embed.thumbnail;
      } else if (post.embed.$type === "app.bsky.embed.recordWithMedia" && post.embed.media) {
        if (post.embed.media.$type === "app.bsky.embed.video#view" && post.embed.media.thumbnail) {
          thumbnail = post.embed.media.thumbnail;
        }
      } else if (post.embed.$type === "app.bsky.embed.images#view" && post.embed.images && post.embed.images[0]) {
        thumbnail = post.embed.images[0].thumb || post.embed.images[0].fullsize;
      }
    }
    return {
      text: post.record?.text || "",
      author: {
        handle: post.author?.handle || handle,
        displayName: post.author?.displayName,
        avatar: post.author?.avatar
      },
      embed: {
        thumbnail
      }
    };
  } catch {
    return null;
  }
}
function toAbsoluteUrl(url, fallback = "/images/Default-avatar.png") {
  if (!url) return `${SITE_URL}${fallback}`;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${SITE_URL}${url}`;
  return `${SITE_URL}/${url}`;
}

export { fetchProfile as a, fetchPost as f, toAbsoluteUrl as t };

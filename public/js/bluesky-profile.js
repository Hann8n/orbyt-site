/**
 * Bluesky Profile Integration with TanStack Query
 * Fetches and displays Bluesky profile data dynamically with caching and request deduplication
 */

import { getQueryClient, queryKeys, fetchQuery } from './query-client.js';

const BLUESKY_API_BASE = 'https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile';
const BLUESKY_FEED_API_BASE = 'https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed';

/**
 * Extract user handle from URL query parameter or path
 * Supports handles with or without @ prefix
 * Supports both query params (?user=handle) and path-based (@handle or /@handle)
 * First checks data-handle attribute from DOM element (Astro SSR)
 */
function getUserHandleFromURL() {
  // First check for data-attribute from Astro SSR (highest priority)
  const profileEl = document.getElementById('profile');
  if (profileEl && profileEl.dataset && profileEl.dataset.handle) {
    return profileEl.dataset.handle.trim();
  }

  // Then check for query parameter
  const urlParams = new URLSearchParams(window.location.search);
  let handle = urlParams.get('user');

  // If no query param, check for path-based routing (e.g., /@username or @username)
  if (!handle) {
    const path = window.location.pathname;
    // Match patterns like /@username or @username in the path
    const pathMatch = path.match(/[@]([^/]+)/);
    if (pathMatch) {
      handle = pathMatch[1];
    }
  }

  // Default to wsj.com if no handle found
  if (!handle) {
    handle = 'wsj.com';
  }

  // Remove @ prefix if present
  if (handle.startsWith('@')) {
    handle = handle.substring(1);
  }

  return handle.trim();
}

/**
 * Fetch profile data from Bluesky API
 * This is the query function used by TanStack Query
 * @param {string} handle - Bluesky profile handle
 * @returns {Promise<Object>} Profile data
 */
async function fetchProfileQuery(handle) {
  const url = `${BLUESKY_API_BASE}?actor=${encodeURIComponent(handle)}`;
  const response = await fetch(url);

  // Check HTTP status
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Profile not found: ${handle}`);
    }
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  // Bluesky API returns errors in JSON format with error field
  if (data.error) {
    throw new Error(data.message || `API error: ${data.error}`);
  }

  // Validate that we have the required fields
  if (!data.handle) {
    throw new Error('Invalid profile data: missing handle');
  }

  return data;
}

/**
 * Fetch video posts from Bluesky API
 * This is the query function used by TanStack Query
 * @param {string} handle - Bluesky profile handle
 * @param {string} cursor - Pagination cursor (optional)
 * @param {number} limit - Number of posts to fetch (default 30)
 * @returns {Promise<Object>} Feed data with posts and cursor
 */
async function fetchVideoPostsQuery({ handle, cursor = null, limit = 30 }) {
  let url = `${BLUESKY_FEED_API_BASE}?actor=${encodeURIComponent(handle)}&filter=posts_with_video&limit=${limit}`;
  if (cursor) {
    url += `&cursor=${encodeURIComponent(cursor)}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.message || `API error: ${data.error}`);
  }

  return {
    feed: data.feed || [],
    cursor: data.cursor || null,
  };
}

/**
 * Apply profile colors from Orbyt API
 * Reads color data from the profile element's data attribute
 * Only changes color values, does not modify layout
 */
function applyProfileColors() {
  const profileEl = document.getElementById('profile');
  if (!profileEl) return;

  const colorDataStr = profileEl.dataset.colorData;
  if (!colorDataStr) return;

  try {
    const colorData = JSON.parse(colorDataStr);
    if (!colorData) return;

    const textColor = colorData.textColor;
    const backgroundColor = colorData.backgroundColor;

    if (textColor) {
      // Apply text color to username and bio
      const usernameEl = document.querySelector('.author h1.username');
      const bioEl = document.querySelector('.author .bio');
      const avatarEl = document.querySelector('.author .avatar');

      if (usernameEl) {
        usernameEl.style.color = textColor;
      }
      if (bioEl) {
        bioEl.style.color = textColor;
      }
      if (avatarEl) {
        avatarEl.style.borderColor = textColor;
      }

      // Apply text color to beta icon (uses currentColor)
      const betaIconEl = document.querySelector('.beta-icon');
      if (betaIconEl) {
        betaIconEl.style.color = textColor;
      }

      // Apply text color to orbyt logo
      const logoTextEl = document.querySelector('.logo-text');
      if (logoTextEl) {
        logoTextEl.style.color = textColor;
      }

      // Apply text color to squiggle hr lines
      const hrPaths = document.querySelectorAll('.hr-inline path');
      hrPaths.forEach(path => {
        path.setAttribute('stroke', textColor);
      });
    }

    if (backgroundColor) {
      // Apply background color to header
      const headerEl = document.querySelector('header');
      if (headerEl) {
        headerEl.style.backgroundColor = backgroundColor;
      }
    }

    // Apply colors to waitlist/install buttons (textColor bg, backgroundColor text)
    if (textColor && backgroundColor) {
      const installButtons = document.querySelectorAll('.install-button');
      installButtons.forEach(btn => {
        btn.style.backgroundColor = textColor;
        btn.style.color = backgroundColor;
      });

      // Apply colors to load more button
      const loadMoreBtn = document.getElementById('load-more');
      if (loadMoreBtn) {
        loadMoreBtn.style.backgroundColor = textColor;
        loadMoreBtn.style.color = backgroundColor;
      }
    }
  } catch (error) {
    console.warn('Failed to parse color data:', error);
  }
}

/**
 * Update DOM elements with profile data
 * @param {Object} profile - Profile data from Bluesky API
 */
function updateProfileDisplay(profile) {
  // Update avatar
  const avatarEl = document.querySelector('.author .avatar');
  if (avatarEl) {
    if (profile.avatar) {
      avatarEl.src = profile.avatar;
      avatarEl.alt = `${profile.displayName || profile.handle}'s avatar`;
      // Add error handler for broken images
      avatarEl.onerror = function () {
        this.src = '/images/Default-avatar.png';
      };
    } else {
      avatarEl.src = '/images/Default-avatar.png';
      avatarEl.alt = `${profile.displayName || profile.handle}'s avatar`;
    }
  }

  // Update username
  const usernameEl = document.querySelector('.author h1.username');
  if (usernameEl) {
    const displayName = profile.displayName || profile.handle;
    usernameEl.textContent = displayName;
  }

  // Update bio/description with clickable abbreviated links
  const bioEl = document.querySelector('.author .bio');
  if (bioEl) {
    if (profile.description) {
      bioEl.innerHTML = truncateUrls(profile.description);
    } else {
      bioEl.innerHTML = ''; // Clear if no description
    }
  }

  // Apply profile colors from Orbyt API
  applyProfileColors();

  // Update page title
  const displayName = profile.displayName || profile.handle;
  document.title = `${displayName} on orbyt`;

  // Update meta tags for SEO and social sharing
  updateMetaTags(profile, displayName);

  // Remove hidden class to show profile header
  const headerEl = document.querySelector('header');
  if (headerEl) {
    headerEl.classList.remove('hidden');
  }
}

/**
 * Update meta tags for SEO and social sharing
 * @param {Object} profile - Profile data
 * @param {string} displayName - Display name to use
 */
function updateMetaTags(profile, displayName) {
  // Update og:title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', `@${displayName} on orbyt`);

  // Update og:description
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescription);
  }
  const description = profile.description || `Profile page for ${displayName}`;
  ogDescription.setAttribute('content', description);

  // Update og:image
  let ogImage = document.querySelector('meta[property="og:image"]');
  if (!ogImage) {
    ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    document.head.appendChild(ogImage);
  }
  ogImage.setAttribute('content', profile.avatar || '/images/Default-avatar.png');

  // Update Twitter card meta tags
  let twitterTitle = document.querySelector('meta[property="twitter:title"]');
  if (!twitterTitle) {
    twitterTitle = document.createElement('meta');
    twitterTitle.setAttribute('property', 'twitter:title');
    document.head.appendChild(twitterTitle);
  }
  twitterTitle.setAttribute('content', `@${displayName} on orbyt`);

  let twitterDescription = document.querySelector('meta[property="twitter:description"]');
  if (!twitterDescription) {
    twitterDescription = document.createElement('meta');
    twitterDescription.setAttribute('property', 'twitter:description');
    document.head.appendChild(twitterDescription);
  }
  twitterDescription.setAttribute('content', description);

  let twitterImage = document.querySelector('meta[property="twitter:image"]');
  if (!twitterImage) {
    twitterImage = document.createElement('meta');
    twitterImage.setAttribute('property', 'twitter:image');
    document.head.appendChild(twitterImage);
  }
  twitterImage.setAttribute('content', profile.avatar || '/images/Default-avatar.png');

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);
}

/**
 * Show loading state
 */
function showLoading() {
  const avatarEl = document.querySelector('.author .avatar');
  const usernameEl = document.querySelector('.author h1.username');
  const bioEl = document.querySelector('.author .bio');

  if (avatarEl) {
    avatarEl.style.opacity = '0.5';
  }

  if (usernameEl) {
    usernameEl.textContent = 'Loading...';
  }

  if (bioEl) {
    bioEl.textContent = 'Fetching profile...';
  }
}

/**
 * Hide loading state
 */
function hideLoading() {
  const avatarEl = document.querySelector('.author .avatar');
  if (avatarEl) {
    avatarEl.style.opacity = '1';
  }
}

/**
 * Show error message
 * @param {string} message - Error message to display
 * @param {string} handle - Handle that failed to load
 */
function showError(message, handle) {
  const usernameEl = document.querySelector('.author h1.username');
  const bioEl = document.querySelector('.author .bio');

  if (usernameEl) {
    usernameEl.textContent = 'Unknown user';
  }

  if (bioEl) {
    bioEl.textContent = '';
  }

  hideLoading();

  // Show header even on error
  const headerEl = document.querySelector('header');
  if (headerEl) {
    headerEl.classList.remove('hidden');
  }

  // Show error in posts area
  const errorContainer = document.getElementById('profile-error');
  const errorMessage = document.getElementById('profile-error-message');
  if (errorContainer) {
    errorContainer.style.display = 'flex';
  }
  if (errorMessage) {
    errorMessage.textContent = "We couldn't find that account";
  }
}

/**
 * Filter posts to only include video posts (client-side safety check)
 * API should already filter, but this ensures we only display video posts
 * @param {Array} feed - Array of feed post objects
 * @returns {Array} Filtered array of video posts
 */
function filterVideoPosts(feed) {
  return feed.filter(item => {
    const embed = item.post?.embed || item.post?.record?.embed;
    return (
      embed &&
      (embed.$type === 'app.bsky.embed.video' || embed.$type === 'app.bsky.embed.video#view')
    );
  });
}

/**
 * Extract post ID from Bluesky URI
 * @param {string} uri - Post URI in format at://did:plc:.../app.bsky.feed.post/{postId}
 * @returns {string} Post ID
 */
function extractPostId(uri) {
  if (!uri) return null;
  const parts = uri.split('/');
  return parts[parts.length - 1] || null;
}

/**
 * Render a video post HTML element
 * @param {Object} post - Post data from Bluesky API
 * @param {string} handle - User handle for link generation
 * @returns {HTMLElement} Post element
 */
function renderVideoPost(post, handle) {
  const postId = extractPostId(post.uri);
  if (!postId) {
    console.warn('Could not extract post ID from URI:', post.uri);
    return null;
  }

  const thumbnail = post.embed?.thumbnail || '';
  let caption = post.record?.text || '';

  // Truncate URLs in caption first
  caption = truncateUrls(caption);

  // Then truncate the entire caption to a maximum length
  caption = truncateText(caption, 90);

  const postDiv = document.createElement('div');
  postDiv.className = 'post';

  // Escape HTML attributes to prevent XSS
  const escapedThumbnail = escapeHtmlAttribute(thumbnail);
  // Don't escape caption HTML since truncateUrls now returns HTML with links
  const escapedHandle = escapeHtmlAttribute(handle);
  const escapedPostId = escapeHtmlAttribute(postId);

  postDiv.innerHTML = `
    <div class="post-image-container">
      <img
        class="post-placeholder"
        src="/images/post/placeholder.png"
        alt=""
      />
      <img class="post-thumb" src="${escapedThumbnail}" alt="" />
    </div>

    <a href="/@${escapedHandle}/${escapedPostId}">
      <img class="play-button" src="/images/post/play.svg" alt="" />
    </a>

    <div class="post-overlay">
      <div class="caption">${caption}</div>
    </div>
  `;

  return postDiv;
}

/**
 * Escape HTML attribute value to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped attribute value
 */
function escapeHtmlAttribute(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Escape HTML to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped HTML
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Convert URLs and email addresses to clickable links
 * @param {string} text - Text containing URLs and emails
 * @returns {string} Text with URLs and emails converted to clickable links (HTML)
 */
function truncateUrls(text) {
  if (!text) return text;

  // Email regex pattern - matches standard email addresses
  // Pattern: local-part@domain
  const emailRegex =
    /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g;

  // URL regex pattern - matches URLs (we'll filter out emails manually)
  // This matches: http://example.com, https://example.com, www.example.com, example.com/path
  const urlRegex =
    /(https?:\/\/)?(www\.)?([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}([\/][^\s]*)?/gi;

  // Collect all matches (emails and URLs) with their positions
  const matches = [];
  let match;

  // Find all email addresses
  while ((match = emailRegex.exec(text)) !== null) {
    matches.push({
      type: 'email',
      index: match.index,
      length: match[0].length,
      text: match[0],
    });
  }

  // Find all URLs (but skip if they're part of an email)
  while ((match = urlRegex.exec(text)) !== null) {
    const urlStart = match.index;
    const urlEnd = match.index + match[0].length;

    // Check if this URL overlaps with any email match
    const isPartOfEmail = matches.some(
      emailMatch =>
        emailMatch.type === 'email' &&
        urlStart >= emailMatch.index &&
        urlEnd <= emailMatch.index + emailMatch.length
    );

    // Also check if URL starts right after @ (which would be part of email)
    const charBefore = urlStart > 0 ? text[urlStart - 1] : '';
    if (charBefore === '@') {
      continue; // Skip URLs that follow @ symbol (likely part of email)
    }

    if (!isPartOfEmail) {
      matches.push({
        type: 'url',
        index: urlStart,
        length: match[0].length,
        text: match[0],
      });
    }
  }

  // Sort matches by position
  matches.sort((a, b) => a.index - b.index);

  // Remove overlapping matches (keep emails over URLs)
  const filteredMatches = [];
  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    let hasOverlap = false;

    for (let j = 0; j < filteredMatches.length; j++) {
      const existing = filteredMatches[j];
      const currentEnd = current.index + current.length;
      const existingEnd = existing.index + existing.length;

      // Check for overlap
      if (
        (current.index >= existing.index && current.index < existingEnd) ||
        (currentEnd > existing.index && currentEnd <= existingEnd) ||
        (current.index <= existing.index && currentEnd >= existingEnd)
      ) {
        // If current is an email and existing is a URL, replace it
        if (current.type === 'email' && existing.type === 'url') {
          filteredMatches[j] = current;
          hasOverlap = true;
          break;
        } else {
          // Otherwise skip current match
          hasOverlap = true;
          break;
        }
      }
    }

    if (!hasOverlap) {
      filteredMatches.push(current);
    }
  }

  // Re-sort after filtering
  filteredMatches.sort((a, b) => a.index - b.index);

  // Build output by processing matches in order
  const parts = [];
  let lastIndex = 0;

  for (const match of filteredMatches) {
    // Add text before match (escaped)
    if (match.index > lastIndex) {
      parts.push(escapeHtml(text.substring(lastIndex, match.index)));
    }

    // Process match based on type
    if (match.type === 'email') {
      // Create mailto link for email
      const escapedEmail = escapeHtmlAttribute(match.text);
      const escapedDisplayText = escapeHtml(match.text);
      parts.push(
        `<a href="mailto:${escapedEmail}" style="color: inherit; text-decoration: underline;">${escapedDisplayText}</a>`
      );
    } else {
      // Process URL
      try {
        let urlString = match.text;

        // If it doesn't have a protocol, add https:// for URL parsing
        if (!match.text.startsWith('http://') && !match.text.startsWith('https://')) {
          urlString = 'https://' + match.text;
        }

        // Try to parse as URL to extract hostname and path
        const url = new URL(urlString);
        let domain = url.hostname;

        // Remove www prefix
        if (domain.toLowerCase().startsWith('www.')) {
          domain = domain.substring(4);
        }

        // Get pathname (first part after /) for abbreviation
        const pathname = url.pathname;
        let displayText = domain;
        if (pathname && pathname.length > 1) {
          // Get first segment of path (up to 8 characters) then add ...
          const pathSegment = pathname.substring(1).split('/')[0];
          if (pathSegment && pathSegment.length > 0) {
            const shortPath = pathSegment.length > 8 ? pathSegment.substring(0, 8) : pathSegment;
            displayText = `${domain}/${shortPath}...`;
          }
        }

        // Create link with abbreviated text
        const finalUrl = match.text.startsWith('http') ? match.text : urlString;
        const escapedUrl = escapeHtmlAttribute(finalUrl);
        const escapedDisplayText = escapeHtml(displayText);
        parts.push(
          `<a href="${escapedUrl}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">${escapedDisplayText}</a>`
        );
      } catch (e) {
        // If URL parsing fails, fall back to manual extraction
        let cleanMatch = match.text;
        // Remove protocol
        cleanMatch = cleanMatch.replace(/^https?:\/\//i, '');
        // Remove www prefix
        cleanMatch = cleanMatch.replace(/^www\./i, '');
        // Extract domain and path parts
        const parts_match = cleanMatch.split('/');
        const domain = parts_match[0];
        let displayText = domain;
        // Check if there's a path after the domain
        if (parts_match.length > 1 && parts_match[1]) {
          const pathSegment = parts_match[1];
          const shortPath = pathSegment.length > 8 ? pathSegment.substring(0, 8) : pathSegment;
          displayText = `${domain}/${shortPath}...`;
        }
        const urlString = match.text.startsWith('http') ? match.text : 'https://' + match.text;
        const escapedUrl = escapeHtmlAttribute(urlString);
        const escapedDisplayText = escapeHtml(displayText);
        parts.push(
          `<a href="${escapedUrl}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">${escapedDisplayText}</a>`
        );
      }
    }

    lastIndex = match.index + match.length;
  }

  // Add remaining text after last match (escaped)
  if (lastIndex < text.length) {
    parts.push(escapeHtml(text.substring(lastIndex)));
  }

  // If no matches found, just escape and return the text
  if (parts.length === 0) {
    return escapeHtml(text);
  }

  return parts.join('');
}

/**
 * Truncate text to a maximum character limit
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum character length (default: 150)
 * @returns {string} Truncated text with ellipsis if needed
 */
function truncateText(text, maxLength = 150) {
  if (!text) return text;
  if (text.length <= maxLength) return text;

  // Truncate and add ellipsis
  return text.substring(0, maxLength).trim() + '...';
}

// Module-level variables to track state for pagination
let currentVideoCursor = null;
let videoPostsInitialized = false;

/**
 * Populate video grid with posts from Bluesky using TanStack Query
 * @param {string} handle - User handle
 * @param {string} cursor - Optional pagination cursor
 * @returns {Promise<string>} Next cursor or null
 */
async function populateVideoGrid(handle, cursor = null) {
  try {
    const queryClient = await getQueryClient();
    const postsContainer = document.querySelector('.posts');
    if (!postsContainer) {
      console.warn('Posts container not found');
      return null;
    }

    // Remove existing static posts if this is the first load
    if (!videoPostsInitialized) {
      const existingPosts = postsContainer.querySelectorAll('.post');
      existingPosts.forEach(post => post.remove());
      videoPostsInitialized = true;
      currentVideoCursor = null; // Reset cursor on first load
    }

    // Use TanStack Query to fetch video posts with caching
    const queryKey = queryKeys.feed(handle, cursor);
    const feedData = await fetchQuery(
      queryClient,
      queryKey,
      () => fetchVideoPostsQuery({ handle, cursor, limit: 30 }),
      {
        staleTime: 2 * 60 * 1000, // 2-minute stale time for feeds
        gcTime: 10 * 60 * 1000, // 10-minute cache time
      }
    );

    const { feed, cursor: nextCursor } = feedData;

    if (!feed || feed.length === 0) {
      // If no more posts, hide footer
      const footer = document.querySelector('footer');
      if (footer) {
        footer.style.display = 'none';
      }
      currentVideoCursor = null;
      return null;
    }

    // Filter for video posts (API should already filter, but this is a safety check)
    const videoPosts = filterVideoPosts(feed);

    // Render each video post
    videoPosts.forEach(item => {
      const postElement = renderVideoPost(item.post, handle);
      if (postElement) {
        const footer = document.querySelector('footer');
        if (footer) {
          postsContainer.insertBefore(postElement, footer);
        } else {
          postsContainer.appendChild(postElement);
        }
      }
    });

    // Store cursor for pagination (UI state)
    currentVideoCursor = nextCursor;

    // Show or hide footer based on whether there are more posts
    const footer = document.querySelector('footer');
    if (footer) {
      if (nextCursor && nextCursor !== '') {
        footer.style.display = 'flex';
      } else {
        footer.style.display = 'none';
      }
    }

    return nextCursor;
  } catch (error) {
    console.error('Error populating video grid:', error);
    return null;
  }
}

/**
 * Initialize profile loading on page load with TanStack Query
 */
async function initProfile() {
  try {
    const handle = getUserHandleFromURL();

    if (!handle) {
      const usernameEl = document.querySelector('.author h1.username');
      if (usernameEl) {
        usernameEl.textContent = 'Unknown user';
      }
      hideLoading();
      // Show error in posts area
      const errorContainer = document.getElementById('profile-error');
      const errorMessage = document.getElementById('profile-error-message');
      if (errorContainer) {
        errorContainer.style.display = 'flex';
      }
      if (errorMessage) {
        errorMessage.textContent = "We couldn't find that account";
      }
      // Show header
      const headerEl = document.querySelector('header');
      if (headerEl) {
        headerEl.classList.remove('hidden');
      }
      return;
    }

    showLoading();

    // Reset video posts state when initializing a new profile load
    // This ensures posts reload when navigating back to a profile page
    videoPostsInitialized = false;
    currentVideoCursor = null;

    // Get query client
    const queryClient = await getQueryClient();

    // Use TanStack Query to fetch profile with caching and request deduplication
    const queryKey = queryKeys.profile(handle);
    const profile = await fetchQuery(queryClient, queryKey, () => fetchProfileQuery(handle), {
      staleTime: 5 * 60 * 1000, // 5-minute stale time for profiles
      gcTime: 10 * 60 * 1000, // 10-minute cache time
    });

    // Validate profile data
    if (!profile || !profile.handle) {
      throw new Error('Invalid profile data received');
    }

    updateProfileDisplay(profile);
    hideLoading();

    // Store profile in query cache for potential future use
    queryClient.setQueryData(queryKey, profile);

    // Initialize video posts grid
    populateVideoGrid(handle);
  } catch (error) {
    console.error('Failed to load profile:', error);
    const handle = getUserHandleFromURL();
    showError(error.message, handle);
  }
}

// Export functions for ES6 module imports
// Note: initProfile should be called explicitly from the HTML file
// This allows it to be called when navigating back to a profile page
export { populateVideoGrid, getUserHandleFromURL, initProfile, applyProfileColors };
export function getCurrentCursor() {
  return currentVideoCursor;
}

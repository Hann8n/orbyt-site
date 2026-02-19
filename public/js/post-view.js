/**
 * Video Post View
 * Handles video playback for post pages
 * Uses SSR data from data attributes - no API calls needed
 */

/**
 * Format relative time (e.g., "2h", "3d", "1mo")
 */
function formatRelativeTime(createdAt) {
  if (!createdAt) return '';

  const now = new Date();
  const created = new Date(createdAt);
  const diffMs = now - created;
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffMonths > 0) return `${diffMonths}mo`;
  if (diffDays > 0) return `${diffDays}d`;
  if (diffHours > 0) return `${diffHours}h`;
  if (diffMins > 0) return `${diffMins}m`;
  return 'now';
}

/**
 * Initialize video player with HLS support
 */
function initVideoPlayer(videoUrl, thumbnail) {
  const videoEl = document.getElementById('vinit');
  const thumbnailEl = document.getElementById('video-thumbnail');
  
  if (!videoEl || !videoUrl) {
    console.warn('No video element or URL');
    return;
  }

  // Clean up any existing HLS instance
  if (videoEl.hlsInstance) {
    try {
      videoEl.hlsInstance.destroy();
      videoEl.hlsInstance = null;
    } catch (e) {
      console.warn('Error destroying HLS instance:', e);
    }
  }

  // Reset video element
  videoEl.pause();
  videoEl.src = '';
  videoEl.removeAttribute('src');
  videoEl.load();

  // Set video attributes
  videoEl.setAttribute('autoplay', '');
  videoEl.setAttribute('loop', '');
  videoEl.setAttribute('playsinline', '');
  videoEl.setAttribute('preload', 'auto');
  videoEl.muted = true;

  // Thumbnail visibility handlers (thumbnail is rendered in HTML, no need to set src)
  const hideThumbnail = () => {
    if (thumbnailEl) {
      thumbnailEl.classList.add('hidden');
    }
  };
  
  const showThumbnail = () => {
    if (thumbnailEl && thumbnail) {
      thumbnailEl.classList.remove('hidden');
    }
  };

  videoEl.addEventListener('playing', hideThumbnail, { once: true });
  videoEl.addEventListener('pause', showThumbnail);

  // Setup HLS playback
  if (videoUrl.includes('.m3u8')) {
    if (videoEl.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS (Safari/iOS)
      videoEl.src = videoUrl;
      videoEl.load();
    } else if (typeof Hls !== 'undefined') {
      // Use hls.js
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        autoStartLoad: true,
        maxBufferLength: 10,
        maxMaxBufferLength: 20,
        startLevel: -1,
        capLevelToPlayerSize: true,
      });

      hls.loadSource(videoUrl);
      hls.attachMedia(videoEl);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        hls.startLoad();
        videoEl.play();
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
            hls.startLoad();
          } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
            hls.recoverMediaError();
          } else {
            hls.destroy();
          }
        }
      });

      videoEl.hlsInstance = hls;
    } else {
      videoEl.src = videoUrl;
      videoEl.load();
    }
  } else {
    videoEl.src = videoUrl;
    videoEl.load();
  }

  // Mute/unmute on tap/click anywhere on video (video keeps playing)
  const videoContainer = thumbnailEl?.closest('.video-container');
  const handleVideoAreaClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const muteText = document.getElementById('mute-text');
    if (videoEl.muted) {
      videoEl.muted = false;
      if (videoEl.paused) videoEl.play().catch(() => {});
      if (muteText) muteText.textContent = 'TAP TO MUTE';
    } else {
      videoEl.muted = true;
      if (muteText) muteText.textContent = 'TAP TO UNMUTE';
    }
  };
  if (videoContainer) {
    videoContainer.addEventListener('click', handleVideoAreaClick);
  }

  // Initialize sizing
  resizeVideoAndOverlay();
}

/**
 * Initialize mute toggle controls
 */
function initMuteControls() {
  const videoEl = document.getElementById('vinit');
  const muteToggle = document.getElementById('mute-toggle');
  const muteText = document.getElementById('mute-text');

  if (!videoEl) return;

  videoEl.muted = true;
  if (muteText) muteText.textContent = 'TAP TO UNMUTE';

  if (muteToggle && !muteToggle.dataset.listenerAttached) {
    muteToggle.dataset.listenerAttached = 'true';
    muteToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (videoEl.muted) {
        videoEl.muted = false;
        if (videoEl.paused) videoEl.play().catch(() => {});
        if (muteText) muteText.textContent = 'TAP TO MUTE';
      } else {
        videoEl.muted = true;
        if (muteText) muteText.textContent = 'TAP TO UNMUTE';
      }
    });
  }
}

/**
 * Resize video and overlay for responsive layout
 */
function resizeVideoAndOverlay() {
  const videoEl = document.getElementById('vinit');
  const postOverlay = document.getElementById('post-overlay');

  if (!videoEl) return;

  if (window.innerWidth >= 700) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const availableHeight = viewportHeight - 60;
    const maxHeight = Math.min(1200, availableHeight);
    const minHeight = 400;
    let videoHeight = Math.max(minHeight, maxHeight);
    let columnWidth = (videoHeight * 9) / 16;

    // Scale for narrower viewports
    if (viewportWidth < 900) {
      const scaleFactor = 0.75 + (0.25 * (viewportWidth - 700)) / 200;
      videoHeight = videoHeight * Math.max(0.75, Math.min(1.0, scaleFactor));
      columnWidth = (videoHeight * 9) / 16;
    }

    // Fit within available space
    let reservedSpace = viewportWidth < 900 
      ? Math.max(400, 540 * (0.7 + (0.3 * (viewportWidth - 700)) / 200))
      : 540;
    const maxVideoWidth = viewportWidth - reservedSpace;

    if (columnWidth > maxVideoWidth && maxVideoWidth > 200) {
      columnWidth = maxVideoWidth;
      videoHeight = (columnWidth * 16) / 9;
      if (videoHeight < minHeight) {
        videoHeight = minHeight;
        columnWidth = (videoHeight * 9) / 16;
      }
    }

    videoEl.style.height = `${videoHeight}px`;
    videoEl.style.width = `${columnWidth}px`;
  } else {
    videoEl.style.width = '100%';
    videoEl.style.height = 'auto';
  }

  // Adjust overlay position
  if (postOverlay) {
    const scrollPosition = window.scrollY;
    const offsetHeight = videoEl.offsetHeight;
    const displayHeight = document.documentElement.clientHeight;
    const overlayOffset = Math.max(0, offsetHeight - displayHeight - scrollPosition);
    postOverlay.style.bottom = `${overlayOffset}px`;
  }
}

let resizeInitialized = false;

/**
 * Initialize resize listeners (once)
 */
function initResizeListeners() {
  if (resizeInitialized) {
    resizeVideoAndOverlay();
    return;
  }
  
  resizeInitialized = true;
  resizeVideoAndOverlay();
  
  window.addEventListener('resize', resizeVideoAndOverlay);
  
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        resizeVideoAndOverlay();
        ticking = false;
      });
      ticking = true;
    }
  });
}

/**
 * Update display elements with SSR data
 * Note: Captions are now rendered server-side via set:html
 */
function updateDisplay(data) {
  // Update time (computed client-side for accurate relative time)
  const relativeTime = formatRelativeTime(data.createdAt);
  const timeMobile = document.getElementById('post-time-mobile');
  const timeDesktop = document.getElementById('post-time-desktop');
  if (timeMobile) {
    timeMobile.textContent = relativeTime;
    timeMobile.style.display = relativeTime ? 'block' : 'none';
  }
  if (timeDesktop) {
    timeDesktop.textContent = relativeTime;
    timeDesktop.style.display = relativeTime ? 'block' : 'none';
  }

  // Update likes
  const likesCountMobile = document.getElementById('likes-count-mobile');
  const likesCountDesktop = document.getElementById('likes-count-desktop');
  if (likesCountMobile) likesCountMobile.textContent = data.likeCount;
  if (likesCountDesktop) likesCountDesktop.textContent = data.likeCount;
}

/**
 * Main initialization
 */
function initPostView() {
  const postEl = document.getElementById('post');
  if (!postEl) return;

  // Get SSR data from data attributes
  // Note: caption is now rendered server-side, not needed here
  const data = {
    handle: postEl.dataset.handle,
    postId: postEl.dataset.postId,
    videoUrl: postEl.dataset.videoUrl,
    thumbnail: postEl.dataset.thumbnail,
    authorHandle: postEl.dataset.authorHandle,
    authorName: postEl.dataset.authorName,
    authorAvatar: postEl.dataset.authorAvatar,
    likeCount: postEl.dataset.likeCount || '0',
    createdAt: postEl.dataset.createdAt,
  };

  // Update display with SSR data
  updateDisplay(data);

  // Initialize video player
  if (data.videoUrl) {
    initVideoPlayer(data.videoUrl, data.thumbnail);
  }

  // Initialize controls
  initMuteControls();
  initResizeListeners();

  // Show post content
  postEl.classList.remove('hidden');
}

// Show thumbnail before view transition captures snapshot (for back navigation)
document.addEventListener('astro:before-preparation', () => {
  const videoEl = document.getElementById('vinit');
  const thumbnailEl = document.getElementById('video-thumbnail');
  
  // Pause video and show thumbnail so view transition can capture it
  if (videoEl) {
    videoEl.pause();
  }
  if (thumbnailEl) {
    thumbnailEl.classList.remove('hidden');
  }
});

// Cleanup before page swap
document.addEventListener('astro:before-swap', () => {
  const videoEl = document.getElementById('vinit');
  const muteToggle = document.getElementById('mute-toggle');
  
  if (videoEl && videoEl.hlsInstance) {
    try {
      videoEl.hlsInstance.destroy();
      videoEl.hlsInstance = null;
    } catch (e) {
      console.warn('Error cleaning up HLS:', e);
    }
    videoEl.pause();
    videoEl.src = '';
  }
  
  if (muteToggle) muteToggle.removeAttribute('data-listener-attached');
  resizeInitialized = false;
});

// Initialize on page load
document.addEventListener('astro:page-load', initPostView);

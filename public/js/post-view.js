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

function initVideoPlayer(videoUrl, thumbnail) {
  const videoEl = document.getElementById('vinit');
  const thumbnailEl = document.getElementById('video-thumbnail');
  
  if (!videoEl || !videoUrl) {
    console.warn('No video element or URL');
    return;
  }

  if (videoEl.hlsInstance) {
    videoEl.hlsInstance.destroy();
    videoEl.hlsInstance = null;
  }

  videoEl.pause();
  videoEl.src = '';
  videoEl.removeAttribute('src');
  videoEl.load();

  videoEl.setAttribute('autoplay', '');
  videoEl.setAttribute('loop', '');
  videoEl.setAttribute('playsinline', '');
  videoEl.setAttribute('preload', 'auto');
  videoEl.muted = true;

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

  if (videoUrl.includes('.m3u8')) {
    if (videoEl.canPlayType('application/vnd.apple.mpegurl')) {
      videoEl.src = videoUrl;
      videoEl.load();
    } else if (typeof Hls !== 'undefined') {
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

  const videoContainer = thumbnailEl?.closest('.video-container');
  const handleVideoAreaClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (videoEl.muted) {
      videoEl.muted = false;
      if (videoEl.paused) videoEl.play().catch(() => {});
    } else {
      videoEl.muted = true;
    }
    syncMuteChrome(videoEl);
  };
  if (videoContainer) {
    videoContainer.addEventListener('click', handleVideoAreaClick);
  }

  resizeVideoAndOverlay();
}

function syncMuteChrome(videoEl) {
  const muteToggle = document.getElementById('mute-toggle');
  const muteText = document.getElementById('mute-text');
  if (muteText) muteText.textContent = videoEl.muted ? 'TAP TO UNMUTE' : '';
  const wrap = muteToggle?.closest('.mute-toggle-wrapper');
  if (wrap) wrap.hidden = !videoEl.muted;
}

function initMuteControls() {
  const videoEl = document.getElementById('vinit');
  const muteToggle = document.getElementById('mute-toggle');

  if (!videoEl) return;

  videoEl.muted = true;
  syncMuteChrome(videoEl);

  if (muteToggle && !muteToggle.dataset.listenerAttached) {
    muteToggle.dataset.listenerAttached = 'true';
    muteToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (videoEl.muted) {
        videoEl.muted = false;
        if (videoEl.paused) videoEl.play().catch(() => {});
      } else {
        videoEl.muted = true;
      }
      syncMuteChrome(videoEl);
    });
  }
}

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

    if (viewportWidth < 900) {
      const scaleFactor = 0.75 + (0.25 * (viewportWidth - 700)) / 200;
      videoHeight = videoHeight * Math.max(0.75, Math.min(1.0, scaleFactor));
      columnWidth = (videoHeight * 9) / 16;
    }

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

  if (postOverlay) {
    if (window.innerWidth >= 700) {
      const scrollPosition = window.scrollY;
      const offsetHeight = videoEl.offsetHeight;
      const displayHeight = document.documentElement.clientHeight;
      const overlayOffset = Math.max(0, offsetHeight - displayHeight - scrollPosition);
      postOverlay.style.bottom = `${overlayOffset}px`;
    } else {
      postOverlay.style.removeProperty('bottom');
    }
  }
}

let resizeInitialized = false;

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

function updateDisplay(data) {
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

  const likesCountMobile = document.getElementById('likes-count-mobile');
  const likesCountDesktop = document.getElementById('likes-count-desktop');
  if (likesCountMobile) likesCountMobile.textContent = data.likeCount;
  if (likesCountDesktop) likesCountDesktop.textContent = data.likeCount;
}

const MOBILE_CAPTION_MAX_WIDTH_PX = 699;

function measureMobileCaptionOverflow() {
  const inner = document.getElementById('post-caption-mobile-inner');
  const textEl = document.getElementById('post-caption-mobile');
  const toggle = document.getElementById('post-caption-mobile-toggle');
  if (!inner || !textEl || !toggle) return;

  if (window.innerWidth > MOBILE_CAPTION_MAX_WIDTH_PX) {
    toggle.hidden = true;
    return;
  }

  if (!textEl.textContent?.trim()) {
    toggle.hidden = true;
    return;
  }

  inner.dataset.collapsed = 'true';
  toggle.textContent = 'More';
  toggle.setAttribute('aria-expanded', 'false');
  void textEl.offsetHeight;
  const overflows = textEl.scrollHeight > textEl.clientHeight + 1;
  toggle.hidden = !overflows;
}

function initMobileCaptionCollapse() {
  const inner = document.getElementById('post-caption-mobile-inner');
  const toggle = document.getElementById('post-caption-mobile-toggle');
  if (!inner || !toggle) return;

  if (!toggle.dataset.listenerAttached) {
    toggle.dataset.listenerAttached = 'true';
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const expanded = inner.dataset.collapsed === 'false';
      inner.dataset.collapsed = expanded ? 'true' : 'false';
      toggle.textContent = expanded ? 'More' : 'Less';
      toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
  }

  requestAnimationFrame(measureMobileCaptionOverflow);
}

if (!window.__orbytMobileCaptionResizeHook) {
  window.__orbytMobileCaptionResizeHook = true;
  window.addEventListener('resize', () => {
    requestAnimationFrame(measureMobileCaptionOverflow);
  });
}

function initPostView() {
  const postEl = document.getElementById('post');
  if (!postEl) return;

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

  updateDisplay(data);

  if (data.videoUrl) {
    initVideoPlayer(data.videoUrl, data.thumbnail);
  }

  initMuteControls();
  initResizeListeners();

  postEl.classList.remove('hidden');
  initMobileCaptionCollapse();
}

document.addEventListener('astro:before-preparation', () => {
  const videoEl = document.getElementById('vinit');
  const thumbnailEl = document.getElementById('video-thumbnail');
  
  if (videoEl) {
    videoEl.pause();
  }
  if (thumbnailEl) {
    thumbnailEl.classList.remove('hidden');
  }
});

document.addEventListener('astro:before-swap', () => {
  const videoEl = document.getElementById('vinit');
  const muteToggle = document.getElementById('mute-toggle');
  
  if (videoEl && videoEl.hlsInstance) {
    videoEl.hlsInstance.destroy();
    videoEl.hlsInstance = null;
    videoEl.pause();
    videoEl.src = '';
  }
  
  if (muteToggle) muteToggle.removeAttribute('data-listener-attached');
  resizeInitialized = false;
});

document.addEventListener('astro:page-load', initPostView);

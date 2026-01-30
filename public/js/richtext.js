/**
 * RichText utility for parsing and rendering text with mentions and links
 * 
 * - @ mentions (must contain a dot/TLD like @example.com) link internally to /@handle
 * - URLs are made clickable as external links
 */

/**
 * Escape HTML for safe display
 */
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Parse text and convert mentions (@handle.tld) and URLs to clickable links
 * @param {string} text - Raw text to parse
 * @returns {string} HTML string with links
 */
function parseRichText(text) {
  if (!text) return '';
  
  // URL pattern - matches http/https URLs, www. prefixed, or domain.tld patterns
  const urlPattern = /(?:https?:\/\/[^\s<>"{}|\\^`\[\]]+|www\.[^\s<>"{}|\\^`\[\]]+|[a-zA-Z0-9][a-zA-Z0-9-]*\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?(?:\/[^\s<>"{}|\\^`\[\]]*)?)/g;
  const mentionPattern = /@([a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+)/g;
  
  const matches = [];
  
  // Find all URLs
  let urlMatch;
  while ((urlMatch = urlPattern.exec(text)) !== null) {
    matches.push({
      type: 'url',
      start: urlMatch.index,
      end: urlMatch.index + urlMatch[0].length,
      text: urlMatch[0],
    });
  }
  
  // Find all mentions
  let mentionMatch;
  while ((mentionMatch = mentionPattern.exec(text)) !== null) {
    const handle = mentionMatch[1];
    const mentionStart = mentionMatch.index;
    const mentionEnd = mentionMatch.index + mentionMatch[0].length;
    
    // Skip if this mention overlaps with a URL
    const overlapsWithUrl = matches.some(m => 
      m.type === 'url' && 
      mentionStart >= m.start && mentionStart < m.end
    );
    
    if (!overlapsWithUrl) {
      matches.push({
        type: 'mention',
        start: mentionStart,
        end: mentionEnd,
        text: mentionMatch[0],
        handle,
      });
    }
  }
  
  // Sort matches by position
  matches.sort((a, b) => a.start - b.start);
  
  // Build the result string
  let result = '';
  let lastIndex = 0;
  
  for (const match of matches) {
    // Add text before this match (escaped)
    if (match.start > lastIndex) {
      result += escapeHtml(text.slice(lastIndex, match.start));
    }
    
    if (match.type === 'url') {
      // Clean up trailing punctuation
      let url = match.text;
      let trailing = '';
      
      const trailingMatch = url.match(/[.,;:!?)]+$/);
      if (trailingMatch) {
        const openParens = (url.match(/\(/g) || []).length;
        const closeParens = (url.match(/\)/g) || []).length;
        
        if (closeParens > openParens || (!/\)$/.test(url) || openParens === 0)) {
          trailing = trailingMatch[0];
          url = url.slice(0, -trailing.length);
        }
      }
      
      // Add https:// prefix if URL doesn't have a protocol
      const href = url.match(/^https?:\/\//) ? url : `https://${url}`;
      result += `<a href="${escapeHtml(href)}" class="link" target="_blank" rel="noopener noreferrer">${escapeHtml(url)}</a>${escapeHtml(trailing)}`;
    } else if (match.type === 'mention' && match.handle) {
      // Internal link to profile
      result += `<a href="/@${escapeHtml(match.handle)}" class="mention">@<span class="mention-handle">${escapeHtml(match.handle)}</span></a>`;
    }
    
    lastIndex = match.end;
  }
  
  // Add remaining text after last match (escaped)
  if (lastIndex < text.length) {
    result += escapeHtml(text.slice(lastIndex));
  }
  
  // Convert newlines to <br> tags
  return result.replace(/\n/g, '<br>');
}

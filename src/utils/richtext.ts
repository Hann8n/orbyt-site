/**
 * RichText utility for parsing and rendering text with mentions and links
 * 
 * - @ mentions (must contain a dot/TLD like @example.com) link internally to /@handle
 * - URLs are made clickable as external links
 */

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * Parse text and convert mentions and URLs to clickable links
 * 
 * @param text - Raw text to parse
 * @param options - Optional configuration
 * @returns HTML string with links
 */
export function parseRichText(text: string, options?: {
  mentionClass?: string;
  linkClass?: string;
}): string {
  if (!text) return '';
  
  const mentionClass = options?.mentionClass || 'mention';
  const linkClass = options?.linkClass || 'link';
  
  // Combined regex to match URLs and mentions in order of appearance
  // This ensures we process them in the correct order and don't double-process
  
  // URL pattern - matches:
  // 1. http:// or https:// URLs
  // 2. www. prefixed URLs
  // 3. domain.tld patterns (word.word with common TLDs)
  const urlPattern = /(?:https?:\/\/[^\s<>"{}|\\^`\[\]]+|www\.[^\s<>"{}|\\^`\[\]]+|[a-zA-Z0-9][a-zA-Z0-9-]*\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?(?:\/[^\s<>"{}|\\^`\[\]]*)?)/g;
  
  // Mention pattern - @ followed by handle with at least one dot (TLD requirement)
  // Handles like @user.bsky.social, @example.com, @news.org
  const mentionPattern = /@([a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+)/g;
  
  // First, find all matches with their positions
  interface Match {
    type: 'url' | 'mention';
    start: number;
    end: number;
    text: string;
    handle?: string; // For mentions
  }
  
  const matches: Match[] = [];
  
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
    // Skip if this mention overlaps with a URL (e.g., @example.com in https://example.com/@user)
    const mentionStart = mentionMatch.index;
    const mentionEnd = mentionMatch.index + mentionMatch[0].length;
    
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
  
  // Filter out URLs that are part of mentions (e.g., user.bsky.social in @user.bsky.social)
  const filteredMatches = matches.filter((match, index) => {
    if (match.type === 'url') {
      // Check if this URL is contained within a mention
      return !matches.some(m => 
        m.type === 'mention' && 
        match.start >= m.start && match.end <= m.end
      );
    }
    return true;
  });
  
  // Build the result string
  let result = '';
  let lastIndex = 0;
  
  for (const match of filteredMatches) {
    // Add text before this match (escaped)
    if (match.start > lastIndex) {
      result += escapeHtml(text.slice(lastIndex, match.start));
    }
    
    if (match.type === 'url') {
      // Clean up trailing punctuation that's likely not part of the URL
      let url = match.text;
      let trailing = '';
      
      // Remove trailing punctuation that's commonly not part of URLs
      const trailingMatch = url.match(/[.,;:!?)]+$/);
      if (trailingMatch) {
        // Check for balanced parentheses - if URL has ( but ends with ), keep the )
        const openParens = (url.match(/\(/g) || []).length;
        const closeParens = (url.match(/\)/g) || []).length;
        
        if (closeParens > openParens) {
          // Remove excess closing parens and other trailing punctuation
          const excess = closeParens - openParens;
          let toRemove = trailingMatch[0];
          // Keep removing from the end until we've removed excess ) and other punctuation
          let removed = 0;
          for (let i = toRemove.length - 1; i >= 0 && removed < excess; i--) {
            if (toRemove[i] === ')') removed++;
          }
          trailing = toRemove;
          url = url.slice(0, -toRemove.length);
        } else if (!/\)$/.test(url) || openParens === 0) {
          // No parens or doesn't end with ), safe to remove trailing punctuation
          trailing = trailingMatch[0];
          url = url.slice(0, -trailing.length);
        }
      }
      
      // Add https:// prefix if URL doesn't have a protocol
      const href = url.match(/^https?:\/\//) ? url : `https://${url}`;
      result += `<a href="${escapeHtml(href)}" class="${linkClass}" target="_blank" rel="noopener noreferrer">${escapeHtml(url)}</a>${escapeHtml(trailing)}`;
    } else if (match.type === 'mention' && match.handle) {
      // Internal link to profile
      result += `<a href="/@${escapeHtml(match.handle)}" class="${mentionClass}">@<span class="mention-handle">${escapeHtml(match.handle)}</span></a>`;
    }
    
    lastIndex = match.end;
  }
  
  // Add remaining text after last match (escaped)
  if (lastIndex < text.length) {
    result += escapeHtml(text.slice(lastIndex));
  }
  
  // Convert newlines to <br> tags
  result = result.replace(/\n/g, '<br>');
  
  return result;
}

/**
 * Truncate text while preserving whole words, then parse as rich text
 * Useful for captions that need to be shortened
 */
export function parseRichTextTruncated(text: string, maxLength: number = 90, options?: {
  mentionClass?: string;
  linkClass?: string;
}): string {
  if (!text) return '';
  
  let truncated = text;
  if (text.length > maxLength) {
    truncated = text.substring(0, maxLength).trim() + '...';
  }
  
  return parseRichText(truncated, options);
}

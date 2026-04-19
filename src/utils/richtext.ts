/** Mentions with a TLD link to /@handle; URLs become external links. */

/** Escapes `&`, `<`, `>`, `"`, and `'` so user-provided text is safe to embed in HTML. */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * Converts plain Bluesky post text to HTML, turning `@mention.bsky.social`
 * handles into profile links and bare/www/TLD URLs into external anchor tags.
 * Overlap between mentions and URLs is resolved in favour of the mention.
 */
export function parseRichText(text: string, options?: {
  mentionClass?: string;
  linkClass?: string;
}): string {
  if (!text) return '';
  
  const mentionClass = options?.mentionClass || 'mention';
  const linkClass = options?.linkClass || 'link';

  const urlPattern = /(?:https?:\/\/[^\s<>"{}|\\^`\[\]]+|www\.[^\s<>"{}|\\^`\[\]]+|[a-zA-Z0-9][a-zA-Z0-9-]*\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?(?:\/[^\s<>"{}|\\^`\[\]]*)?)/g;
  const mentionPattern = /@([a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+)/g;

  interface Match {
    type: 'url' | 'mention';
    start: number;
    end: number;
    text: string;
    handle?: string;
  }

  const matches: Match[] = [];

  let urlMatch: RegExpExecArray | null;
  while ((urlMatch = urlPattern.exec(text)) !== null) {
    matches.push({
      type: 'url',
      start: urlMatch.index,
      end: urlMatch.index + urlMatch[0].length,
      text: urlMatch[0],
    });
  }

  let mentionMatch: RegExpExecArray | null;
  while ((mentionMatch = mentionPattern.exec(text)) !== null) {
    const handle = mentionMatch[1];
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

  matches.sort((a, b) => a.start - b.start);

  const filteredMatches = matches.filter((match) => {
    if (match.type === 'url') {
      return !matches.some(m => 
        m.type === 'mention' && 
        match.start >= m.start && match.end <= m.end
      );
    }
    return true;
  });

  let result = '';
  let lastIndex = 0;
  
  for (const match of filteredMatches) {
    if (match.start > lastIndex) {
      result += escapeHtml(text.slice(lastIndex, match.start));
    }
    
    if (match.type === 'url') {
      let url = match.text;
      let trailing = '';
      
      const trailingMatch = url.match(/[.,;:!?)]+$/);
      if (trailingMatch) {
        const openParens = (url.match(/\(/g) || []).length;
        const closeParens = (url.match(/\)/g) || []).length;
        
        if (closeParens > openParens) {
          const excess = closeParens - openParens;
          let toRemove = trailingMatch[0];
          let removed = 0;
          for (let i = toRemove.length - 1; i >= 0 && removed < excess; i--) {
            if (toRemove[i] === ')') removed++;
          }
          trailing = toRemove;
          url = url.slice(0, -toRemove.length);
        } else if (!/\)$/.test(url) || openParens === 0) {
          trailing = trailingMatch[0];
          url = url.slice(0, -trailing.length);
        }
      }

      const href = url.match(/^https?:\/\//) ? url : `https://${url}`;
      result += `<a href="${escapeHtml(href)}" class="${linkClass}" target="_blank" rel="noopener noreferrer">${escapeHtml(url)}</a>${escapeHtml(trailing)}`;
    } else if (match.type === 'mention' && match.handle) {
      result += `<a href="/@${escapeHtml(match.handle)}" class="${mentionClass}">@<span class="mention-handle">${escapeHtml(match.handle)}</span></a>`;
    }
    
    lastIndex = match.end;
  }

  if (lastIndex < text.length) {
    result += escapeHtml(text.slice(lastIndex));
  }

  result = result.replace(/\n/g, '<br>');
  
  return result;
}

/** Truncates `text` to `maxLength` characters (appending `…`) before calling `parseRichText`. */
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

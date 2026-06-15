(function () {
  var root = document.documentElement;
  var transitionKey = 'portfolioPageEntering';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var leaveDelay = reducedMotion ? 0 : 72;
  var enterCleanupDelay = reducedMotion ? 20 : 180;
  var navigating = false;

  function clearTransitionState() {
    root.classList.remove('page-leaving', 'page-entering', 'page-ready');
    root.removeAttribute('aria-busy');
    document.body && document.body.removeAttribute('aria-busy');
    navigating = false;
  }

  function revealPage() {
    if (!root.classList.contains('page-entering')) {
      return;
    }

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        root.classList.add('page-ready');
      });
    });

    window.setTimeout(clearTransitionState, enterCleanupDelay);
  }

  function isModifiedClick(event) {
    return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  }

  function shouldIgnoreAnchor(anchor, event) {
    if (!anchor || isModifiedClick(event)) {
      return true;
    }

    if (anchor.matches('.language-pill, [data-placeholder="true"], [aria-disabled="true"]')) {
      return true;
    }

    if (anchor.hasAttribute('download')) {
      return true;
    }

    var target = anchor.getAttribute('target');
    if (target && target.toLowerCase() !== '_self') {
      return true;
    }

    var rawHref = anchor.getAttribute('href');
    if (!rawHref || rawHref === '#' || rawHref.charAt(0) === '#') {
      return true;
    }

    if (/^(mailto:|tel:|javascript:)/i.test(rawHref)) {
      return true;
    }

    var url;

    try {
      url = new URL(anchor.href, window.location.href);
    } catch (error) {
      return true;
    }

    if (url.origin !== window.location.origin) {
      return true;
    }

    return url.pathname === window.location.pathname && url.search === window.location.search;
  }

  function startNavigation(anchor, event) {
    if (
      navigating ||
      shouldIgnoreAnchor(anchor, event) ||
      root.classList.contains('intro-pending') ||
      root.classList.contains('intro-exiting')
    ) {
      return;
    }

    event.preventDefault();
    navigating = true;

    try {
      window.sessionStorage.setItem(transitionKey, '1');
    } catch (error) {
      // Navigation still works when storage is unavailable.
    }

    root.classList.remove('page-entering', 'page-ready');
    root.classList.add('page-leaving');
    root.setAttribute('aria-busy', 'true');

    window.setTimeout(function () {
      window.location.assign(anchor.href);
    }, leaveDelay);
  }

  document.addEventListener('click', function (event) {
    var anchor = event.target.closest('a[href]');
    startNavigation(anchor, event);
  });

  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      clearTransitionState();
    }
  });

  revealPage();
})();

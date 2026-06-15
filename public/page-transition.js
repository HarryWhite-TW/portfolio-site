(function () {
  var root = document.documentElement;
  var transitionKey = 'portfolioPageTransition';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var leaveDelay = reducedMotion ? 80 : 220;
  var enterCleanupDelay = reducedMotion ? 140 : 560;
  var navigating = false;

  function clearTransitionState() {
    root.classList.remove('page-transition-entering', 'page-transition-leaving', 'page-transition-returning', 'page-transition-ready');
    root.removeAttribute('aria-busy');
    document.body && document.body.removeAttribute('aria-busy');
    navigating = false;
  }

  function revealPage() {
    if (!root.classList.contains('page-transition-entering') && !root.classList.contains('page-transition-returning')) {
      return;
    }

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        root.classList.add('page-transition-ready');
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

    var sameDocument = url.pathname === window.location.pathname && url.search === window.location.search;
    if (sameDocument) {
      return true;
    }

    return false;
  }

  function startNavigation(anchor, event) {
    if (navigating || shouldIgnoreAnchor(anchor, event) || root.classList.contains('intro-pending') || root.classList.contains('intro-exiting')) {
      return;
    }

    event.preventDefault();
    navigating = true;

    var destination = anchor.href;

    try {
      window.sessionStorage.setItem(transitionKey, '1');
    } catch (error) {
      // Navigation still proceeds when sessionStorage is unavailable.
    }

    root.classList.remove('page-transition-entering', 'page-transition-returning', 'page-transition-ready');
    root.classList.add('page-transition-leaving');
    root.setAttribute('aria-busy', 'true');
    document.body && document.body.setAttribute('aria-busy', 'true');

    window.setTimeout(function () {
      window.location.assign(destination);
    }, leaveDelay);
  }

  document.addEventListener('click', function (event) {
    var anchor = event.target.closest('a[href]');
    startNavigation(anchor, event);
  });

  window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
      return;
    }

    clearTransitionState();

    if (root.classList.contains('intro-pending')) {
      return;
    }

    root.classList.add('page-transition-returning');
    root.setAttribute('aria-busy', 'true');
    revealPage();
  });

  window.addEventListener('pagehide', function () {
    navigating = false;
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealPage, { once: true });
  } else {
    revealPage();
  }
})();

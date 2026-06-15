(function () {
  var root = document.documentElement;

  function clearLegacyTransitionState() {
    root.classList.remove(
      'page-transition-entering',
      'page-transition-leaving',
      'page-transition-returning',
      'page-transition-ready',
    );
    root.removeAttribute('aria-busy');
    document.body && document.body.removeAttribute('aria-busy');
  }

  clearLegacyTransitionState();

  window.addEventListener('pageshow', clearLegacyTransitionState);
})();

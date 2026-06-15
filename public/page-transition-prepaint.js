(function () {
  try {
    window.sessionStorage && window.sessionStorage.removeItem('portfolioPageTransition');
  } catch (error) {
    // Legacy transition state is optional cleanup only.
  }

  document.documentElement.classList.remove(
    'page-transition-entering',
    'page-transition-leaving',
    'page-transition-returning',
    'page-transition-ready',
  );
  document.documentElement.removeAttribute('aria-busy');
})();

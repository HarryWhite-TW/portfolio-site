(function () {
  try {
    var root = document.documentElement;
    var transitionKey = 'portfolioPageTransition';
    var shouldEnter = window.sessionStorage && window.sessionStorage.getItem(transitionKey) === '1';

    if (root.classList.contains('intro-pending')) {
      window.sessionStorage.removeItem(transitionKey);
      return;
    }

    if (shouldEnter) {
      root.classList.add('page-transition-entering');
      root.setAttribute('aria-busy', 'true');
    }

    window.sessionStorage.removeItem(transitionKey);
  } catch (error) {
    document.documentElement.classList.remove('page-transition-entering');
    document.documentElement.removeAttribute('aria-busy');
  }
})();

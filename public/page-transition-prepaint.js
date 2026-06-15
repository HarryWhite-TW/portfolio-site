(function () {
  var root = document.documentElement;

  try {
    var transitionKey = 'portfolioPageEntering';
    var shouldEnter = window.sessionStorage && window.sessionStorage.getItem(transitionKey) === '1';

    window.sessionStorage && window.sessionStorage.removeItem(transitionKey);

    if (shouldEnter && !root.classList.contains('intro-pending')) {
      root.classList.add('page-entering');
    }
  } catch (error) {
    root.classList.remove('page-entering');
  }
})();

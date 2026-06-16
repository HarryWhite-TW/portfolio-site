// Runtime prepaint hook for static multi-page navigation.
// Kept intentionally small: the current approved transition behavior is handled
// by the page styles and main application script.
(() => {
  document.documentElement.classList.add('page-transition-ready');
})();

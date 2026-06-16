// Runtime page-transition hook for static multi-page navigation.
// No blocking overlay is applied because the approved version prioritizes
// stable, fast page switching over decorative effects.
(() => {
  const sameOriginLinks = document.querySelectorAll('a[href$=".html"], a[href^="./"], a[href^="/"]');
  sameOriginLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.documentElement.classList.add('page-transition-clicked');
    }, { once: true });
  });
})();

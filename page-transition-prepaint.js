// Runtime prepaint hook for static multi-page navigation.
// It reads the saved language before first paint and delays the entrance cue
// until DOMContentLoaded, so translated Chinese copy is applied before animation.
(() => {
  const root = document.documentElement;

  try {
    const preferredLanguage = localStorage.getItem('portfolio-language') === 'zh' ? 'zh' : 'en';
    root.dataset.preferredLanguage = preferredLanguage;
    root.lang = preferredLanguage === 'zh' ? 'zh-Hant' : 'en';

    if (preferredLanguage === 'zh') {
      root.classList.add('copy-pending');
    }
  } catch (error) {
    // The page remains usable if localStorage is unavailable.
  }

  root.classList.add('page-transition-preparing');

  const markPageReady = () => {
    root.classList.remove('copy-pending', 'page-transition-preparing');

    window.requestAnimationFrame(() => {
      root.classList.add('page-transition-ready');
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markPageReady, { once: true });
  } else {
    markPageReady();
  }
})();

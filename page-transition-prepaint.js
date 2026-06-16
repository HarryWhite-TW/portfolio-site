// Runtime prepaint hook for static multi-page navigation.
// It prevents browser-level auto translation from racing the built-in language switch,
// reads the saved site language before first paint, and delays the entrance cue
// until DOMContentLoaded so localized copy is applied before animation.
(() => {
  const root = document.documentElement;

  root.classList.add('notranslate');
  root.setAttribute('translate', 'no');

  const addNoTranslateMeta = () => {
    if (document.head && !document.querySelector('meta[name="google"][content="notranslate"]')) {
      const meta = document.createElement('meta');
      meta.name = 'google';
      meta.content = 'notranslate';
      document.head.appendChild(meta);
    }
  };

  addNoTranslateMeta();

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
    addNoTranslateMeta();
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

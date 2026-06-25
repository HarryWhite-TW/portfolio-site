// Prepaint hook for language safety and the first frame of the DOM transition overlay.
(() => {
  const root = document.documentElement;
  const overlaySelector = '.page-transition-overlay';
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let entryFallbackTimer;

  const ensureTransitionOverlay = () => {
    const existingOverlay = root.querySelector(overlaySelector);

    if (existingOverlay) {
      return existingOverlay;
    }

    const overlay = document.createElement('div');
    const leftCurtain = document.createElement('div');
    const rightCurtain = document.createElement('div');
    const seam = document.createElement('div');

    overlay.className = 'page-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.dataset.transitionState = 'closed';

    leftCurtain.className = 'page-transition-curtain page-transition-curtain-left';
    rightCurtain.className = 'page-transition-curtain page-transition-curtain-right';
    seam.className = 'page-transition-seam';

    overlay.append(leftCurtain, rightCurtain, seam);
    root.appendChild(overlay);

    return overlay;
  };

  const overlay = ensureTransitionOverlay();

  if (root.classList.contains('intro-pending') || reducedMotionQuery.matches) {
    overlay.dataset.transitionState = 'idle';
  }

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

  const finishEntry = () => {
    window.clearTimeout(entryFallbackTimer);
    overlay.dataset.transitionState = 'idle';
    root.removeAttribute('aria-busy');
  };

  const openOverlay = () => {
    if (
      root.classList.contains('intro-pending')
      || reducedMotionQuery.matches
      || overlay.dataset.transitionState !== 'closed'
    ) {
      finishEntry();
      return;
    }

    const leftCurtain = overlay.querySelector('.page-transition-curtain-left');

    const handleEntryEnd = (event) => {
      if (event.target === leftCurtain && event.propertyName === 'transform') {
        leftCurtain.removeEventListener('transitionend', handleEntryEnd);
        finishEntry();
      }
    };

    leftCurtain.addEventListener('transitionend', handleEntryEnd);
    overlay.dataset.transitionState = 'opening';
    entryFallbackTimer = window.setTimeout(() => {
      leftCurtain.removeEventListener('transitionend', handleEntryEnd);
      finishEntry();
    }, 600);
  };

  const markPageReady = () => {
    addNoTranslateMeta();
    root.classList.remove('copy-pending');

    if (root.classList.contains('intro-pending') || reducedMotionQuery.matches) {
      finishEntry();
      return;
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(openOverlay);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markPageReady, { once: true });
  } else {
    markPageReady();
  }
})();

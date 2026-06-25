// Runtime controller for the real DOM page-transition overlay.
(() => {
  const root = document.documentElement;
  const overlaySelector = '.page-transition-overlay';
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const transitionFallbackBuffer = 100;
  const navigationRecoveryDelay = 1200;
  let isTransitioning = false;
  let completionTimer;
  let recoveryTimer;
  let watchedCurtain;
  let watchedHandler;

  const ensureTransitionOverlay = () => {
    const existingOverlay = root.querySelector(overlaySelector);

    if (existingOverlay) {
      return existingOverlay;
    }

    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.dataset.transitionState = 'idle';
    overlay.innerHTML = [
      '<div class="page-transition-curtain page-transition-curtain-left"></div>',
      '<div class="page-transition-curtain page-transition-curtain-right"></div>',
      '<div class="page-transition-seam"></div>',
    ].join('');
    root.appendChild(overlay);

    return overlay;
  };

  const readDuration = (propertyName, fallback) => {
    const rawValue = getComputedStyle(root).getPropertyValue(propertyName).trim();
    const value = Number.parseFloat(rawValue);

    if (!Number.isFinite(value)) {
      return fallback;
    }

    return rawValue.endsWith('s') && !rawValue.endsWith('ms') ? value * 1000 : value;
  };

  const clearCompletionWatch = () => {
    window.clearTimeout(completionTimer);

    if (watchedCurtain && watchedHandler) {
      watchedCurtain.removeEventListener('transitionend', watchedHandler);
    }

    watchedCurtain = null;
    watchedHandler = null;
  };

  const watchCurtainTransform = (overlay, duration, onComplete) => {
    clearCompletionWatch();
    watchedCurtain = overlay.querySelector('.page-transition-curtain-left');
    let completed = false;

    const finish = () => {
      if (completed) {
        return;
      }

      completed = true;
      clearCompletionWatch();
      onComplete();
    };

    watchedHandler = (event) => {
      if (event.target === watchedCurtain && event.propertyName === 'transform') {
        finish();
      }
    };

    watchedCurtain.addEventListener('transitionend', watchedHandler);
    completionTimer = window.setTimeout(finish, duration + transitionFallbackBuffer);
  };

  const setState = (overlay, state, forceInitialFrame = false) => {
    overlay.dataset.transitionState = state;

    if (forceInitialFrame) {
      void overlay.offsetWidth;
    }
  };

  const cancelTransition = () => {
    clearCompletionWatch();
    window.clearTimeout(recoveryTimer);
    isTransitioning = false;
    root.classList.remove('page-transition-leaving', 'page-transition-clicked');
    root.removeAttribute('aria-busy');
  };

  const resetTransitionState = () => {
    cancelTransition();
    setState(ensureTransitionOverlay(), 'idle');
  };

  const isHashOnlyNavigation = (destination, link) => (
    destination.pathname === window.location.pathname
    && destination.search === window.location.search
    && (destination.hash || link.getAttribute('href').trim().startsWith('#'))
  );

  const isHtmlNavigation = (destination) => {
    const finalPathSegment = destination.pathname.split('/').pop();

    return destination.pathname.endsWith('/')
      || finalPathSegment === ''
      || /\.html?$/i.test(finalPathSegment);
  };

  const getEligibleDestination = (event) => {
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.ctrlKey
      || event.metaKey
      || event.shiftKey
      || event.altKey
    ) {
      return null;
    }

    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;

    if (
      !link
      || link.hasAttribute('download')
      || link.hasAttribute('disabled')
      || link.getAttribute('aria-disabled') === 'true'
      || link.dataset.placeholder === 'true'
    ) {
      return null;
    }

    const target = link.getAttribute('target');

    if (target && target.toLowerCase() !== '_self') {
      return null;
    }

    let destination;

    try {
      destination = new URL(link.href, window.location.href);
    } catch (error) {
      return null;
    }

    if (
      destination.origin !== window.location.origin
      || !['http:', 'https:'].includes(destination.protocol)
      || !isHtmlNavigation(destination)
      || isHashOnlyNavigation(destination, link)
    ) {
      return null;
    }

    return destination;
  };

  const navigate = (destination) => {
    try {
      window.location.assign(destination.href);
      recoveryTimer = window.setTimeout(resetTransitionState, navigationRecoveryDelay);
    } catch (error) {
      resetTransitionState();
      window.location.href = destination.href;
    }
  };

  const startNavigation = (destination) => {
    const overlay = ensureTransitionOverlay();
    const exitDuration = readDuration('--page-transition-exit-duration', 460);

    isTransitioning = true;
    root.classList.add('page-transition-leaving');
    root.setAttribute('aria-busy', 'true');

    if (reducedMotionQuery.matches) {
      setState(overlay, 'idle');
      completionTimer = window.setTimeout(
        () => navigate(destination),
        readDuration('--page-transition-reduced-exit-duration', 32),
      );
      return;
    }

    setState(overlay, 'idle', true);
    watchCurtainTransform(overlay, exitDuration, () => {
      setState(overlay, 'closed');
      navigate(destination);
    });
    setState(overlay, 'closing');
  };

  document.addEventListener('click', (event) => {
    const destination = getEligibleDestination(event);

    if (!destination) {
      return;
    }

    event.preventDefault();

    if (isTransitioning) {
      return;
    }

    startNavigation(destination);
  });

  window.addEventListener('pageshow', (event) => {
    const overlay = ensureTransitionOverlay();
    const state = overlay.dataset.transitionState;

    if (event.persisted || isTransitioning || state === 'closing' || state === 'closed') {
      resetTransitionState();
    }
  });

  const serializeRect = (element) => {
    if (!element) {
      return null;
    }

    const rect = element.getBoundingClientRect();

    return {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };
  };

  const installDebugApi = () => {
    if (!['localhost', '127.0.0.1'].includes(window.location.hostname)) {
      return;
    }

    const prepareDebugState = (state) => {
      cancelTransition();
      const overlay = ensureTransitionOverlay();
      setState(overlay, state);
      return overlay;
    };

    const playDebugTransition = (startState, activeState, endState, durationProperty, fallback) => {
      const overlay = prepareDebugState(startState);
      const duration = reducedMotionQuery.matches ? 0 : readDuration(durationProperty, fallback);

      setState(overlay, startState, true);

      if (duration === 0) {
        setState(overlay, endState);
        return;
      }

      watchCurtainTransform(overlay, duration, () => {
        setState(overlay, endState);
      });
      setState(overlay, activeState);
    };

    window.__portfolioTransitionDebug = {
      inspect() {
        const overlay = root.querySelector(overlaySelector);
        const leftCurtain = overlay?.querySelector('.page-transition-curtain-left');
        const rightCurtain = overlay?.querySelector('.page-transition-curtain-right');
        const seam = overlay?.querySelector('.page-transition-seam');

        return {
          overlayExists: Boolean(overlay),
          state: overlay?.dataset.transitionState ?? null,
          overlayZIndex: overlay ? getComputedStyle(overlay).zIndex : null,
          overlayRect: serializeRect(overlay),
          leftCurtainRect: serializeRect(leftCurtain),
          rightCurtainRect: serializeRect(rightCurtain),
          seamRect: serializeRect(seam),
          leftTransform: leftCurtain ? getComputedStyle(leftCurtain).transform : null,
          rightTransform: rightCurtain ? getComputedStyle(rightCurtain).transform : null,
          seamOpacity: seam ? getComputedStyle(seam).opacity : null,
        };
      },
      freezeClosed() {
        prepareDebugState('closed');
      },
      reset() {
        resetTransitionState();
      },
      playClose() {
        playDebugTransition('idle', 'closing', 'closed', '--page-transition-exit-duration', 460);
      },
      playOpen() {
        playDebugTransition('closed', 'opening', 'idle', '--page-transition-entry-duration', 440);
      },
    };
  };

  installDebugApi();
})();

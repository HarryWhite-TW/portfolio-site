import './style.css';
import { contactLinks, featuredProjects, gatewayRoutes, homeworkItems, latestNotes, uiCopy } from './data.js';

const gatewayGrid = document.querySelector('#gateway-grid');
const featuredPreviewGrid = document.querySelector('#featured-preview-grid');
const homeworkPreviewGrid = document.querySelector('#homework-preview-grid');
const notesPreviewGrid = document.querySelector('#notes-preview-grid');
const contactLinksList = document.querySelector('#contact-links');
const siteHeader = document.querySelector('#site-header');
const topHoverZone = document.querySelector('#top-hover-zone');
const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const languageButtons = document.querySelectorAll('.language-pill');
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('portfolio-language');
  return savedLanguage === 'zh' ? 'zh' : 'en';
};

let currentLanguage = getInitialLanguage();

languageButtons.forEach((button) => {
  const isEnglish = button.textContent.trim().toLowerCase() === 'en';
  button.dataset.lang = isEnglish ? 'en' : 'zh';
  button.textContent = isEnglish ? 'EN' : '\u4e2d\u6587';
  button.classList.remove('is-placeholder');
  button.removeAttribute('data-placeholder');
  button.removeAttribute('aria-disabled');
  button.setAttribute('role', 'button');
});

const t = (key) => uiCopy[currentLanguage][key] || uiCopy.en[key] || key;

const localText = (item, key) => {
  if (currentLanguage === 'zh') {
    return item[`${key}Zh`] || item[key];
  }

  return item[key];
};

const getActionLabel = (link) => {
  const labels = {
    'Live Demo': t('liveDemo'),
    'Source Code': t('sourceCode'),
    Notes: t('notes'),
    'Read note': currentLanguage === 'zh' ? '\u95b1\u8b80\u7b46\u8a18' : 'Read note',
  };

  return labels[link.label] || localText(link, 'label');
};

const renderActionLink = (link, className = 'mini-button') => `
  <a
    class="${className}${link.placeholder ? ' is-placeholder' : ''}"
    href="${link.href}"
    ${link.placeholder ? 'data-placeholder="true" aria-disabled="true"' : ''}
    title="${link.placeholder ? localText(link, 'placeholderText') : getActionLabel(link)}"
  >
    <span>${getActionLabel(link)}</span>
    ${link.placeholder ? `<small>${localText(link, 'placeholderText')}</small>` : ''}
  </a>
`;

const renderGatewayCard = (route, index) => `
  <a class="gateway-card reveal-surface" href="${route.href}" style="--reveal-delay: ${index * 60}ms">
    <span>${localText(route, 'signal')}</span>
    <h3>${localText(route, 'title')}</h3>
    <p>${localText(route, 'description')}</p>
  </a>
`;

const renderFeaturedPreview = (project, index) => `
  <article class="preview-card reveal-surface" style="--reveal-delay: ${index * 65}ms">
    <span class="status-badge">${localText(project, 'status')}</span>
    <h3>${localText(project, 'title')}</h3>
    <p>${localText(project, 'purpose')}</p>
    <dl class="preview-meta">
      <div>
        <dt>${t('stackLabel')}</dt>
        <dd>${localText(project, 'stack')}</dd>
      </div>
      <div>
        <dt>${t('statusLabel')}</dt>
        <dd>${localText(project, 'status')}</dd>
      </div>
    </dl>
    <div class="project-actions">${project.links.map((link) => renderActionLink(link)).join('')}</div>
  </article>
`;

const renderHomeworkPreview = (item, index) => `
  <article class="compact-preview-card reveal-surface" style="--reveal-delay: ${index * 60}ms">
    <span>${item.label}</span>
    <div>
      <p class="compact-signal">${localText(item, 'signal')}</p>
      <h3>${localText(item, 'title')}</h3>
      <p>${localText(item, 'description')}</p>
      <small>${item.meta}</small>
    </div>
  </article>
`;

const renderNotePreview = (note, index) => `
  <article class="compact-preview-card reveal-surface" style="--reveal-delay: ${index * 60}ms">
    <span>${localText(note, 'date')}</span>
    <div>
      <h3>${localText(note, 'title')}</h3>
      <p>${localText(note, 'description')}</p>
      ${renderActionLink(note.link, 'text-link')}
    </div>
  </article>
`;

const renderContactLink = (link) => renderActionLink(link, 'glass-button justify-center');

const applyStaticCopy = () => {
  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-Hant' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  });

  document.querySelectorAll('[data-copy-en][data-copy-zh]').forEach((element) => {
    element.textContent = currentLanguage === 'zh' ? element.dataset.copyZh : element.dataset.copyEn;
  });
};

const applyActiveNavigation = () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute('href')?.split('/').pop();
    const isActive = linkPage === currentPage;

    link.classList.toggle('is-active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

const registerRevealItems = () => {
  const items = document.querySelectorAll(
    '.brand-hero-copy, .brand-orbit-panel, .proof-row, .gateway-card, .preview-card, .compact-preview-card, .cta-panel, .page-hero, .page-card, .architecture-panel, .contact-row',
  );

  items.forEach((item, index) => {
    item.classList.add('reveal-item');

    if (!item.style.getPropertyValue('--reveal-delay')) {
      item.style.setProperty('--reveal-delay', `${Math.min(index * 45, 240)}ms`);
    }
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  items.forEach((item) => observer.observe(item));
};

const renderPage = () => {
  applyStaticCopy();

  if (gatewayGrid) {
    gatewayGrid.innerHTML = gatewayRoutes.map(renderGatewayCard).join('');
  }

  if (featuredPreviewGrid) {
    featuredPreviewGrid.innerHTML = featuredProjects.slice(0, 3).map(renderFeaturedPreview).join('');
  }

  if (homeworkPreviewGrid) {
    homeworkPreviewGrid.innerHTML = homeworkItems.slice(0, 3).map(renderHomeworkPreview).join('');
  }

  if (notesPreviewGrid) {
    notesPreviewGrid.innerHTML = latestNotes.slice(0, 3).map(renderNotePreview).join('');
  }

  if (contactLinksList) {
    contactLinksList.innerHTML = contactLinks.map(renderContactLink).join('');
  }

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  registerRevealItems();
  applyActiveNavigation();
};

languageButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    currentLanguage = button.dataset.lang === 'zh' ? 'zh' : 'en';
    localStorage.setItem('portfolio-language', currentLanguage);
    renderPage();
  });
});

renderPage();

document.addEventListener('click', (event) => {
  const placeholderLink = event.target.closest('[data-placeholder="true"]');

  if (placeholderLink) {
    event.preventDefault();
  }
});

const initHeaderBehavior = () => {
  if (!siteHeader) {
    return;
  }

  let lastScrollY = window.scrollY;
  let pointerPinned = false;
  let focusPinned = false;
  let hideTimer;

  const mobileMenuIsOpen = () => menuToggle?.getAttribute('aria-expanded') === 'true';

  const showHeader = () => {
    siteHeader.classList.remove('header-hidden');
  };

  const hideHeader = () => {
    if (window.scrollY < 96 || pointerPinned || focusPinned || mobileMenuIsOpen()) {
      return;
    }

    siteHeader.classList.add('header-hidden');
  };

  const scheduleHide = () => {
    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(hideHeader, 180);
  };

  const updateHeader = () => {
    const currentScrollY = Math.max(window.scrollY, 0);
    const delta = currentScrollY - lastScrollY;

    siteHeader.classList.toggle('header-scrolled', currentScrollY > 12);

    if (currentScrollY < 96 || delta < -4 || mobileMenuIsOpen()) {
      showHeader();
    } else if (delta > 7) {
      hideHeader();
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener(
    'mousemove',
    (event) => {
      if (event.clientY <= 34) {
        showHeader();
      }
    },
    { passive: true },
  );

  topHoverZone?.addEventListener('mouseenter', showHeader);

  siteHeader.addEventListener('mouseenter', () => {
    pointerPinned = true;
    showHeader();
  });

  siteHeader.addEventListener('mouseleave', () => {
    pointerPinned = false;
    scheduleHide();
  });

  siteHeader.addEventListener('focusin', () => {
    focusPinned = true;
    showHeader();
  });

  siteHeader.addEventListener('focusout', () => {
    focusPinned = siteHeader.contains(document.activeElement);
    if (!focusPinned) {
      scheduleHide();
    }
  });

  updateHeader();
};

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.classList.toggle('hidden');
    siteHeader?.classList.toggle('header-menu-open', !isOpen);
    siteHeader?.classList.remove('header-hidden');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.add('hidden');
      siteHeader?.classList.remove('header-menu-open');
    });
  });
}

initHeaderBehavior();

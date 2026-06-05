import './style.css';
import { contactLinks, featuredProjects, homeworkItems, latestNotes, roadmapItems, uiCopy } from './data.js';

const projectGrid = document.querySelector('#featured-project-grid');
const homeworkGrid = document.querySelector('#homework-grid');
const roadmapGrid = document.querySelector('#roadmap-grid');
const notesGrid = document.querySelector('#notes-grid');
const contactLinksList = document.querySelector('#contact-links');
const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const languageButtons = document.querySelectorAll('.language-pill');

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

const renderTags = (tags) => tags.map((tag) => `<span class="tech-tag">${tag}</span>`).join('');

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

const renderProjectCard = (project) => `
  <article class="glass-card project-card project-card-${project.accent}">
    <div class="project-visual">
      <div class="project-icon">${project.icon}</div>
      <div class="launch-ring"></div>
      <div class="mock-window">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="mock-graph">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <p>${localText(project, 'metric')}</p>
    </div>
    <div class="flex items-start justify-between gap-4">
      <span class="status-badge">${localText(project, 'status')}</span>
      ${project.placeholder ? `<span class="placeholder-badge">${t('linksComingSoon')}</span>` : ''}
    </div>
    <h3>${localText(project, 'title')}</h3>
    <p>${localText(project, 'description')}</p>
    <div class="mt-5 flex flex-wrap gap-2">${renderTags(localText(project, 'tags'))}</div>
    <div class="mission-timeline"><span></span><span></span><span></span></div>
    <div class="project-actions mt-7">${project.links.map((link) => renderActionLink(link)).join('')}</div>
  </article>
`;

const renderHomeworkCard = (item, index) => `
  <article class="homework-card" style="--orbit-delay: ${index * 120}ms">
    <div class="homework-label">${item.label}</div>
    <p class="homework-signal">${localText(item, 'signal')}</p>
    <h3>${localText(item, 'title')}</h3>
    <p>${localText(item, 'description')}</p>
    <span>${item.meta}</span>
  </article>
`;

const renderRoadmapCard = (item, index) => `
  <article class="roadmap-card">
    <div class="step-index">${String(index + 1).padStart(2, '0')}</div>
    <div>
      <span class="roadmap-signal">${localText(item, 'signal')}</span>
      <h3>${localText(item, 'title')}</h3>
      <p>${localText(item, 'description')}</p>
    </div>
  </article>
`;

const renderNoteCard = (note) => `
  <article class="glass-card note-card">
    <span>${localText(note, 'date')}</span>
    <h3>${localText(note, 'title')}</h3>
    <p>${localText(note, 'description')}</p>
    ${renderActionLink(note.link, 'text-link')}
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
};

const renderPage = () => {
  applyStaticCopy();

  if (projectGrid) {
    projectGrid.innerHTML = featuredProjects.map(renderProjectCard).join('');
  }

  if (homeworkGrid) {
    homeworkGrid.innerHTML = homeworkItems.map(renderHomeworkCard).join('');
  }

  if (roadmapGrid) {
    roadmapGrid.innerHTML = roadmapItems.map(renderRoadmapCard).join('');
  }

  if (notesGrid) {
    notesGrid.innerHTML = latestNotes.map(renderNoteCard).join('');
  }

  if (contactLinksList) {
    contactLinksList.innerHTML = contactLinks.map(renderContactLink).join('');
  }

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  document.querySelectorAll('[data-placeholder="true"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
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

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.add('hidden');
    });
  });
}

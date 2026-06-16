# Harry Chan Personal Portfolio

A deployed public portfolio and release candidate version of Harry Chan's personal brand and engineering portfolio.

Live site: <https://harrywhite-tw.github.io/portfolio-site/>

This site is not a homework submission site and is not yet positioned as a final professional resume site. It is a public release candidate for presenting selected projects, practice evidence, engineering notes, background, and verified public contact paths.

## Project Positioning

The website is designed to support:

- selected engineering case studies;
- a Practice Lab for course-related work, small builds, and implementation evidence;
- engineering notes about reusable working methods, validation discipline, frontend quality, and AI collaboration;
- background, QA-minded direction, engineering principles, and toolkit;
- public paths for GitHub, portfolio navigation, practice evidence, and notes.

Course-related work may appear inside the Practice Lab, but the public narrative focuses on what was built, how it was validated, what was learned, and how the work is improving.

The long-term architecture and copy rules are defined in:

- [`docs/SITE_ARCHITECTURE_PLAN.md`](docs/SITE_ARCHITECTURE_PLAN.md)

## Tech Stack

- Vite
- Tailwind CSS
- Vanilla JavaScript
- Static HTML
- GitHub Pages target
- No backend
- No database
- No paid service requirement

The current stack is intentionally lightweight. The main constraints are content quality, case-study structure, visual consistency, motion behavior, accessibility sanity checks, and release readiness.

## Local Development

Install dependencies:

```bash
npm install
```

Start the default development server:

```bash
npm run dev
```

On restricted Windows classroom environments, use a known available local port:

```bash
npm run dev -- --host 127.0.0.1 --port 3000
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available Pages

- `index.html`: Home brand gateway and intro
- `portfolio.html`: selected engineering case studies
- `homework.html`: Practice Lab, retaining course and small-build evidence; filename retained for route compatibility
- `blog.html`: engineering notes about reusable working methods, validation discipline, frontend quality, and AI collaboration
- `about.html`: background, QA-minded direction, engineering principles, and toolkit
- `contact.html`: verified public paths only; live portfolio, GitHub, Portfolio, Practice Lab, and Notes first; email and resume intentionally withheld until privacy review

Static Traditional Chinese pages are available at:

- `/zh/index.html`
- `/zh/portfolio.html`
- `/zh/homework.html`
- `/zh/blog.html`
- `/zh/about.html`
- `/zh/contact.html`

## Navigation Labels

Public navigation uses:

- Home
- Portfolio
- Lab
- Blog
- About
- Contact
- EN
- GitHub

The public label is `Lab`; the route remains `homework.html` to avoid breaking existing links.

## Implemented Foundation

### Multi-page architecture

- Shared navigation and footer behavior
- Active navigation states
- Desktop and mobile navigation
- Auto-hide header behavior
- English / Traditional Chinese switching
- Static page routing without a framework migration

### Fullscreen intro

- Minimal entrance cover shown once per browser session
- Enter action reveals the Home page in the same document
- Header and page scroll remain hidden until entry
- Keyboard focus handoff
- `prefers-reduced-motion` support

To replay the intro:

```text
index.html?intro=1
```

Or reset it in the browser console:

```javascript
sessionStorage.removeItem("portfolioIntroSeen")
```

### Public copy and content foundation

- Visitor-facing copy focuses on projects, practice, engineering decisions, and ongoing development
- Visible navigation changed from Homework to Lab
- Homework-related evidence is retained as Practice Lab material
- Blog, About, and Contact pages have public-candidate content foundations
- Contact avoids unverified private paths until privacy review
- Routes, layout system, language switch, and intro behavior remain stable

## Content Model

### Portfolio

Mature project entries should include:

- project value and context;
- representative screenshots;
- Harry's role and responsibilities;
- technology stack;
- core workflow or architecture;
- engineering decisions;
- testing or validation;
- current result and limitations;
- Live Demo, GitHub Source, and Build Log links where available.

### Practice Lab

Smaller builds and exercises should include:

- purpose;
- skills practiced;
- technology stack;
- current status;
- validation or testing;
- Demo, Source, and Notes links where available.

HW identifiers may remain for traceability, but they should not define the website's public identity.

### Blog / Notes

Current editorial direction:

- reusable working methods;
- validation discipline;
- frontend quality;
- AI collaboration;
- build decisions and project notes.

## Placeholder Content

This version is a deployed public release candidate, not an empty early shell. Some project demos and public links are already present where available, while other destinations remain intentionally conservative until privacy review or later content expansion.

- Email and resume are intentionally withheld until privacy review.
- Some project links may still point to placeholder or future-work destinations.
- Some deeper case-study pages, screenshots, and full article pages remain future improvements.
- Placeholder or future-work links should remain clearly marked or non-interactive until real destinations are available.

Current real public links:

- Live site: <https://harrywhite-tw.github.io/portfolio-site/>
- GitHub: <https://github.com/HarryWhite-TW>

## Completed Status

- M2.0 multi-page architecture
- M2.0.1 page shell and language stabilization
- M2.1 Home brand gateway
- M2.1.1 fullscreen intro
- M2.1.2 professional public copy cleanup
- M2.1R architecture and documentation alignment
- M2.1T intro transition polish
- M2.2 Portfolio core case-study structure
- M2.3 Practice Lab structure and public evidence organization
- M2.4 Blog / About / Contact content foundation
- M2.5 visual and motion polish
- M2.5.1 Blog wording and button alignment refinement
- M2.6R README / release status alignment
- M2.6Q static bilingual route architecture
- M2.7 GitHub Pages deployment
- M2.7R release documentation alignment

## Next / Remaining Work

### Release QA follow-up

- Verify deployed English and Traditional Chinese routes
- Check internal and external links after public deployment
- Recheck intro replay, reduced-motion behavior, and keyboard navigation
- Keep README and Contact aligned with the live public URL

### Later improvements

- Stronger project screenshots
- Deeper case-study pages
- Optional resume/contact expansion after privacy review

## Working Rules

- Update the architecture plan before making a major direction change.
- Keep visitor-facing copy free of internal milestone and page-specification language.
- Prefer real project content over additional decorative effects.
- Keep each milestone small, reviewable, and build-validated.
- Do not add a heavy framework or animation library without a demonstrated need.

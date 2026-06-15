# Harry Chan Personal Portfolio

A multi-page personal brand and engineering portfolio for Harry Chan / HarryWhite-TW.

The site presents selected AI, web, automation, QA, and hands-on engineering work through project showcases, practice records, build notes, and a clear personal direction.

## Current Direction

The website is designed as:

- a professional portfolio;
- a resume extension;
- a project showcase;
- a Practice Lab for smaller builds and experiments;
- an engineering notes and learning record;
- a personal brand entry point for interviews, collaboration, and public sharing.

The site is not positioned as a homework submission page. Course-related work may appear inside the Practice Lab, but the public narrative focuses on what was built, how it was validated, what was learned, and how the work is improving.

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

The current stack is intentionally lightweight. The main constraints are content quality, case-study structure, visual consistency, and motion design—not framework capability.

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

- `index.html` — fullscreen intro and Home brand gateway
- `portfolio.html` — selected project showcase and future case studies
- `homework.html` — Practice Lab / 實作紀錄; filename retained for route compatibility
- `blog.html` — Build Logs, technical notes, AI workflow notes, reflections, and project decisions
- `about.html` — background, direction, skills, working principles, and growth path
- `contact.html` — GitHub, email, resume, and contact paths

## Navigation Labels

Public navigation uses:

- Home / 首頁
- Portfolio / 作品集
- Lab / 實作
- Blog / 筆記
- About / 關於
- Contact / 聯絡
- EN / 中文
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

### Brand-copy cleanup

- Visitor-facing copy now focuses on projects, practice, engineering decisions, and ongoing development
- Visible navigation changed from Homework to Lab
- Removed teacher-inspection, assignment-submission, page-shell, and milestone language from public pages
- Preserved the existing routes, layout system, language switch, and intro behavior

## Content Model

### Portfolio

Mature project entries should eventually include:

- project value and context;
- representative screenshots;
- Harry's role and responsibilities;
- technology stack;
- core workflow or architecture;
- engineering decisions;
- testing or validation;
- current result and limitations;
- Live Demo, GitHub Source, and Build Log links.

### Practice Lab

Smaller builds and exercises should include:

- purpose;
- skills practiced;
- technology stack;
- current status;
- validation or testing;
- Demo, Source, and Notes links.

HW identifiers may remain for traceability, but they should not define the website's public identity.

### Blog / Notes

Planned editorial categories:

- Build Logs
- Technical Notes
- AI Workflow Notes
- Reflections
- Project Decisions

## Placeholder Content

Some links are still placeholders:

- Email address
- Resume
- Portfolio URL
- Project live demos
- Project source-code links
- Project notes
- Full article pages

Placeholders must remain clearly marked or non-interactive until real destinations are available.

Current real public link:

- GitHub: <https://github.com/HarryWhite-TW>

## Milestone Status

### Completed

- M1.x — initial visual system, responsive homepage, mission-control direction, layout stabilization, and interactive polish
- M2.0 — multi-page architecture
- M2.0.1 — page-shell and language stabilization
- M2.1 — Home redesigned as a brand gateway
- M2.1.1 — fullscreen intro
- M2.1.2 — professional public-copy cleanup
- M2.1R — architecture, brand positioning, Practice Lab terminology, and documentation alignment

### Next

#### M2.1T — Intro transition polish

- Improve the transition from the fullscreen intro to Home
- Establish a continuous motion language
- Preserve keyboard access, reduced-motion support, and mobile usability

#### M2.2 — Portfolio core

- Select two or three representative projects
- Add real screenshots and case-study content
- Connect valid Demo, Source, and Build Log links

#### M2.3 — Practice Lab

- Organize current builds and HW records
- Add purpose, practice focus, validation, and real links

#### M2.4 — Blog, About, and Contact content

- Add real engineering notes
- Complete the personal narrative
- Add reliable contact and resume paths

#### M2.5 — Visual and motion polish

- Refine design tokens and motion tokens
- Improve page transitions and responsive layouts
- Reduce repeated card rhythms

#### M2.6 — Deployment and QA

- Production build
- GitHub Pages deployment
- Link validation
- Language validation
- Intro and transition validation
- Keyboard and reduced-motion validation
- Desktop, tablet, and mobile QA

## Working Rules

- Update the architecture plan before making a major direction change.
- Keep visitor-facing copy free of internal milestone and page-specification language.
- Prefer real project content over additional decorative effects.
- Keep each milestone small, reviewable, build-validated, committed, and pushed.
- Do not add a heavy framework or animation library without a demonstrated need.

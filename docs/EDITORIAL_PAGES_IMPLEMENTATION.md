# Editorial Pages Implementation

## Purpose

This document records `M2.4 - Blog, About, and Contact real content`.

The goal is to replace generic category cards and `Coming soon` placeholders with visitor-facing content grounded in actual project history, professional background, engineering decisions, and verified public links.

## Blog / Notes

Implemented three real notes:

1. Why the portfolio became a multi-page system.
2. Why the final page transition is intentionally simple.
3. A bounded responsibility model for the human user, ChatGPT, and Codex.

The notes are published directly inside `blog.html` with stable anchor links so the homepage preview can link to real content without requiring a separate article generator or CMS.

## About

The About page now connects:

- several years of mechanical manufacturing and mass-production experience;
- dimension and quality control habits;
- abnormal-condition handling, safety, training, and handoff responsibilities;
- QA-minded software work;
- backend and AI application foundations;
- public project documentation and validation habits.

The page avoids presenting learning-stage tools as expert-level claims. It explains that the Portfolio is the evidence layer for where each tool has actually been used.

## Contact

The Contact page now exposes only verified public paths:

- GitHub profile;
- Portfolio;
- Practice Lab;
- Build Notes.

Direct personal email, phone information, and downloadable resume files remain intentionally unpublished until permanent deployment and privacy review are complete.

## Homepage synchronization

`src/data.js` now:

- replaces generic `Notes` buttons with `Demo Guide`, `Inspector Guide`, and `Case Study` labels;
- replaces placeholder note previews with the three real Blog anchors;
- keeps the homepage, Portfolio, Lab, Blog, About, and Contact narratives aligned.

## Shared visual system

`src/editorial-pages.css` provides:

- featured note layout;
- note cards and full article sections;
- About background and direction timeline;
- working-strength cards;
- Contact path cards and public-scope sections;
- desktop, tablet, narrow-browser, and reduced-motion behavior.

## Files

- `blog.html`
- `about.html`
- `contact.html`
- `src/data.js`
- `src/editorial-pages.css`
- `docs/EDITORIAL_PAGES_IMPLEMENTATION.md`

## Validation still required

- production build;
- English and Traditional Chinese review;
- desktop and narrow-browser review;
- anchor-link validation from the homepage;
- GitHub and internal-link validation;
- final public privacy review before email or resume publication;
- iPhone testing after public deployment or a suitable local network becomes available.

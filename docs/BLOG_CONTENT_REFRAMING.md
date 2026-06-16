# Blog Content Reframing

## Purpose

This document records the `M2.5.1 - Blog Content Reframing` adjustment.

The Blog page previously leaned too strongly toward explaining how this website was built. That topic is valid for an engineering portfolio, but it can feel too self-referential when presented as the main public narrative.

The page was reframed to present reusable engineering decisions instead:

- how scattered project outputs become reviewable evidence;
- why stable frontend behavior matters more than decorative transitions;
- how AI-assisted development can remain bounded, inspectable, and approval-based.

## Public narrative rule

The Blog should not read like a private website construction diary.

It should communicate project judgment, engineering tradeoffs, evidence design, quality protection, and workflow governance. The current site can still appear as an example, but it should not be the only subject of the note.

## Updated note structure

### 1. Reviewable project evidence

Old angle:

- Why the site needed more than one homepage.

New angle:

- From scattered repositories to reviewable project evidence.

The emphasis is now on separating flagship depth, learning breadth, decision notes, and public context so project work is easier for others to inspect.

### 2. Frontend stability

Old angle:

- Why the final page transition is intentionally simple.

New angle:

- Why stable interaction matters more than impressive transitions.

The emphasis is now on protecting continuity, perceived speed, and user trust rather than describing a specific animation change.

### 3. AI collaboration governance

Old angle:

- A practical division of responsibility between human, ChatGPT, and Codex.

New angle:

- A practical responsibility model for human, ChatGPT, and Codex.

The emphasis remains useful because it reflects the actual working method: translate goals into constraints, execute small task packets, validate locally, and approve based on evidence.

## Homepage synchronization

`src/data.js` was updated so the homepage Notes Preview now uses the same external-facing framing as the Blog page.

## Files changed

- `blog.html`
- `src/data.js`
- `docs/BLOG_CONTENT_REFRAMING.md`

## Validation still required

- Production build.
- Blog English and Traditional Chinese review.
- Homepage Notes Preview link validation.
- Check that the old anchors no longer appear in public links.
- Confirm that the page feels like engineering decision notes rather than a diary about building the website.

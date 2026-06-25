# Homepage and Page Transition Execution Plan

Status: active  
Repository: `HarryWhite-TW/portfolio-site`  
Working branch: `feature/intro-cinematic-polish`  
Baseline checkpoint: `bd1efb8 feat: add centered developer preface and intro handoff`

## 1. Purpose

This document is the execution source of truth for the current portfolio refinement phase.

The goal is to complete the homepage narrative, establish a professional independent-developer positioning, add a perceptible but restrained cross-page transition system, then finish responsive, accessibility, cleanup, and release validation.

The active visual direction remains:

- deep navy cinematic interface
- restrained cyan / violet ambient lighting
- glass and editorial presentation
- bilingual EN / Traditional Chinese parity
- polished commercial-quality presentation without unnecessary technical complexity

## 2. Current completed state

The following work is already completed and saved on the feature branch:

- cinematic intro entrance refinement
- cinematic intro exit refinement
- personal portfolio welcome cover
- centered developer preface
- homepage H1 handoff to `#home-preface-title`
- original homepage hero demoted from H1 to H2
- intro exit now reveals the homepage preface
- EN / ZH homepage structure remains aligned

The homepage preface is approved and must not be redesigned during the next batch.

## 3. Public positioning rule

The site should present Harry Chan as an independent developer working through:

- AI-assisted workflows
- web development
- engineering practice
- problem definition
- implementation
- validation
- clarity and reliability

Public-facing homepage language must not frame the site primarily as:

- a student assignment
- a coursework archive
- a beginner training log
- a homework showcase

The site must also avoid unsupported claims such as senior-level experience, enterprise consulting, client results, or commercial achievements that are not evidenced.

## 4. Execution sequence

### Batch A — M2.18C: Homepage content and section consolidation

Scope:

1. Reframe the former homepage hero as `What I Build / 我的方向`.
2. Reduce its title size and overall visual weight.
3. Reduce its near-fullscreen height.
4. Reduce the Orbit visual by approximately 15%–22% while preserving brand identity.
5. Reposition the right-side card as a working-method summary.
6. Professionalize Gateway and Proof Row copy.
7. Remove homepage wording centered on coursework, practice evidence, local practice, or learning direction.
8. Improve the rhythm from Preface → Direction → Gateway → Proof.

Primary files:

- `index.html`
- `zh/index.html`
- `src/style.css`

Explicit exclusions:

- do not change the approved Preface
- do not change Intro behavior
- do not change `src/main.js`
- do not change `src/intro-transition.css`
- do not change `src/data.js`
- do not add dependencies
- do not commit or push until visual approval

### Batch T — M2.19: Branded cross-page transition system

Current state:

- the existing transition runtime only adds a tiny opacity cue
- link navigation is not delayed for an exit animation
- the current effect is effectively invisible to users

Target behavior:

1. Internal same-origin HTML navigation starts a short branded exit transition.
2. The current page subtly darkens while a restrained glass/signal overlay passes across the viewport.
3. A cyan / violet signal line or surface cue provides continuity with the intro visual language.
4. Navigation occurs only after the short exit duration completes.
5. The destination page uses the existing prepaint/ready mechanism for a matching entrance reveal.

Motion target:

- approximately 280–420 ms
- visible but not slow
- no text blur, text scaling, or aggressive page transforms
- no particles, Canvas, Three.js, GSAP, or new dependency

Required safeguards:

- only intercept eligible same-origin HTML navigation
- do not intercept external links
- do not intercept `target="_blank"`
- do not intercept modified clicks using Ctrl / Cmd / Shift / Alt
- do not intercept `mailto:`, `tel:`, downloads, or hash-only navigation
- preserve browser back / forward behavior
- clear transition state correctly on `pageshow` and bfcache restore
- retain normal navigation if JavaScript fails
- reduced motion uses a very short opacity-only cue
- homepage intro does not replay during normal navigation
- `?intro=1` continues to force replay

Expected files:

- `page-transition.js`
- `page-transition.css`
- `page-transition-prepaint.js` only if required
- EN / ZH HTML files only when a script-loading or transition marker correction is necessary

Do not combine this work with homepage visual restructuring. It is a separate system batch so regression sources remain clear.

### Batch B — Responsive, interaction, and accessibility QA

Scope:

- 1920×1080
- 1366×768
- 768×1024
- 390×844
- 375×667
- What I Build reveal behavior
- Orbit scaling and placement
- button layout
- horizontal overflow
- keyboard navigation
- focus-visible behavior
- reduced-motion behavior
- intro regression
- page-transition regression
- EN / ZH parity

The first-screen Preface remains owned by the Intro exit or normal page render. Below-fold sections remain owned by the IntersectionObserver.

### Batch C — Cleanup, merge, and release

Scope:

1. Check for obsolete hero and transition selectors.
2. Remove only confirmed dead CSS / JS.
3. Resolve or intentionally document Vite warnings related to transition scripts.
4. Run production build and diff checks.
5. Push the approved feature checkpoint.
6. Perform real mobile verification.
7. Merge into `master` only after explicit approval.
8. Verify GitHub Pages in EN and ZH.

No automatic merge, branch deletion, or release action is permitted.

## 5. Homepage narrative contract

The homepage sequence remains:

1. Intro Cover — welcome and identity
2. Homepage Preface — who Harry Chan is and the site’s value
3. What I Build / 我的方向 — focus areas and working approach
4. Gateway — navigation into work, build records, notes, and background
5. Proof / Project Snapshot
6. Featured work and remaining homepage sections

Responsibilities must not overlap:

- Preface answers: who I am
- What I Build answers: what I build and how I work
- Portfolio answers: what I have completed
- About answers: background and fuller personal story

## 6. Visual hierarchy contract

- The Preface remains the only homepage H1.
- What I Build uses H2 and must not resemble a second fullscreen hero.
- Section headings should be visually meaningful without becoming poster-sized.
- Body copy must remain readable and must not be reduced to caption-like text.
- Orbit remains a secondary brand visual, not the dominant focal point.
- Desktop and mobile must preserve the same narrative hierarchy.

## 7. Validation commands

Before each implementation batch:

```powershell
git status --short
git branch --show-current
git log -3 --oneline
```

After implementation:

```powershell
npm run build
git diff --check
git status --short
git diff --stat
```

Known non-blocking build warning:

- transition scripts referenced without `type="module"`

This warning must not be “fixed” casually during unrelated work. It belongs to the transition/cleanup scope.

## 8. Checkpoint policy

- Preserve a clean checkpoint before each major batch.
- Codex must not commit or push unless explicitly instructed.
- Visual approval is required before saving Batch A and Batch T.
- The school computer restore environment makes unpushed local work disposable after reboot.
- Never use `npm audit fix --force` as part of this work.

## 9. Immediate next action

Execute Batch A / M2.18C first.

After its visual review and checkpoint, execute Batch T / M2.19 immediately so the cross-page transition becomes part of the active product experience rather than a final cosmetic add-on.

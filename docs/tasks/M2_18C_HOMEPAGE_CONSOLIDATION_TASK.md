# M2.18C — What I Build, Homepage Positioning, and Section Rhythm Consolidation

Status: ready for execution  
Recommended model: GPT-5.5  
Recommended intelligence: High  
Working branch: `feature/intro-cinematic-polish`  
Required starting commit: `f19c2738905c1816f19f90094b4bf948d1c4efbd`

## 1. Governing plan

Read and follow:

- `docs/HOMEPAGE_AND_PAGE_TRANSITION_EXECUTION_PLAN.md`

This task executes Batch A only.

Do not begin the cross-page transition implementation in this task. M2.19 is the next independent batch after visual approval and checkpointing.

## 2. Preflight

Run:

```powershell
git status --short
git branch --show-current
git log -3 --oneline
```

Required state:

- branch: `feature/intro-cinematic-polish`
- worktree: clean
- latest commit: `f19c273 docs: add homepage and page transition execution plan`

If the state differs, stop and report it. Do not restore or overwrite user work.

## 3. Allowed files

Only modify:

- `index.html`
- `zh/index.html`
- `src/style.css`

Do not modify:

- `src/main.js`
- `src/intro-transition.css`
- `src/data.js`
- `page-transition.js`
- `page-transition.css`
- `page-transition-prepaint.js`
- Intro assets
- package files
- any other page

Do not add dependencies.

Do not commit or push.

## 4. Protected homepage preface

The approved `.home-preface` section must remain unchanged.

Protect:

- all Preface EN / ZH copy
- `#home-preface-title`
- the single homepage H1
- Preface layout and sizing
- Intro handoff
- focus handoff
- sessionStorage behavior
- `?intro=1`

## 5. Reframe the former Hero

Retain the existing `.brand-hero` class to preserve current reveal contracts.

Add a semantic scoped class:

```html
<section
  class="brand-hero home-direction-section px-5 lg:px-8"
  aria-labelledby="direction-title"
>
```

Add `id="direction-title"` to the existing `.brand-hero-copy h2`.

The section must remain H2-based and must not introduce another H1.

## 6. English direction copy

Update the former Hero copy in `index.html`.

Eyebrow:

```text
What I Build
```

H2:

```text
Building clear, reliable digital work through AI-assisted workflows and engineering practice.
```

Subtitle:

```text
Focused on web experiences, AI applications, and a process that moves from problem definition through implementation and validation.
```

Signal chips:

```text
AI-Assisted Workflows
Web Development
Engineering Practice
```

Keep the existing CTA hrefs and visible labels:

```text
View Portfolio
Practice Lab
```

## 7. Traditional Chinese direction copy

Update the former Hero copy in `zh/index.html`.

Eyebrow:

```text
我的方向
```

H2:

```text
以 AI 協作與工程方法，打造清楚、可靠的數位作品。
```

Subtitle:

```text
聚焦網頁體驗、AI 應用，以及從問題定義、實作到驗證的完整流程。
```

Signal chips:

```text
AI 協作
網頁開發
工程方法
```

Keep the existing CTA hrefs and visible labels:

```text
查看作品集
實作紀錄
```

## 8. Reposition the Orbit card

Keep the existing DOM and classes:

- `.brand-orbit-panel`
- `.orbit-ring`
- `.brand-panel-card`

Do not add new cards, icons, metrics, or dependencies.

English:

Label:

```text
Working Approach
```

Title:

```text
From problem definition to implementation and validation.
```

Text:

```text
Each project is shaped through clear scope, traceable decisions, and iterative validation.
```

Traditional Chinese:

Label:

```text
工作方法
```

Title:

```text
從問題定義，到實作與驗證。
```

Text:

```text
以清楚的範圍、可追溯的決策與反覆驗證，推進每一個專案。
```

## 9. Direction-section scale

The current former Hero is still near-fullscreen and must become a content section.

For `.brand-hero` / `.home-direction-section`:

- replace the current near-`92vh` sizing
- target `min-height: clamp(36rem, 68vh, 46rem)`
- desktop top padding approximately `5.5rem`–`7rem`
- desktop bottom padding approximately `5rem`–`6.5rem`
- do not use fixed `height`
- keep current ambient layers, but they must not dominate the Preface

The result must feel important without resembling a second landing-page hero.

## 10. Direction title scale

For `.brand-hero-copy h2`:

- `max-width: 42rem`–`46rem`
- `font-size: clamp(2.65rem, 4.5vw, 4.5rem)`
- `line-height: 1.02`–`1.1`
- restrained negative letter spacing around `-0.025em`
- `text-wrap: balance`
- natural wrapping only

Remove the current poster-sized maximum near `7rem`.

Do not use `<br>`, forced block spans, narrow CJK columns, or `nowrap`.

## 11. Subtitle, chips, and actions

For `.brand-hero-copy > p:not(.eyebrow)`:

- `max-width: 38rem`–`42rem`
- `font-size: clamp(1rem, 1.4vw, 1.15rem)`
- `line-height: 1.7`–`1.8`

Keep signal chips and the two CTA buttons.

You may tighten their local vertical spacing, but do not redesign global button components.

## 12. Orbit scale reduction

Reduce the Orbit system by approximately 15%–22% while preserving its identity.

Target ranges:

`.brand-orbit-panel`

- `min-height: clamp(22rem, 34vw, 28rem)`

`.brand-orbit-panel::before`

- width around `min(25rem, 64vw)`
- reduce outer box-shadow spread proportionally

`.orbit-ring`

- width around `min(19rem, 54vw)`
- preserve slow rotation

`.brand-panel-card`

- width around `min(100%, 23rem–24rem)`
- slightly reduce padding where useful

`.brand-panel-card h2`

- `font-size: clamp(1.4rem, 2.6vw, 2rem)`
- `line-height: 1.08`–`1.16`

The Orbit must remain a secondary visual, not a second hero focal point.

## 13. Gateway copy cleanup

Keep the existing Gateway DOM and card structure.

Do not add or remove cards.

### English

Eyebrow:

```text
Explore
```

Title:

```text
Explore the work, process, and thinking behind the site.
```

Text:

```text
A concise path to selected projects, build records, engineering notes, and background.
```

Card 1:

- label: `Selected work`
- title: `Portfolio`
- text: `Representative projects and the decisions behind them.`

Card 2:

- label: `Build records`
- title: `Lab`
- text: `Experiments, demos, and implementation records from ongoing project work.`

Card 3:

- label: `Engineering notes`
- title: `Blog / Notes`
- text: `Requirement shaping, technical decisions, and AI collaboration notes.`

Card 4:

- label: `Background and direction`
- title: `About`
- text: `Experience, working principles, and the direction I am building toward.`

### Traditional Chinese

Eyebrow:

```text
瀏覽方向
```

Title:

```text
從作品、流程到技術思考，快速了解這個網站。
```

Text:

```text
依序瀏覽精選作品、實作紀錄、工程筆記與個人背景。
```

Card 1:

- label: `精選作品`
- title: `作品集`
- text: `代表性專案，以及背後的設計、實作與驗證。`

Card 2:

- label: `實作紀錄`
- title: `實作`
- text: `專案中的實驗、展示與實作過程。`

Card 3:

- label: `工程筆記`
- title: `Blog / 筆記`
- text: `需求拆解、技術判斷與 AI 協作紀錄。`

Card 4:

- label: `背景與方向`
- title: `關於`
- text: `個人經歷、工作原則與持續發展的方向。`

Remove public-facing homepage wording centered on coursework, practice evidence, local practice, or learning direction.

## 14. Proof Row copy cleanup

Do not change the existing values or DOM structure.

English:

- eyebrow: `Project Snapshot`
- labels: `Selected builds`, `Focus areas`, `Static deployment`, `GitHub Pages`

Traditional Chinese:

- eyebrow: `專案概況`
- labels: `精選建置`, `核心方向`, `靜態部署`, `GitHub Pages`

## 15. Section rhythm

Preserve section order:

```text
Preface → Direction → Gateway → Proof → Featured
```

Do not add a new section or reorder existing sections.

Avoid both extremes:

- giant empty space between Direction and Gateway
- sections visually colliding

Use scoped rules where needed, such as `.home-direction-section + .gateway-section`, rather than globally changing every `.section-pad`.

Target perceived spacing:

- desktop: approximately `4.5rem`–`7rem`
- mobile: approximately `3.5rem`–`5rem`

## 16. Mobile behavior

At mobile widths:

- keep a single-column layout
- use content-driven section height
- direction top padding approximately `5rem`–`6rem`
- direction bottom padding approximately `4rem`–`5rem`
- H2 around `clamp(2.25rem, 10vw, 3.25rem)`
- no horizontal overflow
- Orbit follows copy and CTA
- Orbit min-height approximately `19rem`–`22rem`
- rings and card scale down together
- preserve current full-width mobile button behavior

Do not affect the Intro mobile layout.

## 17. Public-language constraints

Homepage language must remain professional, direct, and credible.

Do not add:

- student
- homework submission
- coursework showcase
- training project
- beginner
- senior engineer
- enterprise consultant
- client or commercial-result claims without evidence

## 18. Validation

Run:

```powershell
npm run build
git diff --check
git status --short
git diff --stat
```

Expected modified files only:

- `index.html`
- `zh/index.html`
- `src/style.css`

Manual checks:

- `/index.html`
- `/zh/index.html`
- `/index.html?intro=1`
- `/zh/index.html?intro=1`

Viewport checks:

- 1920×1080
- 1366×768
- 768×1024
- 390×844
- 375×667

Acceptance criteria:

1. Preface is unchanged.
2. Direction no longer resembles a second fullscreen hero.
3. Direction H2 is visibly smaller and naturally wrapped.
4. Orbit is smaller but still recognizable.
5. Left and right visual weights are balanced.
6. Gateway no longer uses student/coursework framing.
7. Proof labels are professionalized without changing values.
8. Homepage still contains exactly one H1.
9. Existing below-fold reveal ownership remains intact.
10. Intro, focus, and session behavior remain unchanged.
11. EN / ZH structure remains aligned.
12. Mobile has no horizontal overflow.
13. Production build passes.

Console check:

```javascript
document.querySelectorAll('main h1').length
```

Expected:

```text
1
```

## 19. Completion report

Use this format:

```text
Completed M2.18C What I Build, Homepage Positioning, and Section Rhythm Consolidation.
No commit / push.

1. Modified files

2. What I Build role
- EN eyebrow:
- ZH eyebrow:
- H2 hierarchy:
- aria-labelledby:

3. Copy positioning
- EN heading:
- ZH heading:
- EN subtitle:
- ZH subtitle:
- chips:

4. Orbit card
- EN:
- ZH:
- visual size reduction:

5. Section sizing
- previous min-height:
- new min-height:
- desktop padding:
- mobile padding:

6. Typography
- H2:
- subtitle:
- card title:

7. Gateway cleanup
- removed student phrasing:
- EN:
- ZH:

8. Proof Row cleanup
- EN:
- ZH:

9. Section rhythm
- Preface → Direction:
- Direction → Gateway:
- mobile:

10. Regression
- Preface:
- Intro:
- focus:
- observer:
- H1 count:
- EN / ZH:

11. Build
- npm run build:
- git diff --check:

12. Honest notes
- browser checks still required:
- visual judgment still required:
```

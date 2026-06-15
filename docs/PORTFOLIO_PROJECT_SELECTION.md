# Portfolio Project Selection

## Purpose

This document defines the first three representative projects for `M2.2 - Portfolio Core`.

The goal is not to show every repository on the main Portfolio page. The goal is to present a small set of projects that together explain Harry Chan's current direction across AI applications, backend-oriented engineering, QA-minded design, local-first product thinking, and web experience development.

Course projects and smaller exercises remain valuable, but they belong primarily in the Practice Lab unless they later mature into full case studies.

## Selection Criteria

A Portfolio Core project should provide most of the following:

- A clear problem and user or engineering need.
- Real source code and inspectable repository history.
- A runnable or reviewable demo path.
- Meaningful architecture or engineering decisions.
- Test, validation, or quality evidence.
- Honest boundaries and current limitations.
- Enough visual material for screenshots or diagrams.
- Relevance to Harry's current AI application, backend, QA, automation, or web direction.

## Repository Inventory

### Portfolio Core candidates

- `local-ai-workbench`
- `reverb-core`
- `portfolio-site`

### Practice Lab candidates

- `hw1-L2-DIC1-GitHub-Hello-Page`
- `hw3-cosmos-text2image`
- `hw4-linear-regression-outlier-streamlit`
- `hw5_ml_top10_algorithms`
- `hw6_50_startups_crispdm`

The Practice Lab projects should still receive real Demo, Source, Notes, purpose, stack, status, and validation links later. They are not rejected; they are simply not the strongest first three flagship stories.

## Selected Project 1: Local AI Workbench

### Public role

Flagship product case study.

### One-line positioning

A local-first document-to-knowledge workbench for scanning, searching, reviewing, summarizing, auditing, and exporting local document knowledge artifacts.

### Why it belongs in Portfolio Core

- It is the broadest product in the current repository set.
- It combines a FastAPI backend, SQLite, React, TypeScript, Vite, local file processing, deterministic artifacts, export workflows, audit context, and explicit approval boundaries.
- It demonstrates product thinking, architecture, safety boundaries, local-first design, and sustained project governance.
- It has a reviewer-facing workbench UI and a clear localhost demo path.
- It has substantial automated verification and a long implementation history.

### Main story to tell

Local document workflows can blur source files, generated artifacts, automated suggestions, and write-like side effects. Local AI Workbench explores a safer, inspectable pattern that keeps source documents local, makes review steps explicit, and places export or write-like behavior behind visible checks.

### Case-study sections

1. Problem and context.
2. Product boundaries: local-first, single-user, localhost, no uncontrolled writeback.
3. User workflow: configure folder, scan, search, inspect, summarize, preview Markdown, check destination, export.
4. Architecture: FastAPI, SQLite, React + TypeScript, Vite, local bridge utilities, tests.
5. Key decisions: deterministic artifacts, audit context, approval/readiness boundaries, product/runtime separation.
6. Validation: automated tests, demo walkthrough, explicit out-of-scope list.
7. Current result and limitations.
8. Source and local demo instructions.

### Available evidence

- Repository README with product definition and boundaries.
- Reviewer-facing workbench screenshot referenced by the README.
- Local setup and walkthrough.
- Automated test evidence.
- Architecture and governance documentation.

### Assets still needed for the website

- One clean desktop screenshot of the full workbench.
- One close-up screenshot of document detail and summary/audit panels.
- One simplified architecture diagram for public visitors.
- A short case-study summary written for non-repository visitors.
- A stable project status label.

## Selected Project 2: Reverb Core

### Public role

Backend and quality engineering case study.

### One-line positioning

A contract-first deterministic input guardrail layer that makes preprocessing behavior observable, traceable, and test-protected.

### Why it belongs in Portfolio Core

- It is the clearest backend-oriented engineering project in the current repository set.
- It demonstrates deterministic pipelines, structured contracts, early returns, explicit errors, step-level observability, CLI behavior, Docker verification, and layered testing.
- It aligns strongly with QA, backend, and AI application infrastructure roles.
- It includes a public Streamlit Input Inspector demo for non-technical and technical review.
- Its scope and production limitations are documented honestly.

### Main story to tell

AI applications and backend services often receive inconsistent or invalid input. Reverb Core provides a deterministic preprocessing boundary that returns a stable result contract, records step events, models errors explicitly, and stops safely on invalid cases.

### Case-study sections

1. Problem: unpredictable input and weak observability.
2. Core contract: `ProcessingResult`, `StepEvent`, `ErrorItem`.
3. Deterministic pipeline and early-return behavior.
4. Modular architecture: public entry point, runner, pipeline, steps, contracts.
5. Demo surfaces: CLI, JSON mode, Docker, Streamlit Input Inspector.
6. Test strategy: unit, integration, contract, e2e, regression boundaries.
7. Key engineering decisions and tradeoffs.
8. Current scope, limitations, and future SDK direction.

### Available evidence

- Detailed README with pipeline, contracts, CLI examples, Docker flow, and test layers.
- Demo Guide and Input Inspector documentation.
- Reproducible example inputs and outputs.
- Test-protected early-return and public API behavior.

### Assets still needed for the website

- One screenshot of the Streamlit Overview tab.
- One screenshot of the Process or Technical Details tab.
- One compact pipeline diagram.
- One representative CLI JSON snippet formatted as a visual code panel.
- A stable project status label.

## Selected Project 3: Harry Chan Personal Portfolio

### Public role

Web experience and product-presentation case study.

### One-line positioning

A bilingual multi-page personal brand website built with Vite, Tailwind CSS, Vanilla JavaScript, and a static deployment target.

### Why it belongs in Portfolio Core

- The website itself demonstrates requirements translation, iterative architecture, visual systems, responsive behavior, bilingual content, navigation design, intro experience, progressive enhancement, and GitHub-based delivery.
- It is the strongest direct example of frontend implementation and design iteration.
- It provides a natural place to explain the ChatGPT planning, bounded Codex execution, review, validation, and version-control workflow without presenting AI as a replacement for engineering judgment.
- It will become the permanent public entry point for the other case studies.

### Main story to tell

The project began as a single homepage and evolved into a structured personal brand platform with separate Portfolio, Practice Lab, Blog, About, and Contact responsibilities. The central challenge was not only visual design, but also controlling scope, preserving responsive behavior, aligning visitor-facing copy, and building a maintainable static architecture.

### Case-study sections

1. Initial problem and audience.
2. Evolution from single-page assignment structure to professional multi-page brand architecture.
3. Information architecture and bilingual content model.
4. Visual direction: premium dark technology without becoming game-like.
5. Intro and navigation interactions.
6. Cross-page transition experiments and final stability decision.
7. Static architecture, build process, GitHub workflow, and deployment plan.
8. Current limitations and next content milestones.

### Available evidence

- Current live local site and GitHub repository.
- Architecture plan and milestone history.
- Responsive multi-page implementation.
- Intro, bilingual navigation, active states, and shared visual system.
- Build and Git history.

### Assets still needed for the website

- Desktop homepage screenshot.
- Mobile homepage screenshot.
- Portfolio and Practice Lab screenshots after M2.2/M2.3 content implementation.
- A simple architecture timeline or before/after comparison.
- Final public deployment URL.

## Why the other repositories are not first-wave case studies

### HW1 Clock Website

Useful as the earliest publishing and JavaScript practice record, but too small for one of the first three flagship stories.

### HW3 Cosmos Text-to-Image

Useful for AI visual-generation practice and responsible presentation, but better placed in the Practice Lab until its process, outputs, and evaluation are documented as a deeper case study.

### HW4 Linear Regression Streamlit

Useful for demonstrating regression, outliers, and Streamlit interaction. It is a strong Practice Lab item and a possible future data-analysis case study after stronger evaluation and narrative are added.

### HW5 ML Top 10 Algorithms

Useful for interactive frontend presentation, educational content, local progress state, and an AI-assistant UI concept. It belongs prominently in the Practice Lab and may later become a secondary Portfolio project after its links, screenshots, and implementation decisions are fully documented.

### HW6 50 Startups CRISP-DM

Useful for data analysis, model comparison, visualization, and CRISP-DM documentation. It is a strong Practice Lab item and a possible future analytics case study, but the first Portfolio release should prioritize the broader product and engineering narratives above.

## Portfolio Page Order

Recommended first release order:

1. Local AI Workbench — flagship product and architecture.
2. Reverb Core — backend, contracts, testing, and guardrails.
3. Harry Chan Personal Portfolio — web experience, information architecture, and delivery workflow.

This order starts with the most product-complete work, then demonstrates a focused engineering component, and ends with the platform used to present the work.

## M2.2 Implementation Sequence

### M2.2A - Selection and evidence inventory

Status: complete when this document is approved and saved.

### M2.2B - Content and asset matrix

For each selected project, collect:

- final bilingual title;
- one-line value statement;
- problem;
- role and responsibility;
- stack;
- key decisions;
- validation evidence;
- current result;
- limitations;
- repository link;
- demo link or local demo status;
- two to three screenshots or diagrams.

No public page redesign should begin until the matrix separates confirmed facts from missing assets.

### M2.2C - Portfolio page implementation

- Replace category-only placeholders with three real project stories.
- Use one flagship feature section plus two supporting case-study sections.
- Avoid three identical cards.
- Keep every public claim traceable to repository evidence.
- Use honest labels such as `Demo-ready`, `Local demo`, `In progress`, or `Published`.

### M2.2D - Links, responsive QA, and build validation

- Validate repository and demo links.
- Test English and Traditional Chinese layouts.
- Test desktop, tablet, and mobile.
- Run production build.
- Review screenshots before final milestone sign-off.

## Deployment Compatibility

The current Vite + static HTML architecture remains suitable for a permanent browser-accessible website through GitHub Pages or another static host. A future custom domain can point to the same built site without requiring an immediate framework migration.

Deployment may change asset paths, caching, domain configuration, analytics, or contact details, but it does not invalidate the current Portfolio Core plan. The permanent public URL should be added only after deployment is verified.

## Decision Lock

The first Portfolio Core implementation will use:

- Local AI Workbench.
- Reverb Core.
- Harry Chan Personal Portfolio.

HW1, HW3, HW4, HW5, and HW6 remain part of the Practice Lab and can be promoted later when their case-study evidence becomes strong enough.

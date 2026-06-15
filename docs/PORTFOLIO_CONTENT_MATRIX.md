# Portfolio Content Matrix

## Purpose

This matrix converts the selected Portfolio Core projects into confirmed public content, missing facts, asset requirements, and implementation readiness.

Public page work should use only confirmed facts. Items marked `Needs confirmation` or `Missing asset` must not be presented as completed claims.

## Project 1 - Local AI Workbench

### Public identity

- English title: `Local AI Workbench`
- Traditional Chinese title: `本機 AI 文件知識工作台`
- Suggested status label EN: `Local demo / In development`
- Suggested status label ZH: `本機展示／持續開發中`
- Public role: flagship product case study

### Confirmed one-line value statement

- EN: `A local-first document-to-knowledge workbench for scanning, searching, reviewing, summarizing, auditing, and exporting local document knowledge artifacts.`
- ZH: `一套以本機優先為核心的文件知識工作台，用於掃描、搜尋、檢視、摘要、稽核與匯出本機文件知識成果。`

### Confirmed problem statement

- EN: `Local document workflows can blur source files, generated artifacts, automated suggestions, and write-like side effects. The project explores a safer, inspectable workflow with explicit review and export boundaries.`
- ZH: `本機文件工作流容易混淆來源文件、生成成果、自動化建議與寫入型副作用。本專案探索一種更安全、可檢視，並具有明確審查與匯出邊界的流程。`

### Confirmed stack

- FastAPI
- Python
- SQLite
- React
- TypeScript
- Vite
- Local file processing
- Automated tests

### Confirmed workflow

1. Configure one local root folder.
2. Scan supported documents into SQLite.
3. Search indexed title, path, and extracted content.
4. Review selected document content.
5. Generate a deterministic single-document summary artifact.
6. Preview Obsidian-ready Markdown.
7. Check export destination status.
8. Export Markdown after preview and destination checks.
9. Review audit context.

### Confirmed engineering decisions

- Local-first and single-user product runtime.
- No uncontrolled product-runtime writeback.
- Deterministic summary artifacts in the current baseline.
- Explicit preview, destination checks, and audit context before export.
- Separation between public product runtime and development workflow bridge utilities.
- Explicit out-of-scope documentation.

### Confirmed validation evidence

- Local setup and reviewer walkthrough.
- Automated API and bridge utility tests.
- Repository documentation reports a verified baseline of `424 passed` at the referenced milestone.
- Product boundaries and unsupported behavior are explicitly documented.

### Links

- Source: `https://github.com/HarryWhite-TW/local-ai-workbench`
- Public live demo: not available
- Local demo: available through separate FastAPI and Vite development servers
- Notes / build history: repository README, docs, issues, and project plans

### Role and responsibility

Status: `Needs confirmation before public copy`

Draft framing:

- EN: `Personal product project covering product direction, workflow design, implementation coordination, validation, documentation, and iterative review.`
- ZH: `個人產品專案，涵蓋產品方向、流程設計、實作協作、驗證、文件整理與反覆審查。`

Do not publish detailed ownership claims until Harry confirms the exact division between manually written work, AI-assisted implementation, Codex execution, and review responsibility.

### Current result

- Working localhost document-to-knowledge workbench.
- Manual local document scan and search.
- Deterministic summary review.
- Obsidian-ready Markdown preview and export.
- Destination classification and audit context.

### Honest limitations

- No public hosted product runtime.
- No external LLM call in the current product baseline.
- No OCR for scanned PDFs.
- No semantic search, embeddings, or vector database.
- No background folder sync.
- No autonomous product-runtime writeback.

### Missing assets

- `Missing asset`: clean full-workbench desktop screenshot.
- `Missing asset`: close-up of document detail and summary/audit panels.
- `Missing asset`: simplified public architecture diagram.
- `Missing asset`: optional short screen recording or GIF.

### Implementation readiness

`Content-ready, asset-incomplete`

The text case study can be drafted now. Visual implementation should use a temporary neutral project visual until screenshots are collected.

---

## Project 2 - Reverb Core

### Public identity

- English title: `Reverb Core`
- Traditional Chinese title: `Reverb 確定性輸入防護核心`
- Suggested status label EN: `Demo-ready core`
- Suggested status label ZH: `可展示核心`
- Public role: backend and quality engineering case study

### Confirmed one-line value statement

- EN: `A contract-first deterministic input guardrail layer that makes preprocessing behavior observable, traceable, and test-protected.`
- ZH: `一套以合約為核心的確定性輸入防護層，讓前處理行為可觀測、可追蹤並受到測試保護。`

### Confirmed problem statement

- EN: `AI applications and backend services receive inconsistent or invalid input. Reverb provides a deterministic preprocessing boundary with stable results, explicit errors, traceable events, and safe early returns.`
- ZH: `AI 應用與後端服務會接收到不一致或無效的輸入。Reverb 提供確定性的前處理邊界，包含穩定結果、明確錯誤、可追蹤事件與安全的提前返回。`

### Confirmed stack

- Python
- Pytest
- Streamlit as an optional demo layer
- Docker
- CLI and JSON output

### Confirmed pipeline

1. Type validation.
2. Strip leading and trailing whitespace.
3. Trim edge noise.
4. Collapse internal spaces.
5. Fallback if empty with early return.
6. Normalize symbols.
7. Return `ProcessingResult`.

### Confirmed contracts

- `ProcessingResult`
- `StepEvent`
- `ErrorItem`
- Per-call `correlation_id`

### Confirmed engineering decisions

- Fixed deterministic execution order.
- Contract-stable public output.
- Explicit error modeling.
- Step-level observability.
- Structured early termination.
- Separation between core behavior and optional UI demo.
- Thin modularization without behavior changes.

### Confirmed validation evidence

- Unit tests.
- Integration tests.
- Contract tests.
- End-to-end tests.
- Public API surface checks.
- CLI JSON parseability checks.
- Regression test protecting fallback early-return behavior.
- Docker verification against representative cases.

### Links

- Source: `https://github.com/HarryWhite-TW/reverb-core`
- Public live demo: not available
- Local UI demo: Streamlit Input Inspector
- Local CLI demo: available
- Docker demo: available
- Notes: repository README and `docs/`

### Role and responsibility

Status: `Needs confirmation before public copy`

Draft framing:

- EN: `Personal backend engineering project focused on contracts, deterministic pipelines, observability, test design, documentation, and demo preparation.`
- ZH: `個人後端工程專案，聚焦合約、確定性管線、可觀測性、測試設計、文件與展示準備。`

### Current result

- Modular, test-protected preprocessing core.
- Stable public Python entry point.
- CLI and JSON modes.
- Optional bilingual Streamlit Input Inspector.
- Docker demo path.

### Honest limitations

- Not production-ready.
- Not a completed SDK or released package.
- No model inference.
- No API integration in the current scope.
- No completed Local AI Workbench integration.

### Missing assets

- `Missing asset`: Streamlit Overview screenshot.
- `Missing asset`: Process or Technical Details screenshot.
- `Missing asset`: simplified pipeline diagram.
- `Missing asset`: formatted representative JSON result panel.

### Implementation readiness

`Content-ready, asset-incomplete`

A strong text case study can be implemented now. The pipeline can initially be represented using a CSS-based sequence instead of a custom image.

---

## Project 3 - Harry Chan Personal Portfolio

### Public identity

- English title: `Harry Chan Personal Portfolio`
- Traditional Chinese title: `Harry Chan 個人品牌作品集`
- Suggested status label EN: `In development`
- Suggested status label ZH: `持續開發中`
- Public role: web experience and product-presentation case study

### Confirmed one-line value statement

- EN: `A bilingual multi-page personal brand website for presenting selected projects, practice records, engineering notes, and professional direction.`
- ZH: `一個雙語多頁式個人品牌網站，用於呈現精選作品、實作紀錄、工程筆記與專業方向。`

### Confirmed problem statement

- EN: `The project needed to evolve from a single assignment-oriented homepage into a professional, maintainable portfolio that separates project showcases, practice records, notes, personal narrative, and contact paths.`
- ZH: `本專案需要從單一、偏作業導向的首頁，發展成專業且可維護的作品集，並清楚區分作品展示、實作紀錄、筆記、個人敘事與聯絡路徑。`

### Confirmed stack

- Vite
- Tailwind CSS
- Vanilla JavaScript
- Static HTML
- GitHub
- GitHub Pages target

### Confirmed architecture

- Home brand gateway.
- Portfolio.
- Practice Lab.
- Blog / Notes.
- About.
- Contact.
- Shared navigation and footer behavior.
- English and Traditional Chinese switching.
- Fullscreen intro shown once per session.
- Static multi-page routing.

### Confirmed engineering and product decisions

- Keep the stack lightweight instead of migrating to React or Next.js.
- Separate visitor-facing brand content from internal milestone language.
- Preserve the `homework.html` route while changing the public identity to Lab / Practice Lab.
- Prefer stable page switching over decorative cross-page effects after repeated environment-specific transition experiments.
- Use the homepage as a gateway instead of duplicating every section.
- Keep the architecture suitable for static deployment.

### Confirmed validation evidence

- Production build command.
- Desktop and mobile navigation behavior.
- Active navigation states.
- Bilingual content switching.
- Keyboard-aware intro behavior.
- Reduced-motion support.
- Iterative browser testing and user review.
- Git commit history and architecture documentation.

### Links

- Source: `https://github.com/HarryWhite-TW/portfolio-site`
- Public live URL: pending deployment
- Current demo: localhost development or production preview
- Notes: architecture and selection documents in `docs/`

### Role and responsibility

Status: `Needs final wording confirmation`

Draft framing:

- EN: `Personal portfolio project covering requirements definition, information architecture, visual direction, AI-assisted implementation coordination, browser review, QA, and Git-based delivery.`
- ZH: `個人作品集專案，涵蓋需求定義、資訊架構、視覺方向、AI 輔助實作協作、瀏覽器審查、QA 與 Git 版本交付。`

### Current result

- Working bilingual multi-page website.
- Fullscreen intro and brand gateway.
- Stable navigation and page switching.
- Professional visitor-facing copy.
- Architecture and future milestone plan.

### Honest limitations

- Portfolio case studies are not yet implemented on the public page.
- Practice Lab links remain incomplete.
- Contact email and resume are not yet public.
- Permanent public URL is pending.
- Final responsive and deployment QA remain future work.

### Missing assets

- `Missing asset`: desktop homepage screenshot.
- `Missing asset`: mobile homepage screenshot.
- `Missing asset`: before/after or architecture evolution visual.
- `Missing asset`: final deployed URL.

### Implementation readiness

`Content-ready, partially self-referential`

This case study should appear after Local AI Workbench and Reverb Core so the Portfolio page first proves external project value before discussing the website itself.

---

## First Portfolio Page Content Order

### Feature section

`Local AI Workbench`

Use the largest visual area and the most complete workflow summary.

### Supporting case study

`Reverb Core`

Use a pipeline-focused composition with contracts, validation layers, and demo modes.

### Supporting case study

`Harry Chan Personal Portfolio`

Use a product-evolution composition with architecture, bilingual behavior, and deployment direction.

## Shared public metadata

### Categories

- Local AI Workbench: `AI Application`, `Local-first`, `Full-stack`, `Workflow Safety`
- Reverb Core: `Backend`, `QA`, `Guardrails`, `Deterministic Pipeline`
- Personal Portfolio: `Web UI`, `Frontend`, `Information Architecture`, `Personal Brand`

### Link labels

- `View Source / 查看原始碼`
- `Local Demo / 本機展示`
- `Read Case Study / 閱讀案例`
- `Build Notes / 建置筆記`

Do not render a clickable Live Demo button when no public URL exists. Use a status label or non-interactive local-demo note instead.

## Blocking confirmations before final public copy

1. Confirm the exact role/responsibility wording for each project.
2. Confirm whether the `424 passed` Local AI Workbench milestone should appear publicly or remain repository-only evidence.
3. Confirm final public status labels.
4. Collect at least one visual asset per project before final sign-off.
5. Verify all repository URLs and future deployment URLs.

## Ready for M2.2C

The Portfolio page may now begin structural implementation using:

- confirmed bilingual titles;
- confirmed value statements;
- confirmed stacks and boundaries;
- real repository links;
- temporary CSS-based visuals where screenshots are still missing.

Final sign-off remains blocked on role wording, screenshots, responsive review, and build validation.

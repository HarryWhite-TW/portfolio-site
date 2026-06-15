# Site Architecture Plan

## 文件定位

本文件是 Harry Chan / HarryWhite-TW 個人品牌網站的長期規格來源，用來約束網站定位、資訊架構、公開文案、頁面責任、互動原則與後續里程碑。

目前階段不再以「把所有內容塞進首頁」或「交付單次課程作業」為設計核心，而是建立一個能長期累積作品、實作紀錄、技術思考與個人方向的專業多頁式網站。

所有後續實作、Codex 任務與畫面調整，都應先以本文件為依據；若網站方向發生變更，應先更新本文件，再進行大範圍實作。

## 品牌定位

本網站是 Harry Chan / HarryWhite-TW 的專業個人品牌網站，主要用途如下：

- Portfolio：展示代表作品、技術方向與專案成果。
- Resume extension：補充履歷無法完整呈現的工程決策、建置流程與成長脈絡。
- Project showcase：讓面試官、合作方、同業與一般訪客快速理解作品價值。
- Practice Lab：整理小型實作、課程專案、實驗與重複練習所形成的工程紀錄。
- Engineering notes：記錄 Build Logs、技術筆記、AI 工作流、反思與專案決策。
- Personal narrative：說明背景、目前方向、工作原則與未來發展。

整體感受應接近成熟的商業級科技作品集：精緻、可信、結構清楚、有辨識度、可持續擴充。

網站不應被理解為：

- 作業提交頁。
- 老師檢查專用頁。
- 單次課程成果頁。
- 只有卡片列表的模板站。
- 以「證明自己」為主要口號的履歷附屬頁。

課程與作業內容可以存在，但應被重新整理為 Practice Lab 中的實作紀錄，重點放在做了什麼、如何建置、如何驗證、學到什麼與下一步如何改進。

## 主要受眾

### 第一優先

- 面試官與招募方。
- 潛在合作方。
- 對作品、技術方向或工程流程有興趣的訪客。

### 第二優先

- 同業、同學與學習社群。
- 課程老師或需要查看特定實作紀錄的人。

第二優先受眾可以透過 Practice Lab 快速找到內容，但不得支配首頁、作品集與品牌文案。

## 品牌敘事原則

網站應以「呈現」取代「解釋自己正在呈現」。

應優先展示：

- 可見作品。
- 實際畫面。
- 技術與角色。
- 問題與解法。
- 建置與測試方式。
- 原始碼、Demo 與工程紀錄。
- 從作品延伸出的思考。

避免在訪客介面出現：

- 這一頁的架構目的。
- 目前是哪個 Milestone。
- 這只是 page shell。
- 老師需要快速檢查。
- 首頁不放完整檔案。
- 這是能力證明。
- 下一階段才會補上。
- 對開發流程有用、但對訪客沒有價值的內部說明。

Milestone、暫緩原因、架構決策與未完成項目應放在 README、Build Log 或內部規格文件，不應直接成為首頁主文案。

## 資訊架構

### Intro / Fullscreen entrance

首頁首次進入時可顯示全螢幕品牌封面，功能是建立第一印象與進站儀式感。

必要條件：

- 畫面以品牌名稱、簡短歡迎語與單一 Enter CTA 為主。
- 不承載導覽、作品卡片或長篇介紹。
- 同一瀏覽工作階段只完整播放一次。
- Enter 後在同一文件內平順揭示首頁，不重新載入頁面。
- 動畫失敗或 JavaScript 停用時，不得阻止訪客存取網站。
- 支援鍵盤操作與 `prefers-reduced-motion`。

### Home / index.html

Home 是品牌入口與導覽中心，不承載所有細節。

首頁責任：

- 快速說明 Harry 是誰、目前關注什麼、作品涵蓋哪些方向。
- 提供 Portfolio、Lab、Blog / Notes、About 的明確入口。
- 展示 2 至 3 個精選作品預覽。
- 展示少量可信訊號，例如作品數、技能方向、GitHub Pages 狀態。
- 提供少量實作與筆記預覽。
- 引導至 GitHub、Contact 與未來的 Resume。

首頁不應：

- 重複完整 Portfolio。
- 列出所有實作項目。
- 展開完整個人故事。
- 顯示開發規格、Milestone 或頁面設計說明。

### Portfolio / portfolio.html

Portfolio 是網站最核心的作品展示頁，服務求職、面試、合作評估與技術能力判讀。

建議分類：

- Featured.
- AI Application.
- Web UI / Frontend.
- QA / Testing.
- Automation / Workflow.
- Practice Projects.

每個成熟作品至少應提供：

- 專案名稱與一句價值說明。
- 專案畫面或代表性視覺。
- 問題與目標。
- Harry 的角色與責任。
- 技術棧。
- 核心流程或架構。
- 重要工程決策。
- 測試或驗證方式。
- 目前成果與限制。
- Live Demo、GitHub Source、Build Log / Notes。

作品頁應逐步採用 case-study style，而不是只增加更多同尺寸卡片。

### Practice Lab / homework.html

對外名稱固定為 `Lab` 或 `Practice Lab`，繁體中文使用「實作」或「實作紀錄」。

檔名 `homework.html` 暫時保留，以避免既有路由與連結失效；檔名不代表公開品牌定位。

Practice Lab 的功能：

- 收錄小型作品、課程專案、技術實驗與重複練習。
- 保留 HW 編號，方便追溯原始脈絡。
- 讓訪客看見動手建置、測試、整理與改進的累積。
- 作為 Portfolio 完整案例與原始練習之間的橋樑。

每個實作項目建議包含：

- Title.
- Purpose.
- Tech stack.
- Status.
- What was practiced.
- Validation / testing.
- Live Demo.
- GitHub Source.
- Build Log / Notes.

公開文案不得以「老師檢查」「提交作業」或「完成課堂要求」作為主要敘事。

### Blog / Notes / blog.html

Blog / Notes 是工程思考與寫作中心，視覺應具有 editorial 感，而不是普通卡片牆。

分類方向：

- Build Logs.
- Technical Notes.
- AI Workflow Notes.
- Reflections.
- Project Decisions.

內容應呈現：

- 改了什麼。
- 為什麼這樣做。
- 遇到什麼問題。
- 如何驗證。
- 學到什麼。
- 下一次如何做得更好。

### About / about.html

About 用來建立 Harry 的個人敘事與工程身份。

內容應包含：

- 個人背景與轉向路徑。
- AI application engineering 方向。
- 現在累積中的技能。
- 工作與學習原則。
- Project-based learning 方法。
- 從 learner 到 builder 的成長路線。
- 未來希望承擔的角色與問題類型。

About 應誠實呈現仍在累積中的能力，不誇大經歷，也不把整頁寫成自我證明或課程心得。

### Contact / contact.html

Contact 應簡潔、可信且能直接行動。

內容包含：

- GitHub.
- Email.
- Resume（準備完成後加入）。
- Portfolio URL.
- 簡短聯絡或合作 CTA。

不得保留看似可點擊、實際無作用且未標示狀態的按鈕。

## 導覽模型

Top navigation：

- Home.
- Portfolio.
- Lab.
- Blog / Notes.
- About.
- Contact.
- EN / 中文 toggle.
- GitHub.

導覽原則：

- 首頁是 gateway，不是內容總表。
- 每個頁面具有單一且清楚的主要責任。
- 目前頁面應有 active state。
- 桌面與行動版使用一致的名稱。
- 中英文切換後，導覽、標題、說明與 CTA 都應完整切換。
- 站內連結不得因 placeholder 而導向錯誤頁面。

## 視覺方向

整體風格：premium dark technology portfolio。

視覺原則：

- 專業、成熟、有辨識度。
- 保留深藍、青色與紫色的品牌色系。
- 不過度 childish、game-like 或 cyberpunk。
- 不讓玻璃卡片成為所有頁面的唯一設計語言。
- 使用大型排版、專案視覺、留白、層次背景與清楚對比。
- 背景需要深度，但不能干擾閱讀。
- 各 section 應有不同構圖與節奏。
- 專案區逐步靠近商業 case study。
- 文字可讀性與內容層級高於純效果。
- 中英文版面都必須穩定，避免中文大標題造成裁切或溢位。

AI Mission Control 可保留為品牌語彙之一，例如 intro、hero、訊號、軌道或局部介面元素；不得支配所有頁面與每張卡片。

## 互動與動效方向

動效目標是提高品牌質感、資訊理解與操作回饋，而不是單純炫技。

保留或發展：

- Fullscreen intro reveal.
- Enter-to-home transition.
- Auto-hide header.
- Scroll reveal.
- 清楚但克制的 hover / focus feedback.
- 專案視覺的輕量 parallax 或 depth response.
- 輕量 page transition.
- Section 之間的連續動態語言。

原則：

- 動畫短、平順且可中斷。
- 不延遲主要內容使用。
- 不造成 layout shift。
- 不導入 heavy animation library，除非原生方案已明確不足。
- 支援 `prefers-reduced-motion`。
- 行動裝置自動降低效果強度。
- 動效失效時，內容與導覽仍完整可用。

## 技術方向

目前技術棧維持：

- Vite.
- Tailwind CSS.
- Vanilla JavaScript.
- Static HTML.
- GitHub Pages.
- No backend.
- No database.
- No paid service requirement.
- No React / Next.js migration for now.

目前瓶頸是內容、case study、design system 與 motion system，不是 framework capability。除非未來出現明確的狀態管理、內容管理或大型元件需求，否則不因追求畫面效果而更換框架。

## 公開文案規則

### 應使用

- 作品、實作、實驗、工程紀錄、建置、測試、發布、迭代、思考。
- 清楚描述目前狀態，例如 prototype、in progress、published。
- 對訪客有直接價值的短句。
- 誠實且具體的技術與成果敘述。

### 避免使用

- 老師檢查。
- 作業提交。
- 課堂要求（除非是實作內容的必要背景）。
- 作品證明、能力證明作為主標題。
- page shell、architecture placeholder、future filters。
- M2.x、下一個 milestone 等內部流程語言。
- 「這一頁不放完整內容」等頁面自我解釋。

## 實作里程碑

### 已完成：M2.0 - Architecture Setup

- 建立多頁式靜態架構。
- 建立 shared navigation 與 page shell。
- 建立 Home、Portfolio、Lab、Blog、About、Contact 路由。

### 已完成：M2.1 - Home Redesign

- 將首頁轉為品牌 gateway。
- 縮短首頁並建立明確分流。
- 保留精選作品、實作與筆記預覽。

### 已完成：M2.1.1 - Fullscreen Intro

- 建立首次進站全螢幕歡迎封面。
- 使用 sessionStorage 控制每個工作階段的顯示。
- 保留鍵盤操作與 reduced-motion 支援。

### 已完成：M2.1.2 - Brand Copy Cleanup

- 將公開文案改為個人品牌、作品、實作與工程紀錄導向。
- 對外導覽由 Homework 改為 Lab。
- 移除學生提交、老師檢查、頁面規格與 Milestone 類訪客文案。

### M2.1R - Documentation Alignment

- 將規格書與目前品牌方向同步。
- 將 Homework Hub 正式調整為 Practice Lab。
- 更新主要受眾、公開文案規則與驗收標準。
- 確認 README 與實際頁面名稱一致。

### M2.1T - Intro Transition Polish

- 強化 Enter 後的首頁揭示動畫。
- 建立封面與首頁之間連續的 motion language。
- 避免直接切換造成敷衍感。
- 驗證鍵盤、reduced-motion 與行動版行為。

### M2.2 - Portfolio Core

- 選定 2 至 3 個代表作品。
- 建立真實專案截圖與 case-study 結構。
- 加入分類、狀態與有效連結。
- 優先完成內容，不先追求大量篩選功能。

### M2.3 - Practice Lab

- 整理現有 HW 與實作紀錄。
- 串接 Demo、Source、README 與 Build Log。
- 加入練習目標、驗證方式與學習結果。

### M2.4 - Blog / About / Contact Content

- 補足個人敘事、技術筆記與聯絡路徑。
- 建立真實文章或可閱讀的 Build Logs。
- 移除無作用的 placeholder CTA。

### M2.5 - Visual and Motion Polish

- 統一 design tokens 與 motion tokens。
- 改善頁面轉場、響應式版面與專案視覺。
- 減少重複卡片節奏。
- 完成 desktop、tablet、mobile 的精修。

### M2.6 - Deployment and QA

- Production build.
- GitHub Pages deployment.
- Link validation.
- Language toggle validation.
- Intro and transition validation.
- Keyboard and reduced-motion validation.
- Mobile / tablet / desktop QA.

## 驗收標準

### 品牌與內容

- 訪客能在 10 秒內理解 Harry 的方向與網站用途。
- 首頁不再像作業總表或規格說明頁。
- Portfolio 能快速呈現代表作品與工程價值。
- Practice Lab 能追溯實作脈絡，但不支配品牌身份。
- Blog、About、Contact 各自具有清楚責任。
- 公開頁面不出現 Milestone、老師檢查、作業提交或 page shell 類語言。

### 操作與視覺

- Intro 不阻礙網站存取。
- 中英文內容完整切換且版面穩定。
- 導覽在 desktop、tablet、mobile 均可操作。
- 動效平順、不造成閱讀干擾或 layout shift。
- `prefers-reduced-motion` 有效。
- 所有可點擊項目具有明確狀態。

### 工程品質

- `npm run build` 通過。
- ready content 沒有 broken links。
- placeholder 必須清楚標示或改為不可操作狀態。
- Git working tree 在每個保存節點後保持 clean。
- 每個里程碑有清楚 commit 與 README / Build Log 記錄。

## 風險與控制

### 風險：持續追求動畫，卻缺少真實作品內容

控制方式：M2.2 優先完成 2 至 3 個真實案例，再擴充全站視覺效果。

### 風險：網站重新變成課程作業中心

控制方式：Practice Lab 保留課程脈絡，但首頁與 Portfolio 始終以作品、方向與工程實作為主。

### 風險：過度依賴大型標題與卡片

控制方式：增加專案畫面、case-study 段落、editorial layout 與不同 section 構圖。

### 風險：動畫降低效能或可用性

控制方式：原生 CSS / JavaScript 優先、效果分級、行動版降載、reduced-motion、無動畫 fallback。

### 風險：規格、README 與畫面再次分離

控制方式：方向變更先更新本文件；每個里程碑完成時同步檢查公開文案與 README。

## 立即下一步

完成 M2.1R 後，下一個實作節點為 M2.1T：只處理歡迎封面進入首頁的轉場品質，不同時重做首頁內容或其他頁面。

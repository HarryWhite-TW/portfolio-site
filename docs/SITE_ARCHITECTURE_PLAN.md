# Site Architecture Plan

## 文件定位

本文件是 Harry Chan / HarryWhite-TW 個人網站下一階段改版的規劃來源。這一階段的重點不是繼續微調單頁視覺，而是建立清楚的資訊架構、頁面分工與後續實作里程碑。

本網站未來應定位為專業個人品牌 / Portfolio / Resume-style website，而不是只服務單次作業展示的一頁式 homework landing page。

## 網站定位

這個網站是 Harry Chan / HarryWhite-TW 的個人品牌網站。

網站應同時扮演以下角色：

- Portfolio：展示代表作品、專案能力與實作成果。
- Resume extension：補充履歷中無法完整呈現的學習脈絡、技術選擇與專案細節。
- Project showcase：以可被面試官、合作方或老師快速理解的方式呈現作品。
- Homework hub：集中整理課堂作業，方便老師檢查與瀏覽。
- Learning record：紀錄學習過程、建置紀錄、技術筆記與階段性反思。

整體感受應該更接近商業級的專業作品集網站：精緻、可信、結構清楚、有延展性，而不是只是一個很長的單頁式展示頁。

## 目前問題診斷

目前首頁的視覺品質已經明顯改善，但整體仍然太偏向 one-page landing page。

主要問題如下：

- 太多內容被放在同一個 landing page 中，造成資訊密度過高。
- 目前結構缺少清楚的頁面層級，使用者不容易判斷哪些內容是作品集、哪些是作業、哪些是個人介紹。
- UI 已經改善，但尚未完全符合專業個人品牌網站的目標。
- 繼續只針對首頁做視覺微調，效益會逐漸遞減。
- 下一步應優先處理 information architecture 與 multi-page structure，而不是繼續堆疊首頁區塊。

## 目標資訊架構

### Home / index.html

Home 是品牌入口與第一印象頁，不應承載所有內容。它的功能是讓使用者快速理解 Harry 是誰、擅長什麼、有哪些代表作品，並引導使用者前往更明確的子頁面。

Home 應包含：

- 個人定位 hero。
- 2 至 3 個 featured projects。
- skill / proof strip。
- homework gateway。
- latest notes preview。
- CTA to GitHub / Contact / Resume。

### Portfolio / portfolio.html

Portfolio 是主要作品展示頁，目標是服務求職、面試、合作評估與專案能力判讀。

分類建議：

- Featured
- AI Application
- Web UI / Frontend
- Homework Projects
- QA / Testing
- Automation / Workflow

內容應包含：

- featured case studies。
- 可篩選的 project cards。
- project status。
- demo links。
- GitHub source links。
- notes / build logs。

### Homework / homework.html

Homework 是集中式作業頁，目標是滿足老師能快速檢查作業的需求。這一頁應比 Portfolio 更偏向索引與檢核，而不是品牌敘事。

內容應包含：

- homework index。
- HW1、HW2、HW3、HW4、HW5 與未來新增項目。
- 每張 homework card 包含 title、purpose、tech stack、status、live demo、GitHub source、notes。
- 後續每個 homework 可連到自己的 detail page 或 project page。

### Blog / Notes / blog.html

Blog / Notes 是學習紀錄與寫作中心，應該比普通卡片牆更具 editorial 感。

分類建議：

- Build Logs
- Technical Notes
- AI Workflow Notes
- Reflections
- Project Decisions

這一頁的重點是呈現思考、學習軌跡與技術決策，而不只是列出文章卡片。

### About / about.html

About 用來說明 Harry 的背景、轉向路徑、學習方向與工程身份。

內容應包含：

- personal background。
- AI application engineering direction。
- current learning path。
- skills in progress。
- project philosophy。
- roadmap from learner to builder。

### Contact / contact.html

Contact 是簡潔、專業的聯絡頁，避免過度複雜。

內容應包含：

- GitHub。
- Email placeholder。
- Resume placeholder。
- portfolio link。
- 簡短 collaboration / contact CTA。

## 導覽模型

Top navigation 應包含：

- Home
- Portfolio
- Homework
- Blog
- About
- Contact
- EN / 中文 toggle
- GitHub link

導覽原則：

- Home 不應包含所有內容，而是作為 gateway。
- 每個頁面都應有明確目的與使用情境。
- Homework 必須讓老師容易檢查。
- Portfolio 必須讓面試官、專案評估者或合作方快速理解能力與成果。
- Blog / Notes 補充學習紀錄與技術思考。
- About 建立個人敘事與工程身份。
- Contact 提供明確的下一步行動。

## 視覺方向

整體視覺應朝 premium dark technology portfolio 發展。

方向描述：

- 專業、成熟，不 childish。
- 不過度 game-like。
- 不只依賴 cyber glass cards。
- 需要更強的 commercial landing page quality。
- 建立更清楚的視覺層級。
- 使用大型 hero visual。
- 增加有深度但不干擾閱讀的背景層次。
- 動效要 refined，而不是炫技。
- 各 section 需要有變化，避免長頁面重複卡片節奏。
- 專案呈現應逐步靠近 case-study style。
- Typography 需乾淨、穩定、可讀。
- 不同頁面與區塊之間要有更好的對比。

目前的 AI Mission Control identity 可以保留為網站的視覺語言之一，但不應支配每個 section 或每個頁面。它可以作為品牌氛圍、hero 或某些互動元素的語彙，而不是所有內容的唯一樣式。

## 互動方向

互動設計應以可讀性與可用性為優先，再加入精緻動效。

原則：

- auto-hide header 可以保留。
- scroll reveal 可以保留。
- hover feedback 應清楚但不干擾。
- card interactions 應有 premium 感，而不是過度跳動。
- page transitions 應輕量。
- 暫時不導入 heavy animation libraries。
- 必須尊重 `prefers-reduced-motion`。
- 不以純效果犧牲 usability、readability 或 mobile 操作體驗。

## 技術方向

保留目前技術棧：

- Vite
- Tailwind CSS
- Vanilla JavaScript
- GitHub Pages
- Static site
- No backend
- No database
- No paid services
- No React / Next.js for now

原因：

目前瓶頸是 information architecture 與 design system，而不是 framework capability。現有技術棧足以支撐下一階段的多頁靜態網站、導覽、作品資料整理與視覺系統擴展。此階段不應因框架遷移而分散焦點。

## 實作里程碑

### M2.0 - Architecture Setup

- 建立 page files。
- 建立 shared nav/footer behavior。
- 統一 page shell consistency。
- 透過 static links 建立頁面路由。

### M2.1 - Home Redesign

- 縮短 homepage。
- 將首頁轉成 brand gateway。
- 只保留代表性內容。

### M2.2 - Portfolio Page

- 建立 project showcase。
- 加入 categories 與 filters。
- 強化 featured case studies。

### M2.3 - Homework Hub

- 建立集中式 homework page。
- 串接每個 homework 的 demo/source/notes。
- 讓老師能快速檢查 HW1 至 HW5 與未來作業。

### M2.4 - Blog/About/Contact

- 建立支援個人品牌的輔助頁面。
- 加入 learning notes。
- 補足 personal narrative 與 contact path。

### M2.5 - Visual Polish

- 精修 design system。
- 改善 animations。
- 改善 responsive layout。
- 改善 screenshots 與 project cards。

### M2.6 - Deployment / QA

- build。
- preview。
- GitHub Pages check。
- link validation。
- mobile / tablet / desktop QA。

## 驗收標準

- 使用者能在 10 秒內理解 Harry 是誰與網站用途。
- 老師能快速找到 homework。
- 專案評估者能快速找到 portfolio。
- 網站不再像一個很長的 homework page。
- 每個主要頁面都有清楚目的。
- 視覺風格專業、現代、成熟。
- mobile / tablet / desktop 版面皆可讀。
- build passes。
- ready content 沒有 broken links。
- placeholders 必須清楚標示，避免讓網站看起來像未完成或壞掉。

## 風險

- 過度 polish homepage，導致架構延後。
- Codex 或後續實作者在沒有架構共識時直接做 layout changes。
- 太多 visual effects 造成互動不穩或效能問題。
- single-page design 再次變得混亂。
- placeholders 太多，讓網站顯得未完成。
- Chinese / English content duplication 帶來維護複雜度。
- GitHub Pages path issues 導致部署後連結或資源錯誤。

## 下一步

本文件完成、commit 並 push 後，下一個實作任務應是 M2.0 - Architecture Setup。

M2.0 應建立 static page files 與 shared navigation，但不應試圖一次完整設計所有頁面。下一階段的重點是先讓網站具備正確的多頁骨架、清楚導覽與一致的 page shell，後續再逐步完成每個頁面的內容與視覺細節。

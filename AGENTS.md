# AGENTS.md

給 AI coding agent 的專案指南。所有指令與慣例以本檔為準。

## 專案概述

**Learn English With Chinese (zh-en)** — Vue 3 網頁應用，讓中文母語者自主學習英文。內容包含字卡、遊戲、故事、句型、單字練習、看圖學習、兒歌與繪圖活動。

介面文案、資料內容與程式註解一律使用**繁體中文**；英文只出現在被學習的教材本體。

## 技術棧

| 項目     | 內容                                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| 框架     | Vue 3.5（`<script setup>` 與 Options API 混用，沿用該檔既有寫法）                                             |
| UI       | Quasar 2.24.0（`@quasar/app-vite` 2.6.2，Vite）                                                               |
| 語言     | TypeScript ~6.0，`build.typescript.strict: true`                                                              |
| 路由     | Vue Router 5，`vueRouterMode: 'history'`                                                                      |
| 狀態     | Pinia 4（實務上幾乎未用，見下方「狀態」）                                                                     |
| 樣式     | SCSS（`src/css/app.scss`、`quasar.variables.scss`）                                                           |
| AI / API | `openai` 7（瀏覽器端）、`@huggingface/transformers` 4                                                         |
| 其他     | axios、pica（縮圖）、heic2any（HEIC 轉檔）、vue-gtag                                                          |
| 套件管理 | Yarn 4.9.1（`packageManager` 已鎖定），Node 22.22.3（`.nvmrc` / `.node-version`，`engines: node >= 22.22.0`） |

## 常用指令

```bash
yarn install --immutable   # 安裝依賴，且保證不改動 yarn.lock（postinstall 會跑 quasar prepare）
yarn dev          # 開發伺服器，熱重載，自動開瀏覽器
yarn build        # 生產建置 → dist/spa
yarn lint         # ESLint（eslint.config.js，flat config）
yarn format       # Prettier --write 全庫
yarn test         # 目前是 no-op（echo "No test specified"）
```

**驗證改動：`yarn lint`，再 `yarn build`。**

`quasar.config.ts` 的 `build.vitePlugins` 掛了 `vite-plugin-checker`（`vueTsc: true` + `eslint`），它在 **`dev` 與 `build` 都會執行**，但兩者處置不同：

- `quasar dev` — **回報但不中斷**。終端機印 `ERROR(vue-tsc) Type 'string' is not assignable to type 'number'.` 並標出檔案與行號，index.html 也會被注入 `checker-runtime`（瀏覽器 overlay），但 dev server 繼續服務（實測仍回 HTTP 200）。所以 dev 下的型別錯誤很容易被忽略。
- `quasar build` — **直接失敗**。`enableBuild` 預設 `true`，實測帶一個型別錯誤時 build 以 **exit 2** 中止並印出同一個 TS2322。

驗證方式（可自行重跑）：在 `src/` 放一個 `export const probe: number = 'this is not a number'`，`quasar build` 會失敗、`quasar dev` 會回報但活著。

需要單獨、快速地做型別檢查而不打包時：

```bash
node ./node_modules/vue-tsc/bin/vue-tsc.js --noEmit -p tsconfig.json
```

（`tsconfig.json` 只是 `extends ./.quasar/tsconfig.json`，所以要先 `yarn install` 或 `quasar prepare` 產生 `.quasar/`。）

注意 `vitePlugins` 那筆設定的第三個元素 `{ server: false }` **不是** dev/build 開關 —— 它在 `@quasar/app-vite` 的 `parseVitePlugins`（`lib/config-tools.js`）裡只決定插件要不要進 SSR server bundle（`compileId === 'vite-ssr-server'` 才會依 `runOpts.server` 略過）。本專案是 SPA，沒有 server bundle，所以插件照跑。

`yarn format` 會改寫整個 repo。只想整理自己改的檔案時，跑 `yarn prettier --write <檔案>`，不要用全庫 format 產生無關 diff。

## 專案結構（實際狀況）

```
src/
  pages/            # 51 個頁面，每個學習模式一頁；含 Flashcards/ 與 Structures/ 子目錄
  layouts/
    MainLayout.vue  # 唯一 layout，所有路由都掛在它底下
  components/
    FlashCard.vue   # 主要共用元件
    models.ts
  router/
    routes.ts       # 328 行路由表，逐頁手動註冊
    index.ts
  data/
    features.ts     # 首頁功能清單／搜尋索引（Feature[]）
    wordPairs.ts    # 跳跳人遊戲字組，含 getCustomWordPairs()
    changelogs.ts   # ChangeLogsPage 資料來源
    words/          # 23 個主題字庫（animals, body, emotions, math, …），由 index.ts 匯出
  services/
    openai.ts       # OpenAI client 唯一入口
  utils/
    speechVoice.ts       # 語音朗讀與語速偏好
    sentenceStructure.ts
  composables/
    useSpeechAvailability.ts
  boot/
    speech-voice.js  # Quasar boot（順序：speech-voice → gtag）
    gtag.js
  stores/            # Quasar/Pinia 樣板（index.ts、example-store.ts 的 useCounterStore），
                     # 全 src/ 沒有任何 import，見「狀態」
  css/, types/, assets/
public/
  images/            # 主題圖庫：emotions（50 張 .webp）、body、env1_at_home、
                     # env2_playing_basketball、env3_at_restaurant、letters、number、phrasal-verbs
  _redirects         # 讓 Cloudflare Pages 支援 history mode 直接載入子路徑
src-pwa/             # PWA 樣板（manifest、custom-service-worker）
```

## 關鍵慣例

### 新增一個學習模式（三處都要改，缺一頁面就找不到）

1. 建立 `src/pages/XxxPage.vue`（字卡類放 `src/pages/Flashcards/`，句型類放 `src/pages/Structures/`）。**一律放 `src/pages/`，不要放 `src/views/`** — 後者是未接線的殘留目錄。
2. 在 `src/router/routes.ts` 加一筆路由，沿用既有形狀：
   ```ts
   {
     path: '/xxx',
     component: () => import('layouts/MainLayout.vue'),
     children: [
       { path: '', component: () => import('pages/XxxPage.vue'), meta: { title: '中文標題' } },
     ],
   },
   ```
3. 在 `src/data/features.ts` 的 `features` 陣列加入項目（`id`、`title`、`description`、`keywords`、`route`、`icon`、`category`，可選 `featured`）。首頁列表與搜尋都靠這份資料。

### 資料

- 字庫放 `src/data/words/*.ts`，並在同目錄 `index.ts` 匯出；型別定義在 `words/types.ts`。
- `src/assets/` 放教材素材（`Conversations/*.txt` + `.jpg`、`Vocabulary/*.jpg`、`learnfromimage/`），是打包進 bundle 的資源。
- `public/images/` 放走 URL 直接引用的靜態圖，新圖優先 `.webp`。

### 狀態

實務上**用 `localStorage`，不是 Pinia**。`src/stores/` 只有未改動的 Quasar 樣板（`index.ts` 建立 pinia 實例、`example-store.ts` 匯出 `useCounterStore`），整個 `src/` 沒有一處 import 它，也沒有任何自訂 store。除非使用者明確要求引入 Pinia，維持現狀。

已在用的 `localStorage` key（新增前先確認是否可重用）：

- `customCards` — 使用者自建字卡（`CustomCardsPage`、`GalleryPage`、`WhatIsThisPage`、`FavoritePage`、`wordPairs.ts`）
- `en_love_arr` — 收藏字卡（`FlashCard.vue`、`FavoritePage`）
- `game1Level` ~ `game4Level`、`letterGameLevel`、`lowerCaseGameLevel`、`drawGuessLevel` — 各遊戲關卡進度
- `LuckySlotPage` 的每日統計 / 任務紀錄 / 點數
- 語速偏好由 `src/utils/speechVoice.ts` 管理

讀寫時務必 `try/catch` 且做 `typeof localStorage === 'undefined'` 防護（SSR 與隱私模式），照現有程式的寫法。

### 語音

朗讀一律經 `src/utils/speechVoice.ts` / `composables/useSpeechAvailability.ts` / `boot/speech-voice.js`，不要在頁面裡各自 `new SpeechSynthesisUtterance`。

### Quasar

- 可用的 Quasar plugin 只有 `Notify` 與 `Dialog`（`quasar.config.ts` → `framework.plugins`）。要用其他 plugin 必須先在此註冊。
- 圖示集：`material-icons`；字型：`roboto-font`。
- 建置目標：`es2022` / firefox115 / chrome115 / **safari14**，避免使用更新的語法或 API。

## 環境變數

- `VITE_OPENAI_API_KEY` — `src/services/openai.ts` 使用，且帶 `dangerouslyAllowBrowser: true`，金鑰會暴露在前端 bundle。**不要把正式金鑰寫進 repo，也不要新增其他前端機密。**
- 本機有 `.env`（已被 `.gitignore` 排除），`quasar dev` / `build` 啟動時會印 `App • Using .env files: .env`。新增變數請同時更新 `.env` 與此處說明，並確認它有 `VITE_` 前綴才會被注入前端。

## 部署

Cloudflare Pages 自動部署：

- Build command `yarn build`，輸出目錄 `dist/spa`（同時宣告於 `wrangler.toml`）
- `public/_redirects` 維持 history mode 直連可用
- Dependabot 設定於 `.github/dependabot.yml`（npm，每週，prod/dev 分組）

## 測試與驗證

沒有測試框架，`yarn test` 是 no-op。**不要為了驗證而引入測試框架**，除非使用者明確要求。

改動後的驗證順序：

1. `yarn lint`
2. `yarn build` — 會透過 `vite-plugin-checker` 跑 `vue-tsc` + ESLint，型別錯誤會讓 build 以非 0 離開
3. 需要看行為時 `yarn dev` 並實際操作受影響的頁面。**注意 dev 只回報型別錯誤、不會停下伺服器**，改完務必看終端機有沒有 `ERROR(vue-tsc)`

只想快速看型別而不打包：`node ./node_modules/vue-tsc/bin/vue-tsc.js --noEmit -p tsconfig.json`。

執行環境提醒：`@quasar/app-vite` 要求 Node >= 22.22.0，而 shell 裡的 `yarn` 可能綁到較舊的 Node（實測會以 `INCOMPATIBLE NODE VERSION ... You are running Node v20.18.0` 中止）。先確認 `node -v` 為 22.22.3，或直接用 Node 22 呼叫 `node ./node_modules/@quasar/app-vite/bin/quasar.js dev|build`。

## 陷阱

- `src/pages/` 裡有多個歷史備份檔：`Game4Page_Backup20250111.vue`、`PlaybackPage_Backup20250131-2.vue`、`PlaybackPage＿Backup20250131.vue`（**全形底線**）、`PlaybackPage_Backup20250202WorkerAIOKVersion.vue`。做全域取代時**不要順手改到備份檔**，也不要拿它們當範本。
- `StoryPage_backend.vue` 不是備份檔，而是由 `/story_backend` 路由的上線頁面；`_backend` 後綴表示它會呼叫後端，應像其他上線頁面一樣維護。
- `src/views/` 是**孤立的死碼目錄**，不屬於現行結構。裡面只有 `Classics/ThreeCharacterPage.vue` 與 `Classics/CustomPage.vue`，而 `routes.ts` 沒有任何 `views/` 引用、`data/features.ts` 沒有對應項目、`src/` 與 `quasar.config.ts` 全庫零 import。**新頁面一律建在 `src/pages/`**；放進 `src/views/` 的檔案永遠不會被路由到。
- `src-pwa/` 存在，但 `quasar.config.ts` 沒有啟用 PWA mode（`ssr.pwa: false`，無 `pwa` 區塊），`quasar build` 產出的是 SPA。修 PWA 行為前先確認是否真的有掛上 service worker。
- **開工前先 `yarn install --immutable`。** `node_modules` 有可能與 `yarn.lock` 不同步（曾實測到樹上是 `vite-plugin-checker@0.14.3` + `quasar@2.20.0`，而 lockfile 鎖的是 `0.14.5` + `2.24.0`）。不同步時 `vite-plugin-checker` 會載入失敗，Quasar 只印一行 `⚠️ quasar.config file > invalid Vite plugin specified (cannot find it): vite-plugin-checker` 就**跳過整個型別檢查**，於是帶著型別錯誤的 build 也會 `Build succeeded`。看到那行 warning 就代表你的樹是壞的，先重裝，不要據此推論專案行為。
- `src/stores/` 只是 Quasar 樣板（`useCounterStore` 零引用），不要以為它是現行狀態來源，也不要在裡面「補上」store 來當作修 bug 的手段。
- `public/images/` 下有中文命名的舊目錄（`大寫letters檔案名稱`、`大寫lettets會動檔案乍看會動實際還不對`），是既有殘留，不要引用。

# Learn_English_With_Chinese (zh-en)

自主學習英文，用中文學習英文
Learn English With Chinese

## 輕量版（`lite-app` 分支）

因自主學習促進會網站維運經費不足，本專案改為輕量版。
此分支移除「英文睡前故事」、「今日回顧」及「手寫辨識」：

- 刪除 `StoryPage_backend.vue`、`/story_backend` 路由及首頁／搜尋／側欄入口；舊網址顯示既有的 404 頁面。
- 刪除今日回顧的 `PlaybackPage.vue`、`/playback` 路由，以及手寫辨識的 `HandWrittenPage.vue`、`/hand-written` 路由；首頁／搜尋／側欄不再提供入口，舊網址顯示 404。
- 刪除無引用的故事專用 `src/services/openai.ts` 與 `openai` 套件，不再使用 `VITE_OPENAI_API_KEY`。
- 歷史更新紀錄保留文字，但移除失效的故事連結。
- 保留自訂字卡翻譯、開口說與拍照分析，未調整這些功能的 API 行為。

### 保留的 AI 功能與成本盤點

以下依前端流程盤點；後端模型、供應商、價格與實際日配額未包含在此 repo，無法據此計算費用。
各 API 皆呼叫既有的 Cloudflare Workers 後端，與已移除的前端 OpenAI SDK 無關。

| 功能         | 路由                          | API 與成本來源                                                                                                               |
| ------------ | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 自訂字卡翻譯 | `/custom_cards`               | `/translate-en-to-zh`、`/translate-zh-to-en`；每次點擊翻譯送出一個文字請求，前端未限制字數。                                 |
| 開口說       | `/favorites`、`/fav/speakout` | `/convert-speech-to-text`；錄音 5 秒後自動停止並上傳辨識。                                                                   |
| 拍照分析     | `/what_is_this`               | `/detect-image-zh`；選檔／拍照後上傳圖片並取得中英文描述，並非生成圖片。超過 1.5 MiB 時最多壓縮 5 次，但未保證最終低於門檻。 |

盤點依據：`src/pages/CustomCardsPage.vue`、`FavoritePage.vue`、
`WhatIsThisPage.vue`。前端共用的 `src/utils/aiError.ts`
會通知 HTTP 429 與重試時間，但不代表已知後端配額或由前端強制限流。

其他標示或資源：

- 繪圖猜字目前以隨機分數模擬評分，沒有 AI 推論或畫布上傳。
- 一般字卡朗讀使用 `src/utils/speechVoice.ts` 的瀏覽器／系統語音，沒有呼叫本專案的付費 TTS API，但不保證系統語音一定離線。
- `@huggingface/transformers` 套件保留；目前 `src/` 沒有接線的匯入或本機模型推論。

此變更僅移除本分支的前端入口與呼叫端，**未停用遠端 `/StoryGeneration`、`/emotions`、`/playback/image` 或 `/detect-letter` 服務，也不會影響舊部署或其他用戶端對後端的呼叫**。

## Install the dependencies

```bash
yarn install --immutable
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
yarn dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
yarn build
```

### Cloudflare Pages 部署

- Node.js：使用根目錄 `.nvmrc`／`.node-version` 指定的 `22.22.3`。
- 若 Cloudflare 後台已設定 `NODE_VERSION`，正式環境與預覽環境都應改成
  `22.22.3`，不要沿用舊文件的 `20`；`@quasar/app-vite` 3.3.0 不支援 Node 20。
- 套件管理：使用 `package.json` 鎖定的 Yarn `4.9.1`，安裝指令為
  `yarn install --immutable`。
- 建置指令：`yarn build`。
- 輸出目錄：`dist/spa`，同時宣告於 `wrangler.toml`。
- `public/_redirects` 保留 Vue Router history 模式的子路徑直連；
  `dist/` 不提交，由 Cloudflare 每次從原始碼建置。
- 本機驗證順序：`yarn install --immutable` → `yarn lint` → `yarn build`。

#### PR #184：Quasar CLI 3 升級相容性修復

此 PR 將 `@quasar/app-vite` 從 2.x 升到 3.3.0，除了安全修補，也包含需要遷移的介面：

- 設定、路由、Pinia 入口與啟動模組改用 `#q-app` 的 `define*` 匯出；
  原有資料狀態管理方式不變。
- 模組匯入改用 `@/` 路徑別名，路由常數改用
  `import.meta.env.QUASAR_*`。
- 明確設定 `build.vueOptionsAPI: true`，保留既有 Options API 頁面的正式版行為。
- 設定 `build.env.clientPrefix: 'VITE_'`，保留既有環境變數名稱。
  `VITE_` 變數會公開於前端，不能放入正式機密。

參考：[Quasar 官方升級指南](https://quasar.dev/quasar-cli-vite/upgrade-guide/)、
[Cloudflare 建置環境與版本設定](https://developers.cloudflare.com/pages/configuration/build-image/)。

### Dependabot

Dependabot is configured in `.github/dependabot.yml` to check npm dependencies
weekly and group production and development dependency updates.

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

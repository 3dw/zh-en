# Learn_English_With_Chinese (zh-en)

自主學習英文，用中文學習英文
Learn English With Chinese

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

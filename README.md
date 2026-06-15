# Learn_English_With_Chinese (zh-en)

自主學習英文，用中文學習英文
Learn English With Chinese

## Install the dependencies

```bash
yarn install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
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

### Cloudflare Pages deployment

This project is ready for automatic deployment on Cloudflare Pages.

- Build command: `yarn build`
- Build output directory: `dist/spa`
- Environment variable: `NODE_VERSION=20`
- Package manager: Yarn 4, as declared in `package.json`

The Cloudflare Pages output directory is also declared in `wrangler.toml`. The
`public/_redirects` file keeps Vue Router history mode working on direct page
loads. The generated `dist/` directory is ignored because Cloudflare builds it
from source on each deployment.

### Dependabot

Dependabot is configured in `.github/dependabot.yml` to check npm dependencies
weekly and group production and development dependency updates.

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

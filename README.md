# @dephub/json-layer 🧩

> Build, validate, transform, and watch JSON content layers using `@dephub/layer` with a ready-to-use CLI and programmatic APIs.

[![NPM version](https://img.shields.io/npm/v/@dephub/json-layer.svg?style=flat)](https://npmjs.org/package/@dephub/json-layer)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

## Features ✨

- 🏗️ **JSON builder** — Reads, parses (`JSON.parse`), and outputs `.json` files from matched `**/*.json` sources.
- 🛡️ **Schema validation** — Optional per-group validation using `@dephub/schema`.
- 🔁 **Transformers** — Typed per-group data transformations after validation.
- ⚡ **Incremental builds** — Skips unchanged files using modification time (`mtime`) and config caching.
- 👀 **Watch mode & CLI** — Includes `json-layer build` (with `-w` watch mode) and composable exports.

---

## Installation 📦

- npm: `npm install @dephub/json-layer`
- pnpm: `pnpm add @dephub/json-layer`
- yarn: `yarn add @dephub/json-layer`
- bun: `bun add @dephub/json-layer`

---

## Usage 🎯

### CLI 💻

```sh
# Build from the default config (json-layer.config.ts) and content directory
json-layer build

# Build a specific content directory
json-layer build ./content

# Filter by document type, custom output dir, exclude folders
json-layer build -d Service -o ./dist/services -e drafts temp

# Watch for changes
json-layer build -w

# Use a custom config file
json-layer build -c ./config/json-layer.config.ts

# Silent mode (errors still shown)
json-layer build -s
```

### API 🧩

`json-layer.config.ts`:

```ts
import { defineConfig } from '@dephub/json-layer';

export default defineConfig({
  contentDir: './content/services',
  outDir: './dist/services',
  exclude: ['_drafts'],
});
```

`builder.ts`:

```ts
import { builder } from '@dephub/json-layer';
import { s } from '@dephub/schema';

await builder({
  contentDir: './content/services',
  docType: 'Service',
  exclude: ['temp'],
  outDir: './dist/services',
  schemas: {
    'tech-support': s.object({
      name: s.string(),
      pages: s.number(),
    }),
    'web-development': s.object({
      title: s.string(),
    }),
  },
  transformers: {
    'tech-support': (data) =>
      // `data` is fully typed as `{ name: string, pages: number }`
      ({ ...data, processed: true }),
    'web-development': (data) =>
      // `data` is fully typed as `{ title: string }`
      ({ ...data, processed: true }),
  },
});
```

`watcher.ts`:

```ts
import { watcher } from '@dephub/json-layer';
import { s } from '@dephub/schema';

await watcher({
  contentDir: './content/services',
  docType: 'Service',
  exclude: ['temp'],
  outDir: './dist/services',
  schemas: {
    'tech-support': s.object({
      name: s.string(),
      pages: s.number(),
    }),
    'web-development': s.object({
      title: s.string(),
    }),
  },
  transformers: {
    'tech-support': (data) =>
      // `data` is fully typed as `{ name: string, pages: number }`
      ({ ...data, processed: true }),
    'web-development': (data) =>
      // `data` is fully typed as `{ title: string }`
      ({ ...data, processed: true }),
  },
});
```

### Available exports

| Category   | Functions            |
| ---------- | -------------------- |
| **Core**   | `builder`, `watcher` |
| **Config** | `defineConfig`       |
| **Types**  | `LayerConfig`        |

---

## 📁 Folder Structure

```text
content/
└── services/
    ├── tech-support/
    │   └── custom-script-writing-automation.json
    │   └── data-encryption-privacy-solutions.json
    └── web-development/
        └── digital-presence.json
        └── online-store.json
```

## 📁 Output Structure

```text
dist/
└── services/
    ├── cache/
    │   └── timestamp.json
    ├── tech-support/
    │   └── custom-script-writing-automation.json
    │   └── data-encryption-privacy-solutions.json
    └── web-development/
        └── digital-presence.json
        └── online-store.json
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))

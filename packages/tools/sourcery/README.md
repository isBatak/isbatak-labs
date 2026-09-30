<p align="center">
  <img src="https://raw.githubusercontent.com/isBatak/isbatak-labs/main/packages/tools/sourcery/assets/wordmark.svg" alt="Sourcery" width="560">
</p>

# @isbatak/sourcery

Hold <kbd>⌘</kbd> <kbd>⇧</kbd> (<kbd>Ctrl</kbd> <kbd>⇧</kbd> outside macOS), point at anything on the page, and click to
open the line of JSX that rendered it in your editor.

Development only: nothing is added to production builds.

## Installation

```sh
pnpm add -D @isbatak/sourcery
```

## Next.js

Wrap your config and point `injectTo` at a client component that is rendered on every page:

```ts
import { resolve } from "node:path"
import { withSourcery } from "@isbatak/sourcery/next"

export default withSourcery(nextConfig, {
  injectTo: resolve("components/providers.tsx"),
})
```

It only changes the config for `next dev`, under Turbopack and under `next dev --webpack`. `next build` gets your config
back untouched.

## Vite

Add the plugin. With an `index.html` the client is added to it for you:

```ts
import { sourcery } from "@isbatak/sourcery/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), sourcery()],
})
```

It only runs for `vite dev`; `vite build` is left untouched. Paths are recorded relative to Vite's `root`. Frameworks
that render their own HTML need `injectTo` pointing at their root route: `src/routes/__root.tsx` in TanStack Start,
`app/root.tsx` in React Router. Sourcery reads each file before other plugins change it, so its place in `plugins`
doesn't matter.

## Panda CSS

Pass `panda: true` to also record where each Panda component is defined. Hold <kbd>⌥</kbd> together with the hotkeys and
the outline turns pink: clicking then opens the `styled()` call behind the element instead of where it is used.

Calls to `styled`, and to `withProvider`, `withContext` and `withRootProvider` from `createSlotRecipeContext`, get a
`data-sourcery-styled` entry in their `defaultProps`, so the element Panda renders carries it. Only imports from a Panda
`jsx` entry (`styled-system/jsx`, `@your/design-system/jsx`, …) are touched; pass `panda: { modules: ["@acme/ds/jsx"] }`
to list them yourself.

## Options

| Option       | Default                            | Description                                                    |
| ------------ | ---------------------------------- | -------------------------------------------------------------- |
| `injectTo`   | `index.html` with Vite             | Absolute path of the module the browser client is added to.    |
| `exclude`    | `[]`                               | Path fragments to skip. `node_modules` is always skipped.      |
| `hotKeys`    | `["metaKey", "shiftKey"]` on macOS | Keys held together to inspect.                                 |
| `editor`     | detected                           | Editor id (`code`, `cursor`, `zed`, `webstorm`, …) or command. |
| `port`       | `5678`                             | First port tried for the local open-in-editor server.          |
| `root`       | `process.cwd()`, Vite's `root`     | Directory recorded paths are relative to.                      |
| `attribute`  | `data-sourcery`                    | Attribute written on each element.                             |
| `enabled`    | `true` in `next dev` / `vite dev`  | Force sourcery on or off.                                      |
| `ignoreTags` | `[]`                               | Extra element or component names to leave untagged.            |
| `panda`      | `false`                            | Record Panda component definitions, see above.                 |

## How it works

- **Transform**: [oxc-parser](https://oxc.rs) finds every JSX element except fragments (including local aliases of
  `Fragment`), `Suspense`, `script`, `style`, `template` and `slot`, and
  [magic-string](https://github.com/Rich-Harris/magic-string) adds `data-sourcery="path:line:column"` with a source map.
  Components pass it on to the element they render when they spread their props, and it is removed from props spread
  onto a `Fragment`.
- **Client**: added to `injectTo`, or to `index.html` under Vite. While the hotkeys are held it outlines the element
  under the pointer, and a click sends its location to the local server instead of reaching the page.
- **Server**: listens on `127.0.0.1` and opens the file in your editor. The editor comes from the `editor` option or
  `SOURCERY_EDITOR`, then from the terminal the dev server was started in (VS Code, Cursor, Windsurf, Zed, JetBrains…),
  then from the apps that are running, then `VISUAL` / `EDITOR`. On macOS, editors with a URL scheme (`vscode://`,
  `cursor://`, `zed://`, …) are opened through it, so their command-line tool does not need to be installed.

The core knows nothing about bundlers. `@isbatak/sourcery/webpack` and `@isbatak/sourcery/turbopack` expose the rules
the Next.js adapter is built from, `@isbatak/sourcery/vite` is a Vite plugin, and other tools can be supported by wiring
`@isbatak/sourcery/loader` or `transformJsx` into their own transform hooks.

## Credits

Inspired by [code-inspector-plugin](https://github.com/zh-lx/code-inspector) and
[launch-ide](https://github.com/zh-lx/launch-ide) by zh-lx.

## License

MIT © Ivica Batinic

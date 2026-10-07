# @isbatak/panda-turbopack

Panda CSS v2 for Next.js on Turbopack, without the Panda CLI. It runs codegen, injects the generated CSS into your
stylesheet, and rewrites `css()`, recipes, patterns and JSX style props into static class names at build time: the
Turbopack counterpart of [`@pandacss/webpack`](https://github.com/chakra-ui/panda/tree/v2/packages/webpack).

## Installation

```sh
pnpm add -D @isbatak/panda-turbopack @pandacss/dev
```

## Next.js

Wrap your config:

```ts
import { withPandaCss } from "@isbatak/panda-turbopack/next"

export default withPandaCss(nextConfig)
```

Declare Panda's layers in a global stylesheet and import it from your root layout. The generated CSS is appended to it:

```css
@layer reset, base, tokens, recipes, utilities;
```

`next dev` and `next build` need nothing else. The wrapper accepts a config object or a config function, so it composes
with other wrappers.

## Options

| Option       | Default                         | Description                                                                          |
| ------------ | ------------------------------- | ------------------------------------------------------------------------------------ |
| `include`    | `["*.{jsx,tsx,js,mjs,ts,mts}"]` | Turbopack rule globs whose modules are transformed. `node_modules` is never touched. |
| `cwd`        | `process.cwd()`                 | Project root the Panda config is discovered from.                                    |
| `configPath` | discovered upward from `cwd`    | Explicit Panda config file, relative to `cwd`.                                       |

## How it works

- When Next.js loads the config, `withPandaCss` runs codegen into your `outdir` and writes the runtime behind the
  virtual `@pandacss-internal/css` module to `.panda/internal-css.mjs`, aliasing the import to it because Turbopack only
  resolves files on disk. Add `.panda` to `.gitignore`.
- It adds Turbopack rules that run `@isbatak/panda-turbopack/loader` on every `include` glob and on `*.css`.
- On scripts, the loader calls `transformSource` from `@pandacss/transformer`.
- On a stylesheet that declares Panda's layers, the loader extracts styles from your sources and appends the generated
  CSS. It registers the sources, their directories, the config and the design system as dependencies, so `next dev`
  updates the CSS when you edit or add a file. Config changes rerun codegen.
- Like the Panda CLI in watch mode, `next dev` keeps styles you stop using until the server restarts.
- Design-system and stylesheet diagnostics are reported as Turbopack warnings.

Without Next.js, use the pieces from the root entry: `codegen`, `createTurbopackRules` and `mergeTurbopackRules`.

## License

MIT

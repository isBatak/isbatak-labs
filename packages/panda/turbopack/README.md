# @isbatak/panda-turbopack

Panda CSS v2 source transforms for Next.js on Turbopack. `css()`, recipes, patterns and JSX style props are rewritten
into static class names at build time, the way
[`@pandacss/webpack`](https://github.com/chakra-ui/panda/tree/v2/packages/webpack) does it for webpack.

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

Then run the Panda CLI next to Next.js to write the CSS. Turbopack only transforms JavaScript:

```json
{
  "scripts": {
    "dev": "panda && (panda dev & next dev)",
    "build": "panda && next build"
  }
}
```

The wrapper accepts a config object or a config function, so it composes with other wrappers.

## Options

| Option       | Default                         | Description                                                                   |
| ------------ | ------------------------------- | ----------------------------------------------------------------------------- |
| `include`    | `["*.{jsx,tsx,js,mjs,ts,mts}"]` | Turbopack rule globs the loader runs on. `node_modules` is never transformed. |
| `cwd`        | `process.cwd()`                 | Project root the Panda config is discovered from.                             |
| `configPath` | discovered upward from `cwd`    | Explicit Panda config file, relative to `cwd`.                                |

## How it works

- `withPandaCss` adds a Turbopack rule per `include` glob that runs `@isbatak/panda-turbopack/loader`. The loader calls
  `transformSource` from `@pandacss/transformer` with one Panda compiler per project, created on first use.
- Transformed `styled()` and `cva()` calls import from the virtual `@pandacss-internal/css` module. Turbopack can only
  resolve files on disk, so the wrapper writes that runtime to `.panda/internal-css.mjs` and aliases the import to it.
  Add `.panda` to `.gitignore`.

Without Next.js, use the pieces from the root entry: `createTurbopackRules`, `mergeTurbopackRules` and
`writeInternalCssRuntime`.

## License

MIT

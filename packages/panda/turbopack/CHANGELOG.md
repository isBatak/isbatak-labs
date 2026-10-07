# @isbatak/panda-turbopack

## 0.2.0

### Minor Changes

- 2a89209: Drop the Panda CLI. `withPandaCss` now runs codegen, and the loader appends the generated CSS to any
  stylesheet that declares Panda's layers, updating it in `next dev` when sources, the config or the design system
  change. Import a stylesheet containing only `@layer reset, base, tokens, recipes, utilities;` instead of the CLI's
  `styled-system/styles.css`, and stop running `panda` / `panda dev`.

## 0.1.0

### Minor Changes

- cf05ba5: Add the Turbopack loader and `withPandaCss` Next.js wrapper for Panda CSS v2 source transforms.

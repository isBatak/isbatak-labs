---
"@isbatak/panda-turbopack": minor
---

Drop the Panda CLI. `withPandaCss` now runs codegen, and the loader appends the generated CSS to any stylesheet that
declares Panda's layers, updating it in `next dev` when sources, the config or the design system change. Import a
stylesheet containing only `@layer reset, base, tokens, recipes, utilities;` instead of the CLI's
`styled-system/styles.css`, and stop running `panda` / `panda dev`.

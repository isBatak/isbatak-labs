- Never `.map()` over static data to render JSX; write the structure inline instead.
- Put plans, todo lists and notes in the `plans/` folder at the root, never loose in the repo root or a package.
- Adding or changing a design-system component (recipe, framework component, demo, docs page): read
  `docs/ds-component.md` for where each file lives.

## Styling

- Use the `@isbatak/panda-ds` recipes before styling an element by hand; each recipe's `description` says when to pick
  it.
- Use semantic tokens (`bg.*`, `fg.*`, `border.*`, radii `l1`–`l3`, `shadows.*`) and token values like
  `cursor: "button"`. Never write hex colors or px values where a token exists.
- Look up tokens, recipes, conditions and utilities with the Panda MCP for the theme you're styling, before grepping
  `styled-system/`: `panda-<theme>` for `packages/panda/themes/<theme>` or the studio run against that theme's config;
  `panda-ds` for everything else, including the studio's own UI. An app's own extras are in its `panda.config.ts`.
- If a token you need doesn't exist, stop and say so. Don't invent one.
- `apps/compositions` uses `strictTokens`. Before you say you're done, run `pnpm typecheck` in every package you touched
  and `pnpm exec oxlint <files you changed>` at the root, and fix every error and Panda warning it reports. The
  pre-commit hook blocks lint errors only.

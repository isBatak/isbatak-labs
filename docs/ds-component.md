# Where a DS component lives

One `@isbatak/panda-ds` component spans these files. `<name>` is kebab-case, `<camel>` its camelCase form.

## Recipe

- `packages/panda/ds/src/theme/recipes/<name>.ts`: the recipe or slot recipe. Its `description` says when to pick it.
- `packages/panda/ds/src/theme/recipes/index.ts`: register it in `recipes` or `slotRecipes` under `<camel>`.
- `packages/panda/ds/src/theme/recipes/shared/`: size and variant maps shared between recipes (`input.ts`,
  `segment.ts`). Reuse these so related controls line up.
- `packages/panda/ds/src/theme/conditions.ts`: custom conditions such as `_icon`, `_iconStart`, `_iconEnd`.
- Tokens: `theme/tokens/`, `theme/semantic-tokens/`, `theme/text-styles.ts`, `theme/layer-styles.ts`.
- `packages/panda/themes/analog/src/recipes/<name>.ts`: the analog theme overrides some recipes. Change it too when the
  base recipe's API changes.

Recipes that ship on their own live in `packages/panda/<name>` instead (`code-preview`, `masonry`, `text-flip`,
`wheel-picker`, `video-player`, ...).

## Components

`packages/ui/<framework>/src/components/<name>/` with an `index.ts`, for `react`, `vue`, `svelte`, `solid`, `preact`,
`lit`. Each package exports `./<name>` from that folder. React is the reference; the others follow when a feature is
cross-framework.

## Headless machine

When Ark UI has no component for it, build one:

- `packages/zag/<name>`: the Zag state machine (`@isbatak/zag-<name>`).
- `packages/ark/<name>`: the framework bindings in `src/{react,vue,svelte,solid}` (`@isbatak/ark-<name>`).

Ark and Zag sources for upstream components are in `node_modules/.pnpm/@zag-js+<name>@<version>/` and
`node_modules/.pnpm/@ark-ui+<framework>@<version>/`.

## Docs on www

- `apps/www/content/components/ds/<name>/index.mdx`: the page. Frontmatter `links` point at the source and recipe.
  `<Usage />` renders the demo keyed `<name>`; `<Example id="<name>/<demo>" />` renders the others.
- `apps/www/components/ds-demos/<name>/`: one file per demo, plus an `index.ts` exporting `<camel>Demos`, a record keyed
  `<name>` and `<name>/<demo>`.
- `apps/www/components/ds-demos/index.ts`: spread `<camel>Demos` into `demos`.

## Changeset

Add `.changeset/<slug>.md` naming every published package you touched: `@isbatak/panda-ds`,
`@isbatak/panda-theme-analog`, `@isbatak/<framework>-ui`, `@isbatak/ark-<name>`, `@isbatak/zag-<name>`. Apps are not
published.

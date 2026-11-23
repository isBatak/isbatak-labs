---
name: panda-ds
description: Styles interfaces with the @isbatak/panda-ds Panda CSS design system. Covers picking a recipe and its variants, styling by hand with semantic tokens, text styles and layer styles, theming by color palette, dark mode and radius, and adding a recipe for a component the design system doesn't ship. Use whenever a project has @isbatak/panda-ds installed or its panda.config sets `designSystem: "@isbatak/panda-ds"`.
---

# Style with panda-ds

panda-ds is a Panda CSS design system: tokens, semantic tokens, text styles, layer styles, conditions, patterns and over
a hundred recipes, published as a Panda `designSystem`. It ships styles only. Behavior comes from the project's headless
components; slot recipes for Ark UI components use Ark's part names as slots.

## Read first

The catalogs for the installed version ship next to this file:

- [recipes.md](references/generated/recipes.md): every recipe and slot recipe, when to pick it, its slots and its
  variants with defaults. Read it before you style any component.
- [tokens.md](references/generated/tokens.md): semantic colors, palettes, radii, shadows, text styles, layer styles and
  cursors, with what each one is for.
- `node_modules/@isbatak/panda-ds/styled-system/` holds the types: `recipes/<name>.d.ts` for a recipe's variant types,
  `tokens/tokens.d.ts` for every token. Treat its `.js` files as generated runtime, not as docs.

When the Panda MCP server (`panda-mcp` from `@pandacss/mcp`) is configured, look tokens, recipes and conditions up
through it first: it reads the project's resolved config, including the app's own presets and extras on top of panda-ds.

If panda-ds isn't installed yet, install `@isbatak/panda-ds` and `@pandacss/dev` with the project's package manager, set
`designSystem: "@isbatak/panda-ds"` and `include` globs in `panda.config.ts`, and run `panda codegen`.

## Pick your path

1. **Style an interface**, like a settings page, a form or a dashboard: read [references/style.md](references/style.md).
2. **Style a component panda-ds has no recipe for**, or add a variant to one of ours: read
   [references/create-recipe.md](references/create-recipe.md).

Most interfaces only need path 1. When one part needs a recipe we don't have, follow path 2 for that part.

## Rules for every path

- **Recipe first.** Find the component in recipes.md by its description and set its variants. Change a recipe's look
  through its variants and `colorPalette`; style by hand only what no recipe covers.
- **Import from where the project already does.** Apps with their own `outdir` import from their `styled-system/*`,
  which carries panda-ds plus the app's extras. A library, or an app with no extras, imports `@isbatak/panda-ds/css`,
  `/recipes`, `/patterns`, `/jsx` and `/tokens`.
- **Semantic tokens.** Use `bg.*`, `fg.*`, `border.*`, radii `l1`–`l3`, the `shadows` scale, text styles and layer
  styles. Reach for a raw palette step like `red.600` only when no semantic token fits. Write hex colors and px values
  only where no token exists, and put values no token can express (percentages, `em`, `calc()`) in the `[…]` escape
  hatch.
- **Missing token, say so.** When the design needs a value panda-ds has no token for, tell the user and ask before
  adding one to the app's config.
- **Color by palette.** Set `colorPalette` (`gray` is the default, then `red`, `blue`, `green` and the rest in
  tokens.md) on a recipe's root and every part follows. In hand-written styles, use `colorPalette.solid`,
  `colorPalette.fg` and the other palette keys so the part follows too.
- **Dark mode is a class.** `_dark` matches inside a `.dark` ancestor, not the system setting. Semantic tokens already
  switch, so write `_dark` only for a value no semantic token covers.
- **Radius follows the page.** `data-radius="<preset>"` on an ancestor rescales `l1`–`l3` (`none`, `xs`, `sm`, `md`,
  `lg`, `xl`, `2xl`). Use `l1`–`l3` so a part follows it.
- **Icons beside a label** get `data-icon-start` or `data-icon-end`; recipes size and space them through the
  `_iconStart` and `_iconEnd` conditions.
- **Focus** uses the `focusVisibleRing` utility (`outside`, `inside`, `mixed`), which takes its color from
  `colorPalette.focusRing`.
- **Cursors are tokens**, like `cursor: "button"`, so they follow the design system's cursor setting.

## When you're done

1. **Run `panda codegen`** (or the project's script for it) and fix every warning. With `strictTokens: true`, a value
   off the token scale is a type error.
2. **Typecheck** the packages you touched.
3. **Look at it** in a real browser, in light and in dark mode.
4. **Report** each command you ran with its exit code, anything you couldn't check, and anything recipes.md or tokens.md
   got wrong or left out.

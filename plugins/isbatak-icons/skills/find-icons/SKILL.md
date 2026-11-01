---
name: find-icons
description:
  Find @isbatak/icons names by meaning and render them with the Icon component. Use when adding an icon to UI built on
  an @isbatak UI package, or choosing a value for an Icon `name`.
---

# Find icons

`@isbatak/icons` is [Boring Icons](https://www.npmjs.com/package/@boring-icons/react) plus extra UI and brand icons in
one SVG sprite. `name` is typed as a closed union of the sprite's icons, so only a name from the catalog type-checks.
Names follow Boring's vocabulary (`close`, not `x`; `delete`, not `trash`), so search by meaning rather than guessing.

## Steps

1. **Search.** Pass every icon the task needs in one call, one quoted query each, and add a synonym query for anything
   abstract:

   ```sh
   node <skill dir>/search.mjs "trash" "settings" "open in new tab"
   ```

   Each query prints up to 5 names with their tags, best first (`--limit <n>` for more, `--list` for the whole set).
   Done when every icon you need has a name taken from this output.

2. **Handle a miss.** When a query prints `no match` and its synonyms do too, tell the user which icon is missing and
   offer the nearest match the search printed, or drawing it with the `boring-icons` skill from this plugin. A drawn
   icon goes into the project's own sprite, which `Icon` uses after `setIconSprite(url)`; the
   [Icons setup docs](https://github.com/isBatak/isbatak-labs/blob/main/apps/www/content/icons/setup/index.mdx) cover
   bringing your own sprite.

3. **Render** it with the `Icon` from the project's UI package:

   ```tsx
   import { Icon } from "@isbatak/react-ui/icon"

   export const Next = () => <Icon name="arrow-right" size="sm" />
   ```

   - Every framework package exports the same `Icon`: `@isbatak/react-ui/icon`, `preact-ui`, `solid-ui`, `svelte-ui` and
     `vue-ui`. Lit and plain HTML import `@isbatak/lit-ui/icon` and write `<ib-icon name="…" size="sm">`.
   - `size` is `xs`, `sm`, `md`, `lg`, `xl` or `2xl`. Leave it out to size the icon at `1em`, so it follows the
     surrounding text.
   - The icon takes `currentColor`; color it by setting the text color on it or its parent.
   - `Icon` is always `aria-hidden`. Give an icon-only button or link an `aria-label`.

# Add a recipe

Check recipes.md first; most components exist under another name (a "stepper" is `steps`, a "chip" is `tag`, a "toast"
is `toast`). When nothing fits, add a recipe to the app's own config. panda-ds stays untouched.

## Where it goes

```ts
import { defineConfig, defineSlotRecipe } from "@pandacss/dev"

const splitter = defineSlotRecipe({
  className: "splitter",
  description: "Resizable panels separated by draggable handles",
  slots: ["root", "panel", "resizeTrigger"],
  base: {
    root: { display: "flex", gap: "0" },
    panel: { bg: "bg.panel", borderRadius: "l2" },
    resizeTrigger: {
      bg: "border",
      cursor: "col-resize",
      focusVisibleRing: "outside",
      _hover: { bg: "colorPalette.solid" },
    },
  },
  variants: {
    size: {
      sm: { resizeTrigger: { minW: "1" } },
      md: { resizeTrigger: { minW: "1.5" } },
    },
  },
  defaultVariants: { size: "md" },
})

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  theme: { extend: { slotRecipes: { splitter } } },
})
```

Use `defineRecipe` and `theme.extend.recipes` for a single-element component. Run `panda codegen`; the recipe is then
imported from the app's own `styled-system/recipes`, not from `@isbatak/panda-ds/recipes`.

## Match the design system

Read the closest existing recipe's `.d.ts` and copy its conventions, so the new part lines up with its neighbours:

- **Sizes** run `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, with `md` as the default. A control at a given size matches
  `button` and `input` at that size.
- **Variants** reuse the names `solid`, `subtle`, `surface`, `outline`, `ghost` and `plain`, painted through
  `colorPalette.*` keys or the `fill.*` and `outline.*` layer styles.
- **Radius**: `l1` for nested parts, `l2` for controls, `l3` for containers.
- **Slots** use the headless component's part names, so each part's class maps one to one.
- **States** target the headless component's attributes (`_selected`, `_checked`, `_open`, `_disabled`, `_highlighted`),
  never a class you toggle by hand.
- **Description** says when to pick it and what to pick instead, like the ones in recipes.md.

## Change one of ours

To add a variant or adjust a panda-ds recipe, extend it under the same key in `theme.extend.recipes` or
`theme.extend.slotRecipes`. Panda merges your keys into ours. Keep existing variant names and defaults, so components
already using the recipe render the same.

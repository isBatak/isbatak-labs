# Style an interface

## Recipes

A recipe returns one class; a slot recipe returns an object with one class per slot.

```tsx
import { button, card } from "@isbatak/panda-ds/recipes"

const classes = card({ variant: "elevated", size: "sm" })

<div className={classes.root}>
  <div className={classes.header}>
    <h3 className={classes.title}>Plan</h3>
  </div>
  <div className={classes.body}>…</div>
  <div className={classes.footer}>
    <button className={button({ variant: "outline", size: "sm" })}>Change</button>
  </div>
</div>
```

- Variants take responsive values: `button({ size: { base: "sm", md: "md" } })`.
- Put `colorPalette` on the element that carries the root class:
  `<button className={cx(button({ variant: "subtle" }), css({ colorPalette: "red" }))}>`.
- To adjust one instance, merge a `css()` class after the recipe class with `cx()`. Keep it to layout and spacing; a
  color or size change belongs in a variant.
- Pick between close recipes by their descriptions in recipes.md: `badge` vs `tag`, `select` vs `combobox` vs
  `nativeSelect`, `table` vs `gridTable`, `collapsible` vs `accordion`.

## Layout

Lay out with the patterns (`Box`, `Flex`, `Stack`, `HStack`, `VStack`, `Wrap`, `Grid`, `GridItem`, `Bleed`, `Sticky`,
`AbsoluteCenter`) from `jsx`, or their functions from `patterns`. Use the `container` recipe for a page column at a
readable width.

## Style by hand

- Style props on the patterns, or `css()` when the element only takes `className`, when several elements share a class,
  or for a lookup of classes picked at runtime.
- Text: set `textStyle` (`xs` to `7xl`, `label`, `overline`) instead of `fontSize`, `lineHeight` and `fontWeight` one by
  one.
- Surfaces: `bg: "bg.panel"` with `borderColor: "border"`, `borderRadius: "l3"` and a `shadow` for raised containers;
  `bg.subtle` and `bg.muted` for quieter areas; `bg.sunken` for wells.
- Fills: the `fill.*` and `outline.*` layer styles paint a part from its `colorPalette` the same way the recipes do.
  `indicator.*` draws a selected-state bar on one edge. `disabled` is the disabled look.
- Images and avatars: `layerStyle: "imageOutline"` keeps pale images from blending into the page.
- Status: `fg.error`, `bg.error`, `border.error` and their `warning`, `success` and `info` siblings, or the `alert`
  recipe with a `status`.
- Motion: put reduced-motion overrides under `_motionReduce`.

## Color

- Text needs 4.5:1 against what's behind it, and 3:1 when it's large. `fg.subtle` is for placeholders and hints only;
  body copy uses `fg` or `fg.muted`.
- Control edges, focus rings and state fills need 3:1.
- Check contrast in a real browser, in light and dark mode.

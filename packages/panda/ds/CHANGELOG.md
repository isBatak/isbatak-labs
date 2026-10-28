# @isbatak/panda-ds

## 0.6.0

### Minor Changes

- 5555ebe: Style the `drawer` recipe from Zag.js 2's `data-swipe-direction`, so a drawer built on Zag or Ark directly
  gets the right edge, radius, animation and stacking offset without setting `placement`. `placement` still works and
  overrides the attribute, which keeps responsive placements working, but it no longer has a recipe default.

  The content now has an `::after` that fills the gap behind the drawer when it is dragged past its open position. Its
  size comes from `--drawer-bleed`, and `float` drawers hide it.

  Adds `swipeArea`, `indent` and `indentBackground` slots.

  Adds a `fade-out-from` keyframe that fades from `var(--fade-out-from, 1)` to `0`. The drawer backdrop uses it on
  close, starting from its swiped opacity instead of jumping back to fully opaque.

- c885fbe: Add a `navigationMenu` slot recipe for Ark UI's NavigationMenu. Triggers sit in a row with a highlight that
  slides between them, and their content opens in a shared viewport panel that resizes to fit it.
- 752aac2: Restyle the `select` recipe after the tl-ds select. The trigger uses input border colors that darken on hover
  and take the focus color while the list is open, set through `--input-border-*` variables. Items and group labels get
  spacing per size, `xs` and `lg` join `sm` and `md`, and a `fit` variant sizes the trigger to its value. New `search`
  and `empty` slots style a search field at the top of the list and the text shown when nothing matches. When the
  content holds a `list`, the list scrolls and the search stays above it. Adds an `inputElement` recipe for icons and
  text inside an input. Content marked with `data-align-item-with-trigger` fades in without sliding so an aligned list
  lines up, and the positioner stacks above the trigger it overlaps.
- 9e9cb46: Rebuild the `table` recipe and add a `grid-table` recipe, both modeled on the tl-ds tables. They share the
  variants `size` (`sm`, `md`, `lg`), `showRowBorder`, `showColumnBorder`, `interactive`, `stickyHeader` and
  `highlightedHeader`, and support sticky start and end columns through `data-sticky`. The `table` recipe drops its
  `variant` (`line`, `outline`) and `striped` variants.

  `--toc-indent` on the `toc` recipe is now a spacing token, `spacing.2.5`, and takes any length.

- 5d4efb2: Add a `toc` slot recipe for Ark UI's table of contents. The `line` variant puts a bar on a border at the
  start of the list, and the `track` variant styles a `track` slot, an SVG line that steps in for nested items, with a
  dot at the end of the active stretch. `size` takes `sm` or `md`, and `--toc-indent` sets how far each level is
  indented.

## 0.5.1

### Patch Changes

- 379834b: Fix the `button` recipe's `icon` variant losing to the `size` padding. Sizes now set `--button-padding-x` and
  `--button-min-width`, and only the `icon` variant applies the padding, so `icon` buttons are square again. You can
  remove any `compoundVariants` workaround for `icon: true`.

## 0.5.0

### Minor Changes

- ab6dae0: Add a boolean `icon` variant to the `button` recipe for square, icon-only buttons. `IconButton` now uses it
  instead of style props.

### Patch Changes

- 86eefaf: Fix the spacing between `line` variant items in `tabs` and `segmentGroup`. The `_notLast` margin was nested
  inside the property, which Panda emits as an invalid CSS property, so it never applied.

## 0.4.0

### Minor Changes

- 4a64aaf: The drawer recipe now animates swipes: a released drag springs back or settles with the speed of the gesture,
  and the backdrop fades as the drawer is swiped away. Drawers opened on top of another scale it back so it peeks out
  behind them. The `size` and `placement` variants accept responsive values, since the recipe no longer uses compound
  variants.

  **Breaking:** the drawer's `contained` variant is now called `float`. Replace `contained` with `float` on
  `Drawer.Root`.

## 0.3.2

### Patch Changes

- 350b86f: Export the generated style types from `@isbatak/panda-ds/types`.

## 0.3.1

### Patch Changes

- 405668d: Generate the switch recipe CSS when `Switch` parts are used in JSX

## 0.3.0

### Minor Changes

- 221777a: Add the `swipeableList` slot recipe.

## 0.2.0

### Minor Changes

- b9fcdf8: Remove the React components from `@isbatak/panda-ds/components/*`. The package now ships only the design
  system (theme, `panda lib` output and generated styled-system). The components moved to `@isbatak/react-ui`
  (`packages/ui/react`).

## 0.1.0

### Minor Changes

- 673d56a: Publish the Panda CSS design system as a `panda lib` package consumable via `designSystem`.

### Patch Changes

- Updated dependencies [d146825]
- Updated dependencies [918fff9]
  - @isbatak/ark-wheel-picker@0.1.0
  - @isbatak/panda-wheel-picker@0.1.0

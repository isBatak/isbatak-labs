# @isbatak/panda-ds

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

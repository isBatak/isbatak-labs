# @isbatak/ark-caliper

## 0.1.0

### Minor Changes

- 70fb14f: Add `IconGrid`: an icon keyline grid over a region, with the hatched trim area, a line per unit, center and
  eighth lines, and the circle, square and rectangle keylines. `units` sets the grid size (24 by default) and `trim` the
  trim width (2).
- c1c397b: Add opt-in motion, made entirely in CSS. A `Frame` with `animate="in"` or `"out"` plays its marks' `enter`
  and `exit` variants, timed by `order`, `exitOrder`, `delay`, `duration` and the frame's `stagger`. Pass `time` in
  seconds to hold the animations at that moment instead of playing them, for frame-by-frame renderers such as Remotion.
  `Dimension` and `Callout` support `enter="draw" | "fade"` and `exit="retract" | "fade"`.
- c9e7d9b: Add `OverlayTrigger`, an unstyled toggle button that shows and hides every mark in its `Root`. `Root` takes
  `overlay`, `defaultOverlay` and `onOverlayChange`, and sets `data-overlay="visible" | "hidden"`. The recipe fades
  outlines, hatches, dimensions, callouts, icon grids and legends out while it's hidden, and pins the trigger to the
  canvas's top-right corner. Style the trigger by putting your own button inside it with `asChild`. Once the overlay has
  changed, the root's frames animate in and out with it, so dimensions draw and retract; a dimension without `enter` or
  `exit` uses `draw` and `retract`. A frame's own `animate` still wins, and nothing animates on first render.
- 989830f: New Caliper packages for drawing specs over live UI: dimension lines, hatching, outlines and legends.

  - `@isbatak/zag-caliper`: the anatomy, span math and `connect(normalizeProps)` prop getters, for any framework.
  - `@isbatak/ark-caliper/react`: headless Ark UI parts with the `render` prop: `Root`, `Canvas`, `Caption`, `Frame`,
    `Subject`, `Dimension`, `DimensionLabel`, `Outline`, `Hatch`, `Callout`, `CalloutLabel`, `CalloutTitle`, `Legend`,
    `LegendItem` and `LegendSwatch`.
  - `@isbatak/panda-caliper`: the `caliper` slot recipe and preset. Bind the Ark parts to it with
    `createSlotRecipeContext`.

### Patch Changes

- Updated dependencies [70fb14f]
- Updated dependencies [c1c397b]
- Updated dependencies [c9e7d9b]
- Updated dependencies [989830f]
  - @isbatak/zag-caliper@0.1.0

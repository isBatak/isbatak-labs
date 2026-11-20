# @isbatak/panda-caliper

## 0.1.0

### Minor Changes

- 989830f: New Caliper packages for drawing specs over live UI: dimension lines, hatching, outlines and legends.

  - `@isbatak/zag-caliper`: the anatomy, span math and `connect(normalizeProps)` prop getters, for any framework.
  - `@isbatak/ark-caliper/react`: headless Ark UI parts with the `render` prop: `Root`, `Canvas`, `Caption`, `Frame`,
    `Subject`, `Dimension`, `DimensionLabel`, `Outline`, `Hatch`, `Callout`, `CalloutLabel`, `CalloutTitle`, `Legend`,
    `LegendItem` and `LegendSwatch`.
  - `@isbatak/panda-caliper`: the `caliper` slot recipe and preset. Bind the Ark parts to it with
    `createSlotRecipeContext`.

### Patch Changes

- Updated dependencies [989830f]
  - @isbatak/zag-caliper@0.1.0

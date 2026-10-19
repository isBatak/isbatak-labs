# @isbatak/panda-wheel-picker

## 0.2.0

### Minor Changes

- 707f26b: Rebuild the wheel picker on native scroll snapping, following the approach in Zag's "Build a wheel picker"
  post. The state machine, collection, 3D drum and highlight item parts are gone. Use `createWheelPicker` with plain
  `items`, `loop`, `itemHeight` and `visibleCount`. Compatible with Zag 2 and Ark UI 6.

### Patch Changes

- Updated dependencies [707f26b]
  - @isbatak/zag-wheel-picker@0.2.0

## 0.1.0

### Minor Changes

- 918fff9: Add the wheel-picker slot recipe and preset for Panda CSS.

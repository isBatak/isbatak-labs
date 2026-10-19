# @isbatak/ark-wheel-picker

## 0.3.0

### Minor Changes

- 707f26b: Rebuild the wheel picker on native scroll snapping, following the approach in Zag's "Build a wheel picker"
  post. The state machine, collection, 3D drum and highlight item parts are gone. Use `createWheelPicker` with plain
  `items`, `loop`, `itemHeight` and `visibleCount`. Compatible with Zag 2 and Ark UI 6.

### Patch Changes

- Updated dependencies [707f26b]
  - @isbatak/zag-wheel-picker@0.2.0

## 0.2.0

### Minor Changes

- a9582e5: The React components now take `ref` as a prop instead of using `forwardRef`, and require React 19.

## 0.1.2

### Patch Changes

- 1ffd36a: Fix the Vue `RootProvider` crashing when given the value of `useWheelPicker` in a template. It now takes the
  unwrapped API, like Ark UI's own providers.

## 0.1.1

### Patch Changes

- 405668d: Stop React from warning about `key` being spread into JSX when rendering keyed `Item` and `HighlightItem`
  parts

## 0.1.0

### Minor Changes

- d146825: Publish the Ark UI style wheel-picker components for React, Solid, Vue and Svelte.

### Patch Changes

- Updated dependencies [9e4a463]
  - @isbatak/zag-wheel-picker@0.1.0

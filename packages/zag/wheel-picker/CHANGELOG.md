# @isbatak/zag-wheel-picker

## 0.2.0

### Minor Changes

- 707f26b: Rebuild the wheel picker on native scroll snapping, following the approach in Zag's "Build a wheel picker"
  post. The state machine, collection, 3D drum and highlight item parts are gone. Use `createWheelPicker` with plain
  `items`, `loop`, `itemHeight` and `visibleCount`. Compatible with Zag 2 and Ark UI 6.

## 0.1.0

### Minor Changes

- 9e4a463: Expose `collection` on the wheel-picker API.

## 0.0.1

### Patch Changes

- b563560: Initial release

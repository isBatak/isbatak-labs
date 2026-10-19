# @isbatak/ark-masonry

## 0.3.0

### Minor Changes

- dc7bb63: Replace the masonry state machine with `createMasonry`, a small controller that measures the items and
  reports the layout, following the approach in Zag's "Build a wheel picker" post. Your framework now keeps the layout
  in its own state.

### Patch Changes

- Updated dependencies [dc7bb63]
  - @isbatak/zag-masonry@0.2.0

## 0.2.0

### Minor Changes

- a9582e5: The React components now take `ref` as a prop instead of using `forwardRef`, and require React 19.

## 0.1.0

### Minor Changes

- 63e068c: Add the masonry machine, Ark UI style components for React, Solid, Vue and Svelte, and a Panda CSS recipe.

### Patch Changes

- Updated dependencies [63e068c]
  - @isbatak/zag-masonry@0.1.0

# @isbatak/sourcery

## 0.1.1

### Patch Changes

- 868e619: Fall back to `localhost` when a Content Security Policy blocks `127.0.0.1`, skip tags that alias `Fragment`,
  and strip sourcery's attributes from props spread onto a `Fragment`

## 0.1.0

### Minor Changes

- bca04d7: Add sourcery: hold a hotkey and click any element to open the JSX that rendered it. Ships a Next.js adapter
  for Turbopack and webpack on top of a bundler-agnostic core.

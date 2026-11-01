# Panda `styled` helpers for Svelte

## Why there are none

Panda generates `styled-system/jsx` (the `styled` factory, `Box`, pattern components like `Stack`) only for a
`jsxFramework`, and Panda 2.4 accepts `react`, `solid`, `preact` and `vue`. Svelte isn't one, so `@isbatak/svelte-ui`
applies recipes through `class` instead, and the storybook class maps exist partly because of this.

## What the extractor does with `.svelte` files

Tested with `panda cssgen` against `@isbatak/panda-ds`, with and without `jsxFramework`:

| In a `.svelte` template                                               | Extracted                                               |
| --------------------------------------------------------------------- | ------------------------------------------------------- |
| `css({ ... })`, pattern functions like `stack({ ... })`               | yes                                                     |
| Recipe components, e.g. `<Icon size="2xl">`                           | yes                                                     |
| Pattern components, e.g. `<Stack gap="4">`                            | yes                                                     |
| Style props on any capitalized component, e.g. `<Box p="4">`          | yes                                                     |
| Conditions, responsive objects, ternaries and the `css` prop on those | yes                                                     |
| `<styled.div marginBottom="4">`                                       | no, even with `importMap` pointing `jsx` at our package |

The same `<styled.div>` with the same `importMap` is extracted from a `.tsx` file, so the gap is how Panda reads dotted
tag names in Svelte templates, not the import.

## What we can add

A hand-written `Box` in `@isbatak/svelte-ui`, plus pattern components (`Stack`, `HStack`, `VStack`, `Grid`, `Center`,
…), would work today:

- Static CSS: Panda already extracts their style props, conditions and `css` prop from Svelte templates.
- Runtime: `Box` splits its props with `splitCssProps` from `@isbatak/panda-ds/jsx/is-valid-prop` (no React import),
  turns the style props into a class with `css()`, and renders `as` (default `div`) with `<svelte:element>`. Pattern
  components do the same through their pattern's `raw()` function.

What it can't be is a `styled.div` / `styled("div", recipe)` factory, because Panda won't extract `<styled.*>` in
Svelte. `<Box as="button">` is the Svelte-shaped equivalent.

Costs: `css()` runs at render for every `Box`, unlike the build-time `class` strings Svelte uses now, and the prop types
have to be assembled by hand from `SystemStyleObject` and `HTMLAttributes`.

Worth raising upstream: `jsxFramework: "svelte"`, or extracting `<styled.*>` from Svelte templates.

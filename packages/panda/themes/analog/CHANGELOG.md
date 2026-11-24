# @isbatak/panda-theme-analog

## 0.2.0

### Minor Changes

- 30f9924: The scroll area recipe has a `shadowOverflow` variant that fades the edges where content is scrolled out of
  view.
- 19f178e: Surfaces now step up from the page. Every color ramp gains a `25` step, halfway between white and `50`, and a
  `975` step, halfway between `950` and black. Light `bg` is `gray.25` (#fcfcfc) instead of white, so white `bg.panel`
  surfaces and the segment indicator read as raised. Dark `bg` is `gray.975` (#0d0d0f) instead of `black`. The new
  `bg.sunken` (`gray.100` light, `black` dark) is for sections recessed below the page; analog maps it to
  `elevation.sunken`.

  Dark `bg.panel` moves from `gray.950` to `gray.900`, so cards, menus and dialogs sit lighter than the page, and
  `gray.950` takes the same slight cool tint as the other dark steps (#111113). The Caliper canvas drops its border,
  sits on `bg.sunken` and takes a `3xl` radius. Enclosed segment tracks use a translucent tint instead of `bg.muted`, so
  they stay visible on sunken and muted surfaces.

### Patch Changes

- 04cab08: Add `ButtonStartIcon` and `ButtonEndIcon` with `iconStart` and `iconEnd` conditions, so icons at the start or
  end of a button get a negative margin for optical alignment. The analog button no longer overrides icon `strokeWidth`.
- c8debe6: Layout components: Box, Flex, Stack, HStack, VStack, Grid, GridItem, SimpleGrid, Center, AbsoluteCenter,
  Circle, Square, Container, Bleed, Float, FloatGap, AspectRatio, Wrap, WrapItem, Spacer, Sticky and Separator, plus
  StackSeparator in React. Every one but Box takes `asChild` in React, Vue and Solid, and `as` in Svelte.

  panda-ds: `grid` has no default gap, `flex` and `grid` take `inline`, `bleed` takes each logical side, `stack`,
  `hstack` and `vstack` take `separator`, default gaps use the `2` token, and there are new `sticky` and `floatGap`
  patterns and a `container` recipe in place of Panda's `container` pattern.

- 3f025b6: Add the `iconPullStart`, `iconPullEnd` and `iconPullOffset` utilities. `iconPullStart` and `iconPullEnd` take
  a spacing token and pull an icon toward its edge by that amount plus `--icon-offset`; `iconPullOffset` sets
  `--icon-offset`, which `StartIcon` and `EndIcon` also set from their `offset`. Button, Badge, Timer and Kbd pull their
  icons with them, so a single icon can be pulled to its ink. Kbd now lays out `StartIcon` and `EndIcon` with a small
  gap.
- df32946: Generate `styled-system` with Panda 2.6.0. Solid slot recipe styles now react to variant prop changes out of
  the box.
- Updated dependencies [69fa87c]
- Updated dependencies [04cab08]
- Updated dependencies [b4d959a]
- Updated dependencies [011119e]
- Updated dependencies [f9062a9]
- Updated dependencies [8f02a6d]
- Updated dependencies [82b1758]
- Updated dependencies [7d840c6]
- Updated dependencies [de0bc0f]
- Updated dependencies [08df277]
- Updated dependencies [22581f0]
- Updated dependencies [d3d4027]
- Updated dependencies [d2489ee]
- Updated dependencies [4676f28]
- Updated dependencies [cc5ddbb]
- Updated dependencies [9dd78fd]
- Updated dependencies [63926cf]
- Updated dependencies [7ea6a77]
- Updated dependencies [9a94694]
- Updated dependencies [901ec1a]
- Updated dependencies [cb2d5bb]
- Updated dependencies [4c74f1e]
- Updated dependencies [eb7239f]
- Updated dependencies [759c274]
- Updated dependencies [7aeb3b4]
- Updated dependencies [8515ffb]
- Updated dependencies [7460e13]
- Updated dependencies [18000e0]
- Updated dependencies [a2cf021]
- Updated dependencies [c8debe6]
- Updated dependencies [d4a241a]
- Updated dependencies [7a0d7e8]
- Updated dependencies [80f88a3]
- Updated dependencies [93bd878]
- Updated dependencies [0560300]
- Updated dependencies [55b27a2]
- Updated dependencies [2a5f081]
- Updated dependencies [ca6239b]
- Updated dependencies [30f9924]
- Updated dependencies [eb0e5ee]
- Updated dependencies [5916938]
- Updated dependencies [938877c]
- Updated dependencies [85270f8]
- Updated dependencies [502a9bd]
- Updated dependencies [e12de6a]
- Updated dependencies [b51b9a7]
- Updated dependencies [5d533c8]
- Updated dependencies [0d1c534]
- Updated dependencies [a562385]
- Updated dependencies [6448fa4]
- Updated dependencies [8d6f193]
- Updated dependencies [97a723e]
- Updated dependencies [c5c688e]
- Updated dependencies [c9b2d02]
- Updated dependencies [ad0e056]
- Updated dependencies [667c7a9]
- Updated dependencies [e43eadd]
- Updated dependencies [9842bfd]
- Updated dependencies [8b77abf]
- Updated dependencies [f3b87c3]
- Updated dependencies [95e8729]
- Updated dependencies [b2ff60b]
- Updated dependencies [3f025b6]
- Updated dependencies [62d4c23]
- Updated dependencies [56f7c3c]
- Updated dependencies [fdf62b6]
- Updated dependencies [df32946]
- Updated dependencies [8c0d2e0]
- Updated dependencies [bf83af6]
- Updated dependencies [b5876f4]
- Updated dependencies [232b7de]
- Updated dependencies [883f542]
- Updated dependencies [19f178e]
  - @isbatak/panda-ds@1.0.0

## 0.1.0

### Minor Changes

- 57662ef: Add the grain preset: SVG `feTurbulence` film grain as an `assets.grain` token with a light and a dark tile,
  a `sizes.grain` token and a `grain` layer style. Size, frequency and speck strength per mode are options. The analog
  theme now takes its grain from it instead of inlined PNGs, and no longer exports `grainDark` and `grainLight`.

### Patch Changes

- Updated dependencies [5555ebe]
- Updated dependencies [57662ef]
- Updated dependencies [c885fbe]
- Updated dependencies [752aac2]
- Updated dependencies [9e9cb46]
- Updated dependencies [5d4efb2]
  - @isbatak/panda-ds@0.6.0
  - @isbatak/panda-grain-preset@0.1.0

# Layout: conflicts

**Status:** every recommendation below was accepted on 2026-11-04.

Sources: Chakra UI (`chakra-ui/packages/react/src/components`), tl-ds (`tl-ds/packages/ds/src/components` and
`src/theme/patterns`), and this repo. Answer each **Decision** with `ok` (take the recommendation) or your own call, and
add notes anywhere. The category starts once every decision has an answer.

Components: box, flex, stack (+ hstack, vstack, stack-separator), grid (+ grid-item), simple-grid, center,
absolute-center, circle, square, container, bleed, float, float-gap, aspect-ratio, wrap (+ wrap-item), spacer, sticky,
group, separator.

## Category-wide

### L1. How layout components ship per framework

- Chakra: each one is a `chakra("div", …)` styled component in React.
- tl-ds: each one wraps Panda's generated pattern component (`Box`, `Flex`, …) with `withAsChild` (Ark's `ark` factory),
  React only.
- This repo: `@isbatak/panda-ds/jsx` already generates the React pattern components, but without `asChild`. vue-ui and
  solid-ui generate their own `styled-system/jsx` with the same patterns. svelte-ui has a hand-written `Box` (`as` prop,
  style props through `splitCssProps`), because Panda doesn't generate Svelte JSX. `plans/TODO.md` already plans
  "re-export Panda's jsx components with `asChild`, and write them as Svelte components like `Box`".

**Decision:** React, Vue and Solid export each pattern component from their `styled-system/jsx`, wrapped so it takes
`asChild` (React and Solid through Ark's `ark` factory, Vue through `ark` too). Svelte gets one component per pattern
built on `Box`, calling the pattern's `*.raw()` for its styles.

> Recommendation: yes. Every layout component is then the same pattern in all four frameworks, so the docs show one API.

### L2. Pattern overrides from tl-ds

tl-ds replaces several of Panda's built-in patterns. panda-ds only overrides `absoluteCenter` today.

| Pattern    | Panda built-in                                   | tl-ds override                                                      |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------------- |
| `grid`     | `gap` defaults to `8px`                          | No default gap, adds `inline`                                       |
| `stack`    | `gap` defaults to `8px`, `direction` to `column` | No defaults in the pattern; the `Stack` component defaults `0.5rem` |
| `wrap`     | `gap` defaults to `8px`                          | `0.5rem` unless `rowGap`/`columnGap` is set                         |
| `flex`     | No `inline`                                      | Adds `inline` (`inline-flex`)                                       |
| `bleed`    | `inline` and `block` only                        | Adds `inlineStart`, `inlineEnd`, `blockStart`, `blockEnd`           |
| `gridItem` | Same props                                       | Same, with `auto` allowed in spans                                  |
| `sticky`   | Not in Panda                                     | `position: sticky; top: 0`                                          |
| `floatGap` | Not in Panda                                     | Cutout `clip-path` around a floating badge (see float-gap)          |

**Decision:** add all of the tl-ds overrides to `packages/panda/ds/src/theme/patterns.ts`, with gaps as spacing tokens
(`2` instead of `8px` or `0.5rem`).

> Recommendation: yes. `grid` with no default gap matters most: SimpleGrid and page layouts break with a surprise gap.

### L3. Docs pages

Chakra has one page per component. Most of these are a handful of props.

**Decision:** one page per component, except that hstack/vstack live on Stack's page, grid-item on Grid's, wrap-item on
Wrap's, and circle/square on one "Circle and Square" page.

> Recommendation: as written.

### L4. Recipe or pattern

Layout is a pattern everywhere except Container and Separator, which are recipes in both Chakra and tl-ds (so themes can
restyle them). Group is already a recipe here.

**Decision:** patterns for everything but Container, Separator and Group.

> Recommendation: yes. Container needs a new `container` recipe in panda-ds (Chakra's and tl-ds's are identical).

## Components

### box

Same in all three sources: the base element with style props. tl-ds adds `asChild`. Svelte already has `Box` with an
`as` prop.

**Decision:** Svelte `Box` keeps `as`, and the others take `asChild` (Svelte can't clone a child element).

### flex

Chakra and Panda: `direction`, `align`, `justify`, `wrap`, `basis`, `grow`, `shrink`. tl-ds adds `inline`.

**Decision:** take `inline` from tl-ds (L2).

### stack, hstack, vstack, stack-separator

- Chakra and tl-ds: `Stack` takes a `separator` element and inserts it between children (React `cloneElement`), sized by
  `getSeparatorStyles`. `HStack` and `VStack` fix the direction. `StackSeparator` is the element to pass.
- Default gap: Chakra `0.5rem`, tl-ds `0.5rem`.

The `separator` prop clones elements between children, which only React does cleanly. Vue could do it with slots, but
Svelte and Solid can't inspect children the same way.

**Decision:** keep `separator` in React only, and in every framework style a separator between children with CSS
instead: `Stack` gets a `separator` boolean that draws a border between children (`& > * + *`), using the same
`getSeparatorStyles` logic. `StackSeparator` stays for React.

> Recommendation: CSS separators everywhere, plus the React `separator` element for parity with Chakra. Alternative:
> drop the element form and only ship the CSS one.

### grid, grid-item

Chakra and Panda: `columns`, `minChildWidth`, `templateColumns`, `templateRows`, `templateAreas`, `autoFlow`,
`autoRows`, `autoColumns`, `column`, `row`, `gap`. tl-ds adds `inline` and drops the default gap (L2). `GridItem`:
`area`, `colSpan`, `rowSpan`, `colStart`, `colEnd`, `rowStart`, `rowEnd`.

**Decision:** take the tl-ds pattern (L2).

### simple-grid

- Chakra: `columns` and `minChildWidth`, responsive, turned into `gridTemplateColumns` at runtime.
- tl-ds: the same props, but writes responsive values to CSS variables (`--simple-grid-columns-<breakpoint>`) so they
  work with values only known at runtime, which Panda can't extract statically.

**Decision:** take the tl-ds CSS-variable approach so runtime values work, in every framework.

> Recommendation: yes. The Grid pattern already covers static `columns`/`minChildWidth`, so SimpleGrid is for runtime
> values.

### center, absolute-center, circle, square

Same in all sources. panda-ds already overrides `absoluteCenter` with `axis` (`horizontal`, `vertical`, `both`) and RTL
support, matching Chakra.

**Decision:** no conflicts. Ship them as patterns (L1).

### container

Chakra and tl-ds: identical `container` recipe with `centerContent` and `fluid` variants. Panda has a `container`
pattern with a different max width.

**Decision:** add the Chakra/tl-ds recipe to panda-ds as `container`, and don't ship Panda's pattern.

### bleed

Chakra and Panda: `inline` and `block`. tl-ds adds the four logical sides and uses CSS variables.

**Decision:** take the tl-ds pattern (L2).

### float

Chakra and Panda: `placement` (9 positions) and `offset`/`offsetX`/`offsetY`. tl-ds wraps Panda's pattern unchanged.

**Decision:** no conflicts.

### float-gap

tl-ds only. A `clip-path` cutout so a floating badge or dot (from `Float`) sits in a gap cut into its parent, like an
avatar status dot. Props: `placement`, `offset(X/Y)`, `cutoutSize`, `cutoutWidth/W`, `cutoutHeight/H`, `cutoutRadius`,
`cutoutGap`. Renders a `span`. It needs CSS `shape()`, which is Chromium 135+ and Safari 18.4+ and not yet in Firefox.

**Decision:** port it as a pattern (L2). Per ADR 0002 it would live in `packages/ark/float-gap`, but it has no state or
behaviour.

> Recommendation: ship it as a panda-ds pattern like the others, not as a `packages/ark` package, since it's pure CSS.
> Update ADR 0002 to say stateless extras are patterns or recipes. Document the browser support, with Firefox showing no
> cutout.

### aspect-ratio

Chakra and Panda: `ratio`. tl-ds enforces a single child (`Children.only`).

**Decision:** don't enforce a single child; the pattern works with any content.

> Recommendation: drop `Children.only`. It's React-only and Panda's pattern already sizes the first child.

### wrap, wrap-item

Chakra and Panda: `gap`, `rowGap`, `columnGap`, `align`, `justify`, `direction`. tl-ds adds `WrapItem`
(`display: flex; align-items: flex-start`) and a `0.5rem` default gap.

**Decision:** take the tl-ds pattern (L2) and add `WrapItem`.

### spacer

Same in all sources (`flex: 1`, `justifySelf: stretch`, `alignSelf: stretch`).

**Decision:** no conflicts.

### sticky

Chakra: a `chakra("div")` component with `position: sticky; top: 0`. tl-ds: the same as a `sticky` pattern. Panda has no
`sticky` pattern.

**Decision:** add the `sticky` pattern (L2).

### group

Already in React, Vue, Svelte and Solid here, from Chakra. tl-ds adds `align` (default `center`), `justify` (default
`flex-start`) and `wrap` props, and types `skip` the same way.

**Decision:** add `align`, `justify` and `wrap` as style shortcuts in every framework, with tl-ds's defaults.

> Recommendation: yes, but as recipe defaults (`alignItems: center`) rather than component props, so they also work
> through `ButtonGroup` and the other frameworks without extra code. Then `align`, `justify` and `wrap` are just the
> normal style props.

### separator

Chakra: recipe with `variant` (`solid`, `dashed`, `dotted`), `size`, `orientation`, rendered as a `span` with
`role="separator"` and `aria-orientation`. tl-ds: the same, with `transformProps` that switches the role to
`presentation` for responsive orientations. panda-ds already has the `separator` recipe; no framework component yet.

**Decision:** take tl-ds's role handling (a responsive `orientation` object renders `role="presentation"`).

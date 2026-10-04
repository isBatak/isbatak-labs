# @isbatak/zag-masonry

Core logic for the masonry widget implemented as a state machine, built on [Zag](https://zagjs.com).

Lays items of different heights out in columns, like Pinterest. Modeled on
[MUI's Masonry](https://mui.com/material-ui/react-masonry/).

- Each item goes to the shortest column, or fills the columns in order with `sequential`
- A fixed number of columns, a minimum column width, or a column count set from CSS per breakpoint
- Items can span several columns
- Re-lays out when the root or any item resizes (images loading, content expanding) and when items are added or removed
- Renders as a plain CSS grid until measured, so server-rendered markup is readable before hydration
- RTL support

## Installation

```sh
pnpm add @isbatak/zag-masonry
```

## Anatomy

```
root
└─ item
```

Items must be direct children of the root. Use `masonry.machine` and `masonry.connect` with the Zag adapter for your
framework (`@zag-js/react`, `@zag-js/vue`, `@zag-js/solid`, `@zag-js/svelte`, …).

## Styling

- The root is a CSS grid. Set `columns` and `gap`, or leave them unset and set `--masonry-columns` and `gap` from CSS,
  for example per breakpoint.
- Once measured, items are absolutely positioned inside their grid columns, so the root gets `position: relative` and
  `[data-measured]`, and each item gets `data-column`.
- Add a transition on `top` to animate items moving between positions.

## License

MIT © Ivica Batinic

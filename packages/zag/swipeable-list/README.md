# @isbatak/zag-swipeable-list

Core logic for the swipeable-list widget implemented as a state machine, built on [Zag](https://zagjs.com).

Swipe a list item to reveal actions on either side, like Mail on iOS. Inspired by
[react-swipeable-list](https://github.com/marekrozmus/react-swipeable-list),
[react-swipe-actions](https://github.com/ncdai/react-primitives/tree/main/packages/react-swipe-actions) and
[React Bits Swipe Row](https://reactbits.dev/c/micro/swipe-row).

- One machine per list, only one item open at a time
- Actions on the `start` and/or `end` side, RTL aware
- Full swipe runs the outermost action of a side
- Rubber-band resistance and a flick spring (`snapBounce`)
- Keyboard (`ArrowLeft`, `ArrowRight`, `Escape`) and click-outside dismissal

## Installation

```sh
pnpm add @isbatak/zag-swipeable-list
```

## Anatomy

```
root
└─ item
   ├─ itemActions (side="start")
   │  └─ itemAction
   ├─ itemContent
   └─ itemActions (side="end")
      └─ itemAction
```

Use `swipeableList.machine` and `swipeableList.connect` with the Zag adapter for your framework (`@zag-js/react`,
`@zag-js/vue`, `@zag-js/solid`, `@zag-js/svelte`, …).

## Styling

- `itemContent` needs an opaque background, it covers the actions while closed.
- `itemAction` needs a width, the actions are measured to decide how far an item opens.
- The outermost action of a side is the first `start` action or the last `end` action. Grow it while
  `[data-part=item-actions][data-armed]` to flood the row during a full swipe.
- The item exposes the live offset as the `--swipe-offset` CSS variable.

## License

MIT © Ivica Batinic

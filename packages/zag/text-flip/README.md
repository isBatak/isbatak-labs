# @isbatak/zag-text-flip

Core logic for the text flip widget implemented as a state machine, built on [Zag](https://zagjs.com).

Cycles through a set of words or phrases in place, flipping the next one in as the current one flips out.

- Flips on a timer, or on demand with `next`, `prev` and `goTo`
- Sizes to the widest item, so the surrounding text never shifts
- Hides every item but the current one from assistive technology
- Renders the first item as plain text until hydrated, so server-rendered markup is readable

## Installation

```sh
pnpm add @isbatak/zag-text-flip
```

## Anatomy

```
root
└─ item
```

Give each item its `index`. Use `textFlip.machine` and `textFlip.connect` with the Zag adapter for your framework
(`@zag-js/react`, `@zag-js/vue`, `@zag-js/solid`, `@zag-js/svelte`, …).

## Styling

- The root is an inline grid and every item sits in the same cell, so the root is as wide as the widest item.
- Each item gets `data-state`: `visible` for the first item before any flip, `entering` for the current item, `exiting`
  for the one it replaced, and `hidden` for the rest. Hidden items get `visibility: hidden`.
- Animate `[data-state=entering]` and `[data-state=exiting]` with keyframes. Hide `[data-state=exiting]` when the user
  prefers reduced motion.
- The root gets `data-state` set to `playing` or `paused`.

## License

MIT © Ivica Batinic

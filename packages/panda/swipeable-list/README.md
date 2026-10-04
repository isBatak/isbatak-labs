# @isbatak/panda-swipeable-list

[Panda CSS](https://panda-css.com) slot recipe and preset for the swipeable list. The recipe builds on Chakra-style
semantic tokens (`fg`, `bg`, `colorPalette.*`, `l2`/`l3` radii).

## Installation

```sh
pnpm add -D @isbatak/panda-swipeable-list
```

## Usage

Add the package to `presets` by name:

```ts
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: ["@pandacss/preset-base", "@isbatak/panda-swipeable-list"],
})
```

Or import the preset, which TypeScript can check:

```ts
import { swipeableListPreset } from "@isbatak/panda-swipeable-list"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: ["@pandacss/preset-base", swipeableListPreset],
})
```

Or extend your theme with `swipeableListRecipe` under `theme.extend.slotRecipes.swipeableList`.

The default look follows iOS: rows sit bare and pick up a rounded `bg.muted` fill as soon as they are swiped, and
actions are capsules centered behind them. `variant` (`elevated`, `outline`, `subtle`) turns rows into cards instead,
and `size` (`sm`, `md`, `lg`) scales everything.

Actions are painted with `colorPalette.solid`, so set `colorPalette` on each action (for example
`css({ colorPalette: "red" })`).

Actions sit behind the content, pinned to the row edge. The machine sets `--swipe-action-progress` on every action, so
they appear one after another from the outer edge in: each scales and fades in from 0 to 1 before the next one starts.
Once all of them are shown, only the outermost one stretches. When a full swipe is armed its icon slides to the inner
edge and the other actions dim. The gap, action size and radius are CSS variables (`--swipe-actions-gap`,
`--swipe-action-width`, `--swipe-action-height`, `--swipe-radius`), so they can be overridden responsively.

## License

MIT © Ivica Batinic

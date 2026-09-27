# @isbatak/panda-swipeable-list

[Panda CSS](https://panda-css.com) slot recipe and preset for the swipeable list. The recipe builds on Chakra-style
semantic tokens (`fg`, `bg`, `colorPalette.*`, `l2`/`l3` radii).

## Installation

```sh
pnpm add -D @isbatak/panda-swipeable-list
```

## Usage

```ts
import { swipeableListPreset } from "@isbatak/panda-swipeable-list"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: ["@pandacss/preset-base", swipeableListPreset],
})
```

Or extend your theme with `swipeableListRecipe` under `theme.extend.slotRecipes.swipeableList`.

Variants: `variant` (`elevated`, `outline`, `subtle`) and `size` (`sm`, `md`, `lg`).

Actions are painted with `colorPalette.solid`, so set `colorPalette` on each action (for example
`css({ colorPalette: "red" })`). Content and actions are separate rounded cards with a gap between them.

Actions sit behind the content, pinned to the row edge, and stretch to fill the space the swipe reveals. The machine
exposes that space as `--swipe-start-distance` / `--swipe-end-distance`, so the layout follows in CSS without any
observers. An action's children fade and scale in with `--swipe-progress`. During a full swipe the other actions
collapse and the outermost one fills the row. The gap, action width and radius are CSS variables (`--swipe-actions-gap`,
`--swipe-action-width`, `--swipe-radius`), so they can be overridden responsively.

## License

MIT © Ivica Batinic

# @isbatak/panda-swipeable-list

[Panda CSS](https://panda-css.com) slot recipe and preset for the swipeable list. The recipe builds on Chakra-style
semantic tokens (`fg`, `bg.muted`, `colorPalette.*`, `l3` radii).

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

Variants: `variant` (`outline`, `plain`) and `size` (`sm`, `md`, `lg`).

Actions are painted with `colorPalette.solid`, so set `colorPalette` on each action (for example
`css({ colorPalette: "red" })`). During a full swipe the outermost action grows to fill the row.

## License

MIT © Ivica Batinic

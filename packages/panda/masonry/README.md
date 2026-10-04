# @isbatak/panda-masonry

[Panda CSS](https://panda-css.com) slot recipe and preset for the masonry layout.

## Installation

```sh
pnpm add -D @isbatak/panda-masonry
```

## Usage

```ts
import { masonryPreset } from "@isbatak/panda-masonry"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: ["@pandacss/preset-base", masonryPreset],
})
```

Or extend your theme with `masonryRecipe` under `theme.extend.slotRecipes.masonry`.

The recipe only sets the spacing: `gap` (`none`, `sm`, `md`, `lg`) maps to the `spacing` tokens. Items are yours to
style. To change the number of columns per breakpoint, leave the `columns` prop unset and set `--masonry-columns` on the
root, for example `css({ "--masonry-columns": { base: "2", md: "3" } })`.

## License

MIT © Ivica Batinic

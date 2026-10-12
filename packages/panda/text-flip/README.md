# @isbatak/panda-text-flip

[Panda CSS](https://panda-css.com) slot recipe and preset for the text flip.

## Installation

```sh
pnpm add -D @isbatak/panda-text-flip
```

## Usage

Add the package to `presets` by name:

```ts
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: ["@pandacss/preset-base", "@isbatak/panda-text-flip"],
})
```

Or import the preset, which TypeScript can check:

```ts
import { textFlipPreset } from "@isbatak/panda-text-flip"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: ["@pandacss/preset-base", textFlipPreset],
})
```

Or extend your theme with `textFlipRecipe` under `theme.extend.slotRecipes.textFlip` and `textFlipKeyframes` under
`theme.extend.keyframes`.

The recipe blurs the next item up into place as the current one blurs out above it, and skips the animation when the
user prefers reduced motion. It uses the `slower` duration and `ease-in-smooth` easing tokens.

## License

MIT © Ivica Batinic

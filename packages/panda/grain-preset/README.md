# @isbatak/panda-grain-preset

[Panda CSS](https://panda-css.com) preset for film grain backgrounds. The grain is an SVG `feTurbulence` tile, inlined
as a data URI, with one tile for light mode and one for dark mode, so it reads the same on both. No images to ship and
no JavaScript at runtime.

Based on [Noise](https://craft.gustavofior.com/noise) by Gustavo Fior.

## Installation

```sh
pnpm add -D @isbatak/panda-grain-preset
```

## Usage

```ts
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: ["@pandacss/preset-base", "@isbatak/panda-grain-preset"],
})
```

```tsx
<Box layerStyle="grain" bg="gray.100" />
```

To combine grain with other backgrounds, use the tokens directly:

```ts
css({
  backgroundImage: "{assets.grain}, linear-gradient(to bottom, white, black)",
  backgroundSize: "{sizes.grain}, auto",
})
```

## Options

Call `grainPreset` to tune the grain:

```ts
import { grainPreset } from "@isbatak/panda-grain-preset"

export default defineConfig({
  presets: ["@pandacss/preset-base", grainPreset({ frequency: 0.6, dark: { white: 0.3, black: 1.4 } })],
})
```

| Option      | Default                        | Effect                                                                                  |
| ----------- | ------------------------------ | --------------------------------------------------------------------------------------- |
| `size`      | `192`                          | Tile size in px, and the `sizes.grain` token.                                           |
| `frequency` | `0.8`                          | `feTurbulence` base frequency. Lower values give bigger, softer specks.                 |
| `light`     | `{ white: 2, black: 0.24 }`    | Speck strength in light mode. Scale both values together to keep the average lightness. |
| `dark`      | `{ white: 0.24, black: 1.12 }` | Speck strength in dark mode.                                                            |

White specks are hard to see on a light surface and black ones on a dark surface, so each mode raises the strength of
the speck that would otherwise disappear.

## API

| Export                 | Description                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| `grainPreset(options)` | The preset. The default export is `grainPreset()`.                                               |
| `grainTheme(options)`  | The `tokens`, `semanticTokens` and `layerStyles` the preset adds, to spread into your own theme. |
| `createGrain(options)` | A single tile as an SVG data URI.                                                                |

## License

MIT © Ivica Batinic

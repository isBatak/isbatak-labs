# @isbatak/panda-theme-analog

An analog hardware design system for [Panda CSS](https://panda-css.com): grainy dark surfaces, raised and pressed
controls, and remote-control style buttons. It is built with `panda lib` like [`@isbatak/panda-ds`](../../ds) and reuses
its foundations.

## Usage

With the default palettes (`gray` neutral, `red` accent), use the prebuilt design system:

```ts
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  designSystem: "@isbatak/panda-theme-analog",
  preflight: true,
  include: ["./src/**/*.{ts,tsx}"],
})
```

Styles are imported from the package itself, like any Panda design system:

```tsx
import { css } from "@isbatak/panda-theme-analog/css"
import { button } from "@isbatak/panda-theme-analog/recipes"
```

## Choosing the neutral and accent

Pick any two palettes from `@isbatak/panda-theme-analog/colors` and add the preset to your own config:

```ts
import { analog } from "@isbatak/panda-theme-analog/theme"
import { orange, sand } from "@isbatak/panda-theme-analog/colors"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: ["@pandacss/preset-base", analog({ neutral: sand, accent: orange })],
  preflight: true,
  include: ["./src/**/*.{ts,tsx}"],
  outdir: "styled-system",
})
```

| Neutral (19 steps, `25` to `950`)                                   | Accent (11 steps, `50` to `950`)                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `gray`, `sand`, `stone`, `taupe`, `slate`, `olive`, `sage`, `mauve` | `red`, `orange`, `amber`, `yellow`, `green`, `teal`, `cyan`, `blue`, `purple`, `pink` |

A neutral needs the in-between steps (`75`, `150`, `850`, …) the surfaces use, so it is typed `NeutralPalette`. Make
your own with `neutralPalette(hue, chroma, darkChroma)` or `accentPalette(hue, chroma)`.

## What it inherits and what it changes

Everything comes from `@isbatak/panda-ds` except what lives in `src/`:

- `src/colors.ts`: the palettes above. The theme's only palette tokens are `neutral` and `accent`
- `src/semantic-tokens`: light and dark values for the elevation colors and shadows, `bg`, `fg`, `border` (including
  `error`, `warning`, `success` and `info`), and the `neutral` and `accent` color palettes (`colorPalette="accent"`).
  They replace the DS semantic colors; every value references a palette step
- `src/recipes`: recipes that replace the DS ones. `button` is a raised hardware key with `shape` (`rounded`, `circle`),
  `size` (`sm` to `xl`) and `icon`. `alert`, `checkbox`, `checkbox-card`, `checkmark`, `code-block`, `radio-card`,
  `radio-group`, `radiomark`, `scroll-area`, `select` and `toast` are copies of the DS recipes that name a palette, with
  `gray`, `green`, `blue` and `teal` changed to `neutral` and `red` and `orange` to `accent`
- `src/layer-styles.ts`: one grained layer style per elevation level, plus `pressed` and `grain`
- `src/global-css.ts`: the grain over `bg` on `html`

Foundation tokens (spacing, sizes, radii, fonts, …), all other recipes, conditions, utilities and patterns are the DS
ones.

## Elevation

Each level has a color (`elevation.<level>`), a shadow (`elevation.<level>`) and a grained layer style
(`layerStyle: "elevation.<level>"`), in light and dark mode:

| Level      | Use                          |
| ---------- | ---------------------------- |
| `sunken`   | wells, inputs                |
| `base`     | the page (`bg`)              |
| `raised`   | keys, cards                  |
| `floating` | popovers, menus (`bg.panel`) |
| `overlay`  | dialogs, drawers             |

`pressed` is the active state of a raised key.

## Light and dark mode

Light mode is a warm off-white, dark mode is charcoal. Dark mode follows the DS `.dark` class. The grain has a tile per
mode, because the same speck needs a different opacity on a light and a dark surface to read the same.

The grain tokens (`assets.grain`, `sizes.grain` and the `grain` layer style) come from
[`@isbatak/panda-grain-preset`](../../grain-preset).

## Studio

From the repo root, `pnpm studio:analog` opens Panda Studio on this design system.

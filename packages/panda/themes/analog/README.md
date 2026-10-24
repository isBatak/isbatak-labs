# @isbatak/panda-theme-analog

Analog dark theme for [`@isbatak/panda-ds`](../../ds), shipped as a Panda preset built on Panda
[theme variants](https://panda-css.com/docs/themes/theme-variants).

## Usage

```ts
import { createAnalogPreset } from "@isbatak/panda-theme-analog"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  presets: [createAnalogPreset({ grainUrl: "/themes/analog/grain.png" })],
})
```

```tsx
<main data-panda-theme="analog" className="dark">
  …
</main>
```

## What the preset adds

- `themes.analog`: semantic color and shadow overrides, scoped to `[data-panda-theme=analog]`
- `staticCss.themes`: the variant is always emitted
- `_analog` condition for theme-specific styles in recipes or `css()`
- `assets.grain` token pointing at the repeating transparent PNG noise tile (`grainUrl` option, default `/grain.png`)
- `raised`, `pressed` and `recessed` shadows and layer styles for skeuomorphic surfaces
- Global styles that put the grain over `bg` on the themed root

Serve `@isbatak/panda-theme-analog/grain.png` from your app at `grainUrl`, e.g. by copying it into `public/` or from a
route handler. It is a 512px seamless tile of 2×2 px specks drawn at 256px, so it stays crisp on 1x and 2x screens.
Regenerate it with `pnpm generate:grain`.

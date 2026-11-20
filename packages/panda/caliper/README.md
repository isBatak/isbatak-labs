# @isbatak/panda-caliper

The `caliper` Panda CSS slot recipe and a preset that adds it. It styles the [`@isbatak/ark-caliper`](../../ark/caliper)
parts, which draw dimension lines, hatching and outlines over live UI.

Docs and demos: https://isbatak.dev/tools/caliper

## Installation

```sh
pnpm add @isbatak/panda-caliper @isbatak/ark-caliper
```

## Usage

Add the preset to your Panda config. It reads the `bg.subtle`, `border.muted`, `fg.muted` and `colorPalette.*` semantic
tokens, as defined by `@isbatak/panda-ds`.

```ts
import { caliperPreset } from "@isbatak/panda-caliper"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: [caliperPreset],
})
```

Then bind the parts to the recipe in your app:

```tsx
import { Caliper as ArkCaliper } from "@isbatak/ark-caliper/react"
import { createSlotRecipeContext } from "styled-system/jsx"
import { caliper } from "styled-system/recipes"

const { withProvider, withContext } = createSlotRecipeContext(caliper)

export const Root = withProvider(ArkCaliper.Root, "root")
export const Dimension = withContext(ArkCaliper.Dimension, "dimension")
```

The bound parts take Panda style props, including `colorPalette`. The docs list every part.

## License

MIT

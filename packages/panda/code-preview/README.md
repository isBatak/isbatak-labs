# @isbatak/panda-code-preview

[Panda CSS](https://panda-css.com) slot recipe and preset for `@isbatak/ark-code-preview`.

## Installation

```sh
pnpm add -D @isbatak/panda-code-preview
```

## Usage

```ts
import { codePreviewPreset } from "@isbatak/panda-code-preview"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: ["@pandacss/preset-base", codePreviewPreset],
  cssVarRoot: ":where(:root, :host, .light)",
})
```

Or extend your theme with `codePreviewRecipe` under `theme.extend.slotRecipes.codePreview`.

The recipe uses the `@isbatak/panda-ds` semantic tokens. It shows and hides icons by their `data-icon` attribute: `moon`
and `sun` in the theme trigger, `copy` and `check` in the copy trigger. `cssVarRoot` adds the light token values to
`.light`, so a light preview works on a dark page.

## License

MIT © Ivica Batinic

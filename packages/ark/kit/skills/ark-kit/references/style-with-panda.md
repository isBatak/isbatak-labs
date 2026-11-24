# Style with Panda

A tag can be a component. Pass a Panda slot recipe part built on an Ark element, and the part gets the recipe's styles,
its variants and style props, while Ark keeps `render`, `asChild` and the part's state:

```tsx
import { ark } from "@ark-ui/react/factory"
import { createParts } from "@isbatak/ark-kit/react"
import * as checkbox from "@zag-js/checkbox"
import { createSlotRecipeContext } from "styled-system/jsx"
import { checkbox as recipe } from "styled-system/recipes"

const { withProvider, withContext } = createSlotRecipeContext(recipe)

const Checkbox = createParts(checkbox, {
  root: withProvider(ark.label, "root"),
  control: withContext(ark.div, "control"),
  label: withContext(ark.span, "label"),
  hiddenInput: "input",
})
```

- **Wrap `ark.<tag>`.** Panda's `styled` has no `render` or `asChild`, so the Ark element underneath carries them.
- **`withProvider` on the root, `withContext` on the rest**, with the recipe slot named like the part. Zag anatomy names
  and slot names line up, so the slot is usually the tag key.
- **Forward CSS-named props.** Panda reads any prop named like a CSS property as a style prop. A part prop such as
  `order` or `overlay` needs `forwardProps`:

  ```tsx
  withContext(ark.div, "dimension", { forwardProps: ["order"] })
  ```

  To find them, check each key of the primitive's `props` and the part `*Props` lists with `isCssProperty` from
  `styled-system/jsx/is-valid-prop`.

- **Already-built parts** take the same wrappers from outside: `withContext(Caliper.Frame, "frame")` or
  `styled(Caliper.Frame)`.

The styles come from the app's own `styled-system`, so the binding lives in the app or its UI package, not in the
package that defines the primitive.

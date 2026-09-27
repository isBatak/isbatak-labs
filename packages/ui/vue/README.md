# @isbatak/ui-vue

Styled [Ark UI](https://ark-ui.com) Vue components built on the [`@isbatak/panda-ds`](../../panda/ds) design system.

```ts
import { Button } from "@isbatak/ui-vue/button"
import { Tabs } from "@isbatak/ui-vue/tabs"
```

Available: `accordion`, `badge`, `button`, `group`, `hover-card`, `loader`, `menu`, `popover`, `radio-card`,
`segment-group`, `select`, `slider`, `spinner`, `tabs`, `tooltip`, `tour` and `wheel-picker`.

The Panda `jsx` helpers are generated for Vue in this package and exported from `@isbatak/ui-vue/jsx`.

`Button` and `Loader` take the spinner as a `spinner` slot, and `loadingText` / `text` as strings:

```vue
<ButtonGroup size="sm" variant="outline" attached>
  <Button>Previous</Button>
  <Button loading loading-text="Saving">Next</Button>
</ButtonGroup>
```

# @isbatak/vue-ui

Styled [Ark UI](https://ark-ui.com) Vue components built on the [`@isbatak/panda-ds`](../../panda/ds) design system.

```ts
import { Button } from "@isbatak/vue-ui/button"
import { Tabs } from "@isbatak/vue-ui/tabs"
```

Available: `accordion`, `badge`, `button`, `group`, `hover-card`, `loader`, `menu`, `popover`, `radio-card`,
`segment-group`, `select`, `slider`, `spinner`, `tabs`, `tooltip` and `tour`.

The Panda `jsx` helpers are generated for Vue in this package and exported from `@isbatak/vue-ui/jsx`.

`Button` and `Loader` take the spinner as a `spinner` slot, and `loadingText` / `text` as strings:

```vue
<ButtonGroup size="sm" variant="outline" attached>
  <Button>Previous</Button>
  <Button loading loading-text="Saving">Next</Button>
</ButtonGroup>
```

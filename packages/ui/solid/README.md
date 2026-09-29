# @isbatak/solid-ui

Styled [Ark UI](https://ark-ui.com) Solid components built on the [`@isbatak/panda-ds`](../../panda/ds) design system.

```ts
import { Button } from "@isbatak/solid-ui/button"
import { Tabs } from "@isbatak/solid-ui/tabs"
```

Available: `accordion`, `badge`, `button`, `group`, `hover-card`, `loader`, `menu`, `popover`, `radio-card`,
`segment-group`, `select`, `slider`, `spinner`, `tabs`, `tooltip` and `tour`.

The Panda `jsx` helpers are generated for Solid in this package and exported from `@isbatak/solid-ui/jsx`.

`Group` receives its children as DOM elements, so its `skip` callback is called with an `HTMLElement`:

```tsx
<ButtonGroup size="sm" variant="outline" attached>
  <Button>Previous</Button>
  <Button loading loadingText="Saving">
    Next
  </Button>
</ButtonGroup>
```

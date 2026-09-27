# @isbatak/ui-react

Styled [Ark UI](https://ark-ui.com) React components built on the [`@isbatak/panda-ds`](../../panda/ds) design system.

```tsx
import { Button } from "@isbatak/ui-react/button"
import { Tabs } from "@isbatak/ui-react/tabs"
```

Available: `accordion`, `badge`, `button`, `group`, `hover-card`, `loader`, `menu`, `popover`, `radio-card`,
`segment-group`, `select`, `slider`, `spinner`, `tabs`, `tooltip`, `tour` and `wheel-picker`.

`button` also exports `IconButton`, `CloseButton` and `ButtonGroup`, which passes its `size` and `variant` to the
buttons inside it:

```tsx
<ButtonGroup size="sm" variant="outline" attached>
  <Button>Previous</Button>
  <Button loading>Next</Button>
</ButtonGroup>
```

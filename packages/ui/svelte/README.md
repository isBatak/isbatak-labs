# @isbatak/svelte-ui

Styled [Ark UI](https://ark-ui.com) Svelte components built on the [`@isbatak/panda-ds`](../../panda/ds) design system.

```ts
import { Button } from "@isbatak/svelte-ui/button"
import { Tabs } from "@isbatak/svelte-ui/tabs"
```

Available: `accordion`, `badge`, `button`, `group`, `hover-card`, `loader`, `menu`, `popover`, `radio-card`,
`segment-group`, `select`, `slider`, `spinner`, `tabs`, `tooltip` and `tour`.

Panda has no `jsx` helpers for Svelte, so each part applies its recipe through `class` and shares slot styles with
Svelte context. There are no style props; pass extra classes with `class`, including `css()` results. Roots forward
`bind:value` or `bind:open` to Ark.

`Button` and `Loader` take the spinner as a `spinner` snippet, and `loadingText` / `text` as strings:

```svelte
<ButtonGroup size="sm" variant="outline" attached>
  <Button>Previous</Button>
  <Button loading loadingText="Saving">Next</Button>
</ButtonGroup>
```

Requires Svelte 5.40 or newer.

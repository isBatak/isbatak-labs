# @isbatak/svelte-ui

Styled [Ark UI](https://ark-ui.com) Svelte components built on the [`@isbatak/panda-ds`](../../panda/ds) design system.

```ts
import { Button } from "@isbatak/svelte-ui/button"
import { Tabs } from "@isbatak/svelte-ui/tabs"
```

Available: `accordion`, `badge`, `box`, `button`, `group`, `hover-card`, `icon`, `loader`, `menu`, `popover`,
`radio-card`, `segment-group`, `select`, `slider`, `spinner`, `tabs`, `tooltip` and `tour`.

Panda has no `jsx` helpers for Svelte, so each part applies its recipe through `class` and shares slot styles with
Svelte context. Pass extra classes with `class`, including `css()` results. Roots forward `bind:value` or `bind:open` to
Ark.

`Box` takes Panda style props, conditions and the `css` prop, and renders the tag in `as` (a `div` by default). Panda
extracts its styles from Svelte templates like it does from JSX:

```svelte
<Box as="button" type="button" px="4" py="2" borderWidth="1px" _hover={{ bg: "bg.subtle" }}>Save</Box>
```

`Button` and `Loader` take the spinner as a `spinner` snippet, and `loadingText` / `text` as strings:

```svelte
<ButtonGroup size="sm" variant="outline" attached>
  <Button>Previous</Button>
  <Button loading loadingText="Saving">Next</Button>
</ButtonGroup>
```

Requires Svelte 5.40 or newer.

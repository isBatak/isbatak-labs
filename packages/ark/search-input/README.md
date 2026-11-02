# @isbatak/ark-search-input

[Ark UI](https://ark-ui.com) style search input components for React, Solid, Vue and Svelte, built on Zag.js helpers
rather than a state machine.

```tsx
import { SearchInput } from "@isbatak/ark-search-input/react"

;<SearchInput.Root>
  <SearchInput.Label>Search</SearchInput.Label>
  <SearchInput.Control>
    <SearchInput.Icon>…</SearchInput.Icon>
    <SearchInput.Input />
    <SearchInput.ClearTrigger>…</SearchInput.ClearTrigger>
  </SearchInput.Control>
</SearchInput.Root>
```

Also available from `/solid`, `/vue` and `/svelte`. Parts: `Root`, `RootProvider`, `Label`, `Control`, `Icon`, `Input`,
`ClearTrigger` and `Context`, plus `useSearchInput` and `useSearchInputContext`. The anatomy is exported from
`/anatomy`.

- `Input` is a native `<input type="search">`. Escape clears it while it has focus
- `ClearTrigger` is hidden while the value is empty and focuses the input after clearing
- `Icon` is hidden from assistive technology, and clicking it focuses the input
- Control the value with `value` and `onValueChange`, or `v-model` in Vue
- Every part gets `data-empty`, `data-disabled`, `data-readonly` and `data-invalid` for styling

## License

MIT © Ivica Batinic

# @isbatak/ark-masonry

[Ark UI](https://ark-ui.com) style masonry components for React, Solid, Vue and Svelte, built on `@isbatak/zag-masonry`.

```tsx
import { Masonry } from "@isbatak/ark-masonry/react"

;<Masonry.Root columns={3} gap={16}>
  <Masonry.Item value="1">…</Masonry.Item>
  <Masonry.Item value="2" span={2}>
    …
  </Masonry.Item>
</Masonry.Root>
```

Also available from `/solid`, `/vue` and `/svelte`. Parts: `Root`, `RootProvider`, `Item` and `Context`, plus
`useMasonry` and `useMasonryContext`.

## License

MIT © Ivica Batinic

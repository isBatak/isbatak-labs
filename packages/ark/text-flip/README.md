# @isbatak/ark-text-flip

[Ark UI](https://ark-ui.com) style text flip components for React, Solid, Vue and Svelte, built on
`@isbatak/zag-text-flip`.

```tsx
import { TextFlip } from "@isbatak/ark-text-flip/react"

;<TextFlip.Root interval={2000}>
  <TextFlip.Item index={0}>React</TextFlip.Item>
  <TextFlip.Item index={1}>Vue</TextFlip.Item>
  <TextFlip.Item index={2}>Svelte</TextFlip.Item>
</TextFlip.Root>
```

Also available from `/solid`, `/vue` and `/svelte`. Parts: `Root`, `RootProvider`, `Item` and `Context`, plus
`useTextFlip` and `useTextFlipContext`.

## License

MIT © Ivica Batinic

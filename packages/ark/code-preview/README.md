# @isbatak/ark-code-preview

[Ark UI](https://ark-ui.com) style code preview components for React, Solid, Vue and Svelte, built on Zag.js helpers.

```tsx
import { CodePreview } from "@isbatak/ark-code-preview/react"

;<CodePreview.Root code={source}>
  <CodePreview.Stage>
    <CodePreview.Preview>…</CodePreview.Preview>
    <CodePreview.Resizer />
  </CodePreview.Stage>
  <CodePreview.Content>…</CodePreview.Content>
  <CodePreview.Toolbar>
    <CodePreview.Trigger>Code</CodePreview.Trigger>
    <CodePreview.ThemeTrigger />
    <CodePreview.DirTrigger />
    <CodePreview.CopyTrigger>Copy</CodePreview.CopyTrigger>
  </CodePreview.Toolbar>
</CodePreview.Root>
```

Also available from `/solid`, `/vue` and `/svelte`. Parts: `Root`, `RootProvider`, `Stage`, `Preview`, `Resizer`,
`Content`, `Toolbar`, `Trigger`, `ThemeTrigger`, `DirTrigger`, `CopyTrigger` and `Context`, plus `useCodePreview` and
`useCodePreviewContext`. `Preview` wraps its children in Ark's `LocaleProvider`, so `DirTrigger` flips the Ark
components inside it to right-to-left. The anatomy is exported from `/anatomy`.

## License

MIT © Ivica Batinic

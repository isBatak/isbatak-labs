# @isbatak/icons

[Boring Icons](https://www.npmjs.com/package/@boring-icons/react) as a single SVG sprite, built with
[ikona](https://www.npmjs.com/package/@ikona/cli), plus [extra icons](./extra) that Boring Icons doesn't have, such as
`copy`, `sun`, `moon` and brand logos (`brand-react`, `brand-github`, …). Every UI package wraps it in an `Icon`
component that takes a typed `name`:

```tsx
import { Icon } from "@isbatak/react-ui/icon"

export const Next = () => <Icon name="arrow-right" size="sm" />
```

The same `Icon` is exported from `@isbatak/preact-ui/icon`, `@isbatak/solid-ui/icon`, `@isbatak/svelte-ui/icon` and
`@isbatak/vue-ui/icon`. For Lit and plain HTML, `@isbatak/lit-ui/icon` registers the `<ib-icon>` custom element:

```html
<ib-icon name="arrow-right" size="sm"></ib-icon>
```

Without any component, render the SVG yourself with `spriteUrl` and the `icon` recipe:

```ts
import { spriteUrl } from "@isbatak/icons"
import { icon } from "@isbatak/panda-ds/recipes"

const html = `<svg aria-hidden="true" class="${icon({ size: "sm" })}"><use href="${spriteUrl}#arrow-right"></use></svg>`
```

Each one renders `<svg><use href="sprite.svg#name" /></svg>`, sized by the `icon` recipe (`1em` by default, so it
follows the font size) and colored with `currentColor`.

This package exports:

- `spriteUrl`: the built-in sprite's URL, resolved with `new URL(…, import.meta.url)` so any bundler emits it as an
  asset
- `setIconSprite(url)` / `getIconSprite()`: replace the built-in sprite with your own; every `Icon` reads it
- `preloadIconSprite()`: adds a `<link rel="preload">` for the active sprite, for Lit and plain HTML. The other UI
  packages export an `IconSpritePreload` component.
- `iconNames`: every built-in icon name
- `componentIconNames` / `ComponentIconName`: the names components draw themselves (Select, Close Button, Password
  Input, Search Input), which your own sprite must include
- `IconName`: the union of icon names, or your own names plus `ComponentIconName` once you augment `IconRegistry` with
  `iconName`
- `BuiltinIconName`: the built-in names, whatever `IconRegistry` says
- `@isbatak/icons/sprite.svg`: the sprite file, to serve it yourself

The [Icons docs](../../../apps/www/content/icons/setup/index.mdx) show how to bring your own sprite.

## Updating the icons

```sh
pnpm --filter @isbatak/icons generate
```

This renders each `@boring-icons/react` component to an SVG in `svg/` (git-ignored), adds the SVGs in `extra/`, then
runs ikona, which writes the sprite and the name types to `generated/`. It also writes the
[`find-icons` skill](../../../plugins/isbatak-icons/skills/find-icons/SKILL.md)'s catalog from
[`tags.json`](./tags.json), the search keywords for every icon, and fails when an icon has no tags. Commit `generated/`
and the catalog.

To add an icon Boring Icons doesn't have, put its SVG in `extra/` with a stroke width of 1.5, list its source in
[`extra/README.md`](./extra/README.md), add its tags to `tags.json`, and run `generate`. An extra icon can't reuse a
Boring Icons name, and a restyled Tabler icon goes in `scripts/import-extra-icons.mjs` rather than being copied by hand.

To draw a new one, use the [`boring-icons` skill](../../../plugins/isbatak-icons/skills/boring-icons/SKILL.md). Run its
scripts from this folder, where `@boring-icons/react` resolves, and pass `--sprite generated/sprite.svg` to compare
against the extra icons too.

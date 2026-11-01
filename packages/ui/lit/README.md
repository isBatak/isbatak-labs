# @isbatak/lit-ui

Lit custom elements built on the [`@isbatak/panda-ds`](../../panda/ds) design system. They work in Lit and in plain HTML
or vanilla TypeScript.

```ts
import "@isbatak/lit-ui/icon"
```

```html
<ib-icon name="arrow-right" size="sm"></ib-icon>
```

Available: `icon`.

Every element is prefixed with `ib-`, because custom element names need a hyphen and share one global registry. The
elements render into the light DOM, so the Panda classes in your stylesheet and `currentColor` apply to them.

Panda can't see recipe variants inside Lit templates, so add the recipes these elements use to `staticCss`:

```ts
staticCss: {
  recipes: { icon: ["*"] },
}
```

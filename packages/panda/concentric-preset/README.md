# @isbatak/panda-concentric-preset

[Panda CSS](https://panda-css.com) preset for nested rounded corners that line up. Give a child `rounded="concentric"`
and its radius follows its rounded parent:

```
inner radius = outer radius - gap
```

The gap is the parent's padding and border width, plus the padding and border of a wrapper in between and the child's
own margin. For `absolute` and `fixed` children it is the inset plus the parent's border width. Everything is computed
in CSS from the style props you already wrote, with no JavaScript, and it follows the parent through breakpoints and
states.

A port of [tailwindcss-concentric](https://github.com/diip3sh/tailwindcss-concentric) to Panda utilities.

## Installation

```sh
pnpm add -D @isbatak/panda-concentric-preset
```

## Usage

Add the preset after the base preset or design system:

```ts
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  presets: ["@pandacss/preset-base", "@isbatak/panda-concentric-preset"],
})
```

```tsx
<Box rounded="3xl" p="3" borderWidth="1px">
  <Box rounded="concentric" />
</Box>
```

## API

| Prop                                                                           | Effect                                                                             |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| `rounded="concentric"`                                                         | All four corners follow the nearest rounded ancestor.                              |
| `roundedTop`, `roundedRight`, `roundedBottom`, `roundedLeft`                   | Two corners on one side.                                                           |
| `roundedStart`, `roundedEnd`                                                   | Start or end corners. They flip under `dir="rtl"`.                                 |
| `roundedTopLeft`, `roundedTopRight`, `roundedBottomRight`, `roundedBottomLeft` | One physical corner.                                                               |
| `roundedStartStart`, `roundedStartEnd`, `roundedEndEnd`, `roundedEndStart`     | One logical corner.                                                                |
| `concentricGap="3"`                                                            | Explicit gap instead of the measured one, for spacing the preset cannot read.      |
| `concentricElliptical`                                                         | Per-axis radii when the parent's padding differs per axis.                         |
| `concentricSquircle`                                                           | `corner-shape: squircle` with a gap scaled to match. Put it on the parent as well. |
| `concentricFloor="xs"`                                                         | Minimum radius for every concentric descendant. Sets `--concentric-floor`.         |

All of them accept every Panda condition (`rounded={{ base: "lg", md: "concentric" }}`).

### Chains

Concentric elements pass their own radius and padding on, so nesting works up to nine rounded levels:

```tsx
<Box rounded="3xl" p="2">
  <Box rounded="concentric" p="2">
    <Box rounded="concentric" p="1">
      <Box rounded="concentric" />
    </Box>
  </Box>
</Box>
```

### Wrappers, margins and positioned elements

A wrapper without a radius passes its padding and border on. A negative margin makes the radius larger, for media that
bleeds to the parent's edge:

```tsx
<Box rounded="3xl" p="4">
  <Box mx="-4" mt="-4" roundedTop="concentric" />
</Box>
```

`absolute` and `fixed` children are measured by their insets from the parent's padding edge.

## What the preset reads

The radius comes from the nearest ancestor with an atomic radius class (`bdr*`, the class Panda generates for `rounded`
props). The gap comes from the padding, border width, `border` shorthand, margin, inset and `position` style props.

It does not see:

- **radii and padding from config recipes**, inline styles or global CSS. A recipe's root has no `bdr` class, so add a
  `rounded` prop to it (`<Card.Root rounded="l3">`) or use `concentricGap`;
- **a second padded wrapper on the same side, or margins on wrappers.** Give the outer wrapper `rounded="concentric"`;
- **percentage radii**, and `auto` margins count as 0;
- **hashed class names** (`hash: true`), since the preset finds rounded ancestors by class name.

## License

MIT © Ivica Batinic

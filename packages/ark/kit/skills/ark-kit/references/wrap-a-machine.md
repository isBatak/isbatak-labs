# Wrap a Zag machine

A Zag module (`machine`, `connect`, `props`, `anatomy`) is a primitive already. Pass it with one entry per part:

```tsx
import { createParts } from "@isbatak/ark-kit/react"
import * as checkbox from "@zag-js/checkbox"

const parts = createParts(checkbox, {
  root: "label",
  control: "div",
  indicator: "div",
  label: "span",
  hiddenInput: "input",
})

export const CheckboxRoot = parts.Root
export const CheckboxControl = parts.Control
```

`Root` takes the machine's props (`defaultChecked`, `onCheckedChange`, …), generates an `id` unless you pass one, starts
the machine and shares the api with the parts inside it. Leave out `root` and `Root` renders only its children. Parts of
a machine render only inside `Root`.

## Choose each part's element

Use the element the part's role needs: `label` for a root that labels its input, `button` for a trigger, `input` for a
hidden input, `figure` and `figcaption` for a figure. Check what the getter returns (`normalize.button`,
`normalize.input`, …); the tag matches it.

## Parts that take props

A getter with an argument, like `getItemProps({ value })` or `getFrameProps({ magnify })`, needs the full form:

```tsx
frame: { tag: "div", props: caliper.frameProps },
```

- `props` lists the keys passed to the getter. Use the module's own list (`caliper.frameProps`, `radio.itemProps`, …),
  so every key the getter reads is split off. Every other prop goes on the element.
- `resolve(own, api)` changes those props before the getter runs. Defaults that belong to the component go in the
  machine's `connect` instead.
- `children(api, props)` renders elements before the user's children, for markup the part always needs, like an inner
  `svg`.

## A machine whose parts also render alone

When a part should work outside `Root`, like a mark drawn without a figure, make `connect` accept a missing service and
fall back to defaults, then mark the primitive `standalone`:

```ts
const primitive = definePrimitive({
  anatomy: caliper.anatomy,
  machine: caliper.machine,
  connect: caliper.connect,
  props: caliper.props,
  standalone: true,
})
```

## Export the parts

Export each part as `<Name><Part>` with its props type, and a namespace for dotted use:

```ts
export const CaliperFrame = parts.Frame
export type CaliperFrameProps = ComponentProps<typeof CaliperFrame>
```

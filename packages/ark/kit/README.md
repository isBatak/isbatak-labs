# @isbatak/ark-kit

Build Ark UI style React components from a primitive. `definePrimitive` holds the behaviour and `createParts` turns it,
or a Zag machine module, into parts: `Root` plus one component per anatomy part. Each part renders `ark.<tag>`, merges
`api.get<Part>Props()` into its props, passes `api.get<Part>State()` to `render`, and takes `asChild`. Part names, props
and state are typed from the primitive.

## Installation

```sh
pnpm add @isbatak/ark-kit @ark-ui/react @zag-js/react
```

## A Zag machine

Pass the machine's module. `Root` takes the machine's props, starts it and shares the connected api. The parts are named
after the anatomy, such as `CheckboxControl`.

```tsx
import { createParts } from "@isbatak/ark-kit/react"
import * as checkbox from "@zag-js/checkbox"

const Checkbox = createParts(checkbox, {
  root: "label",
  control: "div",
  indicator: "div",
  label: "span",
  hiddenInput: "input",
})

export function Terms() {
  return (
    <Checkbox.Root defaultChecked onCheckedChange={(details) => console.log(details.checked)}>
      <Checkbox.Control />
      <Checkbox.Label>I agree to the terms</Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  )
}
```

Leave out `root` and `Root` renders only its children.

## Primitives

A primitive holds no framework code, so the same one renders in every framework that `createParts` supports.
`definePrimitive` checks its shape and gives it a name. Each kind is a plain object:

- **Machine**: `machine`, `connect(service, normalize)` and the machine's `props`. A Zag module such as
  `@zag-js/checkbox` is one already. With `standalone: true`, `connect` also runs without a service, so the parts render
  outside `Root` and fall back to the machine's defaults.
- **Controller**: `create()` returns `connect(props, normalize)`, and `mount(getProps)` and `sync(props)` when it needs
  the DOM. `Root` creates one per instance, mounts it after the first render and syncs it after every render.
- **Static**: `connect(normalize)`, for an api with no state. Its parts render anywhere.

`name`, or the root part of `anatomy`, names the components, such as `caliper` for `CaliperFrame`. `props` are the keys
`Root` keeps for the primitive. Every other prop goes on the root element. `Root` gives a machine or controller a
generated `id` unless you pass one.

```tsx
import { createParts, definePrimitive } from "@isbatak/ark-kit/react"
import * as caliper from "@isbatak/zag-caliper"

const primitive = definePrimitive({
  anatomy: caliper.anatomy,
  machine: caliper.machine,
  connect: caliper.connect,
  props: caliper.props,
  standalone: true,
})

const Caliper = createParts(primitive, {
  root: "figure",
  overlayTrigger: "button",
  frame: { tag: "div", props: caliper.frameProps },
  dimension: { tag: "div", props: caliper.dimensionProps },
})
```

## Part options

A bare tag is shorthand for `{ tag }`. The full form takes:

- `tag`: a tag name or a component.
- `props`: the keys passed to `get<Part>Props`. Every other prop goes on the element.
- `resolve(own, api)`: changes those props before the getter runs.
- `children(api, props)`: elements rendered before the user's children, such as an inner `svg`.

## Styling

`tag` takes a component as well as a tag name. Pass a Panda slot recipe part built on an Ark element, and each part gets
the recipe's styles, its variants and style props, while Ark keeps `render`, `asChild` and the part's state:

```tsx
import { ark } from "@ark-ui/react/factory"
import { createParts } from "@isbatak/ark-kit/react"
import * as checkbox from "@zag-js/checkbox"
import { createSlotRecipeContext } from "styled-system/jsx"
import { checkbox as recipe } from "styled-system/recipes"

const { withProvider, withContext } = createSlotRecipeContext(recipe)

const Checkbox = createParts(checkbox, {
  root: withProvider(ark.label, "root"),
  control: withContext(ark.div, "control"),
  indicator: withContext(ark.div, "indicator"),
  label: withContext(ark.span, "label"),
  hiddenInput: "input",
})

export function Terms() {
  return (
    <Checkbox.Root size="lg" defaultChecked gap="3">
      <Checkbox.Control>
        <Checkbox.Indicator render={<svg viewBox="0 0 24 24" />} />
      </Checkbox.Control>
      <Checkbox.Label textStyle="sm">I agree to the terms</Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  )
}
```

Wrap `ark.<tag>`, not the bare tag: Panda's `styled` has no `render` or `asChild`, so `withContext("div", …)` would drop
them and put the part's state on the DOM element.

Panda reads any prop named like a CSS property as a style prop. When a part prop shares a CSS name, list it in
`forwardProps`, as Caliper does for `overlay` and `order`:

```tsx
withContext(ark.div, "dimension", { forwardProps: ["order"] })
```

Parts that are already built take the same wrappers from the outside: `withContext(Caliper.Frame, "frame")` or
`styled(Caliper.Frame)`.

## Agent skill

The package ships an `ark-kit` skill for coding agents: wrapping a Zag machine, defining a primitive, styling with Panda
and testing. It's in `node_modules/@isbatak/ark-kit/skills/ark-kit`, or install it with:

```sh
npx skills@latest add isBatak/isbatak-labs --skill ark-kit
```

## License

MIT

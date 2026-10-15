# @isbatak/zag-wheel-picker

Core logic for the wheel-picker widget, built on [Zag](https://zagjs.com) utilities and native scroll snapping.

The browser handles scrolling, momentum and snapping. The value is whichever row sits in the middle of the viewport.
There is no state machine, following the approach in Zag's
[Build a wheel picker](https://github.com/chakra-ui/zag/pull/3432) post.

## Installation

```sh
pnpm add @isbatak/zag-wheel-picker
```

## Usage

Create one picker per wheel, connect it with the `normalizeProps` of your framework, then call `mount` once the viewport
is rendered and `sync` after every render that changes the value.

```ts
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps } from "@zag-js/react"

const picker = wheelPicker.createWheelPicker()
const api = picker.connect({ id, items, value, onValueChange }, normalizeProps)
```

## License

MIT © Ivica Batinic

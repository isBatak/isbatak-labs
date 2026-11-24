# @isbatak/zag-caliper

The framework-agnostic core of Caliper, which draws dimension lines, hatching and outlines over live UI. It has the
anatomy, the span math, a prop getter for each part, and a small machine for the overlay: whether the marks are shown,
and whether that has changed, so the marks animate with it.

Docs: https://isbatak.dev/tools/caliper

## Usage

```ts
import * as caliper from "@isbatak/zag-caliper"
import { normalizeProps, useMachine } from "@zag-js/react"

const service = useMachine(caliper.machine, { id: "spec", defaultOverlay: true })
const api = caliper.connect(service, normalizeProps)

api.getDimensionProps({ placement: "top", span: { start: 16, end: 16 } })
```

`connect` also runs without a service, for marks drawn outside a caliper root: the overlay is shown and never animates.

```ts
const api = caliper.connect(undefined, normalizeProps)
```

## License

MIT

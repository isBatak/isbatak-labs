# @isbatak/zag-caliper

The framework-agnostic core of Caliper, which draws dimension lines, hatching and outlines over live UI. It has the
anatomy, the span math and a prop getter for each part. It needs no state machine: `connect` takes only a framework's
`normalizeProps`.

Docs: https://isbatak.dev/tools/caliper

## Usage

```ts
import * as caliper from "@isbatak/zag-caliper"
import { normalizeProps } from "@zag-js/react"

const api = caliper.connect(normalizeProps)

api.getDimensionProps({ placement: "top", span: { start: 16, end: 16 } })
```

## License

MIT

# @isbatak/ark-caliper

Headless Ark UI parts for Caliper, which draws dimension lines, hatching and outlines over live UI. The parts set
`data-caliper-*` attributes and positions, add no styles, and take Ark's `render` prop.

For styles, bind them to the [`@isbatak/panda-caliper`](../../panda/caliper) recipe. Docs:
https://isbatak.dev/tools/caliper

## Installation

```sh
pnpm add @isbatak/ark-caliper @ark-ui/react @zag-js/react
```

## Usage

```tsx
import { Caliper } from "@isbatak/ark-caliper/react"

;<Caliper.Frame magnify={2}>
  <Caliper.Subject>
    <Card />
  </Caliper.Subject>
  <Caliper.Dimension placement="top" render={(props, state) => <div {...props} data-axis={state.axis} />} />
</Caliper.Frame>
```

## License

MIT

# Test it

Test the machine without React, and the parts with React. Every test below runs under Vitest.

## The machine

Drive it with `@zag-js/vanilla` and read the api from `connect`:

```ts
import { createNormalizer } from "@zag-js/types"
import { VanillaMachine } from "@zag-js/vanilla"
import { connect, machine } from "../src"

const normalize = createNormalizer((props) => props)
const tick = () => new Promise((resolve) => setTimeout(resolve, 0))

const service = new VanillaMachine(machine, { id: "spec" })
service.start()
const api = () => connect(service.service, normalize)

api().setOverlay(false)
await tick()
expect(api().getRootProps()).toMatchObject({ "data-overlay": "hidden" })
```

`send` applies after a microtask, so `await tick()` before reading the result. Cover the default, a change through a
part's handler, a controlled prop (the callback fires, the value holds), and, for a standalone primitive,
`connect(undefined, normalize)`.

## The parts

Server-render for markup, and render in jsdom with `act` for interaction:

```tsx
import { act } from "react"
import { createRoot } from "react-dom/client"
import { renderToStaticMarkup } from "react-dom/server"

const html = renderToStaticMarkup(
  <Checkbox.Root defaultChecked>
    <Checkbox.Control />
  </Checkbox.Root>,
)
expect(html).toMatch(/data-checkbox-root[^>]*data-state="checked"/)

const container = document.createElement("div")
const root = createRoot(container)
act(() =>
  root.render(
    <Caliper.Root>
      <Caliper.OverlayTrigger />
    </Caliper.Root>,
  ),
)
await act(async () => container.querySelector("button")!.click())
```

Set `environment: "jsdom"` in `vitest.config.mts` and `globalThis.IS_REACT_ACT_ENVIRONMENT = true` before the tests.

Check, for every part:

- it renders its anatomy attribute, like `data-caliper-frame`;
- the props it owns reach the getter and stay off the DOM (`expect(html).not.toContain(" magnify=")`);
- `render={(props, state) => …}` receives the part's state.

## The types

```ts
expectTypeOf(Checkbox.Root).parameter(0).toHaveProperty("defaultChecked")
expectTypeOf(Caliper.Canvas).parameter(0).not.toHaveProperty("magnify")
// @ts-expect-error checkbox has no `nope` part
createParts(checkbox, { nope: "div" })
```

Run `tsc --noEmit` with the tests included, so these assertions are checked.

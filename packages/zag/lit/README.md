# @isbatak/zag-lit

Lit adapter for [Zag](https://zagjs.com) v2 state machines. Inspired by
[ZagJs-Lit](https://github.com/RampantDespair/ZagJs-Lit).

## Installation

```sh
pnpm add @isbatak/zag-lit lit
```

## Usage

```ts
import * as checkbox from "@zag-js/checkbox"
import { html, LitElement } from "lit"
import { MachineController, normalizeProps, spread, type SchemaOf } from "@isbatak/zag-lit"

class MyCheckbox extends LitElement {
  controller = new MachineController<SchemaOf<checkbox.Machine>>(this, checkbox.machine, () => ({
    id: "my-checkbox",
  }))

  render() {
    const api = checkbox.connect(this.controller.service, normalizeProps)
    return html`
      <label ${spread(api.getRootProps())}>
        <span ${spread(api.getLabelProps())}>Accept</span>
        <input ${spread(api.getHiddenInputProps())} />
      </label>
    `
  }
}
```

The props getter is re-read on every host update, so reactive properties flow into the machine.

## API

- `MachineController`: starts and stops the machine with the host lifecycle and requests an update on every state
  change.
- `spread`: Lit directive that applies normalized Zag props (attributes, properties, styles and event listeners).
- `spreadProps`: imperative version of `spread` for plain elements.
- `normalizeProps`: prop normalizer for `connect`.
- `mergeProps`: re-export of Zag's `mergeProps`.

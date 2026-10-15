import * as checkbox from "@zag-js/checkbox"
import { html, LitElement } from "lit"
import { afterEach, describe, expect, test } from "vitest"
import { MachineController, normalizeProps, spread, type SchemaOf } from "../src"

class CheckboxFixture extends LitElement {
  static properties = { checked: { type: Boolean }, disabled: { type: Boolean } }
  declare checked: boolean
  declare disabled: boolean
  readonly controller: MachineController<SchemaOf<checkbox.Machine>>

  constructor() {
    super()
    this.checked = false
    this.disabled = false
    this.controller = new MachineController(this, checkbox.machine, () => ({
      checked: this.checked,
      disabled: this.disabled,
      getRootNode: () => this.ownerDocument,
      id: "fixture",
      onCheckedChange: ({ checked }) => {
        this.checked = checked === true
      },
    }))
  }

  protected createRenderRoot() {
    return this
  }

  protected render() {
    const api = checkbox.connect(this.controller.service, normalizeProps)
    return html`
      <label ${spread(api.getRootProps())}>
        <span ${spread(api.getLabelProps())}>Accept</span>
        <div ${spread(api.getControlProps())}></div>
        <input ${spread(api.getHiddenInputProps())} />
      </label>
    `
  }
}

customElements.define("zag-lit-checkbox-fixture", CheckboxFixture)

const flush = async (el: LitElement) => {
  await el.updateComplete
  await Promise.resolve()
  await el.updateComplete
}

const mount = async () => {
  const el = document.createElement("zag-lit-checkbox-fixture") as CheckboxFixture
  document.body.append(el)
  await flush(el)
  return el
}

afterEach(() => {
  document.body.innerHTML = ""
})

describe("MachineController", () => {
  test("renders machine attributes", async () => {
    const el = await mount()
    expect(el.querySelector("label")?.getAttribute("data-state")).toBe("unchecked")
    expect(el.querySelector("input")?.getAttribute("type")).toBe("checkbox")
  })

  test("toggles on click and reports through onCheckedChange", async () => {
    const el = await mount()
    el.querySelector<HTMLElement>("label")!.click()
    await flush(el)
    expect(el.checked).toBe(true)
    expect(el.querySelector("label")?.getAttribute("data-state")).toBe("checked")
  })

  test("reflects controlled prop changes", async () => {
    const el = await mount()
    el.disabled = true
    await flush(el)
    expect(el.querySelector("label")?.hasAttribute("data-disabled")).toBe(true)
  })

  test("restarts after reconnect", async () => {
    const el = await mount()
    el.remove()
    document.body.append(el)
    await flush(el)
    el.querySelector<HTMLElement>("label")!.click()
    await flush(el)
    expect(el.checked).toBe(true)
  })
})

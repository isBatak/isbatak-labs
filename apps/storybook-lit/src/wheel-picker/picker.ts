import { wheelPicker as wheelPickerRecipe } from "@isbatak/storybook-shared/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { html, type ReactiveController, type ReactiveControllerHost } from "lit"
import { repeat } from "lit/directives/repeat.js"
import { normalizeProps, spread } from "@isbatak/zag-lit"

const styles = wheelPickerRecipe()

export class PickerController implements ReactiveController {
  readonly #picker = wheelPicker.createWheelPicker()
  readonly #getProps: () => wheelPicker.Props
  #stop: (() => void) | undefined
  #synced: string | undefined

  constructor(host: ReactiveControllerHost, getProps: () => Omit<wheelPicker.Props, "id">) {
    const id = crypto.randomUUID()
    this.#getProps = () => ({ id, ...getProps() })
    host.addController(this)
  }

  get api() {
    return this.#picker.connect(this.#getProps(), normalizeProps)
  }

  hostUpdated() {
    this.#stop ??= this.#picker.mount(this.#getProps)
    const props = this.#getProps()
    const synced = [props.value, props.items.length, props.loop, props.itemHeight].join()
    if (synced === this.#synced) return
    this.#synced = synced
    this.#picker.sync(props)
  }

  hostDisconnected() {
    this.#stop?.()
    this.#stop = undefined
    this.#synced = undefined
  }
}

export function renderPicker(picker: PickerController, label: string) {
  const api = picker.api

  return html`
    <div ${spread(api.getRootProps())} class=${styles.root}>
      <span ${spread(api.getLabelProps())} class=${styles.label}>${label}</span>
      <div ${spread(api.getControlProps())} class=${styles.control}>
        <div ${spread(api.getViewportProps())} class=${styles.viewport}>
          <div ${spread(api.getItemGroupProps())} class=${styles.itemGroup}>
            ${repeat(
              api.rows,
              ({ row }) => row,
              ({ row, item }) =>
                html`<div ${spread(api.getItemProps({ row }))} class=${styles.item}>${item.label}</div>`,
            )}
          </div>
        </div>
        <div ${spread(api.getHighlightProps())} class=${styles.highlight}></div>
      </div>
      <input ${spread(api.getHiddenInputProps())} />
    </div>
  `
}

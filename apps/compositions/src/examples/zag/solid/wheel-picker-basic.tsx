import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps } from "@zag-js/solid"
import { createEffect, createMemo, createSignal, createUniqueId, Index, on, onCleanup, onMount } from "solid-js"

const items = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular", disabled: true },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Preact", value: "preact" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
]

const styles = wheelPickerRecipe()

export function WheelPickerBasic() {
  const id = createUniqueId()
  const picker = wheelPicker.createWheelPicker()
  const [value, setValue] = createSignal("react")

  const props = createMemo<wheelPicker.Props>(() => ({
    id,
    items,
    value: value(),
    onValueChange: (details) => setValue(details.value),
  }))

  onMount(() => onCleanup(picker.mount(props)))
  createEffect(on(value, () => picker.sync(props())))

  const api = createMemo(() => picker.connect(props(), normalizeProps))

  return (
    <div {...api().getRootProps()} class={styles.root}>
      <span {...api().getLabelProps()} class={styles.label}>
        Framework
      </span>
      <div {...api().getControlProps()} class={styles.control}>
        <div {...api().getViewportProps()} class={styles.viewport}>
          <div {...api().getItemGroupProps()} class={styles.itemGroup}>
            <Index each={api().rows}>
              {(entry) => (
                <div {...api().getItemProps({ row: entry().row })} class={styles.item}>
                  {entry().item.label}
                </div>
              )}
            </Index>
          </div>
        </div>
        <div {...api().getHighlightProps()} class={styles.highlight} />
      </div>
      <input {...api().getHiddenInputProps()} />
    </div>
  )
}

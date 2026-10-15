import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps } from "@zag-js/solid"
import { createEffect, createMemo, createSignal, createUniqueId, Index, on, onCleanup, onMount } from "solid-js"

const items = Array.from({ length: 60 }, (_, minute) => {
  const label = String(minute).padStart(2, "0")
  return { label, value: label }
})

const styles = wheelPickerRecipe()

export function WheelPickerLoop() {
  const id = createUniqueId()
  const picker = wheelPicker.createWheelPicker()
  const [value, setValue] = createSignal("30")

  const props = createMemo<wheelPicker.Props>(() => ({
    id,
    items,
    value: value(),
    loop: true,
    onValueChange: (details) => setValue(details.value),
  }))

  onMount(() => onCleanup(picker.mount(props)))
  createEffect(on(value, () => picker.sync(props())))

  const api = createMemo(() => picker.connect(props(), normalizeProps))

  return (
    <div {...api().getRootProps()} class={styles.root}>
      <span {...api().getLabelProps()} class={styles.label}>
        Minute
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

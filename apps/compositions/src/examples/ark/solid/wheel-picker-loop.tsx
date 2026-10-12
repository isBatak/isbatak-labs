import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { WheelPicker } from "@isbatak/ark-wheel-picker/solid"
import { Index } from "solid-js"

const items = Array.from({ length: 60 }, (_, minute) => {
  const label = String(minute).padStart(2, "0")
  return { label, value: label }
})

const styles = wheelPickerRecipe()

export function WheelPickerLoop() {
  return (
    <WheelPicker.Root items={items} defaultValue="30" loop class={styles.root}>
      <WheelPicker.Label class={styles.label}>Minute</WheelPicker.Label>
      <WheelPicker.Control class={styles.control}>
        <WheelPicker.Viewport class={styles.viewport}>
          <WheelPicker.ItemGroup class={styles.itemGroup}>
            <WheelPicker.Context>
              {(api) => (
                <Index each={api().rows}>
                  {(entry) => (
                    <WheelPicker.Item row={entry().row} class={styles.item}>
                      {entry().item.label}
                    </WheelPicker.Item>
                  )}
                </Index>
              )}
            </WheelPicker.Context>
          </WheelPicker.ItemGroup>
        </WheelPicker.Viewport>
        <WheelPicker.Highlight class={styles.highlight} />
      </WheelPicker.Control>
      <WheelPicker.HiddenInput />
    </WheelPicker.Root>
  )
}

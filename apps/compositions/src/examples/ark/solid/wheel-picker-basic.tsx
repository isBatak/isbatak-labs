import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { WheelPicker } from "@isbatak/ark-wheel-picker/solid"
import { Index } from "solid-js"

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
  return (
    <WheelPicker.Root items={items} defaultValue="react" class={styles.root}>
      <WheelPicker.Label class={styles.label}>Framework</WheelPicker.Label>
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

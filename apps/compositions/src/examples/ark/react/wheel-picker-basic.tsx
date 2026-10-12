"use client"

import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { WheelPicker } from "@isbatak/ark-wheel-picker/react"

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
    <WheelPicker.Root items={items} defaultValue="react" className={styles.root}>
      <WheelPicker.Label className={styles.label}>Framework</WheelPicker.Label>
      <WheelPicker.Control className={styles.control}>
        <WheelPicker.Viewport className={styles.viewport}>
          <WheelPicker.ItemGroup className={styles.itemGroup}>
            <WheelPicker.Context>
              {(api) =>
                api.rows.map(({ row, item }) => (
                  <WheelPicker.Item key={row} row={row} className={styles.item}>
                    {item.label}
                  </WheelPicker.Item>
                ))
              }
            </WheelPicker.Context>
          </WheelPicker.ItemGroup>
        </WheelPicker.Viewport>
        <WheelPicker.Highlight className={styles.highlight} />
      </WheelPicker.Control>
      <WheelPicker.HiddenInput />
    </WheelPicker.Root>
  )
}

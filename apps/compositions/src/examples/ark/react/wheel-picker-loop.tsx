"use client"

import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { WheelPicker } from "@isbatak/ark-wheel-picker/react"

const items = Array.from({ length: 60 }, (_, minute) => {
  const label = String(minute).padStart(2, "0")
  return { label, value: label }
})

const styles = wheelPickerRecipe()

export function WheelPickerLoop() {
  return (
    <WheelPicker.Root items={items} defaultValue="30" loop className={styles.root}>
      <WheelPicker.Label className={styles.label}>Minute</WheelPicker.Label>
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

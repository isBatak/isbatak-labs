"use client"

import { WheelPicker } from "@isbatak/ark-wheel-picker/react"
import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"

const styles = wheelPickerRecipe()

export interface WheelColumnProps {
  label: string
  items: { value: string; label: string }[]
  value: string
  onValueChange: (value: string) => void
  loop?: boolean
}

export function WheelColumn({ label, items, value, onValueChange, loop }: WheelColumnProps) {
  return (
    <WheelPicker.Root
      items={items}
      value={value}
      loop={loop}
      onValueChange={(details) => onValueChange(details.value)}
      className={styles.root}
    >
      <WheelPicker.Label className={styles.label}>{label}</WheelPicker.Label>
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
    </WheelPicker.Root>
  )
}

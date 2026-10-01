"use client"

import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { createWheelPickerCollection, WheelPicker } from "@isbatak/ark-wheel-picker/react"

const collection = createWheelPickerCollection({
  items: Array.from({ length: 60 }, (_, minute) => {
    const label = String(minute).padStart(2, "0")
    return { label, value: label }
  }),
})

const styles = wheelPickerRecipe()

export function WheelPickerInfinite() {
  return (
    <WheelPicker.Root collection={collection} defaultValue="30" infinite className={styles.root}>
      <WheelPicker.Label className={styles.label}>Minute</WheelPicker.Label>
      <WheelPicker.Control className={styles.control}>
        <WheelPicker.Viewport className={styles.viewport}>
          <WheelPicker.ItemGroup className={styles.itemGroup}>
            <WheelPicker.Context>
              {(api) =>
                api.items.map(({ item, index, key }) => (
                  <WheelPicker.Item key={key} item={item} index={index} className={styles.item}>
                    {item.label}
                  </WheelPicker.Item>
                ))
              }
            </WheelPicker.Context>
          </WheelPicker.ItemGroup>
          <WheelPicker.Highlight className={styles.highlight}>
            <WheelPicker.HighlightItemGroup className={styles.highlightItemGroup}>
              <WheelPicker.Context>
                {(api) =>
                  api.highlightItems.map(({ item, index, key }) => (
                    <WheelPicker.HighlightItem key={key} item={item} index={index} className={styles.highlightItem}>
                      {item.label}
                    </WheelPicker.HighlightItem>
                  ))
                }
              </WheelPicker.Context>
            </WheelPicker.HighlightItemGroup>
          </WheelPicker.Highlight>
        </WheelPicker.Viewport>
      </WheelPicker.Control>
    </WheelPicker.Root>
  )
}

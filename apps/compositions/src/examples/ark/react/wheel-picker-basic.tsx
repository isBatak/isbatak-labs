"use client"

import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { createWheelPickerCollection, WheelPicker } from "@isbatak/ark-wheel-picker/react"

const collection = createWheelPickerCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular", disabled: true },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
    { label: "Preact", value: "preact" },
    { label: "Qwik", value: "qwik" },
    { label: "Lit", value: "lit" },
  ],
})

const styles = wheelPickerRecipe()

export function WheelPickerBasic() {
  return (
    <WheelPicker.Root collection={collection} defaultValue="react" className={styles.root}>
      <WheelPicker.Label className={styles.label}>Framework</WheelPicker.Label>
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
      <WheelPicker.HiddenSelect />
    </WheelPicker.Root>
  )
}

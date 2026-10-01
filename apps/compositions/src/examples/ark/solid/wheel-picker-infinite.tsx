import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { createWheelPickerCollection, WheelPicker } from "@isbatak/ark-wheel-picker/solid"
import { Index } from "solid-js"

const collection = createWheelPickerCollection({
  items: Array.from({ length: 60 }, (_, minute) => {
    const label = String(minute).padStart(2, "0")
    return { label, value: label }
  }),
})

const styles = wheelPickerRecipe()

export function WheelPickerInfinite() {
  return (
    <WheelPicker.Root collection={collection} defaultValue="30" infinite class={styles.root}>
      <WheelPicker.Label class={styles.label}>Minute</WheelPicker.Label>
      <WheelPicker.Control class={styles.control}>
        <WheelPicker.Viewport class={styles.viewport}>
          <WheelPicker.ItemGroup class={styles.itemGroup}>
            <WheelPicker.Context>
              {(api) => (
                <Index each={api().items}>
                  {(entry) => (
                    <WheelPicker.Item item={entry().item} index={entry().index} class={styles.item}>
                      {entry().item.label}
                    </WheelPicker.Item>
                  )}
                </Index>
              )}
            </WheelPicker.Context>
          </WheelPicker.ItemGroup>
          <WheelPicker.Highlight class={styles.highlight}>
            <WheelPicker.HighlightItemGroup class={styles.highlightItemGroup}>
              <WheelPicker.Context>
                {(api) => (
                  <Index each={api().highlightItems}>
                    {(entry) => (
                      <WheelPicker.HighlightItem item={entry().item} index={entry().index} class={styles.highlightItem}>
                        {entry().item.label}
                      </WheelPicker.HighlightItem>
                    )}
                  </Index>
                )}
              </WheelPicker.Context>
            </WheelPicker.HighlightItemGroup>
          </WheelPicker.Highlight>
        </WheelPicker.Viewport>
      </WheelPicker.Control>
    </WheelPicker.Root>
  )
}

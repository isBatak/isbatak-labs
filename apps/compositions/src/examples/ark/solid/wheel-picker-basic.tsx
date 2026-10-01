import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { createWheelPickerCollection, WheelPicker } from "@isbatak/ark-wheel-picker/solid"
import { Index } from "solid-js"

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
    <WheelPicker.Root collection={collection} defaultValue="react" class={styles.root}>
      <WheelPicker.Label class={styles.label}>Framework</WheelPicker.Label>
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
      <WheelPicker.HiddenSelect />
    </WheelPicker.Root>
  )
}

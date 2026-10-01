<script lang="ts">
  import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
  import { createWheelPickerCollection, WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

  const collection = createWheelPickerCollection({
    items: Array.from({ length: 60 }, (_, minute) => {
      const label = String(minute).padStart(2, "0")
      return { label, value: label }
    }),
  })

  const styles = wheelPickerRecipe()
</script>

<WheelPicker.Root {collection} defaultValue="30" infinite class={styles.root}>
  <WheelPicker.Label class={styles.label}>Minute</WheelPicker.Label>
  <WheelPicker.Control class={styles.control}>
    <WheelPicker.Viewport class={styles.viewport}>
      <WheelPicker.ItemGroup class={styles.itemGroup}>
        <WheelPicker.Context>
          {#snippet render(api)}
            {#each api().items as { item, index, key } (key)}
              <WheelPicker.Item {item} {index} class={styles.item}>{item.label}</WheelPicker.Item>
            {/each}
          {/snippet}
        </WheelPicker.Context>
      </WheelPicker.ItemGroup>
      <WheelPicker.Highlight class={styles.highlight}>
        <WheelPicker.HighlightItemGroup class={styles.highlightItemGroup}>
          <WheelPicker.Context>
            {#snippet render(api)}
              {#each api().highlightItems as { item, index, key } (key)}
                <WheelPicker.HighlightItem {item} {index} class={styles.highlightItem}>{item.label}</WheelPicker.HighlightItem>
              {/each}
            {/snippet}
          </WheelPicker.Context>
        </WheelPicker.HighlightItemGroup>
      </WheelPicker.Highlight>
    </WheelPicker.Viewport>
  </WheelPicker.Control>
</WheelPicker.Root>

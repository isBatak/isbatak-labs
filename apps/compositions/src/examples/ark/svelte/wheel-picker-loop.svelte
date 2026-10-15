<script lang="ts">
  import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
  import { WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

  const items = Array.from({ length: 60 }, (_, minute) => {
    const label = String(minute).padStart(2, "0")
    return { label, value: label }
  })

  const styles = wheelPickerRecipe()
</script>

<WheelPicker.Root {items} defaultValue="30" loop class={styles.root}>
  <WheelPicker.Label class={styles.label}>Minute</WheelPicker.Label>
  <WheelPicker.Control class={styles.control}>
    <WheelPicker.Viewport class={styles.viewport}>
      <WheelPicker.ItemGroup class={styles.itemGroup}>
        <WheelPicker.Context>
          {#snippet render(api)}
            {#each api().rows as { row, item } (row)}
              <WheelPicker.Item {row} class={styles.item}>{item.label}</WheelPicker.Item>
            {/each}
          {/snippet}
        </WheelPicker.Context>
      </WheelPicker.ItemGroup>
    </WheelPicker.Viewport>
    <WheelPicker.Highlight class={styles.highlight}></WheelPicker.Highlight>
  </WheelPicker.Control>
  <WheelPicker.HiddenInput />
</WheelPicker.Root>

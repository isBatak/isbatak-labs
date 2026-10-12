<script lang="ts">
  import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
  import { WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

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
</script>

<WheelPicker.Root {items} defaultValue="react" class={styles.root}>
  <WheelPicker.Label class={styles.label}>Framework</WheelPicker.Label>
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

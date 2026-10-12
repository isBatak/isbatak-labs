<script lang="ts">
  import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
  import * as wheelPicker from "@isbatak/zag-wheel-picker"
  import { normalizeProps } from "@zag-js/svelte"
  import { untrack } from "svelte"

  const items = Array.from({ length: 60 }, (_, minute) => {
    const label = String(minute).padStart(2, "0")
    return { label, value: label }
  })

  const styles = wheelPickerRecipe()

  const id = $props.id()
  const picker = wheelPicker.createWheelPicker()
  let value = $state("30")

  const pickerProps = $derived<wheelPicker.Props>({
    id,
    items,
    value,
    loop: true,
    onValueChange: (details) => (value = details.value),
  })

  $effect(() => untrack(() => picker.mount(() => pickerProps)))

  $effect(() => {
    void value
    untrack(() => picker.sync(pickerProps))
  })

  const api = $derived(picker.connect(pickerProps, normalizeProps))
</script>

<div {...api.getRootProps()} class={styles.root}>
  <span {...api.getLabelProps()} class={styles.label}>Minute</span>
  <div {...api.getControlProps()} class={styles.control}>
    <div {...api.getViewportProps()} class={styles.viewport}>
      <div {...api.getItemGroupProps()} class={styles.itemGroup}>
        {#each api.rows as { row, item } (row)}
          <div {...api.getItemProps({ row })} class={styles.item}>{item.label}</div>
        {/each}
      </div>
    </div>
    <div {...api.getHighlightProps()} class={styles.highlight}></div>
  </div>
  <input {...api.getHiddenInputProps()} />
</div>

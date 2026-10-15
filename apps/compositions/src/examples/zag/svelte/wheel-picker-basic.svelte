<script lang="ts">
  import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
  import * as wheelPicker from "@isbatak/zag-wheel-picker"
  import { normalizeProps } from "@zag-js/svelte"
  import { untrack } from "svelte"

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

  const id = $props.id()
  const picker = wheelPicker.createWheelPicker()
  let value = $state("react")

  const pickerProps = $derived<wheelPicker.Props>({
    id,
    items,
    value,
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
  <span {...api.getLabelProps()} class={styles.label}>Framework</span>
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

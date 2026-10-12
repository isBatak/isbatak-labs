<script lang="ts">
  import { wheelPicker as wheelPickerRecipe } from "@isbatak/storybook-shared/recipes"
  import * as wheelPicker from "@isbatak/zag-wheel-picker"
  import { normalizeProps } from "@zag-js/svelte"
  import { untrack } from "svelte"

  const styles = wheelPickerRecipe()

  interface Props {
    label: string
    items: wheelPicker.Props["items"]
    value?: string
    defaultValue?: string
    name?: string
    disabled?: boolean
    loop?: boolean
    visibleCount?: number
    itemHeight?: number
    onValueChange?: (details: wheelPicker.ValueChangeDetails) => void
  }

  let { label, value = $bindable(), defaultValue, onValueChange, ...rest }: Props = $props()
  const id = $props.id()
  const picker = wheelPicker.createWheelPicker()
  let internalValue = $state(untrack(() => defaultValue ?? rest.items[0]?.value ?? ""))

  const currentValue = $derived(value ?? internalValue)
  const pickerProps = $derived<wheelPicker.Props>({
    ...rest,
    id,
    value: currentValue,
    onValueChange(details) {
      if (value === undefined) internalValue = details.value
      else value = details.value
      onValueChange?.(details)
    },
  })

  $effect(() => untrack(() => picker.mount(() => pickerProps)))

  $effect(() => {
    void currentValue
    void rest.items.length
    void rest.loop
    void rest.itemHeight
    untrack(() => picker.sync(pickerProps))
  })

  const api = $derived(picker.connect(pickerProps, normalizeProps))
</script>

<div {...api.getRootProps()} class={styles.root}>
  <span {...api.getLabelProps()} class={styles.label}>{label}</span>
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

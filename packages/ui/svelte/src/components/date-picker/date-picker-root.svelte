<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"
  import { datePicker, type DatePickerVariantProps } from "@isbatak/panda-ds/recipes"

  export type DatePickerRootProps = DatePicker.RootProps & DatePickerVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: DatePickerRootProps = $props()
  const [variantProps, localProps] = $derived(datePicker.splitVariantProps(props))
  const styles = $derived(datePicker(variantProps))
  provideDatePickerStyles(() => styles)
</script>

<DatePicker.Root bind:ref bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />

<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"
  import { datePicker, type DatePickerVariantProps } from "@isbatak/panda-ds/recipes"

  export type DatePickerRootProviderProps = DatePicker.RootProviderProps & DatePickerVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideDatePickerStyles } from "./date-picker-styles"

  let { unstyled, class: className, ...props }: DatePickerRootProviderProps = $props()
  const [variantProps, localProps] = $derived(datePicker.splitVariantProps(props))
  const styles = $derived(datePicker(variantProps))
  provideDatePickerStyles(() => styles)
</script>

<DatePicker.RootProvider {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />

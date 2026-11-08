<script module lang="ts">
  import { DateInput } from "@ark-ui/svelte/date-input"
  import { dateInput, type DateInputVariantProps } from "@isbatak/panda-ds/recipes"

  export type DateInputRootProviderProps = DateInput.RootProviderProps & DateInputVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideDateInputStyles } from "./date-input-styles"

  let { unstyled, class: className, ...props }: DateInputRootProviderProps = $props()
  const [variantProps, localProps] = $derived(dateInput.splitVariantProps(props))
  const styles = $derived(dateInput(variantProps))
  provideDateInputStyles(() => styles)
</script>

<DateInput.RootProvider {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />

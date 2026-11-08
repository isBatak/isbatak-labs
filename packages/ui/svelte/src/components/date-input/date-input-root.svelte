<script module lang="ts">
  import { DateInput } from "@ark-ui/svelte/date-input"
  import { dateInput, type DateInputVariantProps } from "@isbatak/panda-ds/recipes"

  export type DateInputRootProps = DateInput.RootProps & DateInputVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideDateInputStyles } from "./date-input-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: DateInputRootProps = $props()
  const [variantProps, localProps] = $derived(dateInput.splitVariantProps(props))
  const styles = $derived(dateInput(variantProps))
  provideDateInputStyles(() => styles)
</script>

<DateInput.Root bind:ref bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />

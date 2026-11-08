<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerLabelProps = DatePicker.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerLabelProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />

<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerInputProps = DatePicker.InputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerInputProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.Input bind:ref {...props} data-slot="input" class={[!unstyled && styles().input, className]} />

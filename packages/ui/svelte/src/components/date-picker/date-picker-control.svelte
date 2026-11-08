<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerControlProps = DatePicker.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerControlProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />

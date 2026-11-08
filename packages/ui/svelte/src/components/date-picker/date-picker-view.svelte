<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerViewProps = DatePicker.ViewProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerViewProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.View bind:ref {...props} data-slot="view" class={[!unstyled && styles().view, className]} />

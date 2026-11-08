<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerViewTriggerProps = DatePicker.ViewTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerViewTriggerProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.ViewTrigger bind:ref {...props} data-slot="viewTrigger" class={[!unstyled && styles().viewTrigger, className]} />

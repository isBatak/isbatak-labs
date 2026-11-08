<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerTableCellTriggerProps = DatePicker.TableCellTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerTableCellTriggerProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.TableCellTrigger bind:ref {...props} data-slot="tableCellTrigger" class={[!unstyled && styles().tableCellTrigger, className]} />

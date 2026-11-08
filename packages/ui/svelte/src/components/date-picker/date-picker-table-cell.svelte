<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerTableCellProps = DatePicker.TableCellProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerTableCellProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.TableCell bind:ref {...props} data-slot="tableCell" class={[!unstyled && styles().tableCell, className]} />

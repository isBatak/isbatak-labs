<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerTableRowProps = DatePicker.TableRowProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerTableRowProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.TableRow bind:ref {...props} data-slot="tableRow" class={[!unstyled && styles().tableRow, className]} />

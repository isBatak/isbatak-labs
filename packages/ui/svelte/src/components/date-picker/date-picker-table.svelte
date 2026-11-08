<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerTableProps = DatePicker.TableProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { unstyled, class: className, ...props }: DatePickerTableProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.Table {...props} data-slot="table" class={[!unstyled && styles().table, className]} />

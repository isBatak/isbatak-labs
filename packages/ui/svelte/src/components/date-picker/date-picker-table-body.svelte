<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerTableBodyProps = DatePicker.TableBodyProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerTableBodyProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.TableBody bind:ref {...props} data-slot="tableBody" class={[!unstyled && styles().tableBody, className]} />

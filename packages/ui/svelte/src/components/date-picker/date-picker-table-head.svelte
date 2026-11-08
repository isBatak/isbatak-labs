<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerTableHeadProps = DatePicker.TableHeadProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerTableHeadProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.TableHead bind:ref {...props} data-slot="tableHead" class={[!unstyled && styles().tableHead, className]} />

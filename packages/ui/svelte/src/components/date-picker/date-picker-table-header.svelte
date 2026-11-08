<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerTableHeaderProps = DatePicker.TableHeaderProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerTableHeaderProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.TableHeader bind:ref {...props} data-slot="tableHeader" class={[!unstyled && styles().tableHeader, className]} />

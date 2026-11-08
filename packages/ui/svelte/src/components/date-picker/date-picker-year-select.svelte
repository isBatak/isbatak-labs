<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerYearSelectProps = DatePicker.YearSelectProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerYearSelectProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.YearSelect bind:ref {...props} data-slot="yearSelect" class={[!unstyled && styles().yearSelect, className]} />

<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerMonthSelectProps = DatePicker.MonthSelectProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerMonthSelectProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.MonthSelect bind:ref {...props} data-slot="monthSelect" class={[!unstyled && styles().monthSelect, className]} />

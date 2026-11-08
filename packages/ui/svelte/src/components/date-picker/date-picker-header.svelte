<script module lang="ts">
  import type { DatePickerViewControlProps } from "./date-picker-view-control.svelte"

  export type DatePickerHeaderProps = DatePickerViewControlProps
</script>

<script lang="ts">
  import DatePickerNextTrigger from "./date-picker-next-trigger.svelte"
  import DatePickerPrevTrigger from "./date-picker-prev-trigger.svelte"
  import DatePickerRangeText from "./date-picker-range-text.svelte"
  import DatePickerViewControl from "./date-picker-view-control.svelte"
  import DatePickerViewTrigger from "./date-picker-view-trigger.svelte"

  let { ref = $bindable(null), ...props }: DatePickerHeaderProps = $props()
</script>

<DatePickerViewControl bind:ref {...props}>
  <DatePickerPrevTrigger />
  <DatePickerViewTrigger>
    <DatePickerRangeText />
  </DatePickerViewTrigger>
  <DatePickerNextTrigger />
</DatePickerViewControl>

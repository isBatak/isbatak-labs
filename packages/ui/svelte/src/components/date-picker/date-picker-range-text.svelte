<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerRangeTextProps = DatePicker.RangeTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerRangeTextProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.RangeText bind:ref {...props} data-slot="rangeText" class={[!unstyled && styles().rangeText, className]} />

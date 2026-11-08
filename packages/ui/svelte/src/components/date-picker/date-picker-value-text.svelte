<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerValueTextProps = DatePicker.ValueTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerValueTextProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.ValueText bind:ref {...props} data-slot="valueText" class={[!unstyled && styles().valueText, className]} />

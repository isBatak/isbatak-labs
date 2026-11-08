<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerPositionerProps = DatePicker.PositionerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerPositionerProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.Positioner bind:ref {...props} data-slot="positioner" class={[!unstyled && styles().positioner, className]} />

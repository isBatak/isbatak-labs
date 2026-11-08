<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerViewControlProps = DatePicker.ViewControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerViewControlProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.ViewControl bind:ref {...props} data-slot="viewControl" class={[!unstyled && styles().viewControl, className]} />

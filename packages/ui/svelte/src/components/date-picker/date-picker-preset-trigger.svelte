<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerPresetTriggerProps = DatePicker.PresetTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerPresetTriggerProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.PresetTrigger bind:ref {...props} data-slot="presetTrigger" class={[!unstyled && styles().presetTrigger, className]} />

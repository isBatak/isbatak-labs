<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerTriggerProps = DatePicker.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: DatePickerTriggerProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.Trigger bind:ref {...props} data-slot="trigger" class={[!unstyled && styles().trigger, className]}>
  {#if children}{@render children()}{:else}<Icon name="calendar" />{/if}
</DatePicker.Trigger>

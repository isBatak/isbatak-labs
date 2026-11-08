<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerClearTriggerProps = DatePicker.ClearTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: DatePickerClearTriggerProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.ClearTrigger bind:ref aria-label="Clear date" {...props} data-slot="clearTrigger" class={[!unstyled && styles().clearTrigger, className]}>
  {#if children}{@render children()}{:else}<Icon name="close" />{/if}
</DatePicker.ClearTrigger>

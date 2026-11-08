<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerNextTriggerProps = DatePicker.NextTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: DatePickerNextTriggerProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.NextTrigger bind:ref {...props} data-slot="nextTrigger" class={[!unstyled && styles().nextTrigger, className]}>
  {#if children}{@render children()}{:else}<Icon name="chevron-right" />{/if}
</DatePicker.NextTrigger>

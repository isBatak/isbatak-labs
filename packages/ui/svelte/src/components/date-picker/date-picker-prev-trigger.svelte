<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerPrevTriggerProps = DatePicker.PrevTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: DatePickerPrevTriggerProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.PrevTrigger bind:ref {...props} data-slot="prevTrigger" class={[!unstyled && styles().prevTrigger, className]}>
  {#if children}{@render children()}{:else}<Icon name="chevron-left" />{/if}
</DatePicker.PrevTrigger>

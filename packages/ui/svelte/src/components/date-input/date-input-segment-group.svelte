<script module lang="ts">
  import { DateInput } from "@ark-ui/svelte/date-input"

  export type DateInputSegmentGroupProps = DateInput.SegmentGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDateInputStyles } from "./date-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DateInputSegmentGroupProps = $props()
  const styles = useDateInputStyles()
</script>

<DateInput.SegmentGroup bind:ref {...props} data-slot="segmentGroup" class={[!unstyled && styles().segmentGroup, className]} />

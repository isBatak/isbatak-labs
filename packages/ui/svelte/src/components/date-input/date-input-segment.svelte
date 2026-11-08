<script module lang="ts">
  import { DateInput } from "@ark-ui/svelte/date-input"

  export type DateInputSegmentProps = DateInput.SegmentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDateInputStyles } from "./date-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DateInputSegmentProps = $props()
  const styles = useDateInputStyles()
</script>

<DateInput.Segment bind:ref {...props} data-slot="segment" class={[!unstyled && styles().segment, className]} />

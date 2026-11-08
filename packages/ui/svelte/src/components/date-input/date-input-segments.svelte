<script module lang="ts">
  import type { DateInputSegmentProps } from "./date-input-segment.svelte"

  export type DateInputSegmentsProps = Omit<DateInputSegmentProps, "segment">
</script>

<script lang="ts">
  import { DateInput } from "@ark-ui/svelte/date-input"

  import DateInputSegment from "./date-input-segment.svelte"

  let props: DateInputSegmentsProps = $props()
</script>

<DateInput.SegmentContext>
  {#snippet render(segment)}
    <DateInputSegment {segment} {...props} />
  {/snippet}
</DateInput.SegmentContext>

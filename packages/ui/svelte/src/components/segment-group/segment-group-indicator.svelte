<script module lang="ts">
  import { SegmentGroup } from "@ark-ui/svelte/segment-group"

  export type SegmentGroupIndicatorProps = SegmentGroup.IndicatorProps
</script>

<script lang="ts">
  import { useSegmentGroupStyles } from "./segment-group-styles"

  let { ref = $bindable(null), class: className, ...props }: SegmentGroupIndicatorProps = $props()
  const styles = useSegmentGroupStyles()
</script>

<SegmentGroup.Indicator bind:ref {...props} data-slot="indicator" class={[styles().indicator, className]} />

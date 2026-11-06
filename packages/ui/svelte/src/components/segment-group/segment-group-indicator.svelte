<script module lang="ts">
  import { SegmentGroup } from "@ark-ui/svelte/segment-group"

  export type SegmentGroupIndicatorProps = SegmentGroup.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSegmentGroupStyles } from "./segment-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SegmentGroupIndicatorProps = $props()
  const styles = useSegmentGroupStyles()
</script>

<SegmentGroup.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]} />

<script module lang="ts">
  import { SegmentGroup } from "@ark-ui/svelte/segment-group"

  export type SegmentGroupItemControlProps = SegmentGroup.ItemControlProps
</script>

<script lang="ts">
  import { useSegmentGroupStyles } from "./segment-group-styles"

  let { ref = $bindable(null), class: className, ...props }: SegmentGroupItemControlProps = $props()
  const styles = useSegmentGroupStyles()
</script>

<SegmentGroup.ItemControl bind:ref {...props} data-slot="itemControl" class={[styles().itemControl, className]} />

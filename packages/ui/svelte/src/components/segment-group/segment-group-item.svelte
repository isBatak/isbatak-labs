<script module lang="ts">
  import { SegmentGroup } from "@ark-ui/svelte/segment-group"

  export type SegmentGroupItemProps = SegmentGroup.ItemProps
</script>

<script lang="ts">
  import { useSegmentGroupStyles } from "./segment-group-styles"

  let { ref = $bindable(null), class: className, ...props }: SegmentGroupItemProps = $props()
  const styles = useSegmentGroupStyles()
</script>

<SegmentGroup.Item bind:ref {...props} data-slot="item" class={[styles().item, className]} />

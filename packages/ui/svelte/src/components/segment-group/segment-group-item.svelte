<script module lang="ts">
  import { SegmentGroup } from "@ark-ui/svelte/segment-group"

  export type SegmentGroupItemProps = SegmentGroup.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSegmentGroupStyles } from "./segment-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SegmentGroupItemProps = $props()
  const styles = useSegmentGroupStyles()
</script>

<SegmentGroup.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />

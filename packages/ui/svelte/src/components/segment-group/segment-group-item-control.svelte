<script module lang="ts">
  import { SegmentGroup } from "@ark-ui/svelte/segment-group"

  export type SegmentGroupItemControlProps = SegmentGroup.ItemControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSegmentGroupStyles } from "./segment-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SegmentGroupItemControlProps = $props()
  const styles = useSegmentGroupStyles()
</script>

<SegmentGroup.ItemControl bind:ref {...props} data-slot="itemControl" class={[!unstyled && styles().itemControl, className]} />

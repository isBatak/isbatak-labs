<script module lang="ts">
  import { SegmentGroup } from "@ark-ui/svelte/segment-group"

  export type SegmentGroupItemTextProps = SegmentGroup.ItemTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSegmentGroupStyles } from "./segment-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SegmentGroupItemTextProps = $props()
  const styles = useSegmentGroupStyles()
</script>

<SegmentGroup.ItemText bind:ref {...props} data-slot="itemText" class={[!unstyled && styles().itemText, className]} />

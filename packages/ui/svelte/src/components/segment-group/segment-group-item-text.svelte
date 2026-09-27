<script module lang="ts">
  import { SegmentGroup } from "@ark-ui/svelte/segment-group"

  export type SegmentGroupItemTextProps = SegmentGroup.ItemTextProps
</script>

<script lang="ts">
  import { useSegmentGroupStyles } from "./segment-group-styles"

  let { ref = $bindable(null), class: className, ...props }: SegmentGroupItemTextProps = $props()
  const styles = useSegmentGroupStyles()
</script>

<SegmentGroup.ItemText bind:ref {...props} data-slot="itemText" class={[styles().itemText, className]} />

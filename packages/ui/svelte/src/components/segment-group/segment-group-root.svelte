<script module lang="ts">
  import { SegmentGroup } from "@ark-ui/svelte/segment-group"
  import { segmentGroup, type SegmentGroupVariantProps } from "@isbatak/panda-ds/recipes"

  export type SegmentGroupRootProps = SegmentGroup.RootProps & SegmentGroupVariantProps
</script>

<script lang="ts">
  import { provideSegmentGroupStyles } from "./segment-group-styles"

  let { ref = $bindable(null), value = $bindable(), class: className, ...props }: SegmentGroupRootProps = $props()
  const [variantProps, localProps] = $derived(segmentGroup.splitVariantProps(props))
  const styles = $derived(segmentGroup(variantProps))
  provideSegmentGroupStyles(() => styles)
</script>

<SegmentGroup.Root bind:ref bind:value {...localProps} data-slot="root" class={[styles.root, className]} />

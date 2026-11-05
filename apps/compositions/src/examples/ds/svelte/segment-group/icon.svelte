<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { SegmentGroup } from "@isbatak/svelte-ui/segment-group"
</script>

<SegmentGroup.Root orientation="horizontal" defaultValue="grid" icon aria-label="Layout">
  <SegmentGroup.Indicator />
  <SegmentGroup.Item value="grid" aria-label="Grid">
    <SegmentGroup.ItemText>
      <Icon name="grid" />
    </SegmentGroup.ItemText>
    <SegmentGroup.ItemHiddenInput />
  </SegmentGroup.Item>
  <SegmentGroup.Item value="list" aria-label="List">
    <SegmentGroup.ItemText>
      <Icon name="menu" />
    </SegmentGroup.ItemText>
    <SegmentGroup.ItemHiddenInput />
  </SegmentGroup.Item>
</SegmentGroup.Root>

<script lang="ts">
  import { SegmentGroup } from "@isbatak/svelte-ui/segment-group"
</script>

<SegmentGroup.Root orientation="horizontal" defaultValue="week" aria-label="Range">
  <SegmentGroup.Indicator />
  <SegmentGroup.Item value="day">
    <SegmentGroup.ItemText>Day</SegmentGroup.ItemText>
    <SegmentGroup.ItemHiddenInput />
  </SegmentGroup.Item>
  <SegmentGroup.Item value="week">
    <SegmentGroup.ItemText>Week</SegmentGroup.ItemText>
    <SegmentGroup.ItemHiddenInput />
  </SegmentGroup.Item>
  <SegmentGroup.Item value="month">
    <SegmentGroup.ItemText>Month</SegmentGroup.ItemText>
    <SegmentGroup.ItemHiddenInput />
  </SegmentGroup.Item>
</SegmentGroup.Root>

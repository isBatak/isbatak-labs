import { Box } from "@isbatak/solid-ui/box"
import { SegmentGroup } from "@isbatak/solid-ui/segment-group"

export function SegmentGroupTintedDemo() {
  return (
    <Box colorPalette="green">
      <SegmentGroup.Root orientation="horizontal" defaultValue="week" tinted aria-label="Range">
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
    </Box>
  )
}

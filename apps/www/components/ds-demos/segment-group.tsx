"use client"

import { SegmentGroup } from "@isbatak/react-ui/segment-group"

export function SegmentGroupDemo() {
  return (
    <SegmentGroup.Root defaultValue="week" orientation="horizontal" aria-label="Range">
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
  )
}

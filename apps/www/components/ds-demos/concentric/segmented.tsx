"use client"

import { SegmentGroup } from "@isbatak/react-ui/segment-group"

export function ConcentricSegmentedDemo() {
  return (
    <SegmentGroup.Root defaultValue="day" orientation="horizontal" aria-label="Range" rounded="20px" p="1.5">
      <SegmentGroup.Indicator rounded="concentric" />
      <SegmentGroup.Item value="day" rounded="concentric">
        <SegmentGroup.ItemText>Day</SegmentGroup.ItemText>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
      <SegmentGroup.Item value="week" rounded="concentric">
        <SegmentGroup.ItemText>Week</SegmentGroup.ItemText>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
      <SegmentGroup.Item value="month" rounded="concentric">
        <SegmentGroup.ItemText>Month</SegmentGroup.ItemText>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
      <SegmentGroup.Item value="year" rounded="concentric">
        <SegmentGroup.ItemText>Year</SegmentGroup.ItemText>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    </SegmentGroup.Root>
  )
}

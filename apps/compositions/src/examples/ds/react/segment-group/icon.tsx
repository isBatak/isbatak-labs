import { Icon } from "@isbatak/react-ui/icon"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"

export function SegmentGroupIconDemo() {
  return (
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
  )
}

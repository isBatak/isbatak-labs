import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { Span } from "@isbatak/react-ui/span"

export function SegmentGroupDescriptionDemo() {
  return (
    <SegmentGroup.Root orientation="horizontal" defaultValue="express" fitted w="full" maxW="xl" aria-label="Delivery">
      <SegmentGroup.Indicator />
      <SegmentGroup.Item value="standard" h="auto" py="2" flexDirection="column" gap="0.5">
        <SegmentGroup.ItemText>Standard</SegmentGroup.ItemText>
        <Span color="fg.muted" fontWeight="normal">
          3–5 business days
        </Span>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
      <SegmentGroup.Item value="express" h="auto" py="2" flexDirection="column" gap="0.5">
        <SegmentGroup.ItemText>Express</SegmentGroup.ItemText>
        <Span color="fg.muted" fontWeight="normal">
          1–2 business days
        </Span>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
      <SegmentGroup.Item value="overnight" h="auto" py="2" flexDirection="column" gap="0.5">
        <SegmentGroup.ItemText>Overnight</SegmentGroup.ItemText>
        <Span color="fg.muted" fontWeight="normal">
          Next business day
        </Span>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    </SegmentGroup.Root>
  )
}

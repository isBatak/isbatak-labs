import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { Span } from "@isbatak/react-ui/span"

import { Picker } from "../picker"
import { md, px } from "../theme"
import { useTiming } from "../timing"

export function Toggle() {
  const T = useTiming().measure

  return (
    <Picker label="Alignment" first="equal" second="optical" change={T.change}>
      <SegmentGroup.Item value="equal" h="auto" py="2" flexDirection="column" gap="0.5">
        <SegmentGroup.ItemText>Equal</SegmentGroup.ItemText>
        <Span color="fg.muted" fontWeight="normal">
          No pull
        </Span>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
      <SegmentGroup.Item value="optical" h="auto" py="2" flexDirection="column" gap="0.5">
        <SegmentGroup.ItemText>Optical</SegmentGroup.ItemText>
        <Span color="fg.muted" fontWeight="normal">
          {px(md.offset)} pull
        </Span>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    </Picker>
  )
}

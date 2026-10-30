import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { segmentGroup } from "@isbatak/panda-ds/recipes"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const segmentGroupMatrix = defineComponentMatrix({
  recipe: segmentGroup,
  render: (props) => (
    <SegmentGroup.Root defaultValue="react" {...props}>
      <SegmentGroup.Indicator />
      <SegmentGroup.Item value="react">
        <SegmentGroup.ItemText>React</SegmentGroup.ItemText>
        <SegmentGroup.ItemControl />
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
      <SegmentGroup.Item value="vue">
        <SegmentGroup.ItemText>Vue</SegmentGroup.ItemText>
        <SegmentGroup.ItemControl />
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
      <SegmentGroup.Item value="svelte">
        <SegmentGroup.ItemText>Svelte</SegmentGroup.ItemText>
        <SegmentGroup.ItemControl />
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    </SegmentGroup.Root>
  ),
})

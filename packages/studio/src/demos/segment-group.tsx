import { SegmentGroup } from "@isbatak/react-ui/segment-group"

import { Section, Stack } from "../canvas/layout"
import type { SampleProps } from "./types"

export function SegmentGroupSample(props: SampleProps) {
  return (
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
  )
}

export function SegmentGroupDemo() {
  return (
    <>
      <Section title="Basic">
        <SegmentGroupSample />
      </Section>
      <Section title="Variants">
        <Stack>
          <SegmentGroupSample variant="enclosed" />
          <SegmentGroupSample variant="line" />
          <SegmentGroupSample variant="subtle" />
          <SegmentGroupSample variant="outline" />
        </Stack>
      </Section>
    </>
  )
}

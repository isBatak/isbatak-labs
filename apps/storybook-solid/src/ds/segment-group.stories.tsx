import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { SegmentGroupDemo } from "@isbatak/compositions/ds/solid/segment-group/usage"
import { SegmentGroupFittedDemo } from "@isbatak/compositions/ds/solid/segment-group/fitted"
import { SegmentGroupIconDemo } from "@isbatak/compositions/ds/solid/segment-group/icon"
import { SegmentGroupSizesDemo } from "@isbatak/compositions/ds/solid/segment-group/sizes"
import { SegmentGroupTintedDemo } from "@isbatak/compositions/ds/solid/segment-group/tinted"

const meta = {
  title: "DS/Segment group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SegmentGroupDemo />,
}

export const Fitted: Story = {
  render: () => <SegmentGroupFittedDemo />,
}

export const Icon: Story = {
  render: () => <SegmentGroupIconDemo />,
}

export const Sizes: Story = {
  render: () => <SegmentGroupSizesDemo />,
}

export const Tinted: Story = {
  render: () => <SegmentGroupTintedDemo />,
}

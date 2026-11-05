import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SegmentGroupDemo from "@isbatak/compositions/ds/vue/segment-group/usage"
import SegmentGroupFittedDemo from "@isbatak/compositions/ds/vue/segment-group/fitted"
import SegmentGroupIconDemo from "@isbatak/compositions/ds/vue/segment-group/icon"
import SegmentGroupSizesDemo from "@isbatak/compositions/ds/vue/segment-group/sizes"
import SegmentGroupTintedDemo from "@isbatak/compositions/ds/vue/segment-group/tinted"

const meta = {
  title: "DS/Segment group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SegmentGroupDemo) }),
}

export const Fitted: Story = {
  render: () => ({ setup: () => () => h(SegmentGroupFittedDemo) }),
}

export const Icon: Story = {
  render: () => ({ setup: () => () => h(SegmentGroupIconDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(SegmentGroupSizesDemo) }),
}

export const Tinted: Story = {
  render: () => ({ setup: () => () => h(SegmentGroupTintedDemo) }),
}

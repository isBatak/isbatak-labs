import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SegmentGroupDemo from "@isbatak/compositions/ds/svelte/segment-group/usage"
import SegmentGroupFittedDemo from "@isbatak/compositions/ds/svelte/segment-group/fitted"
import SegmentGroupIconDemo from "@isbatak/compositions/ds/svelte/segment-group/icon"
import SegmentGroupSizesDemo from "@isbatak/compositions/ds/svelte/segment-group/sizes"
import SegmentGroupTintedDemo from "@isbatak/compositions/ds/svelte/segment-group/tinted"

const meta = {
  title: "DS/Segment group",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SegmentGroupDemo> = {
  render: () => ({ Component: SegmentGroupDemo }),
}

export const Fitted: StoryObj<typeof SegmentGroupFittedDemo> = {
  render: () => ({ Component: SegmentGroupFittedDemo }),
}

export const Icon: StoryObj<typeof SegmentGroupIconDemo> = {
  render: () => ({ Component: SegmentGroupIconDemo }),
}

export const Sizes: StoryObj<typeof SegmentGroupSizesDemo> = {
  render: () => ({ Component: SegmentGroupSizesDemo }),
}

export const Tinted: StoryObj<typeof SegmentGroupTintedDemo> = {
  render: () => ({ Component: SegmentGroupTintedDemo }),
}

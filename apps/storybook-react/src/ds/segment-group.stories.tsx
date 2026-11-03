import type { Meta, StoryObj } from "@storybook/react-vite"
import { SegmentGroupDemo } from "@isbatak/compositions/ds/react/segment-group/usage"

const meta = {
  title: "DS/Segment group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SegmentGroupDemo />,
}

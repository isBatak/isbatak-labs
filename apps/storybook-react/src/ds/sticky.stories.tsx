import type { Meta, StoryObj } from "@storybook/react-vite"
import { StickyDemo } from "@isbatak/compositions/ds/react/sticky/usage"

const meta = {
  title: "DS/Sticky",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <StickyDemo />,
}

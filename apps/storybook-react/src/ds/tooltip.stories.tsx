import type { Meta, StoryObj } from "@storybook/react-vite"
import { TooltipDemo } from "@isbatak/compositions/ds/react/tooltip/usage"

const meta = {
  title: "DS/Tooltip",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TooltipDemo />,
}

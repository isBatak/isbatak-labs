import type { Meta, StoryObj } from "@storybook/react-vite"
import { PopoverDemo } from "@isbatak/compositions/ds/react/popover/usage"

const meta = {
  title: "DS/Popover",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <PopoverDemo />,
}

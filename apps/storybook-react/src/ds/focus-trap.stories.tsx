import type { Meta, StoryObj } from "@storybook/react-vite"
import { FocusTrapDemo } from "@isbatak/compositions/ds/react/focus-trap/usage"

const meta = {
  title: "DS/Focus trap",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <FocusTrapDemo />,
}

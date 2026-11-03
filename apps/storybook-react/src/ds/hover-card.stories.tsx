import type { Meta, StoryObj } from "@storybook/react-vite"
import { HoverCardDemo } from "@isbatak/compositions/ds/react/hover-card/usage"

const meta = {
  title: "DS/Hover card",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <HoverCardDemo />,
}

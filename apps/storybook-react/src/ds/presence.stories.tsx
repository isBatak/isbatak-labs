import type { Meta, StoryObj } from "@storybook/react-vite"
import { PresenceDemo } from "@isbatak/compositions/ds/react/presence/usage"

const meta = {
  title: "DS/Presence",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <PresenceDemo />,
}

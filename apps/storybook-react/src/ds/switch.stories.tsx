import type { Meta, StoryObj } from "@storybook/react-vite"
import { SwitchDemo } from "@isbatak/compositions/ds/react/switch/usage"

const meta = {
  title: "DS/Switch",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SwitchDemo />,
}

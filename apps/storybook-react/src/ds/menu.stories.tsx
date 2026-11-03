import type { Meta, StoryObj } from "@storybook/react-vite"
import { MenuDemo } from "@isbatak/compositions/ds/react/menu/usage"

const meta = {
  title: "DS/Menu",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <MenuDemo />,
}

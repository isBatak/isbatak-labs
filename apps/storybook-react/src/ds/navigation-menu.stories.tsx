import type { Meta, StoryObj } from "@storybook/react-vite"
import { NavigationMenuDemo } from "@isbatak/compositions/ds/react/navigation-menu/usage"

const meta = {
  title: "DS/Navigation menu",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <NavigationMenuDemo />,
}

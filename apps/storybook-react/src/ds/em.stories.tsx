import type { Meta, StoryObj } from "@storybook/react-vite"
import { EmDemo } from "@isbatak/compositions/ds/react/em/usage"

const meta = {
  title: "DS/Em",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <EmDemo />,
}

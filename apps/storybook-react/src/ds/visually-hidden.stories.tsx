import type { Meta, StoryObj } from "@storybook/react-vite"
import { VisuallyHiddenDemo } from "@isbatak/compositions/ds/react/visually-hidden/usage"

const meta = {
  title: "DS/Visually hidden",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <VisuallyHiddenDemo />,
}

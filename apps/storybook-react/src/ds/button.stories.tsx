import type { Meta, StoryObj } from "@storybook/react-vite"
import { ButtonDemo } from "@isbatak/compositions/ds/react/button/usage"

const meta = {
  title: "DS/Button",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ButtonDemo />,
}

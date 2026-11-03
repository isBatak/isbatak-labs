import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconDemo } from "@isbatak/compositions/ds/react/icon/usage"

const meta = {
  title: "DS/Icon",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <IconDemo />,
}

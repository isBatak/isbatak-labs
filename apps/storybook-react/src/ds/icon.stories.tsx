import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconDemo } from "@isbatak/compositions/ds/react/icon/usage"
import { IconColorDemo } from "@isbatak/compositions/ds/react/icon/color"
import { IconSizesDemo } from "@isbatak/compositions/ds/react/icon/sizes"

const meta = {
  title: "DS/Icon",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <IconDemo />,
}

export const Color: Story = {
  render: () => <IconColorDemo />,
}

export const Sizes: Story = {
  render: () => <IconSizesDemo />,
}

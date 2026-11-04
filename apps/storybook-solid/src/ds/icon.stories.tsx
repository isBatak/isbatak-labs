import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { IconDemo } from "@isbatak/compositions/ds/solid/icon/usage"
import { IconColorDemo } from "@isbatak/compositions/ds/solid/icon/color"
import { IconSizesDemo } from "@isbatak/compositions/ds/solid/icon/sizes"

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

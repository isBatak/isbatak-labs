import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { CloseButtonDemo } from "@isbatak/compositions/ds/solid/close-button/usage"
import { CloseButtonSizesDemo } from "@isbatak/compositions/ds/solid/close-button/sizes"

const meta = {
  title: "DS/Close button",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <CloseButtonDemo />,
}

export const Sizes: Story = {
  render: () => <CloseButtonSizesDemo />,
}

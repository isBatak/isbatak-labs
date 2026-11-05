import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { IconButtonDemo } from "@isbatak/compositions/ds/solid/icon-button/usage"
import { IconButtonLoadingDemo } from "@isbatak/compositions/ds/solid/icon-button/loading"
import { IconButtonSizesDemo } from "@isbatak/compositions/ds/solid/icon-button/sizes"

const meta = {
  title: "DS/Icon button",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <IconButtonDemo />,
}

export const Loading: Story = {
  render: () => <IconButtonLoadingDemo />,
}

export const Sizes: Story = {
  render: () => <IconButtonSizesDemo />,
}

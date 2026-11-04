import type { Meta, StoryObj } from "@storybook/react-vite"
import { ProseDemo } from "@isbatak/compositions/ds/react/prose/usage"
import { ProseSizesDemo } from "@isbatak/compositions/ds/react/prose/sizes"

const meta = {
  title: "DS/Prose",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ProseDemo />,
}

export const Sizes: Story = {
  render: () => <ProseSizesDemo />,
}

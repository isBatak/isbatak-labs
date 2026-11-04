import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ProseDemo } from "@isbatak/compositions/ds/solid/prose/usage"
import { ProseSizesDemo } from "@isbatak/compositions/ds/solid/prose/sizes"

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

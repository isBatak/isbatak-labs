import type { Meta, StoryObj } from "@storybook/react-vite"
import { MarkDemo } from "@isbatak/compositions/ds/react/mark/usage"
import { MarkVariantsDemo } from "@isbatak/compositions/ds/react/mark/variants"

const meta = {
  title: "DS/Mark",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <MarkDemo />,
}

export const Variants: Story = {
  render: () => <MarkVariantsDemo />,
}

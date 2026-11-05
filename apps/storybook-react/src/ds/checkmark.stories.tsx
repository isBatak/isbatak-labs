import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckmarkDemo } from "@isbatak/compositions/ds/react/checkmark/usage"
import { CheckmarkVariantsDemo } from "@isbatak/compositions/ds/react/checkmark/variants"

const meta = {
  title: "DS/Checkmark",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <CheckmarkDemo />,
}

export const Variants: Story = {
  render: () => <CheckmarkVariantsDemo />,
}

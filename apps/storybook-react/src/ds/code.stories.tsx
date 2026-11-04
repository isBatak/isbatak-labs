import type { Meta, StoryObj } from "@storybook/react-vite"
import { CodeDemo } from "@isbatak/compositions/ds/react/code/usage"
import { CodeSizesDemo } from "@isbatak/compositions/ds/react/code/sizes"
import { CodeVariantsDemo } from "@isbatak/compositions/ds/react/code/variants"

const meta = {
  title: "DS/Code",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <CodeDemo />,
}

export const Sizes: Story = {
  render: () => <CodeSizesDemo />,
}

export const Variants: Story = {
  render: () => <CodeVariantsDemo />,
}

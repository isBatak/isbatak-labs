import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { CheckmarkDemo } from "@isbatak/compositions/ds/solid/checkmark/usage"
import { CheckmarkVariantsDemo } from "@isbatak/compositions/ds/solid/checkmark/variants"

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

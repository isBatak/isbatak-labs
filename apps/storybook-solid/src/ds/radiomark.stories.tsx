import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { RadiomarkDemo } from "@isbatak/compositions/ds/solid/radiomark/usage"
import { RadiomarkVariantsDemo } from "@isbatak/compositions/ds/solid/radiomark/variants"

const meta = {
  title: "DS/Radiomark",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <RadiomarkDemo />,
}

export const Variants: Story = {
  render: () => <RadiomarkVariantsDemo />,
}

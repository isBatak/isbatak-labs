import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { RadioCardDemo } from "@isbatak/compositions/ds/solid/radio-card/usage"
import { RadioCardVariantsDemo } from "@isbatak/compositions/ds/solid/radio-card/variants"

const meta = {
  title: "DS/Radio card",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <RadioCardDemo />,
}

export const Variants: Story = {
  render: () => <RadioCardVariantsDemo />,
}

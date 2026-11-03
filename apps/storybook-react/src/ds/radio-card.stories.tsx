import type { Meta, StoryObj } from "@storybook/react-vite"
import { RadioCardDemo } from "@isbatak/compositions/ds/react/radio-card/usage"

const meta = {
  title: "DS/Radio card",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <RadioCardDemo />,
}

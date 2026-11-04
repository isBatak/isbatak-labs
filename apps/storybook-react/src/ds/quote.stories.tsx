import type { Meta, StoryObj } from "@storybook/react-vite"
import { QuoteDemo } from "@isbatak/compositions/ds/react/quote/usage"

const meta = {
  title: "DS/Quote",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <QuoteDemo />,
}

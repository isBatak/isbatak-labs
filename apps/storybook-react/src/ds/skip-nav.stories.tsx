import type { Meta, StoryObj } from "@storybook/react-vite"
import { SkipNavDemo } from "@isbatak/compositions/ds/react/skip-nav/usage"

const meta = {
  title: "DS/Skip nav",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SkipNavDemo />,
}

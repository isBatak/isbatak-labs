import type { Meta, StoryObj } from "@storybook/react-vite"
import { SpinnerDemo } from "@isbatak/compositions/ds/react/spinner/usage"

const meta = {
  title: "DS/Spinner",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SpinnerDemo />,
}

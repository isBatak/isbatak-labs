import type { Meta, StoryObj } from "@storybook/react-vite"
import { CircleDemo } from "@isbatak/compositions/ds/react/circle/usage"
import { CircleWithIconDemo } from "@isbatak/compositions/ds/react/circle/with-icon"

const meta = {
  title: "DS/Circle and Square",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <CircleDemo />,
}

export const WithIcon: Story = {
  render: () => <CircleWithIconDemo />,
}

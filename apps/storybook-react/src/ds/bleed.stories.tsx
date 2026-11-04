import type { Meta, StoryObj } from "@storybook/react-vite"
import { BleedDemo } from "@isbatak/compositions/ds/react/bleed/usage"
import { BleedDirectionDemo } from "@isbatak/compositions/ds/react/bleed/direction"
import { BleedVerticalDemo } from "@isbatak/compositions/ds/react/bleed/vertical"

const meta = {
  title: "DS/Bleed",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <BleedDemo />,
}

export const Direction: Story = {
  render: () => <BleedDirectionDemo />,
}

export const Vertical: Story = {
  render: () => <BleedVerticalDemo />,
}

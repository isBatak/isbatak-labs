import type { Meta, StoryObj } from "@storybook/react-vite"
import { FloatGapDemo } from "@isbatak/compositions/ds/react/float-gap/usage"
import { FloatGapPlacementsDemo } from "@isbatak/compositions/ds/react/float-gap/placements"

const meta = {
  title: "DS/Float gap",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <FloatGapDemo />,
}

export const Placements: Story = {
  render: () => <FloatGapPlacementsDemo />,
}

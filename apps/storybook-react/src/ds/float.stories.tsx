import type { Meta, StoryObj } from "@storybook/react-vite"
import { FloatDemo } from "@isbatak/compositions/ds/react/float/usage"
import { FloatOffsetDemo } from "@isbatak/compositions/ds/react/float/offset"
import { FloatPlacementsDemo } from "@isbatak/compositions/ds/react/float/placements"
import { FloatWithBadgeDemo } from "@isbatak/compositions/ds/react/float/with-badge"

const meta = {
  title: "DS/Float",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <FloatDemo />,
}

export const Offset: Story = {
  render: () => <FloatOffsetDemo />,
}

export const Placements: Story = {
  render: () => <FloatPlacementsDemo />,
}

export const WithBadge: Story = {
  render: () => <FloatWithBadgeDemo />,
}

import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { FloatDemo } from "@isbatak/compositions/ds/solid/float/usage"
import { FloatOffsetDemo } from "@isbatak/compositions/ds/solid/float/offset"
import { FloatPlacementsDemo } from "@isbatak/compositions/ds/solid/float/placements"
import { FloatWithBadgeDemo } from "@isbatak/compositions/ds/solid/float/with-badge"

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

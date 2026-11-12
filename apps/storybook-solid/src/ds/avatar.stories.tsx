import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { AvatarDemo } from "@isbatak/compositions/ds/solid/avatar/usage"
import { AvatarSizesDemo } from "@isbatak/compositions/ds/solid/avatar/sizes"
import { AvatarVariantsDemo } from "@isbatak/compositions/ds/solid/avatar/variants"
import { AvatarShapesDemo } from "@isbatak/compositions/ds/solid/avatar/shapes"
import { AvatarFallbackDemo } from "@isbatak/compositions/ds/solid/avatar/fallback"
import { AvatarColorsDemo } from "@isbatak/compositions/ds/solid/avatar/colors"
import { AvatarGroupDemo } from "@isbatak/compositions/ds/solid/avatar/group"
import { AvatarGroupStackingDemo } from "@isbatak/compositions/ds/solid/avatar/group-stacking"
import { AvatarRingDemo } from "@isbatak/compositions/ds/solid/avatar/ring"
import { AvatarWithBadgeDemo } from "@isbatak/compositions/ds/solid/avatar/with-badge"
import { AvatarPersonaDemo } from "@isbatak/compositions/ds/solid/avatar/persona"
import { AvatarStoreDemo } from "@isbatak/compositions/ds/solid/avatar/store"

const meta = {
  title: "DS/Avatar",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <AvatarDemo />,
}

export const Sizes: Story = {
  render: () => <AvatarSizesDemo />,
}

export const Variants: Story = {
  render: () => <AvatarVariantsDemo />,
}

export const Shapes: Story = {
  render: () => <AvatarShapesDemo />,
}

export const Fallback: Story = {
  render: () => <AvatarFallbackDemo />,
}

export const Colors: Story = {
  render: () => <AvatarColorsDemo />,
}

export const Group: Story = {
  render: () => <AvatarGroupDemo />,
}

export const GroupStacking: Story = {
  render: () => <AvatarGroupStackingDemo />,
}

export const Ring: Story = {
  render: () => <AvatarRingDemo />,
}

export const WithBadge: Story = {
  render: () => <AvatarWithBadgeDemo />,
}

export const Persona: Story = {
  render: () => <AvatarPersonaDemo />,
}

export const Store: Story = {
  render: () => <AvatarStoreDemo />,
}

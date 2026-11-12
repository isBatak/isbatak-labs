import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import AvatarDemo from "@isbatak/compositions/ds/vue/avatar/usage"
import AvatarSizesDemo from "@isbatak/compositions/ds/vue/avatar/sizes"
import AvatarVariantsDemo from "@isbatak/compositions/ds/vue/avatar/variants"
import AvatarShapesDemo from "@isbatak/compositions/ds/vue/avatar/shapes"
import AvatarFallbackDemo from "@isbatak/compositions/ds/vue/avatar/fallback"
import AvatarColorsDemo from "@isbatak/compositions/ds/vue/avatar/colors"
import AvatarGroupDemo from "@isbatak/compositions/ds/vue/avatar/group"
import AvatarGroupStackingDemo from "@isbatak/compositions/ds/vue/avatar/group-stacking"
import AvatarRingDemo from "@isbatak/compositions/ds/vue/avatar/ring"
import AvatarWithBadgeDemo from "@isbatak/compositions/ds/vue/avatar/with-badge"
import AvatarPersonaDemo from "@isbatak/compositions/ds/vue/avatar/persona"
import AvatarStoreDemo from "@isbatak/compositions/ds/vue/avatar/store"

const meta = {
  title: "DS/Avatar",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(AvatarDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(AvatarSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(AvatarVariantsDemo) }),
}

export const Shapes: Story = {
  render: () => ({ setup: () => () => h(AvatarShapesDemo) }),
}

export const Fallback: Story = {
  render: () => ({ setup: () => () => h(AvatarFallbackDemo) }),
}

export const Colors: Story = {
  render: () => ({ setup: () => () => h(AvatarColorsDemo) }),
}

export const Group: Story = {
  render: () => ({ setup: () => () => h(AvatarGroupDemo) }),
}

export const GroupStacking: Story = {
  render: () => ({ setup: () => () => h(AvatarGroupStackingDemo) }),
}

export const Ring: Story = {
  render: () => ({ setup: () => () => h(AvatarRingDemo) }),
}

export const WithBadge: Story = {
  render: () => ({ setup: () => () => h(AvatarWithBadgeDemo) }),
}

export const Persona: Story = {
  render: () => ({ setup: () => () => h(AvatarPersonaDemo) }),
}

export const Store: Story = {
  render: () => ({ setup: () => () => h(AvatarStoreDemo) }),
}

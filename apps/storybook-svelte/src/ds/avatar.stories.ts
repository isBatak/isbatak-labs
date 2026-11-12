import type { Meta, StoryObj } from "@storybook/svelte-vite"
import AvatarDemo from "@isbatak/compositions/ds/svelte/avatar/usage"
import AvatarSizesDemo from "@isbatak/compositions/ds/svelte/avatar/sizes"
import AvatarVariantsDemo from "@isbatak/compositions/ds/svelte/avatar/variants"
import AvatarShapesDemo from "@isbatak/compositions/ds/svelte/avatar/shapes"
import AvatarFallbackDemo from "@isbatak/compositions/ds/svelte/avatar/fallback"
import AvatarColorsDemo from "@isbatak/compositions/ds/svelte/avatar/colors"
import AvatarGroupDemo from "@isbatak/compositions/ds/svelte/avatar/group"
import AvatarGroupStackingDemo from "@isbatak/compositions/ds/svelte/avatar/group-stacking"
import AvatarRingDemo from "@isbatak/compositions/ds/svelte/avatar/ring"
import AvatarWithBadgeDemo from "@isbatak/compositions/ds/svelte/avatar/with-badge"
import AvatarPersonaDemo from "@isbatak/compositions/ds/svelte/avatar/persona"
import AvatarStoreDemo from "@isbatak/compositions/ds/svelte/avatar/store"

const meta = {
  title: "DS/Avatar",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof AvatarDemo> = {
  render: () => ({ Component: AvatarDemo }),
}

export const Sizes: StoryObj<typeof AvatarSizesDemo> = {
  render: () => ({ Component: AvatarSizesDemo }),
}

export const Variants: StoryObj<typeof AvatarVariantsDemo> = {
  render: () => ({ Component: AvatarVariantsDemo }),
}

export const Shapes: StoryObj<typeof AvatarShapesDemo> = {
  render: () => ({ Component: AvatarShapesDemo }),
}

export const Fallback: StoryObj<typeof AvatarFallbackDemo> = {
  render: () => ({ Component: AvatarFallbackDemo }),
}

export const Colors: StoryObj<typeof AvatarColorsDemo> = {
  render: () => ({ Component: AvatarColorsDemo }),
}

export const Group: StoryObj<typeof AvatarGroupDemo> = {
  render: () => ({ Component: AvatarGroupDemo }),
}

export const GroupStacking: StoryObj<typeof AvatarGroupStackingDemo> = {
  render: () => ({ Component: AvatarGroupStackingDemo }),
}

export const Ring: StoryObj<typeof AvatarRingDemo> = {
  render: () => ({ Component: AvatarRingDemo }),
}

export const WithBadge: StoryObj<typeof AvatarWithBadgeDemo> = {
  render: () => ({ Component: AvatarWithBadgeDemo }),
}

export const Persona: StoryObj<typeof AvatarPersonaDemo> = {
  render: () => ({ Component: AvatarPersonaDemo }),
}

export const Store: StoryObj<typeof AvatarStoreDemo> = {
  render: () => ({ Component: AvatarStoreDemo }),
}

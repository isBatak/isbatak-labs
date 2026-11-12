import type { Meta, StoryObj } from "@storybook/svelte-vite"
import BadgeDemo from "@isbatak/compositions/ds/svelte/badge/usage"
import BadgeColorsDemo from "@isbatak/compositions/ds/svelte/badge/colors"
import BadgeSizesDemo from "@isbatak/compositions/ds/svelte/badge/sizes"
import BadgeStatusDemo from "@isbatak/compositions/ds/svelte/badge/status"
import BadgeVariantsDemo from "@isbatak/compositions/ds/svelte/badge/variants"
import BadgeWithIconDemo from "@isbatak/compositions/ds/svelte/badge/with-icon"
import BadgeWithGroupDemo from "@isbatak/compositions/ds/svelte/badge/with-group"

const meta = {
  title: "DS/Badge",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof BadgeDemo> = {
  render: () => ({ Component: BadgeDemo }),
}

export const Colors: StoryObj<typeof BadgeColorsDemo> = {
  render: () => ({ Component: BadgeColorsDemo }),
}

export const Sizes: StoryObj<typeof BadgeSizesDemo> = {
  render: () => ({ Component: BadgeSizesDemo }),
}

export const Status: StoryObj<typeof BadgeStatusDemo> = {
  render: () => ({ Component: BadgeStatusDemo }),
}

export const Variants: StoryObj<typeof BadgeVariantsDemo> = {
  render: () => ({ Component: BadgeVariantsDemo }),
}

export const WithIcon: StoryObj<typeof BadgeWithIconDemo> = {
  render: () => ({ Component: BadgeWithIconDemo }),
}

export const WithGroup: StoryObj<typeof BadgeWithGroupDemo> = {
  render: () => ({ Component: BadgeWithGroupDemo }),
}

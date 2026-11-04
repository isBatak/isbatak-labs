import type { Meta, StoryObj } from "@storybook/svelte-vite"
import FloatDemo from "@isbatak/compositions/ds/svelte/float/usage"
import FloatOffsetDemo from "@isbatak/compositions/ds/svelte/float/offset"
import FloatPlacementsDemo from "@isbatak/compositions/ds/svelte/float/placements"
import FloatWithBadgeDemo from "@isbatak/compositions/ds/svelte/float/with-badge"

const meta = {
  title: "DS/Float",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof FloatDemo> = {
  render: () => ({ Component: FloatDemo }),
}

export const Offset: StoryObj<typeof FloatOffsetDemo> = {
  render: () => ({ Component: FloatOffsetDemo }),
}

export const Placements: StoryObj<typeof FloatPlacementsDemo> = {
  render: () => ({ Component: FloatPlacementsDemo }),
}

export const WithBadge: StoryObj<typeof FloatWithBadgeDemo> = {
  render: () => ({ Component: FloatWithBadgeDemo }),
}

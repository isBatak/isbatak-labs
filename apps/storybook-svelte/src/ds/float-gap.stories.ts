import type { Meta, StoryObj } from "@storybook/svelte-vite"
import FloatGapDemo from "@isbatak/compositions/ds/svelte/float-gap/usage"
import FloatGapPlacementsDemo from "@isbatak/compositions/ds/svelte/float-gap/placements"

const meta = {
  title: "DS/Float gap",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof FloatGapDemo> = {
  render: () => ({ Component: FloatGapDemo }),
}

export const Placements: StoryObj<typeof FloatGapPlacementsDemo> = {
  render: () => ({ Component: FloatGapPlacementsDemo }),
}

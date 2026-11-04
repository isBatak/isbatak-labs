import type { Meta, StoryObj } from "@storybook/svelte-vite"
import GroupDemo from "@isbatak/compositions/ds/svelte/group/usage"
import GroupGrowDemo from "@isbatak/compositions/ds/svelte/group/grow"
import GroupSpacedDemo from "@isbatak/compositions/ds/svelte/group/spaced"
import GroupVerticalDemo from "@isbatak/compositions/ds/svelte/group/vertical"

const meta = {
  title: "DS/Group",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof GroupDemo> = {
  render: () => ({ Component: GroupDemo }),
}

export const Grow: StoryObj<typeof GroupGrowDemo> = {
  render: () => ({ Component: GroupGrowDemo }),
}

export const Spaced: StoryObj<typeof GroupSpacedDemo> = {
  render: () => ({ Component: GroupSpacedDemo }),
}

export const Vertical: StoryObj<typeof GroupVerticalDemo> = {
  render: () => ({ Component: GroupVerticalDemo }),
}

import type { Meta, StoryObj } from "@storybook/svelte-vite"
import GridTableDemo from "@isbatak/compositions/ds/svelte/grid-table/usage"
import GridTableInteractiveDemo from "@isbatak/compositions/ds/svelte/grid-table/interactive"
import GridTableStickyDemo from "@isbatak/compositions/ds/svelte/grid-table/sticky"

const meta = {
  title: "DS/Grid table",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof GridTableDemo> = {
  render: () => ({ Component: GridTableDemo }),
}

export const Interactive: StoryObj<typeof GridTableInteractiveDemo> = {
  render: () => ({ Component: GridTableInteractiveDemo }),
}

export const Sticky: StoryObj<typeof GridTableStickyDemo> = {
  render: () => ({ Component: GridTableStickyDemo }),
}

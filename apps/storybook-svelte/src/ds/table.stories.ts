import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TableDemo from "@isbatak/compositions/ds/svelte/table/usage"
import TableBordersDemo from "@isbatak/compositions/ds/svelte/table/borders"
import TableInteractiveDemo from "@isbatak/compositions/ds/svelte/table/interactive"
import TableSizesDemo from "@isbatak/compositions/ds/svelte/table/sizes"
import TableStickyDemo from "@isbatak/compositions/ds/svelte/table/sticky"

const meta = {
  title: "DS/Table",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TableDemo> = {
  render: () => ({ Component: TableDemo }),
}

export const Borders: StoryObj<typeof TableBordersDemo> = {
  render: () => ({ Component: TableBordersDemo }),
}

export const Interactive: StoryObj<typeof TableInteractiveDemo> = {
  render: () => ({ Component: TableInteractiveDemo }),
}

export const Sizes: StoryObj<typeof TableSizesDemo> = {
  render: () => ({ Component: TableSizesDemo }),
}

export const Sticky: StoryObj<typeof TableStickyDemo> = {
  render: () => ({ Component: TableStickyDemo }),
}

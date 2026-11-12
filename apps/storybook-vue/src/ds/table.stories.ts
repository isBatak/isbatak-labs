import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TableDemo from "@isbatak/compositions/ds/vue/table/usage"
import TableBordersDemo from "@isbatak/compositions/ds/vue/table/borders"
import TableInteractiveDemo from "@isbatak/compositions/ds/vue/table/interactive"
import TableSizesDemo from "@isbatak/compositions/ds/vue/table/sizes"
import TableStickyDemo from "@isbatak/compositions/ds/vue/table/sticky"

const meta = {
  title: "DS/Table",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TableDemo) }),
}

export const Borders: Story = {
  render: () => ({ setup: () => () => h(TableBordersDemo) }),
}

export const Interactive: Story = {
  render: () => ({ setup: () => () => h(TableInteractiveDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(TableSizesDemo) }),
}

export const Sticky: Story = {
  render: () => ({ setup: () => () => h(TableStickyDemo) }),
}

import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import GridTableDemo from "@isbatak/compositions/ds/vue/grid-table/usage"
import GridTableInteractiveDemo from "@isbatak/compositions/ds/vue/grid-table/interactive"
import GridTableStickyDemo from "@isbatak/compositions/ds/vue/grid-table/sticky"

const meta = {
  title: "DS/Grid table",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(GridTableDemo) }),
}

export const Interactive: Story = {
  render: () => ({ setup: () => () => h(GridTableInteractiveDemo) }),
}

export const Sticky: Story = {
  render: () => ({ setup: () => () => h(GridTableStickyDemo) }),
}

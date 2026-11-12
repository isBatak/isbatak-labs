import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { GridTableDemo } from "@isbatak/compositions/ds/solid/grid-table/usage"
import { GridTableInteractiveDemo } from "@isbatak/compositions/ds/solid/grid-table/interactive"
import { GridTableStickyDemo } from "@isbatak/compositions/ds/solid/grid-table/sticky"

const meta = {
  title: "DS/Grid table",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <GridTableDemo />,
}

export const Interactive: Story = {
  render: () => <GridTableInteractiveDemo />,
}

export const Sticky: Story = {
  render: () => <GridTableStickyDemo />,
}

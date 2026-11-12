import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { TableDemo } from "@isbatak/compositions/ds/solid/table/usage"
import { TableBordersDemo } from "@isbatak/compositions/ds/solid/table/borders"
import { TableInteractiveDemo } from "@isbatak/compositions/ds/solid/table/interactive"
import { TableSizesDemo } from "@isbatak/compositions/ds/solid/table/sizes"
import { TableStickyDemo } from "@isbatak/compositions/ds/solid/table/sticky"

const meta = {
  title: "DS/Table",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TableDemo />,
}

export const Borders: Story = {
  render: () => <TableBordersDemo />,
}

export const Interactive: Story = {
  render: () => <TableInteractiveDemo />,
}

export const Sizes: Story = {
  render: () => <TableSizesDemo />,
}

export const Sticky: Story = {
  render: () => <TableStickyDemo />,
}

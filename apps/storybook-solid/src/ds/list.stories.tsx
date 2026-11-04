import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ListDemo } from "@isbatak/compositions/ds/solid/list/usage"
import { ListNestedDemo } from "@isbatak/compositions/ds/solid/list/nested"
import { ListOrderedDemo } from "@isbatak/compositions/ds/solid/list/ordered"
import { ListWithIconDemo } from "@isbatak/compositions/ds/solid/list/with-icon"

const meta = {
  title: "DS/List",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ListDemo />,
}

export const Nested: Story = {
  render: () => <ListNestedDemo />,
}

export const Ordered: Story = {
  render: () => <ListOrderedDemo />,
}

export const WithIcon: Story = {
  render: () => <ListWithIconDemo />,
}

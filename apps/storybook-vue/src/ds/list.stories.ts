import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ListDemo from "@isbatak/compositions/ds/vue/list/usage"
import ListNestedDemo from "@isbatak/compositions/ds/vue/list/nested"
import ListOrderedDemo from "@isbatak/compositions/ds/vue/list/ordered"
import ListWithIconDemo from "@isbatak/compositions/ds/vue/list/with-icon"

const meta = {
  title: "DS/List",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ListDemo) }),
}

export const Nested: Story = {
  render: () => ({ setup: () => () => h(ListNestedDemo) }),
}

export const Ordered: Story = {
  render: () => ({ setup: () => () => h(ListOrderedDemo) }),
}

export const WithIcon: Story = {
  render: () => ({ setup: () => () => h(ListWithIconDemo) }),
}

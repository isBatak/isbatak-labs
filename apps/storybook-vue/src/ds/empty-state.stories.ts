import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import EmptyStateDemo from "@isbatak/compositions/ds/vue/empty-state/usage"
import EmptyStateSizesDemo from "@isbatak/compositions/ds/vue/empty-state/sizes"
import EmptyStateWithActionDemo from "@isbatak/compositions/ds/vue/empty-state/with-action"

const meta = {
  title: "DS/EmptyState",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(EmptyStateDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(EmptyStateSizesDemo) }),
}

export const WithAction: Story = {
  render: () => ({ setup: () => () => h(EmptyStateWithActionDemo) }),
}

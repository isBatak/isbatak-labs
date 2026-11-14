import type { Meta, StoryObj } from "@storybook/react-vite"
import { EmptyStateDemo } from "@isbatak/compositions/ds/react/empty-state/usage"
import { EmptyStateSizesDemo } from "@isbatak/compositions/ds/react/empty-state/sizes"
import { EmptyStateWithActionDemo } from "@isbatak/compositions/ds/react/empty-state/with-action"

const meta = {
  title: "DS/EmptyState",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <EmptyStateDemo />,
}

export const Sizes: Story = {
  render: () => <EmptyStateSizesDemo />,
}

export const WithAction: Story = {
  render: () => <EmptyStateWithActionDemo />,
}

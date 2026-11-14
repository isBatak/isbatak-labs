import type { Meta, StoryObj } from "@storybook/svelte-vite"
import EmptyStateDemo from "@isbatak/compositions/ds/svelte/empty-state/usage"
import EmptyStateSizesDemo from "@isbatak/compositions/ds/svelte/empty-state/sizes"
import EmptyStateWithActionDemo from "@isbatak/compositions/ds/svelte/empty-state/with-action"

const meta = {
  title: "DS/EmptyState",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof EmptyStateDemo> = {
  render: () => ({ Component: EmptyStateDemo }),
}

export const Sizes: StoryObj<typeof EmptyStateSizesDemo> = {
  render: () => ({ Component: EmptyStateSizesDemo }),
}

export const WithAction: StoryObj<typeof EmptyStateWithActionDemo> = {
  render: () => ({ Component: EmptyStateWithActionDemo }),
}

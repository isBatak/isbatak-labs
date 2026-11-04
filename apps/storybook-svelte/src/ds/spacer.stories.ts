import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SpacerDemo from "@isbatak/compositions/ds/svelte/spacer/usage"

const meta = {
  title: "DS/Spacer",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SpacerDemo> = {
  render: () => ({ Component: SpacerDemo }),
}

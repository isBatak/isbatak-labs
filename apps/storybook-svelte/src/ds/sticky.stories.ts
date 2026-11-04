import type { Meta, StoryObj } from "@storybook/svelte-vite"
import StickyDemo from "@isbatak/compositions/ds/svelte/sticky/usage"

const meta = {
  title: "DS/Sticky",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof StickyDemo> = {
  render: () => ({ Component: StickyDemo }),
}

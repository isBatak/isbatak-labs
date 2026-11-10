import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SkipNavDemo from "@isbatak/compositions/ds/svelte/skip-nav/usage"

const meta = {
  title: "DS/Skip nav",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SkipNavDemo> = {
  render: () => ({ Component: SkipNavDemo }),
}

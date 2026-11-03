import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TabsDemo from "@isbatak/compositions/ds/svelte/tabs/usage"

const meta = {
  title: "DS/Tabs",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TabsDemo> = {
  render: () => ({ Component: TabsDemo }),
}

import type { Meta, StoryObj } from "@storybook/svelte-vite"
import PresenceDemo from "@isbatak/compositions/ds/svelte/presence/usage"

const meta = {
  title: "DS/Presence",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof PresenceDemo> = {
  render: () => ({ Component: PresenceDemo }),
}

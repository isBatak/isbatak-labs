import type { Meta, StoryObj } from "@storybook/svelte-vite"
import PortalDemo from "@isbatak/compositions/ds/svelte/portal/usage"

const meta = {
  title: "DS/Portal",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof PortalDemo> = {
  render: () => ({ Component: PortalDemo }),
}

import type { Meta, StoryObj } from "@storybook/svelte-vite"
import LinkOverlayDemo from "@isbatak/compositions/ds/svelte/link-overlay/usage"
import LinkOverlayWithNestedLinkDemo from "@isbatak/compositions/ds/svelte/link-overlay/with-nested-link"

const meta = {
  title: "DS/Link overlay",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof LinkOverlayDemo> = {
  render: () => ({ Component: LinkOverlayDemo }),
}

export const WithNestedLink: StoryObj<typeof LinkOverlayWithNestedLinkDemo> = {
  render: () => ({ Component: LinkOverlayWithNestedLinkDemo }),
}

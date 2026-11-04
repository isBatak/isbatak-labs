import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import LinkOverlayDemo from "@isbatak/compositions/ds/vue/link-overlay/usage"
import LinkOverlayWithNestedLinkDemo from "@isbatak/compositions/ds/vue/link-overlay/with-nested-link"

const meta = {
  title: "DS/Link overlay",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(LinkOverlayDemo) }),
}

export const WithNestedLink: Story = {
  render: () => ({ setup: () => () => h(LinkOverlayWithNestedLinkDemo) }),
}

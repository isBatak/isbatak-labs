import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import LinkDemo from "@isbatak/compositions/ds/vue/link/usage"
import LinkExternalDemo from "@isbatak/compositions/ds/vue/link/external"
import LinkVariantsDemo from "@isbatak/compositions/ds/vue/link/variants"
import LinkWithinTextDemo from "@isbatak/compositions/ds/vue/link/within-text"

const meta = {
  title: "DS/Link",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(LinkDemo) }),
}

export const External: Story = {
  render: () => ({ setup: () => () => h(LinkExternalDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(LinkVariantsDemo) }),
}

export const WithinText: Story = {
  render: () => ({ setup: () => () => h(LinkWithinTextDemo) }),
}

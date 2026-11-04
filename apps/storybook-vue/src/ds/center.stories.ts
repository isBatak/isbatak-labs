import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import CenterDemo from "@isbatak/compositions/ds/vue/center/usage"
import CenterInlineDemo from "@isbatak/compositions/ds/vue/center/inline"
import CenterWithAbsoluteDemo from "@isbatak/compositions/ds/vue/center/with-absolute"
import CenterWithIconsDemo from "@isbatak/compositions/ds/vue/center/with-icons"

const meta = {
  title: "DS/Center",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(CenterDemo) }),
}

export const Inline: Story = {
  render: () => ({ setup: () => () => h(CenterInlineDemo) }),
}

export const WithAbsolute: Story = {
  render: () => ({ setup: () => () => h(CenterWithAbsoluteDemo) }),
}

export const WithIcons: Story = {
  render: () => ({ setup: () => () => h(CenterWithIconsDemo) }),
}

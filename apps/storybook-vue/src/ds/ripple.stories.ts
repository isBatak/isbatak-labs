import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import RippleDemo from "@isbatak/compositions/ds/vue/ripple/usage"
import RippleCenteredDemo from "@isbatak/compositions/ds/vue/ripple/centered"
import RippleWithButtonDemo from "@isbatak/compositions/ds/vue/ripple/with-button"
import RippleDisabledDemo from "@isbatak/compositions/ds/vue/ripple/disabled"
import RippleDisabledButtonDemo from "@isbatak/compositions/ds/vue/ripple/disabled-button"

const meta = {
  title: "DS/Ripple",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(RippleDemo) }),
}

export const Centered: Story = {
  render: () => ({ setup: () => () => h(RippleCenteredDemo) }),
}

export const WithButton: Story = {
  render: () => ({ setup: () => () => h(RippleWithButtonDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(RippleDisabledDemo) }),
}

export const DisabledButton: Story = {
  render: () => ({ setup: () => () => h(RippleDisabledButtonDemo) }),
}

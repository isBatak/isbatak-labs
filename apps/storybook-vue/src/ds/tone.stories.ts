import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ToneDemo from "@isbatak/compositions/ds/vue/tone/usage"
import TonePnlDemo from "@isbatak/compositions/ds/vue/tone/pnl"
import TonePlainDemo from "@isbatak/compositions/ds/vue/tone/plain"
import ToneCustomIndicatorDemo from "@isbatak/compositions/ds/vue/tone/custom-indicator"

const meta = {
  title: "DS/Tone",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ToneDemo) }),
}

export const Pnl: Story = {
  render: () => ({ setup: () => () => h(TonePnlDemo) }),
}

export const Plain: Story = {
  render: () => ({ setup: () => () => h(TonePlainDemo) }),
}

export const CustomIndicator: Story = {
  render: () => ({ setup: () => () => h(ToneCustomIndicatorDemo) }),
}

import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ToneDemo from "@isbatak/compositions/ds/svelte/tone/usage"
import TonePnlDemo from "@isbatak/compositions/ds/svelte/tone/pnl"
import TonePlainDemo from "@isbatak/compositions/ds/svelte/tone/plain"
import ToneCustomIndicatorDemo from "@isbatak/compositions/ds/svelte/tone/custom-indicator"

const meta = {
  title: "DS/Tone",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ToneDemo> = {
  render: () => ({ Component: ToneDemo }),
}

export const Pnl: StoryObj<typeof TonePnlDemo> = {
  render: () => ({ Component: TonePnlDemo }),
}

export const Plain: StoryObj<typeof TonePlainDemo> = {
  render: () => ({ Component: TonePlainDemo }),
}

export const CustomIndicator: StoryObj<typeof ToneCustomIndicatorDemo> = {
  render: () => ({ Component: ToneCustomIndicatorDemo }),
}

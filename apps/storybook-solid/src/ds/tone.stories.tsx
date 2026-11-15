import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ToneDemo } from "@isbatak/compositions/ds/solid/tone/usage"
import { TonePnlDemo } from "@isbatak/compositions/ds/solid/tone/pnl"
import { TonePlainDemo } from "@isbatak/compositions/ds/solid/tone/plain"
import { ToneCustomIndicatorDemo } from "@isbatak/compositions/ds/solid/tone/custom-indicator"

const meta = {
  title: "DS/Tone",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ToneDemo />,
}

export const Pnl: Story = {
  render: () => <TonePnlDemo />,
}

export const Plain: Story = {
  render: () => <TonePlainDemo />,
}

export const CustomIndicator: Story = {
  render: () => <ToneCustomIndicatorDemo />,
}

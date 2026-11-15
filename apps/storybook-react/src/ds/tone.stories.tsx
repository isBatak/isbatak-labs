import type { Meta, StoryObj } from "@storybook/react-vite"
import { ToneDemo } from "@isbatak/compositions/ds/react/tone/usage"
import { TonePnlDemo } from "@isbatak/compositions/ds/react/tone/pnl"
import { TonePlainDemo } from "@isbatak/compositions/ds/react/tone/plain"
import { ToneCustomIndicatorDemo } from "@isbatak/compositions/ds/react/tone/custom-indicator"

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

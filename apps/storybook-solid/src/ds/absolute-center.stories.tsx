import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { AbsoluteCenterDemo } from "@isbatak/compositions/ds/solid/absolute-center/usage"
import { AbsoluteCenterAxisDemo } from "@isbatak/compositions/ds/solid/absolute-center/axis"
import { AbsoluteCenterRtlDemo } from "@isbatak/compositions/ds/solid/absolute-center/rtl"
import { AbsoluteCenterWithOverlayDemo } from "@isbatak/compositions/ds/solid/absolute-center/with-overlay"

const meta = {
  title: "DS/Absolute center",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <AbsoluteCenterDemo />,
}

export const Axis: Story = {
  render: () => <AbsoluteCenterAxisDemo />,
}

export const Rtl: Story = {
  render: () => <AbsoluteCenterRtlDemo />,
}

export const WithOverlay: Story = {
  render: () => <AbsoluteCenterWithOverlayDemo />,
}

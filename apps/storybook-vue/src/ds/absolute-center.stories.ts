import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import AbsoluteCenterDemo from "@isbatak/compositions/ds/vue/absolute-center/usage"
import AbsoluteCenterAxisDemo from "@isbatak/compositions/ds/vue/absolute-center/axis"
import AbsoluteCenterRtlDemo from "@isbatak/compositions/ds/vue/absolute-center/rtl"
import AbsoluteCenterWithOverlayDemo from "@isbatak/compositions/ds/vue/absolute-center/with-overlay"

const meta = {
  title: "DS/Absolute center",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(AbsoluteCenterDemo) }),
}

export const Axis: Story = {
  render: () => ({ setup: () => () => h(AbsoluteCenterAxisDemo) }),
}

export const Rtl: Story = {
  render: () => ({ setup: () => () => h(AbsoluteCenterRtlDemo) }),
}

export const WithOverlay: Story = {
  render: () => ({ setup: () => () => h(AbsoluteCenterWithOverlayDemo) }),
}

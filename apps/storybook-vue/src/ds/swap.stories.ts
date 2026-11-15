import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SwapDemo from "@isbatak/compositions/ds/vue/swap/usage"
import SwapScaleDemo from "@isbatak/compositions/ds/vue/swap/scale"
import SwapRotateDemo from "@isbatak/compositions/ds/vue/swap/rotate"
import SwapFlipDemo from "@isbatak/compositions/ds/vue/swap/flip"
import SwapSlideDemo from "@isbatak/compositions/ds/vue/swap/slide"
import SwapStackDemo from "@isbatak/compositions/ds/vue/swap/stack"

const meta = {
  title: "DS/Swap",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SwapDemo) }),
}

export const Scale: Story = {
  render: () => ({ setup: () => () => h(SwapScaleDemo) }),
}

export const Rotate: Story = {
  render: () => ({ setup: () => () => h(SwapRotateDemo) }),
}

export const Flip: Story = {
  render: () => ({ setup: () => () => h(SwapFlipDemo) }),
}

export const Slide: Story = {
  render: () => ({ setup: () => () => h(SwapSlideDemo) }),
}

export const Stack: Story = {
  render: () => ({ setup: () => () => h(SwapStackDemo) }),
}

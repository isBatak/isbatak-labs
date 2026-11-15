import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { SwapDemo } from "@isbatak/compositions/ds/solid/swap/usage"
import { SwapScaleDemo } from "@isbatak/compositions/ds/solid/swap/scale"
import { SwapRotateDemo } from "@isbatak/compositions/ds/solid/swap/rotate"
import { SwapFlipDemo } from "@isbatak/compositions/ds/solid/swap/flip"
import { SwapSlideDemo } from "@isbatak/compositions/ds/solid/swap/slide"
import { SwapStackDemo } from "@isbatak/compositions/ds/solid/swap/stack"

const meta = {
  title: "DS/Swap",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SwapDemo />,
}

export const Scale: Story = {
  render: () => <SwapScaleDemo />,
}

export const Rotate: Story = {
  render: () => <SwapRotateDemo />,
}

export const Flip: Story = {
  render: () => <SwapFlipDemo />,
}

export const Slide: Story = {
  render: () => <SwapSlideDemo />,
}

export const Stack: Story = {
  render: () => <SwapStackDemo />,
}

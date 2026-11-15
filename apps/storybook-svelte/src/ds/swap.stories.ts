import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SwapDemo from "@isbatak/compositions/ds/svelte/swap/usage"
import SwapScaleDemo from "@isbatak/compositions/ds/svelte/swap/scale"
import SwapRotateDemo from "@isbatak/compositions/ds/svelte/swap/rotate"
import SwapFlipDemo from "@isbatak/compositions/ds/svelte/swap/flip"
import SwapSlideDemo from "@isbatak/compositions/ds/svelte/swap/slide"
import SwapStackDemo from "@isbatak/compositions/ds/svelte/swap/stack"

const meta = {
  title: "DS/Swap",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SwapDemo> = {
  render: () => ({ Component: SwapDemo }),
}

export const Scale: StoryObj<typeof SwapScaleDemo> = {
  render: () => ({ Component: SwapScaleDemo }),
}

export const Rotate: StoryObj<typeof SwapRotateDemo> = {
  render: () => ({ Component: SwapRotateDemo }),
}

export const Flip: StoryObj<typeof SwapFlipDemo> = {
  render: () => ({ Component: SwapFlipDemo }),
}

export const Slide: StoryObj<typeof SwapSlideDemo> = {
  render: () => ({ Component: SwapSlideDemo }),
}

export const Stack: StoryObj<typeof SwapStackDemo> = {
  render: () => ({ Component: SwapStackDemo }),
}

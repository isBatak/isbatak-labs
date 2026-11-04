import type { Meta, StoryObj } from "@storybook/svelte-vite"
import AbsoluteCenterDemo from "@isbatak/compositions/ds/svelte/absolute-center/usage"
import AbsoluteCenterAxisDemo from "@isbatak/compositions/ds/svelte/absolute-center/axis"
import AbsoluteCenterRtlDemo from "@isbatak/compositions/ds/svelte/absolute-center/rtl"
import AbsoluteCenterWithOverlayDemo from "@isbatak/compositions/ds/svelte/absolute-center/with-overlay"

const meta = {
  title: "DS/Absolute center",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof AbsoluteCenterDemo> = {
  render: () => ({ Component: AbsoluteCenterDemo }),
}

export const Axis: StoryObj<typeof AbsoluteCenterAxisDemo> = {
  render: () => ({ Component: AbsoluteCenterAxisDemo }),
}

export const Rtl: StoryObj<typeof AbsoluteCenterRtlDemo> = {
  render: () => ({ Component: AbsoluteCenterRtlDemo }),
}

export const WithOverlay: StoryObj<typeof AbsoluteCenterWithOverlayDemo> = {
  render: () => ({ Component: AbsoluteCenterWithOverlayDemo }),
}

import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SpinnerDemo from "@isbatak/compositions/ds/svelte/spinner/usage"
import SpinnerSizesDemo from "@isbatak/compositions/ds/svelte/spinner/sizes"
import SpinnerColorsDemo from "@isbatak/compositions/ds/svelte/spinner/colors"
import SpinnerWithTrackDemo from "@isbatak/compositions/ds/svelte/spinner/with-track"
import SpinnerWithLabelDemo from "@isbatak/compositions/ds/svelte/spinner/with-label"
import SpinnerCustomSpeedDemo from "@isbatak/compositions/ds/svelte/spinner/custom-speed"

const meta = {
  title: "DS/Spinner",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SpinnerDemo> = {
  render: () => ({ Component: SpinnerDemo }),
}

export const Sizes: StoryObj<typeof SpinnerSizesDemo> = {
  render: () => ({ Component: SpinnerSizesDemo }),
}

export const Colors: StoryObj<typeof SpinnerColorsDemo> = {
  render: () => ({ Component: SpinnerColorsDemo }),
}

export const WithTrack: StoryObj<typeof SpinnerWithTrackDemo> = {
  render: () => ({ Component: SpinnerWithTrackDemo }),
}

export const WithLabel: StoryObj<typeof SpinnerWithLabelDemo> = {
  render: () => ({ Component: SpinnerWithLabelDemo }),
}

export const CustomSpeed: StoryObj<typeof SpinnerCustomSpeedDemo> = {
  render: () => ({ Component: SpinnerCustomSpeedDemo }),
}

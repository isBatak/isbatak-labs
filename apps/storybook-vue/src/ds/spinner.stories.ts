import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SpinnerDemo from "@isbatak/compositions/ds/vue/spinner/usage"
import SpinnerSizesDemo from "@isbatak/compositions/ds/vue/spinner/sizes"
import SpinnerColorsDemo from "@isbatak/compositions/ds/vue/spinner/colors"
import SpinnerWithTrackDemo from "@isbatak/compositions/ds/vue/spinner/with-track"
import SpinnerWithLabelDemo from "@isbatak/compositions/ds/vue/spinner/with-label"
import SpinnerCustomSpeedDemo from "@isbatak/compositions/ds/vue/spinner/custom-speed"

const meta = {
  title: "DS/Spinner",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SpinnerDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(SpinnerSizesDemo) }),
}

export const Colors: Story = {
  render: () => ({ setup: () => () => h(SpinnerColorsDemo) }),
}

export const WithTrack: Story = {
  render: () => ({ setup: () => () => h(SpinnerWithTrackDemo) }),
}

export const WithLabel: Story = {
  render: () => ({ setup: () => () => h(SpinnerWithLabelDemo) }),
}

export const CustomSpeed: Story = {
  render: () => ({ setup: () => () => h(SpinnerCustomSpeedDemo) }),
}

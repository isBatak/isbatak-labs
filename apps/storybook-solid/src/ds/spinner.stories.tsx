import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { SpinnerDemo } from "@isbatak/compositions/ds/solid/spinner/usage"
import { SpinnerSizesDemo } from "@isbatak/compositions/ds/solid/spinner/sizes"
import { SpinnerColorsDemo } from "@isbatak/compositions/ds/solid/spinner/colors"
import { SpinnerWithTrackDemo } from "@isbatak/compositions/ds/solid/spinner/with-track"
import { SpinnerWithLabelDemo } from "@isbatak/compositions/ds/solid/spinner/with-label"
import { SpinnerCustomSpeedDemo } from "@isbatak/compositions/ds/solid/spinner/custom-speed"

const meta = {
  title: "DS/Spinner",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SpinnerDemo />,
}

export const Sizes: Story = {
  render: () => <SpinnerSizesDemo />,
}

export const Colors: Story = {
  render: () => <SpinnerColorsDemo />,
}

export const WithTrack: Story = {
  render: () => <SpinnerWithTrackDemo />,
}

export const WithLabel: Story = {
  render: () => <SpinnerWithLabelDemo />,
}

export const CustomSpeed: Story = {
  render: () => <SpinnerCustomSpeedDemo />,
}

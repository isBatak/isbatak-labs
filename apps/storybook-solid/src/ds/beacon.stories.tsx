import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { BeaconDemo } from "@isbatak/compositions/ds/solid/beacon/usage"
import { BeaconSizesDemo } from "@isbatak/compositions/ds/solid/beacon/sizes"
import { BeaconColorsDemo } from "@isbatak/compositions/ds/solid/beacon/colors"
import { BeaconWithLabelDemo } from "@isbatak/compositions/ds/solid/beacon/with-label"

const meta = {
  title: "DS/Beacon",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <BeaconDemo />,
}

export const Sizes: Story = {
  render: () => <BeaconSizesDemo />,
}

export const Colors: Story = {
  render: () => <BeaconColorsDemo />,
}

export const WithLabel: Story = {
  render: () => <BeaconWithLabelDemo />,
}

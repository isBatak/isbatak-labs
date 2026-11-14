import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import BeaconDemo from "@isbatak/compositions/ds/vue/beacon/usage"
import BeaconSizesDemo from "@isbatak/compositions/ds/vue/beacon/sizes"
import BeaconColorsDemo from "@isbatak/compositions/ds/vue/beacon/colors"
import BeaconWithLabelDemo from "@isbatak/compositions/ds/vue/beacon/with-label"

const meta = {
  title: "DS/Beacon",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(BeaconDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(BeaconSizesDemo) }),
}

export const Colors: Story = {
  render: () => ({ setup: () => () => h(BeaconColorsDemo) }),
}

export const WithLabel: Story = {
  render: () => ({ setup: () => () => h(BeaconWithLabelDemo) }),
}

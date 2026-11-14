import type { Meta, StoryObj } from "@storybook/svelte-vite"
import BeaconDemo from "@isbatak/compositions/ds/svelte/beacon/usage"
import BeaconSizesDemo from "@isbatak/compositions/ds/svelte/beacon/sizes"
import BeaconColorsDemo from "@isbatak/compositions/ds/svelte/beacon/colors"
import BeaconWithLabelDemo from "@isbatak/compositions/ds/svelte/beacon/with-label"

const meta = {
  title: "DS/Beacon",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof BeaconDemo> = {
  render: () => ({ Component: BeaconDemo }),
}

export const Sizes: StoryObj<typeof BeaconSizesDemo> = {
  render: () => ({ Component: BeaconSizesDemo }),
}

export const Colors: StoryObj<typeof BeaconColorsDemo> = {
  render: () => ({ Component: BeaconColorsDemo }),
}

export const WithLabel: StoryObj<typeof BeaconWithLabelDemo> = {
  render: () => ({ Component: BeaconWithLabelDemo }),
}

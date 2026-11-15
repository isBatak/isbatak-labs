import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import AngleSliderDemo from "@isbatak/compositions/ds/vue/angle-slider/usage"
import AngleSliderContextDemo from "@isbatak/compositions/ds/vue/angle-slider/context"
import AngleSliderControlledDemo from "@isbatak/compositions/ds/vue/angle-slider/controlled"
import AngleSliderDisabledDemo from "@isbatak/compositions/ds/vue/angle-slider/disabled"
import AngleSliderRootProviderDemo from "@isbatak/compositions/ds/vue/angle-slider/root-provider"
import AngleSliderStepDemo from "@isbatak/compositions/ds/vue/angle-slider/step"
import AngleSliderSizesDemo from "@isbatak/compositions/ds/vue/angle-slider/sizes"
import AngleSliderVariantsDemo from "@isbatak/compositions/ds/vue/angle-slider/variants"

const meta = {
  title: "DS/Angle slider",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(AngleSliderDemo) }),
}

export const Context: Story = {
  render: () => ({ setup: () => () => h(AngleSliderContextDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(AngleSliderControlledDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(AngleSliderDisabledDemo) }),
}

export const RootProvider: Story = {
  render: () => ({ setup: () => () => h(AngleSliderRootProviderDemo) }),
}

export const Step: Story = {
  render: () => ({ setup: () => () => h(AngleSliderStepDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(AngleSliderSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(AngleSliderVariantsDemo) }),
}

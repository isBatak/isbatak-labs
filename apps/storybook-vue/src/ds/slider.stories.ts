import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SliderDemo from "@isbatak/compositions/ds/vue/slider/usage"
import SliderColorsDemo from "@isbatak/compositions/ds/vue/slider/colors"
import SliderControlledDemo from "@isbatak/compositions/ds/vue/slider/controlled"
import SliderDisabledDemo from "@isbatak/compositions/ds/vue/slider/disabled"
import SliderMarksDemo from "@isbatak/compositions/ds/vue/slider/marks"
import SliderRangeDemo from "@isbatak/compositions/ds/vue/slider/range"
import SliderSizesDemo from "@isbatak/compositions/ds/vue/slider/sizes"
import SliderStepDemo from "@isbatak/compositions/ds/vue/slider/step"
import SliderVariantsDemo from "@isbatak/compositions/ds/vue/slider/variants"
import SliderVerticalDemo from "@isbatak/compositions/ds/vue/slider/vertical"

const meta = {
  title: "DS/Slider",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SliderDemo) }),
}

export const Colors: Story = {
  render: () => ({ setup: () => () => h(SliderColorsDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(SliderControlledDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(SliderDisabledDemo) }),
}

export const Marks: Story = {
  render: () => ({ setup: () => () => h(SliderMarksDemo) }),
}

export const Range: Story = {
  render: () => ({ setup: () => () => h(SliderRangeDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(SliderSizesDemo) }),
}

export const Step: Story = {
  render: () => ({ setup: () => () => h(SliderStepDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(SliderVariantsDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(SliderVerticalDemo) }),
}

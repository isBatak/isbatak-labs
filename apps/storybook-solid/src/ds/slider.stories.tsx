import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { SliderDemo } from "@isbatak/compositions/ds/solid/slider/usage"
import { SliderColorsDemo } from "@isbatak/compositions/ds/solid/slider/colors"
import { SliderControlledDemo } from "@isbatak/compositions/ds/solid/slider/controlled"
import { SliderDisabledDemo } from "@isbatak/compositions/ds/solid/slider/disabled"
import { SliderMarksDemo } from "@isbatak/compositions/ds/solid/slider/marks"
import { SliderRangeDemo } from "@isbatak/compositions/ds/solid/slider/range"
import { SliderSizesDemo } from "@isbatak/compositions/ds/solid/slider/sizes"
import { SliderStepDemo } from "@isbatak/compositions/ds/solid/slider/step"
import { SliderVariantsDemo } from "@isbatak/compositions/ds/solid/slider/variants"
import { SliderVerticalDemo } from "@isbatak/compositions/ds/solid/slider/vertical"

const meta = {
  title: "DS/Slider",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SliderDemo />,
}

export const Colors: Story = {
  render: () => <SliderColorsDemo />,
}

export const Controlled: Story = {
  render: () => <SliderControlledDemo />,
}

export const Disabled: Story = {
  render: () => <SliderDisabledDemo />,
}

export const Marks: Story = {
  render: () => <SliderMarksDemo />,
}

export const Range: Story = {
  render: () => <SliderRangeDemo />,
}

export const Sizes: Story = {
  render: () => <SliderSizesDemo />,
}

export const Step: Story = {
  render: () => <SliderStepDemo />,
}

export const Variants: Story = {
  render: () => <SliderVariantsDemo />,
}

export const Vertical: Story = {
  render: () => <SliderVerticalDemo />,
}

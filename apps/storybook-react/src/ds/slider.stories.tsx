import type { Meta, StoryObj } from "@storybook/react-vite"
import { SliderDemo } from "@isbatak/compositions/ds/react/slider/usage"
import { SliderColorsDemo } from "@isbatak/compositions/ds/react/slider/colors"
import { SliderControlledDemo } from "@isbatak/compositions/ds/react/slider/controlled"
import { SliderDisabledDemo } from "@isbatak/compositions/ds/react/slider/disabled"
import { SliderMarksDemo } from "@isbatak/compositions/ds/react/slider/marks"
import { SliderRangeDemo } from "@isbatak/compositions/ds/react/slider/range"
import { SliderSizesDemo } from "@isbatak/compositions/ds/react/slider/sizes"
import { SliderStepDemo } from "@isbatak/compositions/ds/react/slider/step"
import { SliderVariantsDemo } from "@isbatak/compositions/ds/react/slider/variants"
import { SliderVerticalDemo } from "@isbatak/compositions/ds/react/slider/vertical"

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

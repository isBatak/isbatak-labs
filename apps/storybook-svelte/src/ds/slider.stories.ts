import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SliderDemo from "@isbatak/compositions/ds/svelte/slider/usage"
import SliderColorsDemo from "@isbatak/compositions/ds/svelte/slider/colors"
import SliderControlledDemo from "@isbatak/compositions/ds/svelte/slider/controlled"
import SliderDisabledDemo from "@isbatak/compositions/ds/svelte/slider/disabled"
import SliderMarksDemo from "@isbatak/compositions/ds/svelte/slider/marks"
import SliderRangeDemo from "@isbatak/compositions/ds/svelte/slider/range"
import SliderSizesDemo from "@isbatak/compositions/ds/svelte/slider/sizes"
import SliderStepDemo from "@isbatak/compositions/ds/svelte/slider/step"
import SliderVariantsDemo from "@isbatak/compositions/ds/svelte/slider/variants"
import SliderVerticalDemo from "@isbatak/compositions/ds/svelte/slider/vertical"

const meta = {
  title: "DS/Slider",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SliderDemo> = {
  render: () => ({ Component: SliderDemo }),
}

export const Colors: StoryObj<typeof SliderColorsDemo> = {
  render: () => ({ Component: SliderColorsDemo }),
}

export const Controlled: StoryObj<typeof SliderControlledDemo> = {
  render: () => ({ Component: SliderControlledDemo }),
}

export const Disabled: StoryObj<typeof SliderDisabledDemo> = {
  render: () => ({ Component: SliderDisabledDemo }),
}

export const Marks: StoryObj<typeof SliderMarksDemo> = {
  render: () => ({ Component: SliderMarksDemo }),
}

export const Range: StoryObj<typeof SliderRangeDemo> = {
  render: () => ({ Component: SliderRangeDemo }),
}

export const Sizes: StoryObj<typeof SliderSizesDemo> = {
  render: () => ({ Component: SliderSizesDemo }),
}

export const Step: StoryObj<typeof SliderStepDemo> = {
  render: () => ({ Component: SliderStepDemo }),
}

export const Variants: StoryObj<typeof SliderVariantsDemo> = {
  render: () => ({ Component: SliderVariantsDemo }),
}

export const Vertical: StoryObj<typeof SliderVerticalDemo> = {
  render: () => ({ Component: SliderVerticalDemo }),
}

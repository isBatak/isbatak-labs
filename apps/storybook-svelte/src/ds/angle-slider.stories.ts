import type { Meta, StoryObj } from "@storybook/svelte-vite"
import AngleSliderDemo from "@isbatak/compositions/ds/svelte/angle-slider/usage"
import AngleSliderContextDemo from "@isbatak/compositions/ds/svelte/angle-slider/context"
import AngleSliderControlledDemo from "@isbatak/compositions/ds/svelte/angle-slider/controlled"
import AngleSliderDisabledDemo from "@isbatak/compositions/ds/svelte/angle-slider/disabled"
import AngleSliderRootProviderDemo from "@isbatak/compositions/ds/svelte/angle-slider/root-provider"
import AngleSliderStepDemo from "@isbatak/compositions/ds/svelte/angle-slider/step"
import AngleSliderSizesDemo from "@isbatak/compositions/ds/svelte/angle-slider/sizes"
import AngleSliderVariantsDemo from "@isbatak/compositions/ds/svelte/angle-slider/variants"

const meta = {
  title: "DS/Angle slider",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof AngleSliderDemo> = {
  render: () => ({ Component: AngleSliderDemo }),
}

export const Context: StoryObj<typeof AngleSliderContextDemo> = {
  render: () => ({ Component: AngleSliderContextDemo }),
}

export const Controlled: StoryObj<typeof AngleSliderControlledDemo> = {
  render: () => ({ Component: AngleSliderControlledDemo }),
}

export const Disabled: StoryObj<typeof AngleSliderDisabledDemo> = {
  render: () => ({ Component: AngleSliderDisabledDemo }),
}

export const RootProvider: StoryObj<typeof AngleSliderRootProviderDemo> = {
  render: () => ({ Component: AngleSliderRootProviderDemo }),
}

export const Step: StoryObj<typeof AngleSliderStepDemo> = {
  render: () => ({ Component: AngleSliderStepDemo }),
}

export const Sizes: StoryObj<typeof AngleSliderSizesDemo> = {
  render: () => ({ Component: AngleSliderSizesDemo }),
}

export const Variants: StoryObj<typeof AngleSliderVariantsDemo> = {
  render: () => ({ Component: AngleSliderVariantsDemo }),
}

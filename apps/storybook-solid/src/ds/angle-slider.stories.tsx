import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { AngleSliderDemo } from "@isbatak/compositions/ds/solid/angle-slider/usage"
import { AngleSliderContextDemo } from "@isbatak/compositions/ds/solid/angle-slider/context"
import { AngleSliderControlledDemo } from "@isbatak/compositions/ds/solid/angle-slider/controlled"
import { AngleSliderDisabledDemo } from "@isbatak/compositions/ds/solid/angle-slider/disabled"
import { AngleSliderRootProviderDemo } from "@isbatak/compositions/ds/solid/angle-slider/root-provider"
import { AngleSliderStepDemo } from "@isbatak/compositions/ds/solid/angle-slider/step"
import { AngleSliderSizesDemo } from "@isbatak/compositions/ds/solid/angle-slider/sizes"
import { AngleSliderVariantsDemo } from "@isbatak/compositions/ds/solid/angle-slider/variants"

const meta = {
  title: "DS/Angle slider",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <AngleSliderDemo />,
}

export const Context: Story = {
  render: () => <AngleSliderContextDemo />,
}

export const Controlled: Story = {
  render: () => <AngleSliderControlledDemo />,
}

export const Disabled: Story = {
  render: () => <AngleSliderDisabledDemo />,
}

export const RootProvider: Story = {
  render: () => <AngleSliderRootProviderDemo />,
}

export const Step: Story = {
  render: () => <AngleSliderStepDemo />,
}

export const Sizes: Story = {
  render: () => <AngleSliderSizesDemo />,
}

export const Variants: Story = {
  render: () => <AngleSliderVariantsDemo />,
}

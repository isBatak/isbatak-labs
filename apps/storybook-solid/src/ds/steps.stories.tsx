import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { StepsDemo } from "@isbatak/compositions/ds/solid/steps/usage"
import { StepsSizesDemo } from "@isbatak/compositions/ds/solid/steps/sizes"
import { StepsVariantsDemo } from "@isbatak/compositions/ds/solid/steps/variants"
import { StepsColorsDemo } from "@isbatak/compositions/ds/solid/steps/colors"
import { StepsVerticalDemo } from "@isbatak/compositions/ds/solid/steps/vertical"
import { StepsControlledDemo } from "@isbatak/compositions/ds/solid/steps/controlled"
import { StepsIconDemo } from "@isbatak/compositions/ds/solid/steps/icon"
import { StepsDescriptionDemo } from "@isbatak/compositions/ds/solid/steps/description"
import { StepsTriggerDemo } from "@isbatak/compositions/ds/solid/steps/trigger"

const meta = {
  title: "DS/Steps",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <StepsDemo />,
}

export const Sizes: Story = {
  render: () => <StepsSizesDemo />,
}

export const Variants: Story = {
  render: () => <StepsVariantsDemo />,
}

export const Colors: Story = {
  render: () => <StepsColorsDemo />,
}

export const Vertical: Story = {
  render: () => <StepsVerticalDemo />,
}

export const Controlled: Story = {
  render: () => <StepsControlledDemo />,
}

export const Icon: Story = {
  render: () => <StepsIconDemo />,
}

export const Description: Story = {
  render: () => <StepsDescriptionDemo />,
}

export const Trigger: Story = {
  render: () => <StepsTriggerDemo />,
}

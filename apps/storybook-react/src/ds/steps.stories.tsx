import type { Meta, StoryObj } from "@storybook/react-vite"
import { StepsDemo } from "@isbatak/compositions/ds/react/steps/usage"
import { StepsSizesDemo } from "@isbatak/compositions/ds/react/steps/sizes"
import { StepsVariantsDemo } from "@isbatak/compositions/ds/react/steps/variants"
import { StepsColorsDemo } from "@isbatak/compositions/ds/react/steps/colors"
import { StepsVerticalDemo } from "@isbatak/compositions/ds/react/steps/vertical"
import { StepsControlledDemo } from "@isbatak/compositions/ds/react/steps/controlled"
import { StepsIconDemo } from "@isbatak/compositions/ds/react/steps/icon"
import { StepsDescriptionDemo } from "@isbatak/compositions/ds/react/steps/description"
import { StepsTriggerDemo } from "@isbatak/compositions/ds/react/steps/trigger"

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

import type { Meta, StoryObj } from "@storybook/svelte-vite"
import StepsDemo from "@isbatak/compositions/ds/svelte/steps/usage"
import StepsSizesDemo from "@isbatak/compositions/ds/svelte/steps/sizes"
import StepsVariantsDemo from "@isbatak/compositions/ds/svelte/steps/variants"
import StepsColorsDemo from "@isbatak/compositions/ds/svelte/steps/colors"
import StepsVerticalDemo from "@isbatak/compositions/ds/svelte/steps/vertical"
import StepsControlledDemo from "@isbatak/compositions/ds/svelte/steps/controlled"
import StepsIconDemo from "@isbatak/compositions/ds/svelte/steps/icon"
import StepsDescriptionDemo from "@isbatak/compositions/ds/svelte/steps/description"
import StepsTriggerDemo from "@isbatak/compositions/ds/svelte/steps/trigger"

const meta = {
  title: "DS/Steps",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof StepsDemo> = {
  render: () => ({ Component: StepsDemo }),
}

export const Sizes: StoryObj<typeof StepsSizesDemo> = {
  render: () => ({ Component: StepsSizesDemo }),
}

export const Variants: StoryObj<typeof StepsVariantsDemo> = {
  render: () => ({ Component: StepsVariantsDemo }),
}

export const Colors: StoryObj<typeof StepsColorsDemo> = {
  render: () => ({ Component: StepsColorsDemo }),
}

export const Vertical: StoryObj<typeof StepsVerticalDemo> = {
  render: () => ({ Component: StepsVerticalDemo }),
}

export const Controlled: StoryObj<typeof StepsControlledDemo> = {
  render: () => ({ Component: StepsControlledDemo }),
}

export const Icon: StoryObj<typeof StepsIconDemo> = {
  render: () => ({ Component: StepsIconDemo }),
}

export const Description: StoryObj<typeof StepsDescriptionDemo> = {
  render: () => ({ Component: StepsDescriptionDemo }),
}

export const Trigger: StoryObj<typeof StepsTriggerDemo> = {
  render: () => ({ Component: StepsTriggerDemo }),
}

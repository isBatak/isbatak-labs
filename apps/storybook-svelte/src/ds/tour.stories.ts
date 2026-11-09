import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TourDemo from "@isbatak/compositions/ds/svelte/tour/usage"
import TourStepTypesDemo from "@isbatak/compositions/ds/svelte/tour/step-types"
import TourWaitForClickDemo from "@isbatak/compositions/ds/svelte/tour/wait-for-click"

const meta = {
  title: "DS/Tour",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TourDemo> = {
  render: () => ({ Component: TourDemo }),
}

export const StepTypes: StoryObj<typeof TourStepTypesDemo> = {
  render: () => ({ Component: TourStepTypesDemo }),
}

export const WaitForClick: StoryObj<typeof TourWaitForClickDemo> = {
  render: () => ({ Component: TourWaitForClickDemo }),
}

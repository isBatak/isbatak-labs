import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TourDemo from "@isbatak/compositions/ds/vue/tour/usage"
import TourStepTypesDemo from "@isbatak/compositions/ds/vue/tour/step-types"
import TourWaitForClickDemo from "@isbatak/compositions/ds/vue/tour/wait-for-click"

const meta = {
  title: "DS/Tour",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TourDemo) }),
}

export const StepTypes: Story = {
  render: () => ({ setup: () => () => h(TourStepTypesDemo) }),
}

export const WaitForClick: Story = {
  render: () => ({ setup: () => () => h(TourWaitForClickDemo) }),
}

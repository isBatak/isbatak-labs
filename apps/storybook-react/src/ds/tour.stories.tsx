import type { Meta, StoryObj } from "@storybook/react-vite"
import { TourDemo } from "@isbatak/compositions/ds/react/tour/usage"
import { TourStepTypesDemo } from "@isbatak/compositions/ds/react/tour/step-types"
import { TourWaitForClickDemo } from "@isbatak/compositions/ds/react/tour/wait-for-click"

const meta = {
  title: "DS/Tour",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TourDemo />,
}

export const StepTypes: Story = {
  render: () => <TourStepTypesDemo />,
}

export const WaitForClick: Story = {
  render: () => <TourWaitForClickDemo />,
}

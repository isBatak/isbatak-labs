import type { Meta, StoryObj } from "@storybook/react-vite"
import { SliderDemo } from "@isbatak/compositions/ds/react/slider/usage"

const meta = {
  title: "DS/Slider",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SliderDemo />,
}

import type { Meta, StoryObj } from "@storybook/react-vite"
import { TextareaDemo } from "@isbatak/compositions/ds/react/textarea/usage"
import { TextareaSizesDemo } from "@isbatak/compositions/ds/react/textarea/sizes"
import { TextareaVariantsDemo } from "@isbatak/compositions/ds/react/textarea/variants"
import { TextareaWithFieldDemo } from "@isbatak/compositions/ds/react/textarea/with-field"

const meta = {
  title: "DS/Textarea",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TextareaDemo />,
}

export const Sizes: Story = {
  render: () => <TextareaSizesDemo />,
}

export const Variants: Story = {
  render: () => <TextareaVariantsDemo />,
}

export const WithField: Story = {
  render: () => <TextareaWithFieldDemo />,
}

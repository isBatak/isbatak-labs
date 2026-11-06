import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { TextareaDemo } from "@isbatak/compositions/ds/solid/textarea/usage"
import { TextareaSizesDemo } from "@isbatak/compositions/ds/solid/textarea/sizes"
import { TextareaVariantsDemo } from "@isbatak/compositions/ds/solid/textarea/variants"
import { TextareaWithFieldDemo } from "@isbatak/compositions/ds/solid/textarea/with-field"

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

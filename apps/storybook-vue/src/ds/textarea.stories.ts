import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TextareaDemo from "@isbatak/compositions/ds/vue/textarea/usage"
import TextareaSizesDemo from "@isbatak/compositions/ds/vue/textarea/sizes"
import TextareaVariantsDemo from "@isbatak/compositions/ds/vue/textarea/variants"
import TextareaWithFieldDemo from "@isbatak/compositions/ds/vue/textarea/with-field"

const meta = {
  title: "DS/Textarea",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TextareaDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(TextareaSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(TextareaVariantsDemo) }),
}

export const WithField: Story = {
  render: () => ({ setup: () => () => h(TextareaWithFieldDemo) }),
}

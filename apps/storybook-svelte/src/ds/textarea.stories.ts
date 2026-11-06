import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TextareaDemo from "@isbatak/compositions/ds/svelte/textarea/usage"
import TextareaSizesDemo from "@isbatak/compositions/ds/svelte/textarea/sizes"
import TextareaVariantsDemo from "@isbatak/compositions/ds/svelte/textarea/variants"
import TextareaWithFieldDemo from "@isbatak/compositions/ds/svelte/textarea/with-field"

const meta = {
  title: "DS/Textarea",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TextareaDemo> = {
  render: () => ({ Component: TextareaDemo }),
}

export const Sizes: StoryObj<typeof TextareaSizesDemo> = {
  render: () => ({ Component: TextareaSizesDemo }),
}

export const Variants: StoryObj<typeof TextareaVariantsDemo> = {
  render: () => ({ Component: TextareaVariantsDemo }),
}

export const WithField: StoryObj<typeof TextareaWithFieldDemo> = {
  render: () => ({ Component: TextareaWithFieldDemo }),
}

import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import FieldsetDemo from "@isbatak/compositions/ds/vue/fieldset/usage"
import FieldsetInvalidDemo from "@isbatak/compositions/ds/vue/fieldset/invalid"

const meta = {
  title: "DS/Fieldset",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(FieldsetDemo) }),
}

export const Invalid: Story = {
  render: () => ({ setup: () => () => h(FieldsetInvalidDemo) }),
}

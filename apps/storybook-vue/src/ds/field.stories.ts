import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import FieldDemo from "@isbatak/compositions/ds/vue/field/usage"
import FieldDisabledDemo from "@isbatak/compositions/ds/vue/field/disabled"
import FieldHorizontalDemo from "@isbatak/compositions/ds/vue/field/horizontal"
import FieldInvalidDemo from "@isbatak/compositions/ds/vue/field/invalid"
import FieldOptionalDemo from "@isbatak/compositions/ds/vue/field/optional"
import FieldRequiredDemo from "@isbatak/compositions/ds/vue/field/required"

const meta = {
  title: "DS/Field",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(FieldDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(FieldDisabledDemo) }),
}

export const Horizontal: Story = {
  render: () => ({ setup: () => () => h(FieldHorizontalDemo) }),
}

export const Invalid: Story = {
  render: () => ({ setup: () => () => h(FieldInvalidDemo) }),
}

export const Optional: Story = {
  render: () => ({ setup: () => () => h(FieldOptionalDemo) }),
}

export const Required: Story = {
  render: () => ({ setup: () => () => h(FieldRequiredDemo) }),
}

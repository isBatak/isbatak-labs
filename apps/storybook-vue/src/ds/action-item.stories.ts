import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ActionItemDemo from "@isbatak/compositions/ds/vue/action-item/usage"
import ActionItemVariantsDemo from "@isbatak/compositions/ds/vue/action-item/variants"
import ActionItemWithStartElementDemo from "@isbatak/compositions/ds/vue/action-item/with-start-element"
import ActionItemWithDescriptionDemo from "@isbatak/compositions/ds/vue/action-item/with-description"
import ActionItemWithControlDemo from "@isbatak/compositions/ds/vue/action-item/with-control"
import ActionItemDisabledDemo from "@isbatak/compositions/ds/vue/action-item/disabled"

const meta = {
  title: "DS/Action item",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ActionItemDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(ActionItemVariantsDemo) }),
}

export const WithStartElement: Story = {
  render: () => ({ setup: () => () => h(ActionItemWithStartElementDemo) }),
}

export const WithDescription: Story = {
  render: () => ({ setup: () => () => h(ActionItemWithDescriptionDemo) }),
}

export const WithControl: Story = {
  render: () => ({ setup: () => () => h(ActionItemWithControlDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(ActionItemDisabledDemo) }),
}

import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import AlertDemo from "@isbatak/compositions/ds/vue/alert/usage"
import AlertStatusDemo from "@isbatak/compositions/ds/vue/alert/status"
import AlertVariantsDemo from "@isbatak/compositions/ds/vue/alert/variants"
import AlertSizesDemo from "@isbatak/compositions/ds/vue/alert/sizes"
import AlertWithDescriptionDemo from "@isbatak/compositions/ds/vue/alert/with-description"
import AlertWithActionDemo from "@isbatak/compositions/ds/vue/alert/with-action"

const meta = {
  title: "DS/Alert",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(AlertDemo) }),
}

export const Status: Story = {
  render: () => ({ setup: () => () => h(AlertStatusDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(AlertVariantsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(AlertSizesDemo) }),
}

export const WithDescription: Story = {
  render: () => ({ setup: () => () => h(AlertWithDescriptionDemo) }),
}

export const WithAction: Story = {
  render: () => ({ setup: () => () => h(AlertWithActionDemo) }),
}

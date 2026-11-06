import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import InputGroupDemo from "@isbatak/compositions/ds/vue/input-group/usage"
import InputGroupAddonsDemo from "@isbatak/compositions/ds/vue/input-group/addons"
import InputGroupEndElementDemo from "@isbatak/compositions/ds/vue/input-group/end-element"

const meta = {
  title: "DS/Input group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(InputGroupDemo) }),
}

export const Addons: Story = {
  render: () => ({ setup: () => () => h(InputGroupAddonsDemo) }),
}

export const EndElement: Story = {
  render: () => ({ setup: () => () => h(InputGroupEndElementDemo) }),
}

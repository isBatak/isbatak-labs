import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ToastDemo from "@isbatak/compositions/ds/vue/toast/usage"
import ToastTypesDemo from "@isbatak/compositions/ds/vue/toast/types"
import ToastActionDemo from "@isbatak/compositions/ds/vue/toast/action"
import ToastPromiseDemo from "@isbatak/compositions/ds/vue/toast/promise"
import ToastPersistentDemo from "@isbatak/compositions/ds/vue/toast/persistent"

const meta = {
  title: "DS/Toast",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ToastDemo) }),
}

export const Types: Story = {
  render: () => ({ setup: () => () => h(ToastTypesDemo) }),
}

export const Action: Story = {
  render: () => ({ setup: () => () => h(ToastActionDemo) }),
}

export const Promise: Story = {
  render: () => ({ setup: () => () => h(ToastPromiseDemo) }),
}

export const Persistent: Story = {
  render: () => ({ setup: () => () => h(ToastPersistentDemo) }),
}

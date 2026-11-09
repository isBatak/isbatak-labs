import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ToastDemo from "@isbatak/compositions/ds/svelte/toast/usage"
import ToastTypesDemo from "@isbatak/compositions/ds/svelte/toast/types"
import ToastActionDemo from "@isbatak/compositions/ds/svelte/toast/action"
import ToastPromiseDemo from "@isbatak/compositions/ds/svelte/toast/promise"
import ToastPersistentDemo from "@isbatak/compositions/ds/svelte/toast/persistent"

const meta = {
  title: "DS/Toast",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ToastDemo> = {
  render: () => ({ Component: ToastDemo }),
}

export const Types: StoryObj<typeof ToastTypesDemo> = {
  render: () => ({ Component: ToastTypesDemo }),
}

export const Action: StoryObj<typeof ToastActionDemo> = {
  render: () => ({ Component: ToastActionDemo }),
}

export const Promise: StoryObj<typeof ToastPromiseDemo> = {
  render: () => ({ Component: ToastPromiseDemo }),
}

export const Persistent: StoryObj<typeof ToastPersistentDemo> = {
  render: () => ({ Component: ToastPersistentDemo }),
}

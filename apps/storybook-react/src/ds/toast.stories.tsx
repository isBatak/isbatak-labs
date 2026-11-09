import type { Meta, StoryObj } from "@storybook/react-vite"
import { ToastDemo } from "@isbatak/compositions/ds/react/toast/usage"
import { ToastTypesDemo } from "@isbatak/compositions/ds/react/toast/types"
import { ToastActionDemo } from "@isbatak/compositions/ds/react/toast/action"
import { ToastPromiseDemo } from "@isbatak/compositions/ds/react/toast/promise"
import { ToastPersistentDemo } from "@isbatak/compositions/ds/react/toast/persistent"

const meta = {
  title: "DS/Toast",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ToastDemo />,
}

export const Types: Story = {
  render: () => <ToastTypesDemo />,
}

export const Action: Story = {
  render: () => <ToastActionDemo />,
}

export const Promise: Story = {
  render: () => <ToastPromiseDemo />,
}

export const Persistent: Story = {
  render: () => <ToastPersistentDemo />,
}

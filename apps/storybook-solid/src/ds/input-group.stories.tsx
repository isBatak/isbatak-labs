import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { InputGroupDemo } from "@isbatak/compositions/ds/solid/input-group/usage"
import { InputGroupAddonsDemo } from "@isbatak/compositions/ds/solid/input-group/addons"
import { InputGroupEndElementDemo } from "@isbatak/compositions/ds/solid/input-group/end-element"

const meta = {
  title: "DS/Input group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <InputGroupDemo />,
}

export const Addons: Story = {
  render: () => <InputGroupAddonsDemo />,
}

export const EndElement: Story = {
  render: () => <InputGroupEndElementDemo />,
}

import type { Meta, StoryObj } from "@storybook/svelte-vite"
import InputGroupDemo from "@isbatak/compositions/ds/svelte/input-group/usage"
import InputGroupAddonsDemo from "@isbatak/compositions/ds/svelte/input-group/addons"
import InputGroupEndElementDemo from "@isbatak/compositions/ds/svelte/input-group/end-element"

const meta = {
  title: "DS/Input group",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof InputGroupDemo> = {
  render: () => ({ Component: InputGroupDemo }),
}

export const Addons: StoryObj<typeof InputGroupAddonsDemo> = {
  render: () => ({ Component: InputGroupAddonsDemo }),
}

export const EndElement: StoryObj<typeof InputGroupEndElementDemo> = {
  render: () => ({ Component: InputGroupEndElementDemo }),
}

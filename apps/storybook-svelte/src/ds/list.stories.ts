import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ListDemo from "@isbatak/compositions/ds/svelte/list/usage"
import ListNestedDemo from "@isbatak/compositions/ds/svelte/list/nested"
import ListOrderedDemo from "@isbatak/compositions/ds/svelte/list/ordered"
import ListWithIconDemo from "@isbatak/compositions/ds/svelte/list/with-icon"

const meta = {
  title: "DS/List",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ListDemo> = {
  render: () => ({ Component: ListDemo }),
}

export const Nested: StoryObj<typeof ListNestedDemo> = {
  render: () => ({ Component: ListNestedDemo }),
}

export const Ordered: StoryObj<typeof ListOrderedDemo> = {
  render: () => ({ Component: ListOrderedDemo }),
}

export const WithIcon: StoryObj<typeof ListWithIconDemo> = {
  render: () => ({ Component: ListWithIconDemo }),
}

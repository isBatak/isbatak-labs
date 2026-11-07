import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ListboxDemo from "@isbatak/compositions/ds/vue/listbox/usage"
import ListboxDisabledItemDemo from "@isbatak/compositions/ds/vue/listbox/disabled-item"
import ListboxGroupDemo from "@isbatak/compositions/ds/vue/listbox/group"
import ListboxHorizontalDemo from "@isbatak/compositions/ds/vue/listbox/horizontal"
import ListboxMultipleDemo from "@isbatak/compositions/ds/vue/listbox/multiple"
import ListboxSizesDemo from "@isbatak/compositions/ds/vue/listbox/sizes"
import ListboxVariantsDemo from "@isbatak/compositions/ds/vue/listbox/variants"

const meta = {
  title: "DS/Listbox",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ListboxDemo) }),
}

export const DisabledItem: Story = {
  render: () => ({ setup: () => () => h(ListboxDisabledItemDemo) }),
}

export const Group: Story = {
  render: () => ({ setup: () => () => h(ListboxGroupDemo) }),
}

export const Horizontal: Story = {
  render: () => ({ setup: () => () => h(ListboxHorizontalDemo) }),
}

export const Multiple: Story = {
  render: () => ({ setup: () => () => h(ListboxMultipleDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(ListboxSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(ListboxVariantsDemo) }),
}

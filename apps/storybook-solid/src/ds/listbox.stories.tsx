import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ListboxDemo } from "@isbatak/compositions/ds/solid/listbox/usage"
import { ListboxDisabledItemDemo } from "@isbatak/compositions/ds/solid/listbox/disabled-item"
import { ListboxGroupDemo } from "@isbatak/compositions/ds/solid/listbox/group"
import { ListboxHorizontalDemo } from "@isbatak/compositions/ds/solid/listbox/horizontal"
import { ListboxMultipleDemo } from "@isbatak/compositions/ds/solid/listbox/multiple"
import { ListboxSizesDemo } from "@isbatak/compositions/ds/solid/listbox/sizes"
import { ListboxVariantsDemo } from "@isbatak/compositions/ds/solid/listbox/variants"

const meta = {
  title: "DS/Listbox",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ListboxDemo />,
}

export const DisabledItem: Story = {
  render: () => <ListboxDisabledItemDemo />,
}

export const Group: Story = {
  render: () => <ListboxGroupDemo />,
}

export const Horizontal: Story = {
  render: () => <ListboxHorizontalDemo />,
}

export const Multiple: Story = {
  render: () => <ListboxMultipleDemo />,
}

export const Sizes: Story = {
  render: () => <ListboxSizesDemo />,
}

export const Variants: Story = {
  render: () => <ListboxVariantsDemo />,
}

import type { Meta, StoryObj } from "@storybook/react-vite"
import { ListboxDemo } from "@isbatak/compositions/ds/react/listbox/usage"
import { ListboxDisabledItemDemo } from "@isbatak/compositions/ds/react/listbox/disabled-item"
import { ListboxGroupDemo } from "@isbatak/compositions/ds/react/listbox/group"
import { ListboxHorizontalDemo } from "@isbatak/compositions/ds/react/listbox/horizontal"
import { ListboxMultipleDemo } from "@isbatak/compositions/ds/react/listbox/multiple"
import { ListboxSizesDemo } from "@isbatak/compositions/ds/react/listbox/sizes"
import { ListboxVariantsDemo } from "@isbatak/compositions/ds/react/listbox/variants"

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

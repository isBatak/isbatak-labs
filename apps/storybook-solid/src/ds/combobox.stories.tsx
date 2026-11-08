import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ComboboxDemo } from "@isbatak/compositions/ds/solid/combobox/usage"
import { ComboboxControlledDemo } from "@isbatak/compositions/ds/solid/combobox/controlled"
import { ComboboxDisabledDemo } from "@isbatak/compositions/ds/solid/combobox/disabled"
import { ComboboxInvalidDemo } from "@isbatak/compositions/ds/solid/combobox/invalid"
import { ComboboxItemDescriptionDemo } from "@isbatak/compositions/ds/solid/combobox/item-description"
import { ComboboxMultipleDemo } from "@isbatak/compositions/ds/solid/combobox/multiple"
import { ComboboxOpenOnClickDemo } from "@isbatak/compositions/ds/solid/combobox/open-on-click"
import { ComboboxOptionGroupDemo } from "@isbatak/compositions/ds/solid/combobox/option-group"
import { ComboboxPopoverDemo } from "@isbatak/compositions/ds/solid/combobox/popover"
import { ComboboxSizesDemo } from "@isbatak/compositions/ds/solid/combobox/sizes"
import { ComboboxVariantsDemo } from "@isbatak/compositions/ds/solid/combobox/variants"

const meta = {
  title: "DS/Combobox",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ComboboxDemo />,
}

export const Controlled: Story = {
  render: () => <ComboboxControlledDemo />,
}

export const Disabled: Story = {
  render: () => <ComboboxDisabledDemo />,
}

export const Invalid: Story = {
  render: () => <ComboboxInvalidDemo />,
}

export const ItemDescription: Story = {
  render: () => <ComboboxItemDescriptionDemo />,
}

export const Multiple: Story = {
  render: () => <ComboboxMultipleDemo />,
}

export const OpenOnClick: Story = {
  render: () => <ComboboxOpenOnClickDemo />,
}

export const OptionGroup: Story = {
  render: () => <ComboboxOptionGroupDemo />,
}

export const Popover: Story = {
  render: () => <ComboboxPopoverDemo />,
}

export const Sizes: Story = {
  render: () => <ComboboxSizesDemo />,
}

export const Variants: Story = {
  render: () => <ComboboxVariantsDemo />,
}

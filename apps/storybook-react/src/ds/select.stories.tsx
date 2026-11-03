import type { Meta, StoryObj } from "@storybook/react-vite"
import { SelectDemo } from "@isbatak/compositions/ds/react/select/usage"
import { SelectAlignItemWithTriggerDemo } from "@isbatak/compositions/ds/react/select/align-item-with-trigger"
import { SelectClearTriggerDemo } from "@isbatak/compositions/ds/react/select/clear-trigger"
import { SelectControlledDemo } from "@isbatak/compositions/ds/react/select/controlled"
import { SelectDisabledDemo } from "@isbatak/compositions/ds/react/select/disabled"
import { SelectDrawerDemo } from "@isbatak/compositions/ds/react/select/drawer"
import { SelectFitDemo } from "@isbatak/compositions/ds/react/select/fit"
import { SelectIconButtonDemo } from "@isbatak/compositions/ds/react/select/icon-button"
import { SelectInvalidDemo } from "@isbatak/compositions/ds/react/select/invalid"
import { SelectItemDescriptionDemo } from "@isbatak/compositions/ds/react/select/item-description"
import { SelectMultipleDemo } from "@isbatak/compositions/ds/react/select/multiple"
import { SelectOptionGroupDemo } from "@isbatak/compositions/ds/react/select/option-group"
import { SelectOverflowDemo } from "@isbatak/compositions/ds/react/select/overflow"
import { SelectPopoverDemo } from "@isbatak/compositions/ds/react/select/popover"
import { SelectPositioningDemo } from "@isbatak/compositions/ds/react/select/positioning"
import { SelectSearchableDemo } from "@isbatak/compositions/ds/react/select/searchable"
import { SelectSizesDemo } from "@isbatak/compositions/ds/react/select/sizes"
import { SelectVariantsDemo } from "@isbatak/compositions/ds/react/select/variants"

const meta = {
  title: "DS/Select",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SelectDemo />,
}

export const AlignItemWithTrigger: Story = {
  render: () => <SelectAlignItemWithTriggerDemo />,
}

export const ClearTrigger: Story = {
  render: () => <SelectClearTriggerDemo />,
}

export const Controlled: Story = {
  render: () => <SelectControlledDemo />,
}

export const Disabled: Story = {
  render: () => <SelectDisabledDemo />,
}

export const Drawer: Story = {
  render: () => <SelectDrawerDemo />,
}

export const Fit: Story = {
  render: () => <SelectFitDemo />,
}

export const IconButton: Story = {
  render: () => <SelectIconButtonDemo />,
}

export const Invalid: Story = {
  render: () => <SelectInvalidDemo />,
}

export const ItemDescription: Story = {
  render: () => <SelectItemDescriptionDemo />,
}

export const Multiple: Story = {
  render: () => <SelectMultipleDemo />,
}

export const OptionGroup: Story = {
  render: () => <SelectOptionGroupDemo />,
}

export const Overflow: Story = {
  render: () => <SelectOverflowDemo />,
}

export const Popover: Story = {
  render: () => <SelectPopoverDemo />,
}

export const Positioning: Story = {
  render: () => <SelectPositioningDemo />,
}

export const Searchable: Story = {
  render: () => <SelectSearchableDemo />,
}

export const Sizes: Story = {
  render: () => <SelectSizesDemo />,
}

export const Variants: Story = {
  render: () => <SelectVariantsDemo />,
}

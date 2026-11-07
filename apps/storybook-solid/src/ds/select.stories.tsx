import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { SelectDemo } from "@isbatak/compositions/ds/solid/select/usage"
import { SelectAlignItemWithTriggerDemo } from "@isbatak/compositions/ds/solid/select/align-item-with-trigger"
import { SelectClearTriggerDemo } from "@isbatak/compositions/ds/solid/select/clear-trigger"
import { SelectControlledDemo } from "@isbatak/compositions/ds/solid/select/controlled"
import { SelectDisabledDemo } from "@isbatak/compositions/ds/solid/select/disabled"
import { SelectFitDemo } from "@isbatak/compositions/ds/solid/select/fit"
import { SelectIconButtonDemo } from "@isbatak/compositions/ds/solid/select/icon-button"
import { SelectInvalidDemo } from "@isbatak/compositions/ds/solid/select/invalid"
import { SelectItemDescriptionDemo } from "@isbatak/compositions/ds/solid/select/item-description"
import { SelectMultipleDemo } from "@isbatak/compositions/ds/solid/select/multiple"
import { SelectOptionGroupDemo } from "@isbatak/compositions/ds/solid/select/option-group"
import { SelectOverflowDemo } from "@isbatak/compositions/ds/solid/select/overflow"
import { SelectPopoverDemo } from "@isbatak/compositions/ds/solid/select/popover"
import { SelectPositioningDemo } from "@isbatak/compositions/ds/solid/select/positioning"
import { SelectSearchableDemo } from "@isbatak/compositions/ds/solid/select/searchable"
import { SelectSizesDemo } from "@isbatak/compositions/ds/solid/select/sizes"
import { SelectVariantsDemo } from "@isbatak/compositions/ds/solid/select/variants"

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

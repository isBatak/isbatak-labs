import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SelectDemo from "@isbatak/compositions/ds/vue/select/usage"
import SelectAlignItemWithTriggerDemo from "@isbatak/compositions/ds/vue/select/align-item-with-trigger"
import SelectClearTriggerDemo from "@isbatak/compositions/ds/vue/select/clear-trigger"
import SelectControlledDemo from "@isbatak/compositions/ds/vue/select/controlled"
import SelectDisabledDemo from "@isbatak/compositions/ds/vue/select/disabled"
import SelectFitDemo from "@isbatak/compositions/ds/vue/select/fit"
import SelectIconButtonDemo from "@isbatak/compositions/ds/vue/select/icon-button"
import SelectInvalidDemo from "@isbatak/compositions/ds/vue/select/invalid"
import SelectItemDescriptionDemo from "@isbatak/compositions/ds/vue/select/item-description"
import SelectMultipleDemo from "@isbatak/compositions/ds/vue/select/multiple"
import SelectOptionGroupDemo from "@isbatak/compositions/ds/vue/select/option-group"
import SelectOverflowDemo from "@isbatak/compositions/ds/vue/select/overflow"
import SelectPopoverDemo from "@isbatak/compositions/ds/vue/select/popover"
import SelectPositioningDemo from "@isbatak/compositions/ds/vue/select/positioning"
import SelectSearchableDemo from "@isbatak/compositions/ds/vue/select/searchable"
import SelectSizesDemo from "@isbatak/compositions/ds/vue/select/sizes"
import SelectVariantsDemo from "@isbatak/compositions/ds/vue/select/variants"

const meta = {
  title: "DS/Select",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SelectDemo) }),
}

export const AlignItemWithTrigger: Story = {
  render: () => ({ setup: () => () => h(SelectAlignItemWithTriggerDemo) }),
}

export const ClearTrigger: Story = {
  render: () => ({ setup: () => () => h(SelectClearTriggerDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(SelectControlledDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(SelectDisabledDemo) }),
}

export const Fit: Story = {
  render: () => ({ setup: () => () => h(SelectFitDemo) }),
}

export const IconButton: Story = {
  render: () => ({ setup: () => () => h(SelectIconButtonDemo) }),
}

export const Invalid: Story = {
  render: () => ({ setup: () => () => h(SelectInvalidDemo) }),
}

export const ItemDescription: Story = {
  render: () => ({ setup: () => () => h(SelectItemDescriptionDemo) }),
}

export const Multiple: Story = {
  render: () => ({ setup: () => () => h(SelectMultipleDemo) }),
}

export const OptionGroup: Story = {
  render: () => ({ setup: () => () => h(SelectOptionGroupDemo) }),
}

export const Overflow: Story = {
  render: () => ({ setup: () => () => h(SelectOverflowDemo) }),
}

export const Popover: Story = {
  render: () => ({ setup: () => () => h(SelectPopoverDemo) }),
}

export const Positioning: Story = {
  render: () => ({ setup: () => () => h(SelectPositioningDemo) }),
}

export const Searchable: Story = {
  render: () => ({ setup: () => () => h(SelectSearchableDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(SelectSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(SelectVariantsDemo) }),
}

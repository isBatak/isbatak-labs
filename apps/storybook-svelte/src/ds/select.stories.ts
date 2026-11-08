import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SelectDemo from "@isbatak/compositions/ds/svelte/select/usage"
import SelectAlignItemWithTriggerDemo from "@isbatak/compositions/ds/svelte/select/align-item-with-trigger"
import SelectClearTriggerDemo from "@isbatak/compositions/ds/svelte/select/clear-trigger"
import SelectControlledDemo from "@isbatak/compositions/ds/svelte/select/controlled"
import SelectDisabledDemo from "@isbatak/compositions/ds/svelte/select/disabled"
import SelectFitDemo from "@isbatak/compositions/ds/svelte/select/fit"
import SelectIconButtonDemo from "@isbatak/compositions/ds/svelte/select/icon-button"
import SelectInvalidDemo from "@isbatak/compositions/ds/svelte/select/invalid"
import SelectItemDescriptionDemo from "@isbatak/compositions/ds/svelte/select/item-description"
import SelectMultipleDemo from "@isbatak/compositions/ds/svelte/select/multiple"
import SelectOptionGroupDemo from "@isbatak/compositions/ds/svelte/select/option-group"
import SelectOverflowDemo from "@isbatak/compositions/ds/svelte/select/overflow"
import SelectPopoverDemo from "@isbatak/compositions/ds/svelte/select/popover"
import SelectPositioningDemo from "@isbatak/compositions/ds/svelte/select/positioning"
import SelectSearchableDemo from "@isbatak/compositions/ds/svelte/select/searchable"
import SelectSizesDemo from "@isbatak/compositions/ds/svelte/select/sizes"
import SelectVariantsDemo from "@isbatak/compositions/ds/svelte/select/variants"

const meta = {
  title: "DS/Select",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SelectDemo> = {
  render: () => ({ Component: SelectDemo }),
}

export const AlignItemWithTrigger: StoryObj<typeof SelectAlignItemWithTriggerDemo> = {
  render: () => ({ Component: SelectAlignItemWithTriggerDemo }),
}

export const ClearTrigger: StoryObj<typeof SelectClearTriggerDemo> = {
  render: () => ({ Component: SelectClearTriggerDemo }),
}

export const Controlled: StoryObj<typeof SelectControlledDemo> = {
  render: () => ({ Component: SelectControlledDemo }),
}

export const Disabled: StoryObj<typeof SelectDisabledDemo> = {
  render: () => ({ Component: SelectDisabledDemo }),
}

export const Fit: StoryObj<typeof SelectFitDemo> = {
  render: () => ({ Component: SelectFitDemo }),
}

export const IconButton: StoryObj<typeof SelectIconButtonDemo> = {
  render: () => ({ Component: SelectIconButtonDemo }),
}

export const Invalid: StoryObj<typeof SelectInvalidDemo> = {
  render: () => ({ Component: SelectInvalidDemo }),
}

export const ItemDescription: StoryObj<typeof SelectItemDescriptionDemo> = {
  render: () => ({ Component: SelectItemDescriptionDemo }),
}

export const Multiple: StoryObj<typeof SelectMultipleDemo> = {
  render: () => ({ Component: SelectMultipleDemo }),
}

export const OptionGroup: StoryObj<typeof SelectOptionGroupDemo> = {
  render: () => ({ Component: SelectOptionGroupDemo }),
}

export const Overflow: StoryObj<typeof SelectOverflowDemo> = {
  render: () => ({ Component: SelectOverflowDemo }),
}

export const Popover: StoryObj<typeof SelectPopoverDemo> = {
  render: () => ({ Component: SelectPopoverDemo }),
}

export const Positioning: StoryObj<typeof SelectPositioningDemo> = {
  render: () => ({ Component: SelectPositioningDemo }),
}

export const Searchable: StoryObj<typeof SelectSearchableDemo> = {
  render: () => ({ Component: SelectSearchableDemo }),
}

export const Sizes: StoryObj<typeof SelectSizesDemo> = {
  render: () => ({ Component: SelectSizesDemo }),
}

export const Variants: StoryObj<typeof SelectVariantsDemo> = {
  render: () => ({ Component: SelectVariantsDemo }),
}

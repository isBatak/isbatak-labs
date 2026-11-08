import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ComboboxDemo from "@isbatak/compositions/ds/vue/combobox/usage"
import ComboboxControlledDemo from "@isbatak/compositions/ds/vue/combobox/controlled"
import ComboboxDisabledDemo from "@isbatak/compositions/ds/vue/combobox/disabled"
import ComboboxInvalidDemo from "@isbatak/compositions/ds/vue/combobox/invalid"
import ComboboxItemDescriptionDemo from "@isbatak/compositions/ds/vue/combobox/item-description"
import ComboboxMultipleDemo from "@isbatak/compositions/ds/vue/combobox/multiple"
import ComboboxOpenOnClickDemo from "@isbatak/compositions/ds/vue/combobox/open-on-click"
import ComboboxOptionGroupDemo from "@isbatak/compositions/ds/vue/combobox/option-group"
import ComboboxPopoverDemo from "@isbatak/compositions/ds/vue/combobox/popover"
import ComboboxSizesDemo from "@isbatak/compositions/ds/vue/combobox/sizes"
import ComboboxVariantsDemo from "@isbatak/compositions/ds/vue/combobox/variants"

const meta = {
  title: "DS/Combobox",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ComboboxDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(ComboboxControlledDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(ComboboxDisabledDemo) }),
}

export const Invalid: Story = {
  render: () => ({ setup: () => () => h(ComboboxInvalidDemo) }),
}

export const ItemDescription: Story = {
  render: () => ({ setup: () => () => h(ComboboxItemDescriptionDemo) }),
}

export const Multiple: Story = {
  render: () => ({ setup: () => () => h(ComboboxMultipleDemo) }),
}

export const OpenOnClick: Story = {
  render: () => ({ setup: () => () => h(ComboboxOpenOnClickDemo) }),
}

export const OptionGroup: Story = {
  render: () => ({ setup: () => () => h(ComboboxOptionGroupDemo) }),
}

export const Popover: Story = {
  render: () => ({ setup: () => () => h(ComboboxPopoverDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(ComboboxSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(ComboboxVariantsDemo) }),
}

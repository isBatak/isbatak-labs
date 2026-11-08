import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ComboboxDemo from "@isbatak/compositions/ds/svelte/combobox/usage"
import ComboboxControlledDemo from "@isbatak/compositions/ds/svelte/combobox/controlled"
import ComboboxDisabledDemo from "@isbatak/compositions/ds/svelte/combobox/disabled"
import ComboboxInvalidDemo from "@isbatak/compositions/ds/svelte/combobox/invalid"
import ComboboxItemDescriptionDemo from "@isbatak/compositions/ds/svelte/combobox/item-description"
import ComboboxMultipleDemo from "@isbatak/compositions/ds/svelte/combobox/multiple"
import ComboboxOpenOnClickDemo from "@isbatak/compositions/ds/svelte/combobox/open-on-click"
import ComboboxOptionGroupDemo from "@isbatak/compositions/ds/svelte/combobox/option-group"
import ComboboxPopoverDemo from "@isbatak/compositions/ds/svelte/combobox/popover"
import ComboboxSizesDemo from "@isbatak/compositions/ds/svelte/combobox/sizes"
import ComboboxVariantsDemo from "@isbatak/compositions/ds/svelte/combobox/variants"

const meta = {
  title: "DS/Combobox",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ComboboxDemo> = {
  render: () => ({ Component: ComboboxDemo }),
}

export const Controlled: StoryObj<typeof ComboboxControlledDemo> = {
  render: () => ({ Component: ComboboxControlledDemo }),
}

export const Disabled: StoryObj<typeof ComboboxDisabledDemo> = {
  render: () => ({ Component: ComboboxDisabledDemo }),
}

export const Invalid: StoryObj<typeof ComboboxInvalidDemo> = {
  render: () => ({ Component: ComboboxInvalidDemo }),
}

export const ItemDescription: StoryObj<typeof ComboboxItemDescriptionDemo> = {
  render: () => ({ Component: ComboboxItemDescriptionDemo }),
}

export const Multiple: StoryObj<typeof ComboboxMultipleDemo> = {
  render: () => ({ Component: ComboboxMultipleDemo }),
}

export const OpenOnClick: StoryObj<typeof ComboboxOpenOnClickDemo> = {
  render: () => ({ Component: ComboboxOpenOnClickDemo }),
}

export const OptionGroup: StoryObj<typeof ComboboxOptionGroupDemo> = {
  render: () => ({ Component: ComboboxOptionGroupDemo }),
}

export const Popover: StoryObj<typeof ComboboxPopoverDemo> = {
  render: () => ({ Component: ComboboxPopoverDemo }),
}

export const Sizes: StoryObj<typeof ComboboxSizesDemo> = {
  render: () => ({ Component: ComboboxSizesDemo }),
}

export const Variants: StoryObj<typeof ComboboxVariantsDemo> = {
  render: () => ({ Component: ComboboxVariantsDemo }),
}

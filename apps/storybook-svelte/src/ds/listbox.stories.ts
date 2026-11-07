import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ListboxDemo from "@isbatak/compositions/ds/svelte/listbox/usage"
import ListboxDisabledItemDemo from "@isbatak/compositions/ds/svelte/listbox/disabled-item"
import ListboxGroupDemo from "@isbatak/compositions/ds/svelte/listbox/group"
import ListboxHorizontalDemo from "@isbatak/compositions/ds/svelte/listbox/horizontal"
import ListboxMultipleDemo from "@isbatak/compositions/ds/svelte/listbox/multiple"
import ListboxSizesDemo from "@isbatak/compositions/ds/svelte/listbox/sizes"
import ListboxVariantsDemo from "@isbatak/compositions/ds/svelte/listbox/variants"

const meta = {
  title: "DS/Listbox",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ListboxDemo> = {
  render: () => ({ Component: ListboxDemo }),
}

export const DisabledItem: StoryObj<typeof ListboxDisabledItemDemo> = {
  render: () => ({ Component: ListboxDisabledItemDemo }),
}

export const Group: StoryObj<typeof ListboxGroupDemo> = {
  render: () => ({ Component: ListboxGroupDemo }),
}

export const Horizontal: StoryObj<typeof ListboxHorizontalDemo> = {
  render: () => ({ Component: ListboxHorizontalDemo }),
}

export const Multiple: StoryObj<typeof ListboxMultipleDemo> = {
  render: () => ({ Component: ListboxMultipleDemo }),
}

export const Sizes: StoryObj<typeof ListboxSizesDemo> = {
  render: () => ({ Component: ListboxSizesDemo }),
}

export const Variants: StoryObj<typeof ListboxVariantsDemo> = {
  render: () => ({ Component: ListboxVariantsDemo }),
}

import type { Meta, StoryObj } from "@storybook/svelte-vite"
import DataListDemo from "@isbatak/compositions/ds/svelte/data-list/usage"
import DataListOrientationDemo from "@isbatak/compositions/ds/svelte/data-list/orientation"
import DataListSizesDemo from "@isbatak/compositions/ds/svelte/data-list/sizes"
import DataListVariantsDemo from "@isbatak/compositions/ds/svelte/data-list/variants"
import DataListSeparatorDemo from "@isbatak/compositions/ds/svelte/data-list/separator"

const meta = {
  title: "DS/Data List",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof DataListDemo> = {
  render: () => ({ Component: DataListDemo }),
}

export const Orientation: StoryObj<typeof DataListOrientationDemo> = {
  render: () => ({ Component: DataListOrientationDemo }),
}

export const Sizes: StoryObj<typeof DataListSizesDemo> = {
  render: () => ({ Component: DataListSizesDemo }),
}

export const Variants: StoryObj<typeof DataListVariantsDemo> = {
  render: () => ({ Component: DataListVariantsDemo }),
}

export const Separator: StoryObj<typeof DataListSeparatorDemo> = {
  render: () => ({ Component: DataListSeparatorDemo }),
}

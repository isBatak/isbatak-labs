import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TagsInputDemo from "@isbatak/compositions/ds/svelte/tags-input/usage"
import TagsInputDisabledDemo from "@isbatak/compositions/ds/svelte/tags-input/disabled"
import TagsInputMaxDemo from "@isbatak/compositions/ds/svelte/tags-input/max"
import TagsInputSizesDemo from "@isbatak/compositions/ds/svelte/tags-input/sizes"
import TagsInputVariantsDemo from "@isbatak/compositions/ds/svelte/tags-input/variants"

const meta = {
  title: "DS/Tags Input",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TagsInputDemo> = {
  render: () => ({ Component: TagsInputDemo }),
}

export const Disabled: StoryObj<typeof TagsInputDisabledDemo> = {
  render: () => ({ Component: TagsInputDisabledDemo }),
}

export const Max: StoryObj<typeof TagsInputMaxDemo> = {
  render: () => ({ Component: TagsInputMaxDemo }),
}

export const Sizes: StoryObj<typeof TagsInputSizesDemo> = {
  render: () => ({ Component: TagsInputSizesDemo }),
}

export const Variants: StoryObj<typeof TagsInputVariantsDemo> = {
  render: () => ({ Component: TagsInputVariantsDemo }),
}

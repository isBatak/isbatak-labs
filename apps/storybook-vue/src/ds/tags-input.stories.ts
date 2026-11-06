import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TagsInputDemo from "@isbatak/compositions/ds/vue/tags-input/usage"
import TagsInputDisabledDemo from "@isbatak/compositions/ds/vue/tags-input/disabled"
import TagsInputMaxDemo from "@isbatak/compositions/ds/vue/tags-input/max"
import TagsInputSizesDemo from "@isbatak/compositions/ds/vue/tags-input/sizes"
import TagsInputVariantsDemo from "@isbatak/compositions/ds/vue/tags-input/variants"

const meta = {
  title: "DS/Tags Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TagsInputDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(TagsInputDisabledDemo) }),
}

export const Max: Story = {
  render: () => ({ setup: () => () => h(TagsInputMaxDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(TagsInputSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(TagsInputVariantsDemo) }),
}

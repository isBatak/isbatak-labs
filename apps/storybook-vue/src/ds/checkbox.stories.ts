import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import CheckboxDemo from "@isbatak/compositions/ds/vue/checkbox/usage"
import CheckboxDisabledDemo from "@isbatak/compositions/ds/vue/checkbox/disabled"
import CheckboxGroupDemo from "@isbatak/compositions/ds/vue/checkbox/group"
import CheckboxIndeterminateDemo from "@isbatak/compositions/ds/vue/checkbox/indeterminate"
import CheckboxInvalidDemo from "@isbatak/compositions/ds/vue/checkbox/invalid"
import CheckboxSizesDemo from "@isbatak/compositions/ds/vue/checkbox/sizes"
import CheckboxVariantsDemo from "@isbatak/compositions/ds/vue/checkbox/variants"

const meta = {
  title: "DS/Checkbox",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(CheckboxDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(CheckboxDisabledDemo) }),
}

export const Group: Story = {
  render: () => ({ setup: () => () => h(CheckboxGroupDemo) }),
}

export const Indeterminate: Story = {
  render: () => ({ setup: () => () => h(CheckboxIndeterminateDemo) }),
}

export const Invalid: Story = {
  render: () => ({ setup: () => () => h(CheckboxInvalidDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(CheckboxSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(CheckboxVariantsDemo) }),
}

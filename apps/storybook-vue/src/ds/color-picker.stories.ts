import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ColorPickerDemo from "@isbatak/compositions/ds/vue/color-picker/usage"
import ColorPickerChannelInputDemo from "@isbatak/compositions/ds/vue/color-picker/channel-input"
import ColorPickerControlledDemo from "@isbatak/compositions/ds/vue/color-picker/controlled"
import ColorPickerDisabledDemo from "@isbatak/compositions/ds/vue/color-picker/disabled"
import ColorPickerInlineDemo from "@isbatak/compositions/ds/vue/color-picker/inline"
import ColorPickerSizesDemo from "@isbatak/compositions/ds/vue/color-picker/sizes"
import ColorPickerSwatchesDemo from "@isbatak/compositions/ds/vue/color-picker/swatches"
import ColorPickerVariantsDemo from "@isbatak/compositions/ds/vue/color-picker/variants"

const meta = {
  title: "DS/Color picker",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ColorPickerDemo) }),
}

export const ChannelInput: Story = {
  render: () => ({ setup: () => () => h(ColorPickerChannelInputDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(ColorPickerControlledDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(ColorPickerDisabledDemo) }),
}

export const Inline: Story = {
  render: () => ({ setup: () => () => h(ColorPickerInlineDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(ColorPickerSizesDemo) }),
}

export const Swatches: Story = {
  render: () => ({ setup: () => () => h(ColorPickerSwatchesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(ColorPickerVariantsDemo) }),
}

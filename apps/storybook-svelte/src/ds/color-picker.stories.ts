import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ColorPickerDemo from "@isbatak/compositions/ds/svelte/color-picker/usage"
import ColorPickerChannelInputDemo from "@isbatak/compositions/ds/svelte/color-picker/channel-input"
import ColorPickerControlledDemo from "@isbatak/compositions/ds/svelte/color-picker/controlled"
import ColorPickerDisabledDemo from "@isbatak/compositions/ds/svelte/color-picker/disabled"
import ColorPickerInlineDemo from "@isbatak/compositions/ds/svelte/color-picker/inline"
import ColorPickerSizesDemo from "@isbatak/compositions/ds/svelte/color-picker/sizes"
import ColorPickerSwatchesDemo from "@isbatak/compositions/ds/svelte/color-picker/swatches"
import ColorPickerVariantsDemo from "@isbatak/compositions/ds/svelte/color-picker/variants"

const meta = {
  title: "DS/Color picker",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ColorPickerDemo> = {
  render: () => ({ Component: ColorPickerDemo }),
}

export const ChannelInput: StoryObj<typeof ColorPickerChannelInputDemo> = {
  render: () => ({ Component: ColorPickerChannelInputDemo }),
}

export const Controlled: StoryObj<typeof ColorPickerControlledDemo> = {
  render: () => ({ Component: ColorPickerControlledDemo }),
}

export const Disabled: StoryObj<typeof ColorPickerDisabledDemo> = {
  render: () => ({ Component: ColorPickerDisabledDemo }),
}

export const Inline: StoryObj<typeof ColorPickerInlineDemo> = {
  render: () => ({ Component: ColorPickerInlineDemo }),
}

export const Sizes: StoryObj<typeof ColorPickerSizesDemo> = {
  render: () => ({ Component: ColorPickerSizesDemo }),
}

export const Swatches: StoryObj<typeof ColorPickerSwatchesDemo> = {
  render: () => ({ Component: ColorPickerSwatchesDemo }),
}

export const Variants: StoryObj<typeof ColorPickerVariantsDemo> = {
  render: () => ({ Component: ColorPickerVariantsDemo }),
}

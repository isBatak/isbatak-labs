import type { Meta, StoryObj } from "@storybook/react-vite"
import { ColorPickerDemo } from "@isbatak/compositions/ds/react/color-picker/usage"
import { ColorPickerChannelInputDemo } from "@isbatak/compositions/ds/react/color-picker/channel-input"
import { ColorPickerControlledDemo } from "@isbatak/compositions/ds/react/color-picker/controlled"
import { ColorPickerDisabledDemo } from "@isbatak/compositions/ds/react/color-picker/disabled"
import { ColorPickerInlineDemo } from "@isbatak/compositions/ds/react/color-picker/inline"
import { ColorPickerSizesDemo } from "@isbatak/compositions/ds/react/color-picker/sizes"
import { ColorPickerSwatchesDemo } from "@isbatak/compositions/ds/react/color-picker/swatches"
import { ColorPickerVariantsDemo } from "@isbatak/compositions/ds/react/color-picker/variants"

const meta = {
  title: "DS/Color picker",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ColorPickerDemo />,
}

export const ChannelInput: Story = {
  render: () => <ColorPickerChannelInputDemo />,
}

export const Controlled: Story = {
  render: () => <ColorPickerControlledDemo />,
}

export const Disabled: Story = {
  render: () => <ColorPickerDisabledDemo />,
}

export const Inline: Story = {
  render: () => <ColorPickerInlineDemo />,
}

export const Sizes: Story = {
  render: () => <ColorPickerSizesDemo />,
}

export const Swatches: Story = {
  render: () => <ColorPickerSwatchesDemo />,
}

export const Variants: Story = {
  render: () => <ColorPickerVariantsDemo />,
}

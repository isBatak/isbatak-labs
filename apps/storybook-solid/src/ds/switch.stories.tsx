import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { SwitchDemo } from "@isbatak/compositions/ds/solid/switch/usage"
import { SwitchDisabledDemo } from "@isbatak/compositions/ds/solid/switch/disabled"
import { SwitchSizesDemo } from "@isbatak/compositions/ds/solid/switch/sizes"
import { SwitchVariantsDemo } from "@isbatak/compositions/ds/solid/switch/variants"
import { SwitchWithThumbIconsDemo } from "@isbatak/compositions/ds/solid/switch/with-thumb-icons"

const meta = {
  title: "DS/Switch",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SwitchDemo />,
}

export const Disabled: Story = {
  render: () => <SwitchDisabledDemo />,
}

export const Sizes: Story = {
  render: () => <SwitchSizesDemo />,
}

export const Variants: Story = {
  render: () => <SwitchVariantsDemo />,
}

export const WithThumbIcons: Story = {
  render: () => <SwitchWithThumbIconsDemo />,
}

import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { InputDemo } from "@isbatak/compositions/ds/solid/input/usage"
import { InputDisabledDemo } from "@isbatak/compositions/ds/solid/input/disabled"
import { InputSizesDemo } from "@isbatak/compositions/ds/solid/input/sizes"
import { InputVariantsDemo } from "@isbatak/compositions/ds/solid/input/variants"
import { InputWithFieldDemo } from "@isbatak/compositions/ds/solid/input/with-field"

const meta = {
  title: "DS/Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <InputDemo />,
}

export const Disabled: Story = {
  render: () => <InputDisabledDemo />,
}

export const Sizes: Story = {
  render: () => <InputSizesDemo />,
}

export const Variants: Story = {
  render: () => <InputVariantsDemo />,
}

export const WithField: Story = {
  render: () => <InputWithFieldDemo />,
}

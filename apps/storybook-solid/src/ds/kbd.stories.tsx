import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { KbdDemo } from "@isbatak/compositions/ds/solid/kbd/usage"
import { KbdCombinationsDemo } from "@isbatak/compositions/ds/solid/kbd/combinations"
import { KbdFunctionKeysDemo } from "@isbatak/compositions/ds/solid/kbd/function-keys"
import { KbdGroupDemo } from "@isbatak/compositions/ds/solid/kbd/group"
import { KbdSizesDemo } from "@isbatak/compositions/ds/solid/kbd/sizes"
import { KbdVariantsDemo } from "@isbatak/compositions/ds/solid/kbd/variants"
import { KbdWithinTextDemo } from "@isbatak/compositions/ds/solid/kbd/within-text"

const meta = {
  title: "DS/Kbd",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <KbdDemo />,
}

export const Combinations: Story = {
  render: () => <KbdCombinationsDemo />,
}

export const FunctionKeys: Story = {
  render: () => <KbdFunctionKeysDemo />,
}

export const Group: Story = {
  render: () => <KbdGroupDemo />,
}

export const Sizes: Story = {
  render: () => <KbdSizesDemo />,
}

export const Variants: Story = {
  render: () => <KbdVariantsDemo />,
}

export const WithinText: Story = {
  render: () => <KbdWithinTextDemo />,
}

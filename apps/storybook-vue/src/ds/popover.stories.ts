import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import PopoverDemo from "@isbatak/compositions/ds/vue/popover/usage"
import PopoverAnchorDemo from "@isbatak/compositions/ds/vue/popover/anchor"
import PopoverCloseButtonDemo from "@isbatak/compositions/ds/vue/popover/close-button"
import PopoverControlledDemo from "@isbatak/compositions/ds/vue/popover/controlled"
import PopoverFormDemo from "@isbatak/compositions/ds/vue/popover/form"
import PopoverIndicatorDemo from "@isbatak/compositions/ds/vue/popover/indicator"
import PopoverModalModeDemo from "@isbatak/compositions/ds/vue/popover/modal-mode"
import PopoverNestedDemo from "@isbatak/compositions/ds/vue/popover/nested"
import PopoverPlacementDemo from "@isbatak/compositions/ds/vue/popover/placement"
import PopoverSizesDemo from "@isbatak/compositions/ds/vue/popover/sizes"

const meta = {
  title: "DS/Popover",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(PopoverDemo) }),
}

export const Anchor: Story = {
  render: () => ({ setup: () => () => h(PopoverAnchorDemo) }),
}

export const CloseButton: Story = {
  render: () => ({ setup: () => () => h(PopoverCloseButtonDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(PopoverControlledDemo) }),
}

export const Form: Story = {
  render: () => ({ setup: () => () => h(PopoverFormDemo) }),
}

export const Indicator: Story = {
  render: () => ({ setup: () => () => h(PopoverIndicatorDemo) }),
}

export const ModalMode: Story = {
  render: () => ({ setup: () => () => h(PopoverModalModeDemo) }),
}

export const Nested: Story = {
  render: () => ({ setup: () => () => h(PopoverNestedDemo) }),
}

export const Placement: Story = {
  render: () => ({ setup: () => () => h(PopoverPlacementDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(PopoverSizesDemo) }),
}

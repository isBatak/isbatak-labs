import type { Meta, StoryObj } from "@storybook/react-vite"
import { PopoverDemo } from "@isbatak/compositions/ds/react/popover/usage"
import { PopoverAnchorDemo } from "@isbatak/compositions/ds/react/popover/anchor"
import { PopoverCloseButtonDemo } from "@isbatak/compositions/ds/react/popover/close-button"
import { PopoverControlledDemo } from "@isbatak/compositions/ds/react/popover/controlled"
import { PopoverFormDemo } from "@isbatak/compositions/ds/react/popover/form"
import { PopoverIndicatorDemo } from "@isbatak/compositions/ds/react/popover/indicator"
import { PopoverModalModeDemo } from "@isbatak/compositions/ds/react/popover/modal-mode"
import { PopoverNestedDemo } from "@isbatak/compositions/ds/react/popover/nested"
import { PopoverPlacementDemo } from "@isbatak/compositions/ds/react/popover/placement"
import { PopoverSizesDemo } from "@isbatak/compositions/ds/react/popover/sizes"

const meta = {
  title: "DS/Popover",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <PopoverDemo />,
}

export const Anchor: Story = {
  render: () => <PopoverAnchorDemo />,
}

export const CloseButton: Story = {
  render: () => <PopoverCloseButtonDemo />,
}

export const Controlled: Story = {
  render: () => <PopoverControlledDemo />,
}

export const Form: Story = {
  render: () => <PopoverFormDemo />,
}

export const Indicator: Story = {
  render: () => <PopoverIndicatorDemo />,
}

export const ModalMode: Story = {
  render: () => <PopoverModalModeDemo />,
}

export const Nested: Story = {
  render: () => <PopoverNestedDemo />,
}

export const Placement: Story = {
  render: () => <PopoverPlacementDemo />,
}

export const Sizes: Story = {
  render: () => <PopoverSizesDemo />,
}

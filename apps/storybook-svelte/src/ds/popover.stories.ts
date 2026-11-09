import type { Meta, StoryObj } from "@storybook/svelte-vite"
import PopoverDemo from "@isbatak/compositions/ds/svelte/popover/usage"
import PopoverAnchorDemo from "@isbatak/compositions/ds/svelte/popover/anchor"
import PopoverCloseButtonDemo from "@isbatak/compositions/ds/svelte/popover/close-button"
import PopoverControlledDemo from "@isbatak/compositions/ds/svelte/popover/controlled"
import PopoverFormDemo from "@isbatak/compositions/ds/svelte/popover/form"
import PopoverIndicatorDemo from "@isbatak/compositions/ds/svelte/popover/indicator"
import PopoverModalModeDemo from "@isbatak/compositions/ds/svelte/popover/modal-mode"
import PopoverNestedDemo from "@isbatak/compositions/ds/svelte/popover/nested"
import PopoverPlacementDemo from "@isbatak/compositions/ds/svelte/popover/placement"
import PopoverSizesDemo from "@isbatak/compositions/ds/svelte/popover/sizes"

const meta = {
  title: "DS/Popover",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof PopoverDemo> = {
  render: () => ({ Component: PopoverDemo }),
}

export const Anchor: StoryObj<typeof PopoverAnchorDemo> = {
  render: () => ({ Component: PopoverAnchorDemo }),
}

export const CloseButton: StoryObj<typeof PopoverCloseButtonDemo> = {
  render: () => ({ Component: PopoverCloseButtonDemo }),
}

export const Controlled: StoryObj<typeof PopoverControlledDemo> = {
  render: () => ({ Component: PopoverControlledDemo }),
}

export const Form: StoryObj<typeof PopoverFormDemo> = {
  render: () => ({ Component: PopoverFormDemo }),
}

export const Indicator: StoryObj<typeof PopoverIndicatorDemo> = {
  render: () => ({ Component: PopoverIndicatorDemo }),
}

export const ModalMode: StoryObj<typeof PopoverModalModeDemo> = {
  render: () => ({ Component: PopoverModalModeDemo }),
}

export const Nested: StoryObj<typeof PopoverNestedDemo> = {
  render: () => ({ Component: PopoverNestedDemo }),
}

export const Placement: StoryObj<typeof PopoverPlacementDemo> = {
  render: () => ({ Component: PopoverPlacementDemo }),
}

export const Sizes: StoryObj<typeof PopoverSizesDemo> = {
  render: () => ({ Component: PopoverSizesDemo }),
}

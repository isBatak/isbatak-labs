import type { Meta, StoryObj } from "@storybook/svelte-vite"
import DialogDemo from "@isbatak/compositions/ds/svelte/dialog/usage"
import DialogAlertDemo from "@isbatak/compositions/ds/svelte/dialog/alert"
import DialogContentSizesDemo from "@isbatak/compositions/ds/svelte/dialog/content-sizes"
import DialogControlledDemo from "@isbatak/compositions/ds/svelte/dialog/controlled"
import DialogCoverDemo from "@isbatak/compositions/ds/svelte/dialog/cover"
import DialogFullDemo from "@isbatak/compositions/ds/svelte/dialog/full"
import DialogInitialFocusDemo from "@isbatak/compositions/ds/svelte/dialog/initial-focus"
import DialogMotionDemo from "@isbatak/compositions/ds/svelte/dialog/motion"
import DialogNestedDemo from "@isbatak/compositions/ds/svelte/dialog/nested"
import DialogPlacementDemo from "@isbatak/compositions/ds/svelte/dialog/placement"
import DialogScrollInsideDemo from "@isbatak/compositions/ds/svelte/dialog/scroll-inside"
import DialogScrollOutsideDemo from "@isbatak/compositions/ds/svelte/dialog/scroll-outside"
import DialogSizesDemo from "@isbatak/compositions/ds/svelte/dialog/sizes"

const meta = {
  title: "DS/Dialog",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof DialogDemo> = {
  render: () => ({ Component: DialogDemo }),
}

export const Alert: StoryObj<typeof DialogAlertDemo> = {
  render: () => ({ Component: DialogAlertDemo }),
}

export const ContentSizes: StoryObj<typeof DialogContentSizesDemo> = {
  render: () => ({ Component: DialogContentSizesDemo }),
}

export const Controlled: StoryObj<typeof DialogControlledDemo> = {
  render: () => ({ Component: DialogControlledDemo }),
}

export const Cover: StoryObj<typeof DialogCoverDemo> = {
  render: () => ({ Component: DialogCoverDemo }),
}

export const Full: StoryObj<typeof DialogFullDemo> = {
  render: () => ({ Component: DialogFullDemo }),
}

export const InitialFocus: StoryObj<typeof DialogInitialFocusDemo> = {
  render: () => ({ Component: DialogInitialFocusDemo }),
}

export const Motion: StoryObj<typeof DialogMotionDemo> = {
  render: () => ({ Component: DialogMotionDemo }),
}

export const Nested: StoryObj<typeof DialogNestedDemo> = {
  render: () => ({ Component: DialogNestedDemo }),
}

export const Placement: StoryObj<typeof DialogPlacementDemo> = {
  render: () => ({ Component: DialogPlacementDemo }),
}

export const ScrollInside: StoryObj<typeof DialogScrollInsideDemo> = {
  render: () => ({ Component: DialogScrollInsideDemo }),
}

export const ScrollOutside: StoryObj<typeof DialogScrollOutsideDemo> = {
  render: () => ({ Component: DialogScrollOutsideDemo }),
}

export const Sizes: StoryObj<typeof DialogSizesDemo> = {
  render: () => ({ Component: DialogSizesDemo }),
}

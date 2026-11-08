import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import DialogDemo from "@isbatak/compositions/ds/vue/dialog/usage"
import DialogAlertDemo from "@isbatak/compositions/ds/vue/dialog/alert"
import DialogContentSizesDemo from "@isbatak/compositions/ds/vue/dialog/content-sizes"
import DialogControlledDemo from "@isbatak/compositions/ds/vue/dialog/controlled"
import DialogCoverDemo from "@isbatak/compositions/ds/vue/dialog/cover"
import DialogFullDemo from "@isbatak/compositions/ds/vue/dialog/full"
import DialogInitialFocusDemo from "@isbatak/compositions/ds/vue/dialog/initial-focus"
import DialogMotionDemo from "@isbatak/compositions/ds/vue/dialog/motion"
import DialogNestedDemo from "@isbatak/compositions/ds/vue/dialog/nested"
import DialogPlacementDemo from "@isbatak/compositions/ds/vue/dialog/placement"
import DialogScrollInsideDemo from "@isbatak/compositions/ds/vue/dialog/scroll-inside"
import DialogScrollOutsideDemo from "@isbatak/compositions/ds/vue/dialog/scroll-outside"
import DialogSizesDemo from "@isbatak/compositions/ds/vue/dialog/sizes"

const meta = {
  title: "DS/Dialog",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(DialogDemo) }),
}

export const Alert: Story = {
  render: () => ({ setup: () => () => h(DialogAlertDemo) }),
}

export const ContentSizes: Story = {
  render: () => ({ setup: () => () => h(DialogContentSizesDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(DialogControlledDemo) }),
}

export const Cover: Story = {
  render: () => ({ setup: () => () => h(DialogCoverDemo) }),
}

export const Full: Story = {
  render: () => ({ setup: () => () => h(DialogFullDemo) }),
}

export const InitialFocus: Story = {
  render: () => ({ setup: () => () => h(DialogInitialFocusDemo) }),
}

export const Motion: Story = {
  render: () => ({ setup: () => () => h(DialogMotionDemo) }),
}

export const Nested: Story = {
  render: () => ({ setup: () => () => h(DialogNestedDemo) }),
}

export const Placement: Story = {
  render: () => ({ setup: () => () => h(DialogPlacementDemo) }),
}

export const ScrollInside: Story = {
  render: () => ({ setup: () => () => h(DialogScrollInsideDemo) }),
}

export const ScrollOutside: Story = {
  render: () => ({ setup: () => () => h(DialogScrollOutsideDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(DialogSizesDemo) }),
}

import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { DialogDemo } from "@isbatak/compositions/ds/solid/dialog/usage"
import { DialogAlertDemo } from "@isbatak/compositions/ds/solid/dialog/alert"
import { DialogContentSizesDemo } from "@isbatak/compositions/ds/solid/dialog/content-sizes"
import { DialogControlledDemo } from "@isbatak/compositions/ds/solid/dialog/controlled"
import { DialogCoverDemo } from "@isbatak/compositions/ds/solid/dialog/cover"
import { DialogFullDemo } from "@isbatak/compositions/ds/solid/dialog/full"
import { DialogInitialFocusDemo } from "@isbatak/compositions/ds/solid/dialog/initial-focus"
import { DialogMotionDemo } from "@isbatak/compositions/ds/solid/dialog/motion"
import { DialogNestedDemo } from "@isbatak/compositions/ds/solid/dialog/nested"
import { DialogPlacementDemo } from "@isbatak/compositions/ds/solid/dialog/placement"
import { DialogScrollInsideDemo } from "@isbatak/compositions/ds/solid/dialog/scroll-inside"
import { DialogScrollOutsideDemo } from "@isbatak/compositions/ds/solid/dialog/scroll-outside"
import { DialogSizesDemo } from "@isbatak/compositions/ds/solid/dialog/sizes"

const meta = {
  title: "DS/Dialog",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <DialogDemo />,
}

export const Alert: Story = {
  render: () => <DialogAlertDemo />,
}

export const ContentSizes: Story = {
  render: () => <DialogContentSizesDemo />,
}

export const Controlled: Story = {
  render: () => <DialogControlledDemo />,
}

export const Cover: Story = {
  render: () => <DialogCoverDemo />,
}

export const Full: Story = {
  render: () => <DialogFullDemo />,
}

export const InitialFocus: Story = {
  render: () => <DialogInitialFocusDemo />,
}

export const Motion: Story = {
  render: () => <DialogMotionDemo />,
}

export const Nested: Story = {
  render: () => <DialogNestedDemo />,
}

export const Placement: Story = {
  render: () => <DialogPlacementDemo />,
}

export const ScrollInside: Story = {
  render: () => <DialogScrollInsideDemo />,
}

export const ScrollOutside: Story = {
  render: () => <DialogScrollOutsideDemo />,
}

export const Sizes: Story = {
  render: () => <DialogSizesDemo />,
}

import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { DrawerDemo } from "@isbatak/compositions/ds/solid/drawer/usage"
import { DrawerContentSizesDemo } from "@isbatak/compositions/ds/solid/drawer/content-sizes"
import { DrawerControlledDemo } from "@isbatak/compositions/ds/solid/drawer/controlled"
import { DrawerFloatDemo } from "@isbatak/compositions/ds/solid/drawer/float"
import { DrawerIndentBackgroundDemo } from "@isbatak/compositions/ds/solid/drawer/indent-background"
import { DrawerMultipleTriggersDemo } from "@isbatak/compositions/ds/solid/drawer/multiple-triggers"
import { DrawerNoDragAreaDemo } from "@isbatak/compositions/ds/solid/drawer/no-drag-area"
import { DrawerNonDraggableDemo } from "@isbatak/compositions/ds/solid/drawer/non-draggable"
import { DrawerNonModalDemo } from "@isbatak/compositions/ds/solid/drawer/non-modal"
import { DrawerRootProviderDemo } from "@isbatak/compositions/ds/solid/drawer/root-provider"
import { DrawerScrollableDemo } from "@isbatak/compositions/ds/solid/drawer/scrollable"
import { DrawerSizesDemo } from "@isbatak/compositions/ds/solid/drawer/sizes"
import { DrawerSnapPointsDemo } from "@isbatak/compositions/ds/solid/drawer/snap-points"
import { DrawerStackingDemo } from "@isbatak/compositions/ds/solid/drawer/stacking"
import { DrawerSwipeDirectionDemo } from "@isbatak/compositions/ds/solid/drawer/swipe-direction"

const meta = {
  title: "DS/Drawer",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <DrawerDemo />,
}

export const ContentSizes: Story = {
  render: () => <DrawerContentSizesDemo />,
}

export const Controlled: Story = {
  render: () => <DrawerControlledDemo />,
}

export const Float: Story = {
  render: () => <DrawerFloatDemo />,
}

export const IndentBackground: Story = {
  render: () => <DrawerIndentBackgroundDemo />,
}

export const MultipleTriggers: Story = {
  render: () => <DrawerMultipleTriggersDemo />,
}

export const NoDragArea: Story = {
  render: () => <DrawerNoDragAreaDemo />,
}

export const NonDraggable: Story = {
  render: () => <DrawerNonDraggableDemo />,
}

export const NonModal: Story = {
  render: () => <DrawerNonModalDemo />,
}

export const RootProvider: Story = {
  render: () => <DrawerRootProviderDemo />,
}

export const Scrollable: Story = {
  render: () => <DrawerScrollableDemo />,
}

export const Sizes: Story = {
  render: () => <DrawerSizesDemo />,
}

export const SnapPoints: Story = {
  render: () => <DrawerSnapPointsDemo />,
}

export const Stacking: Story = {
  render: () => <DrawerStackingDemo />,
}

export const SwipeDirection: Story = {
  render: () => <DrawerSwipeDirectionDemo />,
}

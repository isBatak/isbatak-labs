import type { Meta, StoryObj } from "@storybook/react-vite"
import { DrawerDemo } from "@isbatak/compositions/ds/react/drawer/usage"
import { DrawerControlledDemo } from "@isbatak/compositions/ds/react/drawer/controlled"
import { DrawerFloatDemo } from "@isbatak/compositions/ds/react/drawer/float"
import { DrawerIndentBackgroundDemo } from "@isbatak/compositions/ds/react/drawer/indent-background"
import { DrawerMultipleTriggersDemo } from "@isbatak/compositions/ds/react/drawer/multiple-triggers"
import { DrawerNoDragAreaDemo } from "@isbatak/compositions/ds/react/drawer/no-drag-area"
import { DrawerNonDraggableDemo } from "@isbatak/compositions/ds/react/drawer/non-draggable"
import { DrawerNonModalDemo } from "@isbatak/compositions/ds/react/drawer/non-modal"
import { DrawerRootProviderDemo } from "@isbatak/compositions/ds/react/drawer/root-provider"
import { DrawerScrollableDemo } from "@isbatak/compositions/ds/react/drawer/scrollable"
import { DrawerSnapPointsDemo } from "@isbatak/compositions/ds/react/drawer/snap-points"
import { DrawerStackingDemo } from "@isbatak/compositions/ds/react/drawer/stacking"
import { DrawerSwipeDirectionDemo } from "@isbatak/compositions/ds/react/drawer/swipe-direction"

const meta = {
  title: "DS/Drawer",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <DrawerDemo />,
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

export const SnapPoints: Story = {
  render: () => <DrawerSnapPointsDemo />,
}

export const Stacking: Story = {
  render: () => <DrawerStackingDemo />,
}

export const SwipeDirection: Story = {
  render: () => <DrawerSwipeDirectionDemo />,
}

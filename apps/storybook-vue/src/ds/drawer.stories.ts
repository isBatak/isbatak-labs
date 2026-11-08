import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import DrawerDemo from "@isbatak/compositions/ds/vue/drawer/usage"
import DrawerContentSizesDemo from "@isbatak/compositions/ds/vue/drawer/content-sizes"
import DrawerControlledDemo from "@isbatak/compositions/ds/vue/drawer/controlled"
import DrawerFloatDemo from "@isbatak/compositions/ds/vue/drawer/float"
import DrawerIndentBackgroundDemo from "@isbatak/compositions/ds/vue/drawer/indent-background"
import DrawerMultipleTriggersDemo from "@isbatak/compositions/ds/vue/drawer/multiple-triggers"
import DrawerNoDragAreaDemo from "@isbatak/compositions/ds/vue/drawer/no-drag-area"
import DrawerNonDraggableDemo from "@isbatak/compositions/ds/vue/drawer/non-draggable"
import DrawerNonModalDemo from "@isbatak/compositions/ds/vue/drawer/non-modal"
import DrawerRootProviderDemo from "@isbatak/compositions/ds/vue/drawer/root-provider"
import DrawerScrollableDemo from "@isbatak/compositions/ds/vue/drawer/scrollable"
import DrawerSizesDemo from "@isbatak/compositions/ds/vue/drawer/sizes"
import DrawerSnapPointsDemo from "@isbatak/compositions/ds/vue/drawer/snap-points"
import DrawerStackingDemo from "@isbatak/compositions/ds/vue/drawer/stacking"
import DrawerSwipeDirectionDemo from "@isbatak/compositions/ds/vue/drawer/swipe-direction"

const meta = {
  title: "DS/Drawer",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(DrawerDemo) }),
}

export const ContentSizes: Story = {
  render: () => ({ setup: () => () => h(DrawerContentSizesDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(DrawerControlledDemo) }),
}

export const Float: Story = {
  render: () => ({ setup: () => () => h(DrawerFloatDemo) }),
}

export const IndentBackground: Story = {
  render: () => ({ setup: () => () => h(DrawerIndentBackgroundDemo) }),
}

export const MultipleTriggers: Story = {
  render: () => ({ setup: () => () => h(DrawerMultipleTriggersDemo) }),
}

export const NoDragArea: Story = {
  render: () => ({ setup: () => () => h(DrawerNoDragAreaDemo) }),
}

export const NonDraggable: Story = {
  render: () => ({ setup: () => () => h(DrawerNonDraggableDemo) }),
}

export const NonModal: Story = {
  render: () => ({ setup: () => () => h(DrawerNonModalDemo) }),
}

export const RootProvider: Story = {
  render: () => ({ setup: () => () => h(DrawerRootProviderDemo) }),
}

export const Scrollable: Story = {
  render: () => ({ setup: () => () => h(DrawerScrollableDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(DrawerSizesDemo) }),
}

export const SnapPoints: Story = {
  render: () => ({ setup: () => () => h(DrawerSnapPointsDemo) }),
}

export const Stacking: Story = {
  render: () => ({ setup: () => () => h(DrawerStackingDemo) }),
}

export const SwipeDirection: Story = {
  render: () => ({ setup: () => () => h(DrawerSwipeDirectionDemo) }),
}

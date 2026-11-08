import type { Meta, StoryObj } from "@storybook/svelte-vite"
import DrawerDemo from "@isbatak/compositions/ds/svelte/drawer/usage"
import DrawerContentSizesDemo from "@isbatak/compositions/ds/svelte/drawer/content-sizes"
import DrawerControlledDemo from "@isbatak/compositions/ds/svelte/drawer/controlled"
import DrawerFloatDemo from "@isbatak/compositions/ds/svelte/drawer/float"
import DrawerIndentBackgroundDemo from "@isbatak/compositions/ds/svelte/drawer/indent-background"
import DrawerMultipleTriggersDemo from "@isbatak/compositions/ds/svelte/drawer/multiple-triggers"
import DrawerNoDragAreaDemo from "@isbatak/compositions/ds/svelte/drawer/no-drag-area"
import DrawerNonDraggableDemo from "@isbatak/compositions/ds/svelte/drawer/non-draggable"
import DrawerNonModalDemo from "@isbatak/compositions/ds/svelte/drawer/non-modal"
import DrawerRootProviderDemo from "@isbatak/compositions/ds/svelte/drawer/root-provider"
import DrawerScrollableDemo from "@isbatak/compositions/ds/svelte/drawer/scrollable"
import DrawerSizesDemo from "@isbatak/compositions/ds/svelte/drawer/sizes"
import DrawerSnapPointsDemo from "@isbatak/compositions/ds/svelte/drawer/snap-points"
import DrawerStackingDemo from "@isbatak/compositions/ds/svelte/drawer/stacking"
import DrawerSwipeDirectionDemo from "@isbatak/compositions/ds/svelte/drawer/swipe-direction"

const meta = {
  title: "DS/Drawer",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof DrawerDemo> = {
  render: () => ({ Component: DrawerDemo }),
}

export const ContentSizes: StoryObj<typeof DrawerContentSizesDemo> = {
  render: () => ({ Component: DrawerContentSizesDemo }),
}

export const Controlled: StoryObj<typeof DrawerControlledDemo> = {
  render: () => ({ Component: DrawerControlledDemo }),
}

export const Float: StoryObj<typeof DrawerFloatDemo> = {
  render: () => ({ Component: DrawerFloatDemo }),
}

export const IndentBackground: StoryObj<typeof DrawerIndentBackgroundDemo> = {
  render: () => ({ Component: DrawerIndentBackgroundDemo }),
}

export const MultipleTriggers: StoryObj<typeof DrawerMultipleTriggersDemo> = {
  render: () => ({ Component: DrawerMultipleTriggersDemo }),
}

export const NoDragArea: StoryObj<typeof DrawerNoDragAreaDemo> = {
  render: () => ({ Component: DrawerNoDragAreaDemo }),
}

export const NonDraggable: StoryObj<typeof DrawerNonDraggableDemo> = {
  render: () => ({ Component: DrawerNonDraggableDemo }),
}

export const NonModal: StoryObj<typeof DrawerNonModalDemo> = {
  render: () => ({ Component: DrawerNonModalDemo }),
}

export const RootProvider: StoryObj<typeof DrawerRootProviderDemo> = {
  render: () => ({ Component: DrawerRootProviderDemo }),
}

export const Scrollable: StoryObj<typeof DrawerScrollableDemo> = {
  render: () => ({ Component: DrawerScrollableDemo }),
}

export const Sizes: StoryObj<typeof DrawerSizesDemo> = {
  render: () => ({ Component: DrawerSizesDemo }),
}

export const SnapPoints: StoryObj<typeof DrawerSnapPointsDemo> = {
  render: () => ({ Component: DrawerSnapPointsDemo }),
}

export const Stacking: StoryObj<typeof DrawerStackingDemo> = {
  render: () => ({ Component: DrawerStackingDemo }),
}

export const SwipeDirection: StoryObj<typeof DrawerSwipeDirectionDemo> = {
  render: () => ({ Component: DrawerSwipeDirectionDemo }),
}

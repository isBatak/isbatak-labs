import type { ComponentType } from "react"

import { DrawerDemo } from "./basic"
import { DrawerControlledDemo } from "./controlled"
import { DrawerFloatDemo } from "./float"
import { DrawerIndentBackgroundDemo } from "./indent-background"
import { DrawerMultipleTriggersDemo } from "./multiple-triggers"
import { DrawerNoDragAreaDemo } from "./no-drag-area"
import { DrawerNonDraggableDemo } from "./non-draggable"
import { DrawerNonModalDemo } from "./non-modal"
import { DrawerRootProviderDemo } from "./root-provider"
import { DrawerScrollableDemo } from "./scrollable"
import { DrawerSnapPointsDemo } from "./snap-points"
import { DrawerStackingDemo } from "./stacking"
import { DrawerSwipeDirectionDemo } from "./swipe-direction"

export const drawerDemos: Record<string, ComponentType> = {
  drawer: DrawerDemo,
  "drawer/controlled": DrawerControlledDemo,
  "drawer/float": DrawerFloatDemo,
  "drawer/indent-background": DrawerIndentBackgroundDemo,
  "drawer/multiple-triggers": DrawerMultipleTriggersDemo,
  "drawer/no-drag-area": DrawerNoDragAreaDemo,
  "drawer/non-draggable": DrawerNonDraggableDemo,
  "drawer/non-modal": DrawerNonModalDemo,
  "drawer/root-provider": DrawerRootProviderDemo,
  "drawer/scrollable": DrawerScrollableDemo,
  "drawer/snap-points": DrawerSnapPointsDemo,
  "drawer/stacking": DrawerStackingDemo,
  "drawer/swipe-direction": DrawerSwipeDirectionDemo,
}

export { DrawerThumbnail } from "./thumbnail"

import type { ComponentType } from "react"

import { DrawerDemo } from "./basic"
import { DrawerCloseTriggerDemo } from "./close-trigger"
import { DrawerConditionalVariantsDemo } from "./conditional-variants"
import { DrawerContainedDemo } from "./contained"
import { DrawerContextDemo } from "./context"
import { DrawerControlledDemo } from "./controlled"
import { DrawerCustomContainerDemo } from "./custom-container"
import { DrawerHeaderActionsDemo } from "./header-actions"
import { DrawerInitialFocusDemo } from "./initial-focus"
import { DrawerMenuDemo } from "./menu"
import { DrawerNonModalDemo } from "./non-modal"
import { DrawerPlacementDemo } from "./placement"
import { DrawerPreventDismissalDemo } from "./prevent-dismissal"
import { DrawerScrollableDemo } from "./scrollable"
import { DrawerSizesDemo } from "./sizes"
import { DrawerSnapPointsDemo } from "./snap-points"
import { DrawerStackingDemo } from "./stacking"

export const drawerDemos: Record<string, ComponentType> = {
  drawer: DrawerDemo,
  "drawer/close-trigger": DrawerCloseTriggerDemo,
  "drawer/conditional-variants": DrawerConditionalVariantsDemo,
  "drawer/contained": DrawerContainedDemo,
  "drawer/context": DrawerContextDemo,
  "drawer/controlled": DrawerControlledDemo,
  "drawer/custom-container": DrawerCustomContainerDemo,
  "drawer/header-actions": DrawerHeaderActionsDemo,
  "drawer/initial-focus": DrawerInitialFocusDemo,
  "drawer/menu": DrawerMenuDemo,
  "drawer/non-modal": DrawerNonModalDemo,
  "drawer/placement": DrawerPlacementDemo,
  "drawer/prevent-dismissal": DrawerPreventDismissalDemo,
  "drawer/scrollable": DrawerScrollableDemo,
  "drawer/sizes": DrawerSizesDemo,
  "drawer/snap-points": DrawerSnapPointsDemo,
  "drawer/stacking": DrawerStackingDemo,
}

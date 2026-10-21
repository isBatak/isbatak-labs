import type { ComponentType } from "react"

import { SelectAlignItemWithTriggerDemo } from "./align-item-with-trigger"
import { SelectDemo } from "./basic"
import { SelectClearTriggerDemo } from "./clear-trigger"
import { SelectControlledDemo } from "./controlled"
import { SelectDisabledDemo } from "./disabled"
import { SelectDrawerDemo } from "./drawer"
import { SelectFitDemo } from "./fit"
import { SelectIconButtonDemo } from "./icon-button"
import { SelectInvalidDemo } from "./invalid"
import { SelectItemDescriptionDemo } from "./item-description"
import { SelectMultipleDemo } from "./multiple"
import { SelectOptionGroupDemo } from "./option-group"
import { SelectOverflowDemo } from "./overflow"
import { SelectPopoverDemo } from "./popover"
import { SelectPositioningDemo } from "./positioning"
import { SelectSearchableDemo } from "./searchable"
import { SelectSizesDemo } from "./sizes"
import { SelectVariantsDemo } from "./variants"

export const selectDemos: Record<string, ComponentType> = {
  select: SelectDemo,
  "select/align-item-with-trigger": SelectAlignItemWithTriggerDemo,
  "select/clear-trigger": SelectClearTriggerDemo,
  "select/controlled": SelectControlledDemo,
  "select/disabled": SelectDisabledDemo,
  "select/drawer": SelectDrawerDemo,
  "select/fit": SelectFitDemo,
  "select/icon-button": SelectIconButtonDemo,
  "select/invalid": SelectInvalidDemo,
  "select/item-description": SelectItemDescriptionDemo,
  "select/multiple": SelectMultipleDemo,
  "select/option-group": SelectOptionGroupDemo,
  "select/overflow": SelectOverflowDemo,
  "select/popover": SelectPopoverDemo,
  "select/positioning": SelectPositioningDemo,
  "select/searchable": SelectSearchableDemo,
  "select/sizes": SelectSizesDemo,
  "select/variants": SelectVariantsDemo,
}

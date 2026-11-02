import type { ComponentType } from "react"

import { AccordionDemo } from "./accordion"
import { badgeDemos } from "./badge"
import { ButtonDemo } from "./button"
import { codePreviewDemos } from "./code-preview"
import { concentricDemos } from "./concentric"
import { drawerDemos } from "./drawer"
import { gridTableDemos } from "./grid-table"
import { GroupDemo } from "./group"
import { HoverCardDemo } from "./hover-card"
import { IconDemo } from "./icon"
import { iconsDemos } from "./icons"
import { kbdDemos } from "./kbd"
import { LoaderDemo } from "./loader"
import { MenuDemo } from "./menu"
import { NavigationMenuDemo } from "./navigation-menu"
import { passwordInputDemos } from "./password-input"
import { PopoverDemo } from "./popover"
import { RadioCardDemo } from "./radio-card"
import { SegmentGroupDemo } from "./segment-group"
import { searchInputDemos } from "./search-input"
import { selectDemos } from "./select"
import { SliderDemo } from "./slider"
import { SpinnerDemo } from "./spinner"
import { SwitchDemo } from "./switch"
import { tableDemos } from "./table"
import { TabsDemo } from "./tabs"
import { tocDemos } from "./toc"
import { TooltipDemo } from "./tooltip"
import { TourDemo } from "./tour"

export const demos: Record<string, ComponentType> = {
  accordion: AccordionDemo,
  ...badgeDemos,
  button: ButtonDemo,
  ...codePreviewDemos,
  ...concentricDemos,
  ...drawerDemos,
  ...gridTableDemos,
  group: GroupDemo,
  "hover-card": HoverCardDemo,
  icon: IconDemo,
  ...iconsDemos,
  ...kbdDemos,
  loader: LoaderDemo,
  menu: MenuDemo,
  "navigation-menu": NavigationMenuDemo,
  ...passwordInputDemos,
  popover: PopoverDemo,
  "radio-card": RadioCardDemo,
  "segment-group": SegmentGroupDemo,
  ...searchInputDemos,
  ...selectDemos,
  slider: SliderDemo,
  spinner: SpinnerDemo,
  switch: SwitchDemo,
  ...tableDemos,
  tabs: TabsDemo,
  ...tocDemos,
  tooltip: TooltipDemo,
  tour: TourDemo,
}

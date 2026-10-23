import type { ComponentType } from "react"

import { AccordionDemo } from "./accordion"
import { BadgeDemo } from "./badge"
import { ButtonDemo } from "./button"
import { codePreviewDemos } from "./code-preview"
import { concentricDemos } from "./concentric"
import { drawerDemos } from "./drawer"
import { gridTableDemos } from "./grid-table"
import { GroupDemo } from "./group"
import { HoverCardDemo } from "./hover-card"
import { LoaderDemo } from "./loader"
import { MenuDemo } from "./menu"
import { PopoverDemo } from "./popover"
import { RadioCardDemo } from "./radio-card"
import { SegmentGroupDemo } from "./segment-group"
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
  badge: BadgeDemo,
  button: ButtonDemo,
  ...codePreviewDemos,
  ...concentricDemos,
  ...drawerDemos,
  ...gridTableDemos,
  group: GroupDemo,
  "hover-card": HoverCardDemo,
  loader: LoaderDemo,
  menu: MenuDemo,
  popover: PopoverDemo,
  "radio-card": RadioCardDemo,
  "segment-group": SegmentGroupDemo,
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

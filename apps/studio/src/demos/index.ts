import type { ComponentType } from "react"

import type { ComponentId } from "../lib/messages"
import { AccordionDemo, AccordionSample } from "./accordion"
import { AlertDemo, AlertSample } from "./alert"
import { AvatarDemo, AvatarSample } from "./avatar"
import { BadgeDemo, BadgeSample } from "./badge"
import { ButtonDemo, ButtonSample } from "./button"
import { CardDemo, CardSample } from "./card"
import { CheckboxDemo, CheckboxSample } from "./checkbox"
import { DrawerDemo, DrawerSample } from "./drawer"
import { HoverCardDemo, HoverCardSample } from "./hover-card"
import { InputDemo, InputSample } from "./input"
import { KbdDemo, KbdSample } from "./kbd"
import { MenuDemo, MenuSample } from "./menu"
import { PopoverDemo, PopoverSample } from "./popover"
import { RadioCardDemo, RadioCardSample } from "./radio-card"
import { SegmentGroupDemo, SegmentGroupSample } from "./segment-group"
import { SelectDemo, SelectSample } from "./select"
import { SliderDemo, SliderSample } from "./slider"
import { SpinnerDemo, SpinnerSample } from "./spinner"
import { SwitchDemo, SwitchSample } from "./switch"
import { TabsDemo, TabsSample } from "./tabs"
import { TooltipDemo, TooltipSample } from "./tooltip"
import type { SampleProps } from "./types"

export interface ComponentDemo {
  Demo: ComponentType
  /** Renders one cell of the variant matrix */
  Sample: ComponentType<SampleProps>
}

export const demos: Record<ComponentId, ComponentDemo> = {
  accordion: { Demo: AccordionDemo, Sample: AccordionSample },
  alert: { Demo: AlertDemo, Sample: AlertSample },
  avatar: { Demo: AvatarDemo, Sample: AvatarSample },
  badge: { Demo: BadgeDemo, Sample: BadgeSample },
  button: { Demo: ButtonDemo, Sample: ButtonSample },
  card: { Demo: CardDemo, Sample: CardSample },
  checkbox: { Demo: CheckboxDemo, Sample: CheckboxSample },
  drawer: { Demo: DrawerDemo, Sample: DrawerSample },
  hoverCard: { Demo: HoverCardDemo, Sample: HoverCardSample },
  input: { Demo: InputDemo, Sample: InputSample },
  kbd: { Demo: KbdDemo, Sample: KbdSample },
  menu: { Demo: MenuDemo, Sample: MenuSample },
  popover: { Demo: PopoverDemo, Sample: PopoverSample },
  radioCard: { Demo: RadioCardDemo, Sample: RadioCardSample },
  segmentGroup: { Demo: SegmentGroupDemo, Sample: SegmentGroupSample },
  select: { Demo: SelectDemo, Sample: SelectSample },
  slider: { Demo: SliderDemo, Sample: SliderSample },
  spinner: { Demo: SpinnerDemo, Sample: SpinnerSample },
  switch: { Demo: SwitchDemo, Sample: SwitchSample },
  tabs: { Demo: TabsDemo, Sample: TabsSample },
  tooltip: { Demo: TooltipDemo, Sample: TooltipSample },
}

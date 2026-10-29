import type { ComponentType } from "react"

import type { ComponentId } from "../lib/messages"
import { AccordionSample } from "./accordion"
import { AlertSample } from "./alert"
import { AvatarSample } from "./avatar"
import { BadgeSample } from "./badge"
import { ButtonSample } from "./button"
import { CardSample } from "./card"
import { CheckboxSample } from "./checkbox"
import { CloseButtonSample } from "./close-button"
import { DrawerSample } from "./drawer"
import { HoverCardSample } from "./hover-card"
import { IconButtonSample } from "./icon-button"
import { InputSample } from "./input"
import { KbdSample } from "./kbd"
import { MenuSample } from "./menu"
import { PopoverSample } from "./popover"
import { RadioCardSample } from "./radio-card"
import { SegmentGroupSample } from "./segment-group"
import { SelectSample } from "./select"
import { SliderSample } from "./slider"
import { SpinnerSample } from "./spinner"
import { SwitchSample } from "./switch"
import { TabsSample } from "./tabs"
import { TooltipSample } from "./tooltip"
import type { SampleProps } from "./types"

export interface ComponentDemo {
  /** Renders one cell of the variant matrix */
  Sample: ComponentType<SampleProps>
}

export const demos: Record<ComponentId, ComponentDemo> = {
  accordion: { Sample: AccordionSample },
  alert: { Sample: AlertSample },
  avatar: { Sample: AvatarSample },
  badge: { Sample: BadgeSample },
  button: { Sample: ButtonSample },
  card: { Sample: CardSample },
  checkbox: { Sample: CheckboxSample },
  closeButton: { Sample: CloseButtonSample },
  drawer: { Sample: DrawerSample },
  hoverCard: { Sample: HoverCardSample },
  iconButton: { Sample: IconButtonSample },
  input: { Sample: InputSample },
  kbd: { Sample: KbdSample },
  menu: { Sample: MenuSample },
  popover: { Sample: PopoverSample },
  radioCard: { Sample: RadioCardSample },
  segmentGroup: { Sample: SegmentGroupSample },
  select: { Sample: SelectSample },
  slider: { Sample: SliderSample },
  spinner: { Sample: SpinnerSample },
  switch: { Sample: SwitchSample },
  tabs: { Sample: TabsSample },
  tooltip: { Sample: TooltipSample },
}

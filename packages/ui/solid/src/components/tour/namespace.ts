export {
  TourRoot as Root,
  TourBackdrop as Backdrop,
  TourSpotlight as Spotlight,
  TourPositioner as Positioner,
  TourContent as Content,
  TourArrow as Arrow,
  TourArrowTip as ArrowTip,
  TourTitle as Title,
  TourDescription as Description,
  TourProgressText as ProgressText,
  TourCloseTrigger as CloseTrigger,
  TourControl as Control,
  TourActionTrigger as ActionTrigger,
  TourContext as Context,
} from "./tour"

export type {
  TourRootProps as RootProps,
  TourBackdropProps as BackdropProps,
  TourSpotlightProps as SpotlightProps,
  TourPositionerProps as PositionerProps,
  TourContentProps as ContentProps,
  TourArrowProps as ArrowProps,
  TourArrowTipProps as ArrowTipProps,
  TourTitleProps as TitleProps,
  TourDescriptionProps as DescriptionProps,
  TourProgressTextProps as ProgressTextProps,
  TourCloseTriggerProps as CloseTriggerProps,
  TourControlProps as ControlProps,
  TourActionTriggerProps as ActionTriggerProps,
  TourContextProps as ContextProps,
} from "./tour"

import type { TourStepDetails, UseTourProps } from "@ark-ui/solid/tour"

export type StepDetails = TourStepDetails
export type StepAction = NonNullable<TourStepDetails["actions"]>[number]
export type StatusChangeDetails = Parameters<NonNullable<UseTourProps["onStatusChange"]>>[0]

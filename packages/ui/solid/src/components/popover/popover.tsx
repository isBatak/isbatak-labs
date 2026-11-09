import { ark } from "@ark-ui/solid/factory"
import { Popover } from "@ark-ui/solid/popover"
import { usePresenceContext } from "@ark-ui/solid/presence"
import { type ComponentProps, Show, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { popover } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

const { withRootProvider, withContext } = createSlotRecipeContext(popover)

export const PopoverRoot = withRootProvider(Popover.Root)
export type PopoverRootProps = ComponentProps<typeof PopoverRoot>

export const PopoverTrigger = withContext(Popover.Trigger, "trigger")
export type PopoverTriggerProps = ComponentProps<typeof PopoverTrigger>

const StyledPopoverIndicator = withContext(Popover.Indicator, "indicator")
export type PopoverIndicatorProps = ComponentProps<typeof StyledPopoverIndicator>

export function PopoverIndicator(props: PopoverIndicatorProps) {
  const [local, rest] = splitProps(props, ["children"])
  return <StyledPopoverIndicator {...rest}>{local.children ?? <Icon name="chevron-down" />}</StyledPopoverIndicator>
}

const StyledPopoverBackdrop = withContext(ark.div, "backdrop")
export type PopoverBackdropProps = ComponentProps<typeof StyledPopoverBackdrop>

export function PopoverBackdrop(props: PopoverBackdropProps) {
  const presence = usePresenceContext()
  return (
    <Show when={!presence().unmounted}>
      <StyledPopoverBackdrop {...presence().presenceProps} {...props} />
    </Show>
  )
}

export const PopoverAnchor = withContext(Popover.Anchor, "anchor")
export type PopoverAnchorProps = ComponentProps<typeof PopoverAnchor>

export const PopoverPositioner = withContext(Popover.Positioner, "positioner")
export type PopoverPositionerProps = ComponentProps<typeof PopoverPositioner>

export const PopoverContent = withContext(Popover.Content, "content")
export type PopoverContentProps = ComponentProps<typeof PopoverContent>

export const PopoverArrow = withContext(Popover.Arrow, "arrow")
export type PopoverArrowProps = ComponentProps<typeof PopoverArrow>

export const PopoverArrowTip = withContext(Popover.ArrowTip, "arrowTip")
export type PopoverArrowTipProps = ComponentProps<typeof PopoverArrowTip>

export const PopoverTitle = withContext(Popover.Title, "title")
export type PopoverTitleProps = ComponentProps<typeof PopoverTitle>

export const PopoverDescription = withContext(Popover.Description, "description")
export type PopoverDescriptionProps = ComponentProps<typeof PopoverDescription>

export const PopoverCloseTrigger = withContext(Popover.CloseTrigger, "closeTrigger")
export type PopoverCloseTriggerProps = ComponentProps<typeof PopoverCloseTrigger>

export const PopoverHeader = withContext("div", "header")
export type PopoverHeaderProps = ComponentProps<typeof PopoverHeader>

export const PopoverBody = withContext("div", "body")
export type PopoverBodyProps = ComponentProps<typeof PopoverBody>

export const PopoverFooter = withContext("div", "footer")
export type PopoverFooterProps = ComponentProps<typeof PopoverFooter>

export const PopoverActionTrigger = Popover.CloseTrigger
export type PopoverActionTriggerProps = ComponentProps<typeof PopoverActionTrigger>

export const PopoverContext = Popover.Context
export type PopoverContextProps = Popover.ContextProps

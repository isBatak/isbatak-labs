"use client"

import { ark } from "@ark-ui/react/factory"
import { Popover } from "@ark-ui/react/popover"
import { usePresenceContext } from "@ark-ui/react/presence"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { popover } from "@isbatak/panda-ds/recipes"

import { CloseButton } from "../button/close-button"
import { Icon } from "../icon/icon"

const { withRootProvider, withContext } = createSlotRecipeContext(popover)

export const PopoverRoot = withRootProvider(Popover.Root)
export type PopoverRootProps = ComponentProps<typeof PopoverRoot>

export const PopoverTrigger = withContext(Popover.Trigger, "trigger")
export type PopoverTriggerProps = ComponentProps<typeof PopoverTrigger>

const StyledPopoverIndicator = withContext(Popover.Indicator, "indicator")
export type PopoverIndicatorProps = ComponentProps<typeof StyledPopoverIndicator>

export function PopoverIndicator({ children, ...props }: PopoverIndicatorProps) {
  return <StyledPopoverIndicator {...props}>{children ?? <Icon name="chevron-down" />}</StyledPopoverIndicator>
}

const StyledPopoverBackdrop = withContext(ark.div, "backdrop")
export type PopoverBackdropProps = ComponentProps<typeof StyledPopoverBackdrop>

export function PopoverBackdrop(props: PopoverBackdropProps) {
  const presence = usePresenceContext()
  if (presence.unmounted) return null
  return <StyledPopoverBackdrop {...presence.getPresenceProps()} {...props} />
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

const StyledPopoverCloseTrigger = withContext(Popover.CloseTrigger, "closeTrigger")
export type PopoverCloseTriggerProps = ComponentProps<typeof StyledPopoverCloseTrigger>

export function PopoverCloseTrigger({ children, ...props }: PopoverCloseTriggerProps) {
  if (children) return <StyledPopoverCloseTrigger {...props}>{children}</StyledPopoverCloseTrigger>
  return (
    <StyledPopoverCloseTrigger asChild {...props}>
      <CloseButton size="sm" />
    </StyledPopoverCloseTrigger>
  )
}

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

"use client"

import { ark } from "@ark-ui/react/factory"
import { Popover } from "@ark-ui/react/popover"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { actionBar } from "@isbatak/panda-ds/recipes"

import { CloseButton } from "../button/close-button"

const { withRootProvider, withContext } = createSlotRecipeContext(actionBar)

export const ActionBarRoot = withRootProvider(Popover.Root, {
  defaultProps: {
    lazyMount: true,
    unmountOnExit: true,
    modal: false,
    autoFocus: false,
    closeOnInteractOutside: false,
  },
})
export type ActionBarRootProps = ComponentProps<typeof ActionBarRoot>

export const ActionBarPositioner = withContext(ark.div, "positioner")
export type ActionBarPositionerProps = ComponentProps<typeof ActionBarPositioner>

export const ActionBarContent = withContext(Popover.Content, "content")
export type ActionBarContentProps = ComponentProps<typeof ActionBarContent>

export const ActionBarSeparator = withContext(ark.div, "separator")
export type ActionBarSeparatorProps = ComponentProps<typeof ActionBarSeparator>

export const ActionBarSelectionTrigger = withContext(ark.button, "selectionTrigger")
export type ActionBarSelectionTriggerProps = ComponentProps<typeof ActionBarSelectionTrigger>

const StyledActionBarCloseTrigger = withContext(Popover.CloseTrigger, "closeTrigger")
export type ActionBarCloseTriggerProps = ComponentProps<typeof StyledActionBarCloseTrigger>

export function ActionBarCloseTrigger({ children, ...props }: ActionBarCloseTriggerProps) {
  if (children) return <StyledActionBarCloseTrigger {...props}>{children}</StyledActionBarCloseTrigger>
  return (
    <StyledActionBarCloseTrigger asChild {...props}>
      <CloseButton size="sm" />
    </StyledActionBarCloseTrigger>
  )
}

export const ActionBarContext = Popover.Context
export type ActionBarContextProps = Popover.ContextProps

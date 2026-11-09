"use client"

import { FloatingPanel } from "@ark-ui/react/floating-panel"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { floatingPanel } from "@isbatak/panda-ds/recipes"

import { CloseButton } from "../button/close-button"
import { IconButton } from "../button/icon-button"
import { Icon, type IconProps } from "../icon/icon"

const { withRootProvider, withContext } = createSlotRecipeContext(floatingPanel)

const stageIcons: Record<FloatingPanel.StageTriggerProps["stage"], IconProps["name"]> = {
  minimized: "minus",
  maximized: "fullscreen",
  default: "window-restore",
}

export const FloatingPanelRoot = withRootProvider(FloatingPanel.Root)
export type FloatingPanelRootProps = ComponentProps<typeof FloatingPanelRoot>

export const FloatingPanelRootProvider = withRootProvider(FloatingPanel.RootProvider)
export type FloatingPanelRootProviderProps = ComponentProps<typeof FloatingPanelRootProvider>

export const FloatingPanelTrigger = withContext(FloatingPanel.Trigger, "trigger")
export type FloatingPanelTriggerProps = ComponentProps<typeof FloatingPanelTrigger>

export const FloatingPanelPositioner = withContext(FloatingPanel.Positioner, "positioner")
export type FloatingPanelPositionerProps = ComponentProps<typeof FloatingPanelPositioner>

export const FloatingPanelContent = withContext(FloatingPanel.Content, "content")
export type FloatingPanelContentProps = ComponentProps<typeof FloatingPanelContent>

export const FloatingPanelDragTrigger = withContext(FloatingPanel.DragTrigger, "dragTrigger")
export type FloatingPanelDragTriggerProps = ComponentProps<typeof FloatingPanelDragTrigger>

export const FloatingPanelHeader = withContext(FloatingPanel.Header, "header")
export type FloatingPanelHeaderProps = ComponentProps<typeof FloatingPanelHeader>

export const FloatingPanelTitle = withContext(FloatingPanel.Title, "title")
export type FloatingPanelTitleProps = ComponentProps<typeof FloatingPanelTitle>

export const FloatingPanelControl = withContext(FloatingPanel.Control, "control")
export type FloatingPanelControlProps = ComponentProps<typeof FloatingPanelControl>

const StyledFloatingPanelStageTrigger = withContext(FloatingPanel.StageTrigger, "stageTrigger")
export type FloatingPanelStageTriggerProps = ComponentProps<typeof StyledFloatingPanelStageTrigger>

export function FloatingPanelStageTrigger({ children, ...props }: FloatingPanelStageTriggerProps) {
  if (children) return <StyledFloatingPanelStageTrigger {...props}>{children}</StyledFloatingPanelStageTrigger>
  return (
    <StyledFloatingPanelStageTrigger asChild {...props}>
      <IconButton variant="ghost" size="xs">
        <Icon name={stageIcons[props.stage]} />
      </IconButton>
    </StyledFloatingPanelStageTrigger>
  )
}

const StyledFloatingPanelCloseTrigger = withContext(FloatingPanel.CloseTrigger, "closeTrigger")
export type FloatingPanelCloseTriggerProps = ComponentProps<typeof StyledFloatingPanelCloseTrigger>

export function FloatingPanelCloseTrigger({ children, ...props }: FloatingPanelCloseTriggerProps) {
  if (children) return <StyledFloatingPanelCloseTrigger {...props}>{children}</StyledFloatingPanelCloseTrigger>
  return (
    <StyledFloatingPanelCloseTrigger asChild {...props}>
      <CloseButton size="xs" />
    </StyledFloatingPanelCloseTrigger>
  )
}

export const FloatingPanelBody = withContext(FloatingPanel.Body, "body")
export type FloatingPanelBodyProps = ComponentProps<typeof FloatingPanelBody>

export const FloatingPanelResizeTrigger = withContext(FloatingPanel.ResizeTrigger, "resizeTrigger")
export type FloatingPanelResizeTriggerProps = ComponentProps<typeof FloatingPanelResizeTrigger>

export const FloatingPanelContext = FloatingPanel.Context
export type FloatingPanelContextProps = FloatingPanel.ContextProps

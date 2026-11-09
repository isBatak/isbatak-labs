import { FloatingPanel } from "@ark-ui/solid/floating-panel"
import { type ComponentProps, Show, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
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

export function FloatingPanelStageTrigger(props: FloatingPanelStageTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <Show
      when={local.children}
      fallback={
        <StyledFloatingPanelStageTrigger
          asChild={(triggerProps) => (
            <IconButton {...triggerProps()} variant="ghost" size="xs">
              <Icon name={stageIcons[rest.stage]} />
            </IconButton>
          )}
          {...rest}
        />
      }
    >
      <StyledFloatingPanelStageTrigger {...rest}>{local.children}</StyledFloatingPanelStageTrigger>
    </Show>
  )
}

const StyledFloatingPanelCloseTrigger = withContext(FloatingPanel.CloseTrigger, "closeTrigger")
export type FloatingPanelCloseTriggerProps = ComponentProps<typeof StyledFloatingPanelCloseTrigger>

export function FloatingPanelCloseTrigger(props: FloatingPanelCloseTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <Show
      when={local.children}
      fallback={
        <StyledFloatingPanelCloseTrigger
          asChild={(triggerProps) => <CloseButton {...triggerProps()} size="xs" />}
          {...rest}
        />
      }
    >
      <StyledFloatingPanelCloseTrigger {...rest}>{local.children}</StyledFloatingPanelCloseTrigger>
    </Show>
  )
}

export const FloatingPanelBody = withContext(FloatingPanel.Body, "body")
export type FloatingPanelBodyProps = ComponentProps<typeof FloatingPanelBody>

export const FloatingPanelResizeTrigger = withContext(FloatingPanel.ResizeTrigger, "resizeTrigger")
export type FloatingPanelResizeTriggerProps = ComponentProps<typeof FloatingPanelResizeTrigger>

export const FloatingPanelContext = FloatingPanel.Context
export type FloatingPanelContextProps = FloatingPanel.ContextProps

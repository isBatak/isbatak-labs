import { FloatingPanel } from "@ark-ui/vue/floating-panel"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { floatingPanel } from "@isbatak/panda-ds/recipes"
import { CloseButton, IconButton } from "../button"
import { Icon, type IconProps } from "../icon"

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

export const FloatingPanelStageTrigger = defineComponent({
  name: "FloatingPanelStageTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      slots.default
        ? h(StyledFloatingPanelStageTrigger as Component, attrs, slots)
        : h(StyledFloatingPanelStageTrigger as Component, { asChild: true, ...attrs }, () =>
            h(IconButton, { variant: "ghost", size: "xs" }, () =>
              h(Icon, { name: stageIcons[attrs.stage as FloatingPanel.StageTriggerProps["stage"]] }),
            ),
          )
  },
}) as unknown as typeof StyledFloatingPanelStageTrigger

const StyledFloatingPanelCloseTrigger = withContext(FloatingPanel.CloseTrigger, "closeTrigger")
export type FloatingPanelCloseTriggerProps = ComponentProps<typeof StyledFloatingPanelCloseTrigger>

export const FloatingPanelCloseTrigger = defineComponent({
  name: "FloatingPanelCloseTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      slots.default
        ? h(StyledFloatingPanelCloseTrigger as Component, attrs, slots)
        : h(StyledFloatingPanelCloseTrigger as Component, { asChild: true, ...attrs }, () =>
            h(CloseButton, { size: "xs" }),
          )
  },
}) as unknown as typeof StyledFloatingPanelCloseTrigger

export const FloatingPanelBody = withContext(FloatingPanel.Body, "body")
export type FloatingPanelBodyProps = ComponentProps<typeof FloatingPanelBody>

export const FloatingPanelResizeTrigger = withContext(FloatingPanel.ResizeTrigger, "resizeTrigger")
export type FloatingPanelResizeTriggerProps = ComponentProps<typeof FloatingPanelResizeTrigger>

export const FloatingPanelContext = FloatingPanel.Context
export type FloatingPanelContextProps = FloatingPanel.ContextProps

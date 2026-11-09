import { FloatingPanel } from "@ark-ui/svelte/floating-panel"

export { default as FloatingPanelRoot, type FloatingPanelRootProps } from "./floating-panel-root.svelte"
export {
  default as FloatingPanelRootProvider,
  type FloatingPanelRootProviderProps,
} from "./floating-panel-root-provider.svelte"
export { default as FloatingPanelTrigger, type FloatingPanelTriggerProps } from "./floating-panel-trigger.svelte"
export {
  default as FloatingPanelPositioner,
  type FloatingPanelPositionerProps,
} from "./floating-panel-positioner.svelte"
export { default as FloatingPanelContent, type FloatingPanelContentProps } from "./floating-panel-content.svelte"
export {
  default as FloatingPanelDragTrigger,
  type FloatingPanelDragTriggerProps,
} from "./floating-panel-drag-trigger.svelte"
export { default as FloatingPanelHeader, type FloatingPanelHeaderProps } from "./floating-panel-header.svelte"
export { default as FloatingPanelTitle, type FloatingPanelTitleProps } from "./floating-panel-title.svelte"
export { default as FloatingPanelControl, type FloatingPanelControlProps } from "./floating-panel-control.svelte"
export {
  default as FloatingPanelStageTrigger,
  type FloatingPanelStageTriggerProps,
} from "./floating-panel-stage-trigger.svelte"
export {
  default as FloatingPanelCloseTrigger,
  type FloatingPanelCloseTriggerProps,
} from "./floating-panel-close-trigger.svelte"
export { default as FloatingPanelBody, type FloatingPanelBodyProps } from "./floating-panel-body.svelte"
export {
  default as FloatingPanelResizeTrigger,
  type FloatingPanelResizeTriggerProps,
} from "./floating-panel-resize-trigger.svelte"
export const FloatingPanelContext = FloatingPanel.Context
export type FloatingPanelContextProps = FloatingPanel.ContextProps

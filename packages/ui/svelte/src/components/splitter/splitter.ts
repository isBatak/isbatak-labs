import { Splitter } from "@ark-ui/svelte/splitter"

export { default as SplitterRoot, type SplitterRootProps } from "./splitter-root.svelte"
export { default as SplitterRootProvider, type SplitterRootProviderProps } from "./splitter-root-provider.svelte"
export { default as SplitterPanel, type SplitterPanelProps } from "./splitter-panel.svelte"
export { default as SplitterResizeTrigger, type SplitterResizeTriggerProps } from "./splitter-resize-trigger.svelte"
export {
  default as SplitterResizeTriggerSeparator,
  type SplitterResizeTriggerSeparatorProps,
} from "./splitter-resize-trigger-separator.svelte"
export {
  default as SplitterResizeTriggerIndicator,
  type SplitterResizeTriggerIndicatorProps,
} from "./splitter-resize-trigger-indicator.svelte"
export const SplitterContext = Splitter.Context
export type SplitterContextProps = Splitter.ContextProps

export {
  SplitterRoot,
  SplitterRootProvider,
  SplitterPanel,
  SplitterResizeTrigger,
  SplitterResizeTriggerSeparator,
  SplitterResizeTriggerIndicator,
  SplitterContext,
} from "./splitter"

export type {
  SplitterRootProps,
  SplitterRootProviderProps,
  SplitterPanelProps,
  SplitterResizeTriggerProps,
  SplitterResizeTriggerSeparatorProps,
  SplitterResizeTriggerIndicatorProps,
  SplitterContextProps,
} from "./splitter"

export { useSplitter, useSplitterContext } from "@ark-ui/svelte/splitter"
export type {
  SplitterExpandCollapseDetails,
  SplitterPanelData,
  SplitterResizeDetails,
  SplitterResizeEndDetails,
  UseSplitterProps,
  UseSplitterReturn,
} from "@ark-ui/svelte/splitter"

export * as Splitter from "./namespace"
